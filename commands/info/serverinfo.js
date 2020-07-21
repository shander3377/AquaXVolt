const Discord = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["si"],
  category: "info",
  description: "shows some  \"true\" stats about ur \"very bootifull\" serber",
  usage: "[command | alias]",
  example: "=serverinfo",
 
  run: async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_GUILD")) {
    const embed = new Discord.RichEmbed()
    embed.setColor(0xFF0000)
    embed.setDescription("❌ You do not have permissions to check server info. Please contact a staff member.[Missing Permission:- Manage Server]")
    return message.channel.send(embed)
  }

  const verlvl = {
    0: "None",
    1: "Low",
    2: "Medium",
    3: "(╯°□°）╯︵ ┻━┻",
    4: "(ノಠ益ಠ)ノ彡┻━┻"
  }

  let inline = true
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Server Name:", message.guild.name, inline)
    .addField("Server ID:", message.guild.id, inline)
    .addField("Server Owner:", message.guild.owner, inline)
    .addField("Server Region:", message.guild.region, inline)
    .addField("Verification Level:", verlvl[message.guild.verificationLevel], inline)
    .addField("Members:", `${message.guild.memberCount}`, inline)
    .addField("Roles:", message.guild.roles.size, inline)
    .addField("Text Channels:", message.guild.channels.filter(c => c.type === "text").size, inline)
    .addField("Voice Channels:", message.guild.channels.filter(c => c.type === "voice").size, inline)
    .addField("You Joined:", message.member.joinedAt)
    .setFooter(`Server Created: ${message.guild.createdAt}`);

  message.channel.send(serverembed);
}

}