const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const fs = require("fs");

const token = process.env.token;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name)
        });
    });


});

const PREFIX = '=';

bot.on('ready', () => {
    console.log(`${bot.user.username} is Online!`);
    bot.user.setActivity(`on ${bot.guilds.size} servers!`);
    bot.user.setStatus("idle");
});

//bot.on("message", async message => {
//    if (message.author.bot) return;
//    if (!message.content.startsWith(PREFIX)) return;
//
//    const args = message.content.slice(PREFIX.length).trim().split(/ + /g);
//    const command = args.shift().toLowerCase();
//
//    if (command === "ping") {
//        var ping = Date.now() - message.createdTimestamp + " ms";
//        const m = await message.channel.send("ping?");
//        m.edit("PONG! `" + `${Date.now() - message.createdTimestamp}` + " ms`");
//
//    }
//});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;

    switch (args[0]) {
        case 'info':
            if (args[1] === 'version') {
                message.channel.send('version 1.0.8 (Beta Version)')
            };
            if (args[1] === 'creator') {
                message.channel.send('Creator :- __Gaming Knights Z | ℓινє fℓαмє#1539__')
            };

            break;

    }
});


bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    let commandfile = bot.commands.get(cmd.slice(PREFIX.length)) || bot.commands.get(bot.aliases.get(cmd.slice(PREFIX.length)));
    if (commandfile) commandfile.run(bot, message, args);
});

bot.login(token);