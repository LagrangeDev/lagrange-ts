import { MsgInfoBody } from '@/internal/packet/oidb/media/MsgInfo';
import { NapProtoMsg, ProtoField, ScalarType } from '@napneko/nap-proto-core';

export const NTV2RichMediaHighwayExt = new NapProtoMsg({
    fileUuid: ProtoField(1, ScalarType.STRING),
    uKey: ProtoField(2, ScalarType.STRING),
    network: ProtoField(5, () => ({
        ipv4s: ProtoField(1, () => ({
            domain: ProtoField(1, () => ({
                isEnable: ProtoField(1, ScalarType.BOOL),
                ip: ProtoField(2, ScalarType.STRING),
            })),
            port: ProtoField(2, ScalarType.UINT32),
        }), false, true),
    })),
    msgInfoBody: ProtoField(6, () => MsgInfoBody.fields, false, true),
    blockSize: ProtoField(10, ScalarType.UINT32),
    hash: ProtoField(11, () => ({
        fileSha1: ProtoField(1, ScalarType.BYTES, false, true),
    })),
});
