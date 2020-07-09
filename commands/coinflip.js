const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        var choices = [
            "heads",
            "tails"
        ];

        var output = choices[Math.floor(Math.random()*choices.length)];

        message.channel.send(`You got **${output}**`)
        
}

module.exports.help = {
    name: "coinflip",
    aliases: ["flip"],
    description: "Simple Coinflip Game or You Can Call This Head or Tail Game",
    usage: "=coinflip",
    example: "=coinflip"
}