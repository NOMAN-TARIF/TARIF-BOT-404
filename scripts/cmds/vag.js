const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "vag",
		aliases: ["vag"],
		version: "1.0",
		author: "ncs pro with TARIF",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
        const permission = ["61552422054139"];
        if (!permission.includes(event.senderID)) {
            api.sendMessage("𝗢𝗻𝗹𝘆 𝗺𝘆 𝗯𝗼𝘀𝘀 𝗧𝗮𝗿𝗶𝗳, 𝘄𝗶𝗹𝗹 𝗵𝗮𝘀 𝗿𝗶𝗴𝗵𝘁 𝗳𝗼𝗿 𝘁𝗵𝗶𝘀 𝗖𝗺𝗱 😒.", event.threadID, event.messageID);
            return;
        }
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('𝗘𝗸𝗮𝗻𝗲 𝘁𝗼𝗿𝗮 𝘀𝗵𝗼𝗯 𝗹𝘂𝗰𝗰𝗵𝗮 𝗮𝗺𝗶 𝗷𝗮𝗶 𝗴𝗮', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
