const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        const botnopermissionmanage_rolesembed = new Discord.RichEmbed()
        botnopermissionmanage_rolesembed.setColor(0xFF0000)
        botnopermissionmanage_rolesembed.setDescription("I Don't Have Manage Roles Permission.")
        return message.channel.send(botnopermissionmanage_rolesembed)
    }

    if (!message.member.hasPermission("MANAGE_ROLES")) {
        const nopermissioncreate_roleembed = new Discord.RichEmbed()
        nopermissioncreate_roleembed.setColor(0xFF0000)
        nopermissioncreate_roleembed.setDescription(":x: You do not have permissions to create roles. Please contact a staff member")
        return message.channel.send(nopermissioncreate_roleembed)
    }

    args.shift();

    message.guild.createRole({
        name: args[0],
        color: args[1]
    })
        .then(role => {
            console.log(`${role.name} Role Created.`);
            message.channel.send(`${role.name} role was created.`);
        })
        .catch(err => console.log(err));

}

module.exports.help = {
    name: "createrole"
}