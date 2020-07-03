const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        const botnopermissionmuteembed = new Discord.RichEmbed()
        botnopermissionmuteembed.setColor(0xFF0000)
        botnopermissionmuteembed.setDescription("I don't have Mute Members Permission.")
        return message.channel.send(botnopermissionmuteembed)
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const nopermissionmuteembed = new Discord.RichEmbed()
        nopermissionmuteembed.setColor(0xFF0000)
        nopermissionmuteembed.setDescription("❌ You do not have permissions to mute members. Please contact a staff member")
        return message.channel.send(nopermissionmuteembed)
    }

    let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

    let reason = args[3]

    let muterole = message.guild.roles.find(role => role.name === 'Muted');

    if (!muterole) return message.reply("Couldn't find the mute role");

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        const botnopermission_manage_rolesembed = new Discord.RichEmbed()
        botnopermission_manage_rolesembed.setColor(0xFF0000)
        botnopermission_manage_rolesembed.setDescription("I don't have Manage Roles Permission.")
        return message.channel.send(botnopermission_manage_rolesembed)
    }

    let time = args[2];

    if (!time) {
        return message.reply("You didn't specify a time!");
    }

    if (!reason) {
        return message.reply("You didn't specify a reason!");
    }
    if (message.member.roles.find(r => r.name === "Muted")) {
        return message.reply('Member is already muted')
    }
    person.addRole(muterole.id);
    const muteembed = new Discord.RichEmbed()
    muteembed.setColor(0x00FFFF)
    muteembed.setDescription(`✅ ${person.user.tag} has been muted for ${ms(ms(time))} | ${reason}`);
    message.channel.send(muteembed);

    if (message.member.roles.find(r => r.name === "Muted")) {
        setTimeout(function () {
            person.removeRole(muterole.id);
            const unmuteembed = new Discord.RichEmbed()
            unmuteembed.setColor(0x00FFFF)
            unmuteembed.setDescription(`✅ ${person.user.tag} has been unmuted!`)
            message.channel.send(unmuteembed)

        }, ms(time));
    }

}


module.exports.help = {
    name: "mute"
}