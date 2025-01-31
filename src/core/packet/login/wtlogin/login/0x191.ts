import { Tlv, TlvScalarField } from '@/core/util/binary/tlv';

export const TlvLogin0x191 = Tlv.tagged([
    TlvScalarField('k', 'uint8'), // 0; originally 0x82
], '0x191');