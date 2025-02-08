import { BotContext } from '@/core';
import { MessageElementDecoded } from '@/core/message';
import { OutgoingMessage } from '@/core/message/outgoing';
import { mentionBuilder } from '@/core/message/outgoing/segment/mention';
import { textBuilder } from '@/core/message/outgoing/segment/text';

export interface OutgoingSegmentBuilder<T extends string, S> {
    segmentType: T;
    build(segment: S, msg: OutgoingMessage, ctx: BotContext): MessageElementDecoded;
}

export function defineOutgoing<T extends string, S>(
    segmentType: T,
    build: OutgoingSegmentBuilder<T, S>['build']
): OutgoingSegmentBuilder<T, S> {
    return { segmentType, build };
}

type ConstructInputType<P> =
    P extends OutgoingSegmentBuilder<infer T, infer S> ? { type: T } & S : never;

export class OutgoingSegmentCollection<T extends OutgoingSegmentBuilder<string, unknown>[]
> {
    private builderMap;

    constructor(builders: T) {
        this.builderMap = Object.fromEntries(
            builders.map(builder => [builder.segmentType, builder])
        );
    }

    build(segment: ConstructInputType<T[number]>, msg: OutgoingMessage, ctx: BotContext): MessageElementDecoded | undefined {
        const builder = this.builderMap[segment.type];
        if (builder) {
            return builder.build(segment, msg, ctx);
        }
    }
}

export const outgoingSegments = new OutgoingSegmentCollection([
    textBuilder,
    mentionBuilder,
]);