const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");


module.exports = {
    name: "userinfo",
    aliases: ["ui"],
    category: "info",
    description: "get some info about ur bootifull profile",
    usage: "[command | alias]",
    example: "=userinfo @noobgirl007",

    run: async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.RichEmbed()
        embed.setColor(0xFF0000)
        embed.setDescription("❌ You do not have permissions to mute members. Please contact a staff member.[Missing Permission:- Manage Messages]")
        return message.channel.send(embed)
    }

    const getMember = function(message, toFind = '') {
        toFind = toFind.toLowerCase();

        let target = message.guild.members.get(toFind);
        
        if (!target && message.mentions.members)
            target = message.mentions.members.first();

        if (!target && toFind) {
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind)
            });
        }
            
        if (!target) 
            target = message.member;
            
        return target;
    };

    const member = getMember(message, args.join(" "));

    // Member variables
    const formatDate = function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    }
    const joined = formatDate(member.joinedAt);
    const roles = member.roles
        .filter(r => r.id !== message.guild.id)
        .map(r => r).join(", ") || 'none';

    // User variables
    const created = formatDate(member.user.createdAt);

    const embed = new RichEmbed()
        .setFooter("Searched by " + message.author.username, message.author.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL)
        .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

        .addField('Member information:', stripIndents`**> Display name:** ${member.displayName}
            **> Joined at:** ${joined}
            **> Roles:** ${roles}`, true)

        .addField('User information:', stripIndents`**> ID:** ${member.user.id}
            **> Username:** ${member.user.username}
            **> Tag:** ${member.user.tag}
            **> Created at:** ${created}`, true)

        .setTimestamp()

    if (member.user.presence.game)
        embed.addField('Currently playing', stripIndents`**> Name:** ${member.user.presence.game.name}`);

    message.channel.send(embed);

}


}