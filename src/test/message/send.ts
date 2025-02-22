import bot from '@/test/login/fast';
import { readFileSync } from 'fs';

const group = await bot.getGroup(0); // Substitute with your group's Uin

console.log(await group?.sendMsg(async (b) => {
    b.text('Hello, this is a test message.');
    await b.image(readFileSync('temp/qrcode.png'));
}));