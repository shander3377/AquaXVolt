const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await message.delete();
    
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const nopermissionMANAGE_MESSAGESembed = new Discord.RichEmbed()
        nopermissionMANAGE_MESSAGESembed.setColor(0xFF0000)
        nopermissionMANAGE_MESSAGESembed.setDescription(":x: You do not have permissions to clear messages. Please contact a staff member")
        return message.channel.send(nopermissionMANAGE_MESSAGESembed)
    }

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        const botnopermissionMANAGE_MESSAGESembed = new Discord.RichEmbed()
        botnopermissionMANAGE_MESSAGESembed.setColor(0xFF0000)
        botnopermissionMANAGE_MESSAGESembed.setDescription("I don't have MANAGE MESSAGES Permission.")
        return message.channel.send(botnopermissionMANAGE_MESSAGESembed)
    }

    if (!args[1]) return message.reply('Error Please Define Second Arg')
    if (message.deletable) {
        message.delete()
    }
    message.channel.bulkDelete(args[1]);
    message.reply('Cleared!').then(msg => msg.delete(10000));
}

module.exports.help = {
    name: "clear",
    description: "Delete messages at once!",
    usage: "=clear [count] (Note:- You can delete max 100 at once!)",
    example: "=clear 10 \n                      =clear 97 \n =clear 69 ",
    accessableby: "Manage Messages",
    aliases: ["purge"]
}