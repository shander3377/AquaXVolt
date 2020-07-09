const Discord = require("discord.js");
const PREFIX = '=';

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.RichEmbed()
        embed.setColor(0xFF0000)
        embed.setDescription("❌ You do not have permissions to mute members. Please contact a staff member.[Missing Permission:- Manage Messages]")
        return message.channel.send(embed)
    }

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
    aliases: [],
    accessableby: "Manage Messages",
    description: "Check ping of the bot",
    usage: "=ping",
    example: "=ping "
  }