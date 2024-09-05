const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/c8858afdce80eeb01b47e.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO, I AM  DARK NIRO MD I AM ALIVE NOW!",
};
