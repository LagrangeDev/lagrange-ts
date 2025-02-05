import { NapProtoMsg, ProtoField, ScalarType } from '@napneko/nap-proto-core';

export const QQWalletMsgElement = new NapProtoMsg({
    type: ProtoField(1, () => ({
        sendUin: ProtoField(1, ScalarType.UINT64, false, false),
        sender: ProtoField(2, () => QQWalletAioElem.fields, true, false),
        receiver: ProtoField(3, () => QQWalletAioElem.fields, true, false),
        channelId: ProtoField(4, ScalarType.INT32, false, false),
        templateId: ProtoField(5, ScalarType.INT32, false, false),
        resend: ProtoField(6, ScalarType.UINT32, false, false),
        msgPriority: ProtoField(7, ScalarType.UINT32, false, false),
        redType: ProtoField(8, ScalarType.INT32, false, false),
        billNo: ProtoField(9, ScalarType.BYTES, true, false),
        authKey: ProtoField(10, ScalarType.BYTES, true, false),
        sessionType: ProtoField(11, ScalarType.INT32, false, false),
        msgType: ProtoField(12, ScalarType.INT32, false, false),
        envelOpeId: ProtoField(13, ScalarType.INT32, false, false),
        name: ProtoField(14, ScalarType.BYTES, true, false),
        confType: ProtoField(15, ScalarType.INT32, false, false),
        msgFrom: ProtoField(16, ScalarType.INT32, false, false),
        pcBody: ProtoField(17, ScalarType.BYTES, true, false),
        index: ProtoField(18, ScalarType.BYTES, true, false),
        redChannel: ProtoField(19, ScalarType.UINT32, false, false),
        grapUin: ProtoField(20, ScalarType.UINT64, false, true),
        pbReserve: ProtoField(21, ScalarType.BYTES, true, false),
    }), true, false),
});

export const QQWalletAioElem = new NapProtoMsg({
    background: ProtoField(1, ScalarType.UINT32, false, false),
    icon: ProtoField(2, ScalarType.UINT32, false, false),
    title: ProtoField(3, ScalarType.STRING, true, false),
    subtitle: ProtoField(4, ScalarType.STRING, true, false),
    content: ProtoField(5, ScalarType.STRING, true, false),
    linkUrl: ProtoField(6, ScalarType.BYTES, true, false),
    blackStripe: ProtoField(7, ScalarType.BYTES, true, false),
    notice: ProtoField(8, ScalarType.BYTES, true, false),
    titleColor: ProtoField(9, ScalarType.UINT32, false, false),
    subtitleColor: ProtoField(10, ScalarType.UINT32, false, false),
    actionsPriority: ProtoField(11, ScalarType.BYTES, true, false),
    jumpUrl: ProtoField(12, ScalarType.BYTES, true, false),
    nativeIos: ProtoField(13, ScalarType.BYTES, true, false),
    nativeAndroid: ProtoField(14, ScalarType.BYTES, true, false),
    iconUrl: ProtoField(15, ScalarType.BYTES, true, false),
    contentColor: ProtoField(16, ScalarType.UINT32, false, false),
    contentBgColor: ProtoField(17, ScalarType.UINT32, false, false),
    aioImageLeft: ProtoField(18, ScalarType.BYTES, true, false),
    aioImageRight: ProtoField(19, ScalarType.BYTES, true, false),
    cftImage: ProtoField(20, ScalarType.BYTES, true, false),
    pbReserve: ProtoField(21, ScalarType.BYTES, true, false),
});