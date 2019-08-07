const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("608485327123775500")
setInterval(function() {
channel.send(`ana el pro by ahmed DragonOV`);
}, 30)
})

client.login(process.env.BOT_TOKEN);