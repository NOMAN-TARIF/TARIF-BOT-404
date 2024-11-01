module.exports = {
    config: {
        name: "🚶‍♂️",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "🚶‍♂️") return message.reply("Ꮇʀᵀᴬᴿᴵᶠ➤‎🗣~-Ex এর বাড়িতে ধান নিয়ে যাচ্ছি,~কারন~Ex বলছে বুঝিয়ে দেবে-কত ধানে কত চাল…🤨😹");
}
};
