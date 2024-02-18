const client = global.client; 
const { Events } = require("discord.js");
const SecretRoom = require("../Models/SecretRoom");
const system = require("./../../config.js");
const canvafy = require("canvafy");

client.on(Events.GuildMemberAdd, async (member) => {
    try {
        const guild = member.guild;
        const totalMembers = guild.memberCount;

        const welcome = await new canvafy.WelcomeLeave()
            .setAvatar(member.user.displayAvatarURL({ forceStatic: true, extension: "png" }))
            .setBackground("image", "https://cdn.discordapp.com/attachments/1189620737372328067/1208792056999182387/canvas-plain.078bfbd1.png?ex=65e49254&is=65d21d54&hm=eb4ba482af578d2561ec7aaa24cd301da89d3483362a145a8c3418b8b5e28a54&")//görseli değişebilirsiniz
            .setTitle({member})
            .setDescription(`Sunucumuza hoşgeldin`)
            .setBorder("#00d8f0")
            .setAvatarBorder("#2a2e35")
            .setOverlayOpacity(0.3)
            .build();

        member.guild.channels.cache.get(system.WelcomeChannel).send({
            files: [{
                attachment: welcome,
                name: `hosgeldin-${member.id}.png`
            }]
        });
        
        member.roles.add(system.MemberRole);
    } catch (error) {
        console.error("Hoş geldin mesajı oluşturulurken bir hata oluştu:", error);
    }
});
