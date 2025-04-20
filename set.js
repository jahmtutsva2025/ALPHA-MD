const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA71Va4+qyBb9Kzf1VXsE5GlykstTEV8oCji5H0qoQuQpFHTjif99gnanz71z50xPMhk+VYDae+2911r7O8iLuEYW6sDkOyiruIUE9UfSlQhMgNJgjCowBCEkEEzAzko6Zo5bcbNb1KuROPKxvEiZ6cJ0koP/Vi8pd5vsQ+ec7L+B+xCUzSmNg58ELPer/ZtQUpQX1sHBS/bWZdOMoy0z8k9HXZybB2ThrGtcI/oG7n1EGFdxHunlGWWogqmFug2Mq6/Bv6421kX3SjaXHT1SDOeNCTdY05QCYbPdQk/dLjp4tAxP/xr8W8AN2JgfFbWfUIXVcaZwuMw4il+seGkui+z1ML36CqNF9hN+HUc5Cs0Q5SQm3Zf77q/xkY2ubQMPzWl63V9xFgiBV+SBreGpU3aRSFg14/Pc/BpwKaXWAwcVGjdGx5HLal1lFpeb1FFdd5p5Sj21rKm02OTb/wK+qT64kvyVvifyrIrgK7G9BF8vAgxKpnIKjHMDmjXFN+V2WVKut3KML9LGmplxI+y3h+J6KXavF8Ynr+w1lQVCD3Yr044gXVin83g/oz7hQ9JUP0M5z2wqMvL54eZyfiMsX91s5bruzAtmdlyOaXrN6RV7Vg/5VYyJl/A6f7PCNi59j5Eouiqs1reqwWamnF9bf+QsoLBT7G+PihLUmSGY0PchqFAU16SCJC7y/h0vDQEM2x0KKkQe3QXHQ77HNlysm61Plni1WGTevPCKpcmeVuJcWKl7ZFRhHqTFNzAEZVUEqK5ROItrUlTdEtU1jFANJr8+BtXXXKGsIGgeh2ACGH4siBLHsgI7/nf9y+sZkhqW5S85ImAIcFVkSwQmpGrQEDwuaDQvcSov6SrP6YKgciKvyqog8Sqti4Zo9BVmz6ROnKGawKwEE1pgOZqTxqxwH/49OBhdZWmGUWRjzBmyxukKp8myQlFjnRLHNP1P4eBVTRdU2ZB1XWFlUeIVmRYFVdUYnacY6U9wcOz9P0OQozfylFNPgjEzBDiuarLPmzItYPihtY+PMAiKJie7Lg/U/oAqMKE/XyNC4jyq+8qaHFbBOW6R2tcBJhimNboPQYjaOEB9POC3N1fWu50dvaxv+kLcHix1afdMOhf58xc2xGMGh6eXkJKEF3aMqBfIYOpFEhDmeJriODEEfTueTtbf+UNhCXrLCQRXbeaS1hGzejlfsSff9efFQxxPRaAKhR9dPsEgaUqnSFD+MzvXlvPTGR5TMzXz6FxyTOvPndFu3Cx/iPtUGph8/9weahH28eyNax1p3wD9tPo8v2PDhKN+T4gcZg80BfmXhlqUFiWq+nTvs+gDhYjAOK3BBKgbD18CeabP0TxdytOprEeyGsngc3Yf1vTUfqiVs33iWlgQbE27zo+4S5xtI1r45GV4UXLbbj677Nx19tD+/wYBE3Be3AyXrM+DQGoTVKrswAkZ7HG6c9HXmZ6vDd9+43V/t2kuZjCom7OiGYxwo20ujxnlmGxGnG7i9cxIVqu9WiQbFz187INDPyY7Ugq7aaqpLKVrXF8yZ7DqKBi0b06+Qit9lPrcVVPj8dWUTWPWrJXr2zJJytI/OAPZdr0jvq3tjW+dPKx7wT7NfcXSoqdpPkw7fV+W8bufPRmHY/TYPe+z+NOZfZKfug9/iPG+zf6AYIpn81t6bsT5YEDJr3zsemKpU6dWzRmayzse7YN4y1LppbyCe6/qMoUEF1UGJqDOThAMQQprIn+K9//4wZgdgqyTy3JHIPnQPJD7x3Sn4P4btkAA0aUJAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Zuka",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "263789544743",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://whatsapp.com/channel/0029VbAdr66545uqIbTkA82A",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'no',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
