const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    category: "Fun",
    description: "Show your avatar",
    usage: "[command][user]",
    aliases: ["a"],
    example: "=avatar @gamergirl007 ",

    run: async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.RichEmbed()
        embed.setColor(0xFF0000)
        embed.setDescription("❌ You do not have permissions to check avatar of Server Members. Please contact a staff member.[Missing Permsission:- Manage Messages]")
        return message.channel.send(embed)
    }

    let msg = await message.channel.send("Generating avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("RANDOM")
        .setTitle("Avatar")
        .setFooter("Searched by " + message.author.tag)
        .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();
}

}