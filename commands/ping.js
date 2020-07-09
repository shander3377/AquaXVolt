const Discord = require("discord.js");
const PREFIX = '=';

module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    const command = args.shift().toLowerCase();

    if (command === "ping") {
        var ping = Date.now() - message.createdTimestamp + " ms";
        const m = await message.channel.send("ping?");
        m.edit("PONG! `" + `${Date.now() - message.createdTimestamp}` + " ms`");

    }
}

module.exports.help = {
    name:"ping",
    aliases: []
  }