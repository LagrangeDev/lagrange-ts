import { Bot } from '@/app';
import { fetchAppInfoFromSignUrl, newDeviceInfo, newKeystore, serializeDeviceInfo, serializeKeystore, UrlSignProvider } from '@/app/util';
import * as fs from 'node:fs';

const signUrl = 'http://106.54.14.24:8084/api/sign/30366';

const bot = await Bot.create(
    await fetchAppInfoFromSignUrl(signUrl),
    {},
    newDeviceInfo(),
    newKeystore(),
    UrlSignProvider('http://106.54.14.24:8084/api/sign/30366'),
);

if (!fs.existsSync('temp')) {
    fs.mkdirSync('temp');
}

await bot.qrCodeLogin((url, png) => {
    fs.writeFileSync('temp/qrcode.png', png);
    console.log('QR code png saved to temp/qrcode.png');
    console.log('QR code url:', url);
});

console.log('User', bot.ctx.keystore.uin, 'logged in.');

fs.writeFileSync('temp/deviceInfo.json', JSON.stringify(serializeDeviceInfo(bot.ctx.deviceInfo), null, 4));
fs.writeFileSync('temp/keystore.json', JSON.stringify(serializeKeystore(bot.ctx.keystore), null, 4));
console.log('Device info and keystore saved to temp.');