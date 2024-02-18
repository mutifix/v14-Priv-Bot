const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, StringSelectMenuBuilder } = require('discord.js');
const { BotOwners } = require('../../../config.js');

module.exports = {
    name: "menü",
    aliases: ["selectmenü", "menu"],

    execute: async (client, message, args) => {
        if (!BotOwners.some(ertu => message.member.user.id == ertu)) return message.reply({ content: `Yetkin bulunmuyor.` })
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('event-role').setLabel("Etkinlik Katılımcısı").setStyle(ButtonStyle.Success),
            new ButtonBuilder().setCustomId('giveaway-role').setLabel("Çekiliş Katılımcısı").setStyle(ButtonStyle.Success),
        );

        const row2 = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('color-roles')
                .setPlaceholder('Renk rollerini seçmek için tıkla!')
                .addOptions([
                    { label: 'Gri', value: 'gri', emoji: { id: '1187338145436540958' } },
                    { label: 'Siyah', value: 'siyah', emoji: { id: '1187338153040818176' } },
                    { label: 'Beyaz', value: 'beyaz', emoji: { id: '1187356765503901777' } },
                    { label: 'Kırmızı', value: 'kırmızı', emoji: { id: '1187356755391434793' } },
                    { label: 'Mavi', value: 'mavi', emoji: { id: '1187338154718547969' } },
                    { label: 'Sarı', value: 'sarı', emoji: { id: '1187356745484480513' } },
                    { label: 'Yeşil', value: 'yeşil', emoji: { id: '1187356741520871514' } },
                    { label: 'Mor', value: 'mor', emoji: { id: '1187356752644149319' } },
                    { label: 'Turuncu', value: 'turuncu', emoji: { id: '1187356761913557052' } },
                    { label: 'Pembe', value: 'pembe', emoji: { id: '1187356743613821008' } },
                    { label: 'Kahverengi', value: 'kahverengi', emoji: { id: '1187356751067091004' } },
                    { label: 'Rol İstemiyorum', value: 'rolistemiom-1', emoji: { id: '1150046811327832095' } },
                ])
        )

        const row3 = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('zodiac-roles')
                .setPlaceholder('Burç rollerini seçmek için tıkla!')
                .addOptions([
                    { label: 'Koç', value: 'koç', emoji: { id: '1150046637486518322' } },
                    { label: 'Boğa', value: 'boğa', emoji: { id: '1150046639768219718' } },
                    { label: 'İkizler', value: 'ikizler', emoji: { id: '1150046647292792893' } },
                    { label: 'Yengeç', value: 'yengeç', emoji: { id: '1150046656411213916' } },
                    { label: 'Aslan', value: 'aslan', emoji: { id: '1150046641408180254' } },
                    { label: 'Başak', value: 'başak', emoji: { id: '1114231522472493056' } },
                    { label: 'Terazi', value: 'terazi', emoji: { id: '1150046653286465609' } },
                    { label: 'Akrep', value: 'akrep', emoji: { id: '1150046645552173136' } },
                    { label: 'Yay', value: 'yay', emoji: { id: '1150046654993534996' } },
                    { label: 'Oğlak', value: 'oğlak', emoji: { id: '1150046651357073419' } },
                    { label: 'Kova', value: 'kova', emoji: { id: '1150046649985540156' } },
                    { label: 'Balık', value: 'balık', emoji: { id: '1150046642851024938' } },
                    { label: 'Rol İstemiyorum', value: 'rolistemiom', emoji: { id: '1150046811327832095' } },
                ])
        )

        const row4 = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('relationship-roles')
                .setPlaceholder('İlişki rollerini seçmek için tıkla!')
                .addOptions([
                    { label: 'İlişkisi Var', value: 'couple', emoji: { id: '1150046674698383390' } },
                    { label: 'İlişkisi Yok', value: 'alone', emoji: { id: '1114230711524798514' } },
                    { label: 'Rol İstemiyorum', value: 'rolistemiom-2', emoji: { id: '1150046811327832095' } },
                ])
        )

        const row5 = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('game-roles')
                .setPlaceholder('Oyun rollerini seçmek için tıkla!')
                .addOptions([
                    { label: 'Valorant', value: 'valorant', emoji: { id: '1150046684768907385' } },
                    { label: 'League Of Legends', value: 'lol', emoji: { id: '1150046688594104401' } },
                    { label: 'Minecraft', value: 'minecraft', emoji: { id: '1150046690129231982' } },
                    { label: 'CS:GO', value: 'csgo', emoji: { id: '1150046686606000230' } },
                    { label: 'GTA V', value: 'gta', emoji: { id: '1150046679685406780' } },
                    { label: 'PUBG', value: 'pubg', emoji: { id: '1150046683246374953' } },
                    { label: 'Fortnite', value: 'fortnite', emoji: { id: '1150046678154485760' } },
                    { label: 'ROBLOX', value: 'roblox', emoji: { id: '1198644651419250899' } },
                    { label: 'Rol İstemiyorum', value: 'rolistemiom-3', emoji: { id: '1150046811327832095' } },
                ])
        )

        if (message) message.delete().catch(err => { });
        message.channel.send({
            content: `
**Merhaba __${message.guild.name}__ üyeleri,**
Sunucuda sizleri rahatsız etmemek için @everyone veya @here atmayacağız. Sadece isteğiniz doğrultusunda aşağıda bulunan tepkilere tıklarsanız Çekilişler,Etkinlikler V/K ve D/C'den haberdar olacaksınız.
Eğer Çekiliş Katılımcısı Butonuna tıklarsanız sunucumuzda sıkça vereceğimiz nice ödüllerin bulunduğu çekilişlerden haberdar olabilirsiniz.

Eğer Etkinlik Katılımcısı Butonuna tıklarsanız sunucumuzda düzenlenecek olan etkinlikler, konserler ve oyun etkinlikleri gibi etkinliklerden haberdar olabilirsiniz.

Aşağıda ki butonlara basarak siz de bu ödülleri kazanmaya hemen başlayabilirsiniz!`, components: [row, row2, row3, row5, row4]
        });
    }
}

