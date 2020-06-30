const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');

const token = process.env.token;

const PREFIX = '=';

bot.on('ready', () => {
    console.log(`${bot.user.username} is Online!`);
    bot.user.setActivity(`on ${bot.guilds.size} servers!`);
    bot.user.setStatus("idle");
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ + /g);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        var ping = Date.now() - message.createdTimestamp + " ms";
        const m = await message.channel.send("ping?");
        m.edit("PONG! `" + `${Date.now() - message.createdTimestamp}` + " ms`");

    }
});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;

    switch (args[0]) {
        case 'info':
            if (args[1] === 'version') {
                message.channel.send('version 1.0.6 (Beta Version)')
            };
            if (args[1] === 'creator') {
                message.channel.send('Creator :- __Gaming Knights Z | ℓινє fℓαмє#1539__')
            };

            break;

        case 'clear':
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                const nopermissionMANAGE_MESSAGESembed = new Discord.RichEmbed()
                nopermissionMANAGE_MESSAGESembed.setColor(0xFF0000)
                nopermissionMANAGE_MESSAGESembed.setDescription(":x: You do not have permissions to clear messages. Please contact a staff member")
                return message.channel.send(nopermissionMANAGE_MESSAGESembed)
            }

            if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                const botnopermissionMANAGE_MESSAGESembed = new Discord.RichEmbed()
                botnopermissionMANAGE_MESSAGESembed.setColor(0xFF0000)
                botnopermissionMANAGE_MESSAGESembed.setDescription("I don't have MANAGE MESSAGES Permission.")
                return message.channel.send(botnopermissionMANAGE_MESSAGESembed)
            }

            if (!args[1]) return message.reply('Error Please Define Second Arg')
            if (message.deletable) {
                message.delete()
            }
            message.channel.bulkDelete(args[1]);
            message.reply('Cleared!').then(msg => msg.delete(10000));
            break;
        case 'help':
            if (args[1] === "mute") {
                const helpmute = new Discord.RichEmbed()
                    .setColor(0xe8fc03)
                    .setAuthor(`Mute Command!`, bot.user.displayAvatarURL)
                    .setThumbnail(message.guild.iconURL)
                    .setTimestamp()
                    .setDescription(`Mute Help Command!`)
                    .addField(`=> Description:`, "Mute a member so they cannot type or speak.")
                    .addField(`=> Usage:`, "=mute [user] [limit] [reason] (Note :- Don't put space between tag and time limit)")
                    .addField(`=> Example:`, "=mute @Real Warrior 10m Abuse , =mute @Yashu 10m Spamming , =mute @Goku 1d Emoji Spamming")
                    .setFooter(message.author.username, message.author.displayAvatarURL)
                message.channel.send(helpmute)
            };
            if (args[1] === "kick") {
                const helpkick = new Discord.RichEmbed()
                    .setColor(0xe8fc03)
                    .setAuthor(`Kick Command!`, bot.user.displayAvatarURL)
                    .setThumbnail(message.guild.iconURL)
                    .setTimestamp()
                    .setDescription(`Kick Help Command!`)
                    .addField(`=> Description:`, "Kicks a member from the server!.")
                    .addField(`=> Usage:`, "=mute [user]")
                    .addField(`=> Example:`, "=kick @Real Warrior , =kick @Yashu , =kick @Goku ")
                    .setFooter(message.author.username, message.author.displayAvatarURL)
                message.channel.send(helpkick)
            };
            if (args[1] === "ban") {
                const helpban = new Discord.RichEmbed()
                    .setColor(0xe8fc03)
                    .setAuthor(`Ban Command!`, bot.user.displayAvatarURL)
                    .setThumbnail(message.guild.iconURL)
                    .setTimestamp()
                    .setDescription(`Ban Help Command!`)
                    .addField(`=> Description:`, "Ban a member from the server!.")
                    .addField(`=> Usage:`, "=ban [user]")
                    .addField(`=> Example:`, "=ban @Real Warrior , =ban @Yashu , =ban @Goku ")
                    .setFooter(message.author.username, message.author.displayAvatarURL)
                message.channel.send(helpban)
            };
            if (args[1] === "clear") {
                const helpclear = new Discord.RichEmbed()
                    .setColor(0xe8fc03)
                    .setAuthor(`Clear Command!`, bot.user.displayAvatarURL)
                    .setThumbnail(message.guild.iconURL)
                    .setTimestamp()
                    .setDescription(`Clear Help Command!`)
                    .addField(`=> Description:`, "Delete messages at once!.")
                    .addField(`=> Usage:`, "=clear [count] (Note:- You can delete max 100 at once!)")
                    .addField(`=> Example:`, "=clear 10 , =clear 97 , =clear 69 ")
                    .setFooter(message.author.username, message.author.displayAvatarURL)
                message.channel.send(helpclear)
            };
            if (args[1] === "unmute") {
                const helpunmute = new Discord.RichEmbed()
                    .setColor(0xe8fc03)
                    .setAuthor(`Unmute Command!`, bot.user.displayAvatarURL)
                    .setThumbnail(message.guild.iconURL)
                    .setTimestamp()
                    .setDescription(`Unmute Help Command!`)
                    .addField(`=> Description:`, "Unmute a member so they can type or speak.")
                    .addField(`=> Usage:`, "=unmute [user]")
                    .addField(`=> Example:`, "=unmute @Real Warrior , =unmute @Yashu , =unmute @Goku ")
                    .setFooter(message.author.username, message.author.displayAvatarURL)
                message.channel.send(helpunmute)
            };
            if (args[1] === "addrole") {
                const helpaddrole = new Discord.RichEmbed()
                    .setColor(0xe8fc03)
                    .setAuthor(`Addrole Command!`, bot.user.displayAvatarURL)
                    .setThumbnail(message.guild.iconURL)
                    .setTimestamp()
                    .setDescription(`Addrole Help Command!`)
                    .addField(`=> Description:`, "Adds a role to the user.")
                    .addField(`=> Usage:`, "=addrole [user] [role]")
                    .addField(`=> Example:`, "=addrole @Real Warrior @moderators , =addrole @Yashu @Owner")
                    .setFooter(message.author.username, message.author.displayAvatarURL)
                message.channel.send(helpaddrole)
            };
            if (args[1] === "removerole") {
                const helpremoverole = new Discord.RichEmbed()
                    .setColor(0xe8fc03)
                    .setAuthor(`Removerole Command!`, bot.user.displayAvatarURL)
                    .setThumbnail(message.guild.iconURL)
                    .setTimestamp()
                    .setDescription(`Removerole Help Command!`)
                    .addField(`=> Description:`, "Removes a role from the user.")
                    .addField(`=> Usage:`, "=removerole [user] [role]")
                    .addField(`=> Example:`, "=removerole @Real Warrior @moderators , =removerole @Yashu @Owner")
                    .setFooter(message.author.username, message.author.displayAvatarURL)
                message.channel.send(helpremoverole)
            };

            break;
    }
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;

    switch (args[0]) {
        case 'kick':

            const user = message.mentions.users.first();

            if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
                const botnopermissionkickembed = new Discord.RichEmbed()
                botnopermissionkickembed.setColor(0xFF0000)
                botnopermissionkickembed.setDescription("I don't have Kick Members Permission.")
                return message.channel.send(botnopermissionkickembed)
            }

            if (!message.member.hasPermission("KICK_MEMBERS")) {
                const nopermissionkickembed = new Discord.RichEmbed()
                nopermissionkickembed.setColor(0xFF0000)
                nopermissionkickembed.setDescription(":x: You do not have permissions to kick members. Please contact a staff member")
                return message.channel.send(nopermissionkickembed)
            }


            if (user) {
                const member = message.guild.member(user);


                if (member) {
                    member.kick('You Were Kicked From The Server!').then(() => {
                        message.channel.send(`✅ Successfully kicked ${user.tag}`);
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
});


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;

    switch (args[0]) {
        case 'ban':

            const user = message.mentions.users.first();

            if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
                const botnopermissionbanembed = new Discord.RichEmbed()
                botnopermissionbanembed.setColor(0xFF0000)
                botnopermissionbanembed.setDescription("I don't have Ban Members Permission.")
                return message.channel.send(botnopermissionbanembed)
            }

            if (!message.member.hasPermission("BAN_MEMBERS")) {
                const nopermissionbanembed = new Discord.RichEmbed()
                nopermissionbanembed.setColor(0xFF0000)
                nopermissionbanembed.setDescription(":x: You do not have permissions to ban members. Please contact a staff member")
                return message.channel.send(nopermissionbanembed)
            }


            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.ban({ reason: 'You Were Bad!' }).then(() => {
                        message.channel.send(`✅ Successfully Banned! ${user.tag}`);
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
    if (!message.content.startsWith(PREFIX)) return;

    switch (args[0]) {
        case 'mute':
            if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                const botnopermissionmuteembed = new Discord.RichEmbed()
                botnopermissionmuteembed.setColor(0xFF0000)
                botnopermissionmuteembed.setDescription("I don't have Mute Members Permission.")
                return message.channel.send(botnopermissionmuteembed)
            }

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                const nopermissionmuteembed = new Discord.RichEmbed()
                nopermissionmuteembed.setColor(0xFF0000)
                nopermissionmuteembed.setDescription("❌ You do not have permissions to mute members. Please contact a staff member")
                return message.channel.send(nopermissionmuteembed)
            }

            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

            let reason = args.join(" ").slice(3)

            let muterole = message.guild.roles.find(role => role.name === 'Muted');

            if (!muterole) return message.reply("Couldn't find the mute role");

            if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
                const botnopermission_manage_rolesembed = new Discord.RichEmbed()
                botnopermission_manage_rolesembed.setColor(0xFF0000)
                botnopermission_manage_rolesembed.setDescription("I don't have Manage Roles Permission.")
                return message.channel.send(botnopermission_manage_rolesembed)
            }

            let time = args[2];

            if (!time) {
                return message.reply("You didn't specify a time!");
            }

            if (!reason) {
                return message.reply("You didn't specify a reason!");
            }
            
            if (message.member.roles.find(r => r.name === "Muted")) {
                return message.reply('Member is already muted')
            }
            person.addRole(muterole.id);
            const muteembed = new Discord.RichEmbed()
            muteembed.setColor(0x00FFFF)
            muteembed.setDescription(`✅ ${person.user.tag} has been muted for ${ms(ms(time))} | ${reason}`);
            message.channel.send(muteembed);

            if (message.member.roles.find(r => r.name === "Muted")) {
                setTimeout(function () {
                    person.removeRole(muterole.id);
                    const unmuteembed = new Discord.RichEmbed()
                    unmuteembed.setColor(0x00FFFF)
                    unmuteembed.setDescription(`✅ ${person.user.tag} has been unmuted!`)
                    message.channel.send(unmuteembed)

                }, ms(time));
            }


            break;
    }

});


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;

    switch (args[0]) {
        case 'unmute':
            if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
                const botnopermissionmanage_rolesembed = new Discord.RichEmbed()
                botnopermissionmanage_rolesembed.setColor(0xFF0000)
                botnopermissionmanage_rolesembed.setDescription("I don't have Manage Roles Permission.")
                return message.channel.send(botnopermissionmanage_rolesembed)
            }

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                const nopermissionunmuteembed = new Discord.RichEmbed()
                nopermissionunmuteembed.setColor(0xFF0000)
                nopermissionunmuteembed.setDescription(":x: You do not have permissions to unmute members. Please contact a staff member")
                return message.channel.send(nopermissionunmuteembed)
            }

            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if (!person) return message.reply("Couldn't find that member");

            let muterole = message.guild.roles.find(role => role.name === 'Muted');

            if (!muterole) return message.reply("Couldn't find the mute role");


            let time = args[2];

            person.removeRole(muterole.id);
            const unmuteembed = new Discord.RichEmbed()
            unmuteembed.setColor(0x00FFFF)
            unmuteembed.setDescription(`✅ ${person.user.tag} has been unmuted!`);
            message.channel.send(unmuteembed)

            break;
    }

});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;

    switch (args[0]) {
        case 'addrole':
            if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
                const botnopermissionmanage_rolesembed = new Discord.RichEmbed()
                botnopermissionmanage_rolesembed.setColor(0xFF0000)
                botnopermissionmanage_rolesembed.setDescription("I Don't Have Manage Roles Permission.")
                return message.channel.send(botnopermissionmanage_rolesembed)
            }


            if (!message.member.hasPermission("MANAGE_ROLES")) {
                const nopermissionmanage_rolesembed = new Discord.RichEmbed()
                nopermissionmanage_rolesembed.setColor(0xFF0000)
                nopermissionmanage_rolesembed.setDescription("You don't have MANAGE ROLES permission to perform this command!")
                return message.channel.send(nopermissionmanage_rolesembed)
            }

            let rmember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
            if (!rmember) return message.channel.send("Please provide a user to add a role!")
            let role = message.guild.roles.find(r => r.name == args[1]) || message.mentions.roles.first()
            if (!role) return message.channel.send("Please provide a role to add to said user.")

            if (!message.guild.me.hasPermission("MANAGE_ROLES"))
                return message.channel.send("I don't have Manage Roles Permission.")

            if (rmember.roles.has(role.id)) {
                return message.channel.send(`${rmember.displayName}, already has the role!`)
            } else {
                if (rmember.addRole(role.id).catch(e => console.log(e.message)))
                    message.channel.send(`The role, ${role.name}, has been added to ${rmember.displayName}`)

            }

    }
});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;

    switch (args[0]) {
        case 'removerole':
            if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
                const botnopermissionmanage_rolesembed = new Discord.RichEmbed()
                botnopermissionmanage_rolesembed.setColor(0xFF0000)
                botnopermissionmanage_rolesembed.setDescription("I Don't Have Manage Roles Permission.")
                return message.channel.send(botnopermissionmanage_rolesembed)
            }

            if (!message.member.hasPermission("MANAGE_ROLES")) {
                const nopermissionmanage_rolesembed = new Discord.RichEmbed()
                nopermissionmanage_rolesembed.setColor(0xFF0000)
                nopermissionmanage_rolesembed.setDescription("You don't have MANAGE ROLES permission to perform this command!")
                return message.channel.send(nopermissionmanage_rolesembed)
            }

            let rmember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
            if (!rmember) return message.channel.send("Please provide a user to remove a role!")
            let role = message.guild.roles.find(r => r.name == args[1]) || message.mentions.roles.first()
            if (!role) return message.channel.send("Please provide a role to remove to said user.")

            if (!message.guild.me.hasPermission("MANAGE_ROLES"))
                return message.channel.send("I don't have Manage Roles Permission.")

            if (!rmember.roles.has(role.id)) {
                return message.channel.send(`${rmember.displayName}, don't have the role!`)
            } else {
                if (rmember.removeRole(role.id).catch(e => console.log(e.message)))
                    message.channel.send(`The role, ${role.name}, has been removed from ${rmember.displayName}`)

            }

    }
});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;

    switch (args[0]) {
        case 'createrole':
            if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
                const botnopermissionmanage_rolesembed = new Discord.RichEmbed()
                botnopermissionmanage_rolesembed.setColor(0xFF0000)
                botnopermissionmanage_rolesembed.setDescription("I Don't Have Manage Roles Permission.")
                return message.channel.send(botnopermissionmanage_rolesembed)
            }

            if (!message.member.hasPermission("MANAGE_ROLES")) {
                const nopermissioncreate_roleembed = new Discord.RichEmbed()
                nopermissioncreate_roleembed.setColor(0xFF0000)
                nopermissioncreate_roleembed.setDescription(":x: You do not have permissions to create roles. Please contact a staff member")
                return message.channel.send(nopermissioncreate_roleembed)
            }

            let args = message.content.split(" ");
            args.shift();

            message.guild.createRole({
                name: args[0],
                color: args[1]
            })
                .then(role => {
                    console.log(`${role.name} Role Created.`);
                    message.channel.send(`${role.name} role was created.`);
                })
                .catch(err => console.log(err));
    }
});

bot.login(token);

