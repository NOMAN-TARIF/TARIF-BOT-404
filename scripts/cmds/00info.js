const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "info",
		author: "ArYan 🤡",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "INFO",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ArYanInfo = {
				botname: '✑Ꮇʀᵀᴬᴿᴵᶠ~𝙱𝙾𝚃`࿐',
				prefix: '!',
				owner: '✑Ꮇʀᵀᴬᴿᴵᶠ~Ұ₮࿐',
				age: '',
				Tiktok: 'md.tarif0196',
				Whatsapp: '01615796682',
				bio: 'I Love my mather',
				Relationship: 'single',
				Messenger: 'https://m.me/Mr.Tarif.Yt.130',
				Instagram: 'https://m.me/Mr.Tarif.Yt.130'
			};

			const ArYan = 'https://i.imgur.com/pOIurxH.jpeg';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(ArYan, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'ArYan_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `
• Bot & Owner Info
╰‣ Bot Name: ${ArYanInfo.botname}
╰‣ Bot Prefix: ${ArYanInfo.prefix}
╰‣ Owner: ${ArYanInfo.owner}
╰‣ Age: ${ArYanInfo.age}
╰‣ Tiktok: ${ArYanInfo.tiktok}
╰‣ Whatsapp: ${ArYanInfo.whatsapp}
╰‣ relationship: ${ArYanInfo.relationship}
╰‣ bio: ${ArYanInfo.bio}
╰‣ Messenger: ${ArYanInfo.messenger}
╰‣ Instagram: ${ArYanInfo.Instagram}`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🐔', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ArYaninfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};
