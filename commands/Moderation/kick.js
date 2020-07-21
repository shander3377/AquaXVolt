const Discord = require("discord.js");

module.exports = {
    name: "kick",
    aliases: ["k"],
    category: "Moderation",
    description: "KICK SOMEBODY IN THEIR ASS",
    usage: "[command][user]",
    example: "=kick @noobgirl007 so pro!",
    permissionss: "ADMINISTRATOR",
    run: async (client, message, args) => {
    await message.delete();
    
    const user = message.mentions.users.first();

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
        const botnopermissionkickembed = new Discord.RichEmbed()
        botnopermissionkickembed.setColor(0xFF0000)
        botnopermissionkickembed.setDescription("I don't have Kick Members Permission.")
        return message.channel.send(botnopermissionkickembed)
    }

    if (!message.member.hasPermission("KICK_MEMBERS")) {
        const nopermissionkickembed = new Discord.RichEmbed()
        nopermissionkickembed.setColor(0xFF0000)
        nopermissionkickembed.setDescription(":x: You do not have permissions to kick members. Please contact a staff member.[Missing Permission:- Kick Members]")
        return message.channel.send(nopermissionkickembed)
    }

    let reason = args.join(" ").slice(28)

    if (!reason) {
        return message.reply("You didn't specify a reason!");
    }

    if (user) {
        const member = message.guild.member(user);


        if (member) {
            member.kick('You Were Kicked From The Server!').then(() => {
                message.channel.send(`✅ Successfully kicked ${user.tag} | ${reason}`);
            }).catch(err => {
                message.reply('I was unable to kick the member');
                console.log(err);
            });
        } else {
            message.reply('That user isn\'t in the this guild')
        }

    } else {
        message.reply('You need to specify a person!')
    }


}

}