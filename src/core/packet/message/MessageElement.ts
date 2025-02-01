import { NapProtoMsg, ProtoField, ScalarType } from '@napneko/nap-proto-core';

export const MessageElement = new NapProtoMsg({
    text: ProtoField(1, ScalarType.BYTES, true, false),
    face: ProtoField(2, ScalarType.BYTES, true, false),
    onlineImage: ProtoField(3, ScalarType.BYTES, true, false),
    notOnlineImage: ProtoField(4, ScalarType.BYTES, true, false),
    transElem: ProtoField(5, ScalarType.BYTES, true, false),
    marketface: ProtoField(6, ScalarType.BYTES, true, false),
    customFace: ProtoField(8, ScalarType.BYTES, true, false),
    elemFlags2: ProtoField(9, ScalarType.BYTES, true, false),
    richMsg: ProtoField(12, ScalarType.BYTES, true, false),
    groupFile: ProtoField(13, ScalarType.BYTES, true, false),
    extraInfo: ProtoField(16, ScalarType.BYTES, true, false),
    videoFile: ProtoField(19, ScalarType.BYTES, true, false),
    anonGroupMsg: ProtoField(21, ScalarType.BYTES, true, false),
    qqWalletMsg: ProtoField(24, ScalarType.BYTES, true, false),
    customElem: ProtoField(31, ScalarType.BYTES, true, false),
    generalFlags: ProtoField(37, ScalarType.BYTES, true, false),
    srcMsg: ProtoField(45, ScalarType.BYTES, true, false),
    lightAppElem: ProtoField(51, ScalarType.BYTES, true, false),
    commonElem: ProtoField(53, ScalarType.BYTES, true, false),
});