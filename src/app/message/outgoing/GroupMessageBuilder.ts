import { BotGroup, BotGroupMember } from '@/app/entity';
import { OutgoingMessageBuilder } from '@/app/message/outgoing';
import { MessageType } from '@/core/message';
import { ImageSubType } from '@/core/message/incoming/segment/image';
import { OutgoingGroupMessage } from '@/core/message/outgoing';
import { ImageBizType } from '@/core/message/outgoing/segment/image';
import { getImageMetadata } from '@/core/util/media/image';

export class GroupMessageBuilder extends OutgoingMessageBuilder {
    constructor(private readonly group: BotGroup) {
        super(group);
    }
    
    mention(member: BotGroupMember) {
        this.segments.push({
            type: 'mention', 
            uin: member.uin, 
            uid: member.uid, 
            name: '@' + (member.card || member.nickname) 
        });
    }

    mentionAll() {
        this.segments.push({
            type: 'mention',
            uin: 0,
            uid: '',
            name: '@全体成员',
        });
    }
    
    override async image(data: Buffer, subType?: ImageSubType, summary?: string): Promise<void> {
        const imageMeta = getImageMetadata(data);
        const uploadResp = await this.group.bot.ctx.ops.call(
            'uploadGroupImage', 
            this.group.uin,
            imageMeta,
            subType ?? ImageSubType.Picture,
            summary,
        );
        await this.group.bot.ctx.highwayLogic.uploadGroupImage(data, imageMeta, uploadResp);
        this.segments.push({
            type: 'image',
            msgInfo: uploadResp.upload!.msgInfo!,
            bizType: ImageBizType.Group,
            // compatFace: CustomFaceElement.decode(uploadResp.upload!.compatQMsg!),
        });
    }

    override build(): OutgoingGroupMessage {
        return {
            type: MessageType.GroupMessage,
            groupUin: this.contact.uin,
            clientSequence: this.group.clientSequence++,
            segments: this.segments,
        };
    }
}