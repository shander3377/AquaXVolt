const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");


module.exports.run = (bot, message, args) => {
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
    const joined = formatDate(member.joinedAt);
    const roles = member.roles
        .filter(r => r.id !== message.guild.id)
        .map(r => r).join(", ") || 'none';

    // User variables
    const formatDate = function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    }
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

module.exports.help = {
    name: "userinfo",
    aliases: ["whois"],
    description: "Returns user information",
    usage: "[username | id | mention]",
}