const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.RichEmbed()
        embed.setColor(0xFF0000)
        embed.setDescription("❌ You do not have permissions to check avatar of Server Members. Please contact a staff member")
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

module.exports.help = {
    name: "avatar",
    description: "Shows avatar of a user",
    usage: "=avatar / =avatar @Real Warrior",
    example: "=avatar \n =avatar @Real Warrior",
    accessableby: "Manage Messages",
    aliases: ["av"]
}
