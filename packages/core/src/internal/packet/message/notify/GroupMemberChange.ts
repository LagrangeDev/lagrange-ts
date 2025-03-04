import { NapProtoMsg, ProtoField, ScalarType } from '@napneko/nap-proto-core';

export enum IncreaseType {
    Approve = 130,
    Invite = 131,
}

export enum DecreaseType {
    KickSelf = 3,
    Exit = 130,
    Kick = 131,
}

export const GroupMemberChange = new NapProtoMsg({
    groupUin: ProtoField(1, ScalarType.UINT32),
    memberUid: ProtoField(3, ScalarType.STRING),
    type: ProtoField(4, ScalarType.UINT32),
    operatorInfo: ProtoField(5, ScalarType.BYTES, true),
});

export const OperatorInfo = new NapProtoMsg({
    body: ProtoField(1, () => ({
        uid: ProtoField(1, ScalarType.STRING),
    })),
});