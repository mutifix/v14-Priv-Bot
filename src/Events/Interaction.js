const client = global.client; 
const { ActionRowBuilder, PermissionsBitField,  Events, EmbedBuilder, ChannelType, TextInputBuilder, TextInputStyle, ButtonBuilder, ButtonStyle, AttachmentBuilder, PermissionFlagsBits, ModalBuilder, UserSelectMenuBuilder, StringSelectMenuBuilder } = require("discord.js");
const SecretRoom = require("../Models/SecretRoom");
const system = require("./../../config.js")

client.on(Events.InteractionCreate, async (interaction) => {
      if (interaction.customId === 'event-role') {

        const etkinlik = await interaction.guild.roles.cache.find(x => x.name.includes("Etkinlik Duyuru"))
        if (interaction.member.roles.cache.has(etkinlik.id)) {
            interaction.member.roles.remove(etkinlik.id).catch(err => {});
            interaction.reply({ content: `Başarıyla <@&${etkinlik.id}> rolü üzerinizden alındı.`, ephemeral: true })
        } else {
            interaction.member.roles.add(etkinlik.id).catch(err => {});
            interaction.reply({ content: `Başarıyla <@&${etkinlik.id}> rolü üzerinize verildi.`, ephemeral: true })
        }
      
    }

    if (interaction.customId === 'giveaway-role') {

        const cekilis = await interaction.guild.roles.cache.find(x => x.name.includes("Cekilis Duyuru"))
        if (interaction.member.roles.cache.has(cekilis.id)) {
            interaction.member.roles.remove(cekilis.id).catch(err => {});
            interaction.reply({ content: `Başarıyla <@&${cekilis.id}> rolü üzerinizden alındı.`, ephemeral: true })
        } else {
            interaction.member.roles.add(cekilis.id).catch(err => {});
            interaction.reply({ content: `Başarıyla <@&${cekilis.id}> rolü üzerinize verildi.`, ephemeral: true })
        }

    }

    if (interaction.customId === 'zodiac-roles') {

      const oyunlar = [
        "Koç",
        "Boğa",
        "Ikizler",
        "Yengeç",
        "Aslan",
        "Başak",
        "Terazi",
        "Akrep",
        "Yay",
        "Oğlak",
        "Kova",
        "Balık"
      ]
  
      const foundRoles = interaction.guild.roles.cache.filter(role => oyunlar.includes(role.name));
      const removeRoles = interaction.member.roles.cache.filter(x => oyunlar.includes(x.name));
  
      const values = interaction.values;
  
      if (values[0].includes("rolistemiom")) {
        if (removeRoles.map(x => `${x.name}`).length == 0) return interaction.reply({ content: `Üzerinde zaten rol bulunmuyor.`, ephemeral: true })
        removeRoles.forEach(x => {
          interaction.member.roles.remove(x);
        });
        return interaction.reply({ content: `${removeRoles.map(x => `${x}`)} rolü başarıyla silindi!`, ephemeral: true });
      }
  
      const addedRoles = [];
      for (i = 0; i < values.length; i++) {
        if (foundRoles.find(r => r.name.toLowerCase() === values[i])) {
          const gameRole = interaction.guild.roles.cache.find(x => x.name.toLowerCase() === values[i]);
          if(removeRoles.length != 0) {
            removeRoles.forEach(x => {
              interaction.member.roles.remove(x)
            });
          } 
          interaction.member.roles.add(gameRole.id);
          addedRoles.push(gameRole.id);
        }
      }
  
      interaction.reply({ content: `${addedRoles.map(x => `<@&${x}>`).join(", ")} rolü başarıyla eklendi!`, ephemeral: true });
    }
  
    if (interaction.customId === "game-roles") {
      const oyunlar = [
        'Valorant',
        'LoL',
        'Minecraft',
        'CSGO',
        'GTA',
        'PUBG',
        'Fortnite',
        'ROBLOX',
      ];
      
      const foundRoles = interaction.guild.roles.cache.filter(role => oyunlar.includes(role.name));
  
      const values = interaction.values;
      if (values[0].includes("rolistemiom")) {
        const removeRoles = interaction.member.roles.cache.filter(x => oyunlar.includes(x.name));
        if (removeRoles.map(x => `${x.name}`).length == 0) return interaction.reply({ content: `Üzerinde zaten rol bulunmuyor.`, ephemeral: true })
        removeRoles.forEach(x => {
          interaction.member.roles.remove(x);
        });
        return interaction.reply({ content: `${removeRoles.map(x => `${x}`)} ${removeRoles.map(x => `${x.name}`).length > 1 ? 'rolleri' : 'rolü'} başarıyla silindi!`, ephemeral: true });
      }
  
      const addedRoles = [];
      for (i = 0; i < values.length; i++) {
        if (foundRoles.find(r => r.name.toLowerCase() === values[i])) {
          const gameRole = interaction.guild.roles.cache.find(x => x.name.toLowerCase() === values[i])
          interaction.member.roles.add(gameRole.id);
          addedRoles.push(gameRole.id);
        }
      }
  
      interaction.reply({ content: `${addedRoles.map(x => `<@&${x}>`).join(", ")} rolü başarıyla eklendi!`, ephemeral: true });
    }
  
    if (interaction.customId === "color-roles") {
      const renkRoles = [
        'Gri',
        'Siyah',
        'Beyaz',
        'Kırmızı',
        'Mavi',
        'Sarı',
        'Yeşil',
        'Mor',
        'Turuncu',
        'Pembe',
        'Kahverengi'
      ];
  
      const foundRoles = interaction.guild.roles.cache.filter(role => renkRoles.includes(role.name));
      const removeRoles = interaction.member.roles.cache.filter(x => renkRoles.includes(x.name)) || [];
  
      const values = interaction.values;
      
      if (values[0].includes("rolistemiom")) {
        if (removeRoles.map(x => `${x.name}`).length == 0) return interaction.reply({ content: `Üzerinde zaten rol bulunmuyor.`, ephemeral: true })
        removeRoles.forEach(x => {
          interaction.member.roles.remove(x);
        });
        return interaction.reply({ content: `${removeRoles.map(x => `${x}`)} rolü başarıyla silindi!`, ephemeral: true });
      }
  
      const addedRoles = [];
      for (i = 0; i < values.length; i++) {
        if (foundRoles.find(r => r.name.toLowerCase() === values[i])) {
          const gameRole = interaction.guild.roles.cache.find(x => x.name.toLowerCase() === values[i]);
          if(removeRoles.length != 0) {
            removeRoles.forEach(x => {
              interaction.member.roles.remove(x)
            });
          }
          interaction.member.roles.add(gameRole.id);
          addedRoles.push(gameRole.id);
        }
      }
  
      interaction.reply({ content: `${addedRoles.map(x => `<@&${x}>`).join(", ")} rolü başarıyla eklendi!`, ephemeral: true });
    }
  
    if (interaction.customId === "relationship-roles") {
      const coupleRoles = [
        "Couple",
        "Alone",
      ]
  
      const foundRoles = interaction.guild.roles.cache.filter(role => coupleRoles.includes(role.name));
      const removeRoles = interaction.member.roles.cache.filter(x => coupleRoles.includes(x.name));
      const values = interaction.values;
  
      if (values[0].includes("rolistemiom")) {
        if (removeRoles.map(x => `${x.name}`).length == 0) return interaction.reply({ content: `Üzerinde zaten rol bulunmuyor.`, ephemeral: true })
        removeRoles.forEach(x => {
          interaction.member.roles.remove(x); 
        });
  
        return interaction.reply({ content: `${removeRoles.map(x => `${x}`)} rolü başarıyla silindi!`, ephemeral: true });
      }
  
      const addedRoles = [];
      for (i = 0; i < values.length; i++) {
        if (foundRoles.find(r => r.name.toLowerCase() === values[i])) {
          const gameRole = interaction.guild.roles.cache.find(x => x.name.toLowerCase() === values[i]);
          if(removeRoles.length != 0) {
            removeRoles.forEach(x => {
              interaction.member.roles.remove(x)
            });
          }
          interaction.member.roles.add(gameRole.id);
          addedRoles.push(gameRole.id);
        }
      }
  
      interaction.reply({ content: `${addedRoles.map(x => `<@&${x}>`).join(", ")} rolü başarıyla eklendi!`, ephemeral: true });
    }
})