const {  ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
    name: "rol",
    aliases: ["rol", "rol verirsin"],

    execute: async (client, message, args) => {
        try {
            // Sunucudaki rolleri al
            const roles = message.guild.roles.cache.filter(role => role.name !== '@everyone');

            // Rollerin sayısına göre seçim menülerini oluştur
            const selectMenus = [];
            let currentIndex = 0;
            for (const [roleId, role] of roles) {
                if (!selectMenus[currentIndex]) {
                    selectMenus[currentIndex] = new SelectMenuBuilder()
                        .setCustomId(`role_menu_${currentIndex}`)
                        .setPlaceholder('Rol seç...');
                }
                
                selectMenus[currentIndex].addOptions({
                    label: role.name,
                    value: roleId
                });

                if (selectMenus[currentIndex].options.length >= 25) {
                    currentIndex++;
                }
            }

            // Her bir select menüsünü bir action row'a ekleyerek mesajı gönder
            const components = selectMenus.map(menu => new ActionRowBuilder().addComponents(menu));

            const msg = await message.channel.send({ content: 'Aşağıdaki menülerden vermek istediğiniz rolleri seçin:', components });

            // Interaction işlemleri
            const filter = i => i.user.id === message.author.id;
            const collector = msg.createMessageComponentCollector({ filter, time: 15000 });

            collector.on('collect', async i => {
                const roleId = i.values[0];
                const role = message.guild.roles.cache.get(roleId);
                if (role) {
                    try {
                        await i.member.roles.add(role);
                        await i.reply({ content: `Başarıyla ${role.name} rolünü aldınız.`, ephemeral: true });
                    } catch (error) {
                        console.error('Rol verme işlemi sırasında bir hata oluştu:', error);
                        await i.reply({ content: 'Rol verme işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.', ephemeral: true });
                    }
                } else {
                    await i.reply({ content: 'Seçilen rol bulunamadı.', ephemeral: true });
                }
            });

            collector.on('end', collected => {
                if (collected.size === 0) {
                    message.channel.send('İşlem zaman aşımına uğradı. Lütfen tekrar deneyin.');
                }
            });
        } catch (error) {
            console.error('Rol menüsü oluşturulurken bir hata oluştu:', error);
            message.channel.send('Rol menüsü oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
        }
    }
};

