import { DeviceInfo, Keystore } from '@/common';

export type BufferSerialized = string;

export interface DeviceInfoSerialized {
    guid: BufferSerialized;
    macAddress: BufferSerialized;
    deviceName: string;
    systemKernel: string;
    kernelVersion: string;
}

export interface KeystoreSerialized {
    uin: number;
    uid?: string;
    passwordMd5: string;
    stub: {
        randomKey: BufferSerialized;
        tgtgtKey: BufferSerialized;
    };
    session: {
        d2Key: BufferSerialized;
        d2: BufferSerialized;
        tgt: BufferSerialized;
        sessionDate: Date;
        qrSign?: BufferSerialized;
        qrString?: string;
        qrUrl?: string;
        exchangeKey?: BufferSerialized;
        keySign?: BufferSerialized;
        unusualSign?: BufferSerialized;
        unusualCookies?: string;
        captchaUrl?: string;
        newDeviceVerifyUrl?: string;
        captcha?: [string, string, string];
        tempPassword?: BufferSerialized;
        noPicSig?: BufferSerialized;
        sequence: number;
    };
    info: {
        age: number;
        gender: number;
        name: string;
    };
}

function serializeBuffer(data: Buffer): BufferSerialized;
function serializeBuffer(data: Buffer | undefined): BufferSerialized | undefined;
function serializeBuffer(data?: Buffer) {
    return data ? data.toString('hex') : undefined;
}

function deserializeBuffer(data: BufferSerialized): Buffer;
function deserializeBuffer(data: BufferSerialized | undefined): Buffer | undefined;
function deserializeBuffer(data?: BufferSerialized) {
    return data ? Buffer.from(data, 'hex') : undefined;
}

export function serializeDeviceInfo(data: DeviceInfo): DeviceInfoSerialized {
    return {
        guid: serializeBuffer(data.guid),
        macAddress: serializeBuffer(data.macAddress),
        deviceName: data.deviceName,
        systemKernel: data.systemKernel,
        kernelVersion: data.kernelVersion,
    };
}

export function deserializeDeviceInfo(data: DeviceInfoSerialized): DeviceInfo {
    return {
        guid: deserializeBuffer(data.guid),
        macAddress: deserializeBuffer(data.macAddress),
        deviceName: data.deviceName,
        systemKernel: data.systemKernel,
        kernelVersion: data.kernelVersion,
    };
}

export function serializeKeystore(data: Keystore): KeystoreSerialized {
    return {
        uin: data.uin,
        uid: data.uid,
        passwordMd5: data.passwordMd5,
        stub: {
            randomKey: serializeBuffer(data.stub.randomKey),
            tgtgtKey: serializeBuffer(data.stub.tgtgtKey),
        },
        session: {
            d2Key: serializeBuffer(data.session.d2Key),
            d2: serializeBuffer(data.session.d2),
            tgt: serializeBuffer(data.session.tgt),
            sessionDate: data.session.sessionDate,
            qrSign: serializeBuffer(data.session.qrSign),
            qrString: data.session.qrString,
            qrUrl: data.session.qrUrl,
            exchangeKey: serializeBuffer(data.session.exchangeKey),
            keySign: serializeBuffer(data.session.keySign),
            unusualSign: serializeBuffer(data.session.unusualSign),
            unusualCookies: data.session.unusualCookies,
            captchaUrl: data.session.captchaUrl,
            newDeviceVerifyUrl: data.session.newDeviceVerifyUrl,
            captcha: data.session.captcha,
            tempPassword: serializeBuffer(data.session.tempPassword),
            noPicSig: serializeBuffer(data.session.noPicSig),
            sequence: data.session.sequence,
        },
        info: {
            age: data.info.age,
            gender: data.info.gender,
            name: data.info.name,
        }
    };
}

export function deserializeKeystore(data: KeystoreSerialized): Keystore {
    return {
        uin: data.uin,
        uid: data.uid,
        passwordMd5: data.passwordMd5,
        stub: {
            randomKey: deserializeBuffer(data.stub.randomKey),
            tgtgtKey: deserializeBuffer(data.stub.tgtgtKey),
        },
        session: {
            d2Key: deserializeBuffer(data.session.d2Key)!,
            d2: deserializeBuffer(data.session.d2)!,
            tgt: deserializeBuffer(data.session.tgt)!,
            sessionDate: data.session.sessionDate,
            qrSign: deserializeBuffer(data.session.qrSign),
            qrString: data.session.qrString,
            qrUrl: data.session.qrUrl,
            exchangeKey: deserializeBuffer(data.session.exchangeKey),
            keySign: deserializeBuffer(data.session.keySign),
            unusualSign: deserializeBuffer(data.session.unusualSign),
            unusualCookies: data.session.unusualCookies,
            captchaUrl: data.session.captchaUrl,
            newDeviceVerifyUrl: data.session.newDeviceVerifyUrl,
            captcha: data.session.captcha,
            tempPassword: deserializeBuffer(data.session.tempPassword),
            noPicSig: deserializeBuffer(data.session.noPicSig),
            sequence: data.session.sequence,
        },
        info: {
            age: data.info.age,
            gender: data.info.gender,
            name: data.info.name,
        },
    };
}