const Discord = require("discord.js");
const PREFIX = '=';

module.exports = {
    name: "ping",
    aliases: ["p"],
    category: "info",
    description: "returns a thing which doesnt matters at all, not at all",
    usage: "[command | alias]",
    example: "=ping",
    
    run: async (client, message, args) => {

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

}