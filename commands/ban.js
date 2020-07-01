const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
        const botnopermissionbanembed = new Discord.RichEmbed()
        botnopermissionbanembed.setColor(0xFF0000)
        botnopermissionbanembed.setDescription("I don't have Ban Members Permission.")
        return message.channel.send(botnopermissionbanembed)
    }

    if (!message.member.hasPermission("BAN_MEMBERS")) {
        const nopermissionbanembed = new Discord.RichEmbed()
        nopermissionbanembed.setColor(0xFF0000)
        nopermissionbanembed.setDescription(":x: You do not have permissions to ban members. Please contact a staff member")
        return message.channel.send(nopermissionbanembed)
    }


    if (user) {
        const member = message.guild.member(user);

        if (member) {
            member.ban({ reason: 'You Were Bad!' }).then(() => {
                message.channel.send(`✅ Successfully Banned! ${user.tag}`);
            }).catch(err => {
                message.reply('I was unable to ban the member');
                console.log(err);
            });
        } else {
            message.reply('That user isn\'t in the this guild')
        }

    } else {
        message.reply('You need to specify a person!')
    }

}

module.exports.help = {
    name: "ban"
}