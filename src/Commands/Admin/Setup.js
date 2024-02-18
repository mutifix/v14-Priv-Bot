const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const { BotOwners } = require('../../../config.js');
const roles = [
    { name: "▬▬▬▬▬▬▬▬▬▬▬", color: '#7A7A7A'},
    { name: "Cekilis Duyuru", color: "#000001" },
    { name: "Etkinlik Duyuru", color: "#f5f5f5" },
    { name: "▬▬▬▬▬▬▬▬▬▬▬", color: "000000"},
    { name: "Gri", color: "#7A7A7A" },
    { name: "Siyah", color: "#090909" },
    { name: "Beyaz", color: "#ffffff" },
    { name: "Kırmızı", color: "#FF0000" },
    { name: "Mavi", color: "#2A9DFF" },
    { name: "Sarı", color: "#DFDB6A" },
    { name: "Yeşil", color: "#37BE66" },
    { name: "Mor", color: "#A47DFF" },
    { name: "Turuncu", color: "#E98C00" },
    { name: "Pembe", color: "#E996FF" },
    { name: "Kahverengi", color: "#7C5430" },
    { name: "▬▬▬▬▬▬▬▬▬▬▬", color: "000000"},
    { name: "♈ Koç", color: "#ffffff" },
    { name: "♉ Boğa", color: "#ffffff" },
    { name: "♊ Ikizler", color: "#ffffff" },
    { name: "♋ Yengeç", color: "#ffffff" },
    { name: "♌ Aslan", color: "#ffffff" },
    { name: "♍ Başak", color: "#ffffff" },
    { name: "♎ Terazi", color: "#ffffff" },
    { name: "♏ Akrep", color: "#ffffff" },
    { name: "♐ Yay", color: "#ffffff" },
    { name: "♑ Oğlak", color: "#ffffff" },
    { name: "♒ Kova", color: "#ffffff" },
    { name: "♓ Balık", color: "#ffffff" },
    { name: "▬▬▬▬▬▬▬▬▬▬▬", color: "000000"},
    { name: "Couple", color: "#ff0000" },
    { name: "Alone", color: "#2e5a6e" },
    { name: "▬▬▬▬▬▬▬▬▬▬▬", color: "000000"},
    { name: "Amongus", color: "ffa7a7" },
    { name: "Valorant", color: "ffa7a7" },
    { name: "League Of Legends", color: "ffa7a7" },
    { name: "Minecraft", color: "ffa7a7" },
    { name: "CSGO", color: "ffa7a7" },
    { name: "GTA", color: "ffa7a7" },
    { name: "PUBG", color: "ffa7a7" },
    { name: "Fortnite", color: "ffa7a7" },
    { name: "ROBLOX", color: "ffa7a7" },
    { name: "Mobile Legends", color: "ffa7a7" },
    { name: "▬▬▬▬▬▬▬▬▬▬▬", color: "000000"},
]

module.exports = {
    name: "rol-kurulum",
    aliases: ["setup"],

    execute: async (client, message, args) => {
        if (!BotOwners.some(ertu => message.member.user.id == ertu)) return message.reply({ content: `Yetkin bulunmuyor.` });
        const data = roles
        const loadingMessage = await message.reply(`Roller oluşturuluyor...`)
        for (let index = 0; index < data.length; index++) {
            let element = roles[index];
            await message.guild.roles.create({
                name: element.name,
                color: element.color
            })
        }
        loadingMessage.edit({ content: `Menü için gerekli Rollerin kurulumu başarıyla tamamlanmıştır.` })
    }
}

