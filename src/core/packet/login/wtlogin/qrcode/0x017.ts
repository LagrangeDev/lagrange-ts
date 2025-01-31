import { Tlv, TlvVariableField } from '@/core/util/binary/tlv';

export const TlvQrCode0x017 = Tlv.tagged([
    TlvVariableField('qrCode', 'bytes', 'none', false),
], '0x17');