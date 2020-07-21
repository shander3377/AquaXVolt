const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const fs = require("fs");

const token = process.env.token;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});



const PREFIX = '+';

bot.on('ready', () => {
    console.log(`${bot.user.username} is Online!`);
    bot.user.setActivity(`on ${bot.guilds.size} servers | =help`);
    bot.user.setStatus("idle");
});

bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    bot.user.setActivity(`on ${bot.guilds.size} servers | =help`);
});

bot.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    bot.user.setActivity(`on ${bot.guilds.size} servers | =help`);
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
    if(!message.content.startsWith(PREFIX)) return;
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = bot.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(bot, message, args);
});

bot.login("NjI2MDM4NjQyMjg4MDk5MzM4.XxKp2g.yGxMSQEjS8PfBcUG91OOYz7tmzk");