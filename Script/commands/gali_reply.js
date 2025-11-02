const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("gali")==0 || event.body.indexOf("Sahadat mc")==0 || event.body.indexOf("chod")==0 || event.body.indexOf("Sahadat nodir pola")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("Shahadat re chudi")==0 || event.body.indexOf("shahadat re chod")==0 || event.body.indexOf("Shahadat Abal")==0 || event.body.indexOf("Shahadat Boakachoda")==0 || event.body.indexOf("Shahadat madarchod")==0 || event.body.indexOf("Sahadat re chudi")==0 || event.body.indexOf("Sahu Bokachoda")==0) {
		var msg = {
				body: "তোর মার ভোদা কালা🥵\তোর মারে চুদী রাইতে🥱😈\খানকীর পোলা তোর আমার সাতে 😁\তোর মার 1 ঘণ্টা গুয়া করমু",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
