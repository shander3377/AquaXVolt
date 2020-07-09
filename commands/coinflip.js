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
    aliases: ["flip"]
}