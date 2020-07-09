const { RichEmbed } = require("discord.js");
const chooseArr = ["🗻", "📰", "✂"];


module.exports.run = async (bot, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES","EMBED_LINKS","ADD_REACTIONS")) {
        const botnopermissionmanage_rolesembed = new RichEmbed()
        botnopermissionmanage_rolesembed.setColor(0xFF0000)
        botnopermissionmanage_rolesembed.setDescription("Check My Permissions.[Missing Permissions:- MANAGE_MESSAGES ,EMBED_LINKS ,ADD_REACTIONS]")
        return message.channel.send(botnopermissionmanage_rolesembed)
    }

    const embed = new RichEmbed()
        .setColor("#ffffff")
        .setFooter("Rock Paper Scissors")
        .setDescription("Add a reaction to one of these emojis to play the game!")
        .setTimestamp();

    const m = await message.channel.send(embed);
    // Wait for a reaction to be added

    const promptMessage = async function (message, author, time, validReactions) {
        // We put in the time as seconds, with this it's being transfered to MS
        time *= 1000;

        // For every emoji in the function parameters, react in the good order.
        for (const reaction of validReactions) await message.react(reaction);

        // Only allow reactions from the author, 
        // and the emoji must be in the array we provided.
        const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;

        // And ofcourse, await the reactions
        return message
            .awaitReactions(filter, { max: 1, time: time })
            .then(collected => collected.first() && collected.first().emoji.name);
    }

    const reacted = await promptMessage(m, message.author, 30, chooseArr);

    // Get a random emoji from the array
    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

    // Check if it's a win/tie/loss
    const result = await getResult(reacted, botChoice);
    // Clear the reactions
    await m.clearReactions();

    embed
        .setDescription("")
        .addField(result, `${reacted} vs ${botChoice}`);

    m.edit(embed);

    function getResult(me, clientChosen) {
        if ((me === "🗻" && clientChosen === "✂") ||
            (me === "📰" && clientChosen === "🗻") ||
            (me === "✂" && clientChosen === "📰")) {
            return "You won!";
        } else if (me === clientChosen) {
            return "It's a tie!";
        } else {
            return "You lost!";
        }
    }
}
module.exports.help = {
    name: "rps",
    aliases: [""],
    description: "Rock Paper Scissors game. React to one of the emojis to play the game.",
    usage: "rps",
}