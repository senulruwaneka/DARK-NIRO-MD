const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3UtFxRjL#EDg7yuV0wZqwyieG8DrsfqguKtPKtN__aXMY3CPqyR8",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/c8858afdce80eeb01b47e.jpg"
ALIVE_MSG: process.env.ALIVE_MSG || "HEY ${pushname}👋\nn👋 HELLO, I AM  DARK NIRO MD I AM ALIVE NOW !"
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
