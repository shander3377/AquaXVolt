const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) {
        const embed = new Discord.RichEmbed()
        embed.setColor(0xFF0000)
        embed.setDescription("❌ You do not have permissions to check server info. Please contact a staff member.[Missing Permission:- Manage Server]")
        return message.channel.send(embed)
    }

    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if (!helpArgs[0]) {
        var embed = new Discord.RichEmbed()
            .setAuthor(`Here is the Available Commands to use:`)
            .setThumbnail(message.guild.iconURL)
            .setTimestamp()
            .setDescription("**Moderation**\n ``Clear`` | ``Mute`` | ``Unmute`` | ``Kick`` | ``Ban`` | ``CreateRole`` | ``Addrole`` | ``Removerole``\n **Info**\n``Ping`` | ``Info (Version/Creator)`` | ``Serverinfo`` | ``Userinfo`` \n**Fun**\n ``Avatar`` | ``Coinflip`` | ``Rps`` \n**Prefix (Default)**\n``=``")
            .setFooter(message.author.username, message.author.displayAvatarURL)
            .setColor('0x00FFF3')

        message.channel.send(embed);
    }

    if (helpArgs[0]) {
        let command = helpArgs[0];

        if (bot.commands.has(command)) {
            command = bot.commands.get(command);
            var embed = new Discord.RichEmbed()
                .setAuthor(`${command.help.name} Command`)
                .setThumbnail(message.guild.iconURL)
                .setTimestamp()
                .setDescription(`
            -> **Command's Description :- **${command.help.description || "There is no Description for this command."}
            -> **Command's Usage :- ** ${command.help.usage || "No Usage"}
            -> **Command's Examples :- ** ${command.help.example || "No Examples"}
            -> **Command's Permissions :- ** ${command.help.accessableby || "Members"}
            -> **Command's Aliases :- ** ${command.help.aliases || "No Aliases"}
            For more informations use **=help command** \nExample:- **=help kick**
            `)
                .setFooter(message.author.username, message.author.displayAvatarURL)
                .setColor(`0x2EFF00`)

            message.channel.send(embed);
        }
    }
}


module.exports.help = {
    name: "help",
    description: "",
    usage: "?help",
    accessableby: "Manage Server",
    aliases: ["h", "commands"]
}