const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KjwDVACL#zQO_rut2RJB2-zALr7cbnHz9oFnxyj8teGhC7zKO9ik",
MONGODB: process.env.MONGODB || "mongodb://mongo:rMqkSeEtKJNSjhqkKaRSzScJoLoyxulo@junction.proxy.rlwy.net:41051",
};
