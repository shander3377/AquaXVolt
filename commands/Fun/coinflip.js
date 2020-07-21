const Discord = require("discord.js");

module.exports = {
    name: "coinflip",
    category: "Fun",
    description: "decide something, do a coinflip",
    usage: "[command]",
    aliases: ["cf"],
    example: "=coinflip ",

    run: async (client, message, args) => {
        var choices = [
            "heads",
            "tails"
        ];

        var output = choices[Math.floor(Math.random()*choices.length)];

        message.channel.send(`You got **${output}**`)
        
}

}