const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, PermissionsBitField } = require('discord.js');
const { BotOwners } = require('../../../config.js');

module.exports = {
    name: "ban",
    aliases: ["yargı", "sg","uza", "ertu", "ertusiker","yargi"],

    execute: async (client, message, args) => {

        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator) && !message.member.permissions.has(PermissionsBitField.Flags.ManageGuild) && !message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return message.react(`❌`);
    
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply({ content: `Üye belirt mal?` })
        if (member && !member.bannable) return message.channel.send({ content: "Bu üyeyi banlayamıyorum!" }).then((e) => setTimeout(() => { e.delete(); }, 5000)); 
        const reason = args.slice(1).join(" ") || "Belirtilmedi!";
        if (!reason) return message.reply({ content: `Sebep belirt!` }).then((e) => setTimeout(() => { e.delete(); }, 5000)); 
        await message.guild.members.ban(member.id, { reason: `${message.author.username} tarafından banlandı. (${reason})` }).catch(err => {})
        message.channel.send({ content: `${member} adlı kullanıcı ${message.author} tarafından **${reason}** adlı sebepten dolayı siktiri yedi.` })
    }
}

    