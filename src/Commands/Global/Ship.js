const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const Canvas = require('canvas')
const system = require('../../../config');
module.exports = {
    name: "ship",
    aliases: [],

    execute: async (client, message, args) => {

        const ertuman = system.ManRoles;
        const ertuwoman = system.WomanRoles;
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.filter(m => m.user.bot === false && message.member.roles.cache.has(ertuman) ? m.roles.cache.get(ertuwoman) : m.roles.cache.get(ertuman)).random();

        const replies = ['5% Uyumlu!', '3% Uyumlu!', '10% Uyumlu!', '14% Uyumlu!', '17% Uyumlu!', '20% Uyumlu!', '22% Uyumlu!', '25% Uyumlu!', '24% Uyumlu!', '27% Uyumlu!', '32% Uyumlu!', '36% Uyumlu!', '34% Uyumlu!', '39% Uyumlu!', '42% Uyumlu!', '45% Uyumlu!', '47% Uyumlu!', '51% Uyumlu!', '54% Uyumlu!', '56% Uyumlu!', '59% Uyumlu!', '58% Uyumlu!', '60% Uyumlu!', '63% Uyumlu!', '65% Uyumlu!', '64% Uyumlu!', '68% Uyumlu!', '70% Uyumlu!', '74% Uyumlu!', '78% Uyumlu!', '79% Uyumlu!', '80% Uyumlu!', '83% Uyumlu!', '86% Uyumlu!', '84% Uyumlu!', '89% Uyumlu!', '91% Uyumlu!', '93% Uyumlu!', '95% Uyumlu!', '97% Uyumlu!', '98% Uyumlu!', '99% Uyumlu!', 'Evlenek Ne Bekliyon', 'Çabuk Evlenmeniz Gereken Konular Var'];
    
        const emoti = system.BotOwners.includes(message.member.id) ? 43 : Math.floor(Math.random() * replies.length);
        const love = replies[emoti];
        const emoticon = emoti <= 44 && emoti >= 23 ? 'https://cdn.glitch.com/00963c7e-8e86-4a55-8d85-36add9e330d7%2Femoji_2.png?v=1593651528429' : (emoti < 23 && emoti >= 12 ? 'https://cdn.glitch.com/00963c7e-8e86-4a55-8d85-36add9e330d7%2Femoji_3-1.png?v=1593652255529' : 'https://cdn.glitch.com/00963c7e-8e86-4a55-8d85-36add9e330d7%2Femoji_1.png?v=1593651511900');  
    
        const canvas = Canvas.createCanvas(384, 128);
        const ctx = canvas.getContext('2d');
        const emotes = await Canvas.loadImage(emoticon);
        const avatar1 = await Canvas.loadImage(message.member.user.displayAvatarURL({ extension: "jpg" }));
        const avatar2 = await Canvas.loadImage(member.displayAvatarURL({ extension: "jpg" }));
        ctx.beginPath();
        ctx.moveTo(0 + Number(10), 0);
        ctx.lineTo(0 + 384 - Number(10), 0);
        ctx.quadraticCurveTo(0 + 384, 0, 0 + 384, 0 + Number(10));
        ctx.lineTo(0 + 384, 0 + 128 - Number(10));
        ctx.quadraticCurveTo(0 + 384, 0 + 128, 0 + 384 - Number(10),0 + 128);
        ctx.lineTo(0 + Number(10), 0 + 128);
        ctx.quadraticCurveTo(0, 0 + 128, 0, 0 + 128 - Number(10));
        ctx.lineTo(0, 0 + Number(10));
        ctx.quadraticCurveTo(0, 0, 0 + Number(10), 0);
        ctx.closePath();
        ctx.clip();
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 384, 128);
        let background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/1075535580517113986/1078054796524785754/aesthetic-dreamy-background-purple-cloudy-sky-vector-glitter-design_53876-156334.png");
        ctx.drawImage(background, 0, 0, 384, 129);
        ctx.drawImage(emotes, 160, 30, 64, 64);
        ctx.drawImage(avatar1, 20, 20, 96, 96);
        ctx.drawImage(avatar2, 270, 20, 96, 96);
        const buffer = canvas.toBuffer();
    
        const embed = new EmbedBuilder()
        .setDescription(`${member} ve ${message.member} arasındaki uyum:`)
        .setFooter({ text: `${love}` })
        .setImage("attachment://ship.png");
    
        message.reply({ embeds: [embed], files: [{ attachment: buffer, name: "ship.png" }] });
    

    }
}

