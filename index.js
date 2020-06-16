const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');

const token = '';

const PREFIX = '=';

bot.on('ready', () => {
    console.log(`${bot.user.username} is Online!`);
    bot.user.setActivity('Real Warrior', { type: 'LISTENING' });
    bot.user.setStatus("idle");
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.reply('pong!');
            break;
        case 'info':
            if (args[1] === 'version') {
                message.channel.sendMessage('version 1.0.5 (Beta Version)');
            } else {
                message.reply('Invalid Args')
            }
            break;
        case 'creator':
                message.channel.sendMessage('Creator :- __Gaming Knights Z | ℓινє fℓαмє#1539__');

            break;
        case 'clear':
            if (!args[1]) return message.reply('Error Please Define Second Arg')
            message.channel.bulkDelete(args[1]);
            message.reply('Cleared!').then(msg => msg.delete(10000));
            break;
    }
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'kick':

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('You Were Kicked From The Server!').then(() => {
                        message.reply('Successfully kicked :white_check_mark:');
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    message.reply('That user isn\'t in the this guild')
                }

            } else {
                message.reply('You need to specify a person!')
            }

            break;
    }
})


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ban':

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.ban({reason: 'You Were Bad!'}).then(() =>{
                        message.reply(`Successfully Banned! :white check mark: ${user.tag}`);
                    }).catch(err => {
                        message.reply('I was unable to ban the member');
                        console.log(err);
                    });
                } else {
                    message.reply('That user isn\'t in the this guild')
                }

            } else {
                message.reply('You need to specify a person!')
            }

            break;
    }
})


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'mute':
            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if(!person) return message.reply("Couldn't find that member");

            let muterole = message.guild.roles.find(role => role.name === 'Muted');
            
            if(!muterole) return message.reply("Couldn't find the mute role");

            let time = args[2];

            if(!time){
                return message.reply("You didn't specify a time!");
            }

             person.addRole(muterole.id);

             message.channel.send(`@${person.user.tag} has beeen muted for ${ms(ms(time))}`);

             setTimeout(function(){
               person.removeRole(muterole.id);
               message.channel.send(`@${person.user.tag} has been unmuted!`)

             }, ms(time));


        break; 
    }

});

bot.login(prcess.env.token);