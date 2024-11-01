module.exports = {
 config: {
	 name: "Tarif",
	 version: "1.0",
	 author: "AceGun|ar a bah~👨🏿‍🌾",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "tarif") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_ᴛʜɪs ʙᴏᴛ ..\n❥︎----ღ᭄_ᴍᴀᴋᴇ ʙʏ ❞࿐.🌴🤎🙂.\☞ 𝙈𝙍 𝙏𝘼𝙍𝙄𝙁 𝙔𝙩 ᴏᴋʜ ʙʏᴇ\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\✑𝙈𝙍 𝙏𝘼𝙍𝙄𝙁 𝙔𝙩」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/tKgVilB.mp4")
 });
 }
 }
}
