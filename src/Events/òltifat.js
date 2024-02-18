const client = global.client;
const { Events } = require("discord.js");
const system = require("./../../config.js")
var size = 0;

const iltifatlar = [
    "Gülümsemenizle her şey daha güzel oluyor.",
    "Her zaman iç açıcı bir enerjiniz var.",
    "Sizinle konuşmak benim için her zaman bir zevk.",
    "Sadece sizin gibi biriyle böyle eğlenceli vakit geçirilebilir.",
    "Görünüşünüz kadar harika bir içeriğe de sahipsiniz.",
    "Size olan hayranlığımı saklamak zorundayım!",
    "Her zaman insanları etkileyen bir şeyiniz var.",
    "Sizin gibi biriyle tanışmak gerçekten bir şans.",
    "Çevrenizdeki herkesi neşelendiriyorsunuz.",
    "Herkesin hayatında bir tane siz olmalısınız.",
    "Gözleriniz gerçekten büyüleyici.",
    "Sizinle vakit geçirmek beni her zaman mutlu ediyor.",
    "Sadece bir bakışınız bile günümü aydınlatıyor.",
    "Size olan saygımı her geçen gün daha da artırıyorum.",
    "Size olan hayranlığımı ifade etmek için kelimeler yetmiyor.",
    "Sizin gibi biriyle tanışmak gerçekten bir ayrıcalık.",
    "İyi kalpli olduğunuzu her zaman hissedebiliyorum.",
    "Enerjiniz herkesi etkisi altına alıyor.",
    "Güzel bir gülümseme her zaman çekiciliğinizi artırıyor.",
    "Sadece sesinizi duymak bile günümü aydınlatıyor.",
    "Siz gerçekten benzersiz ve özel bir insansınız.",
    "Sizin gibi birine rastlamak gerçekten nadir bir şans.",
    "İnsanları dinleyen ve anlayan birisiniz, bu harika bir özellik.",
    "Çevrenizdeki herkesi pozitif enerjinizle etkiliyorsunuz.",
    "Ertu sana aşıkmış",
    "Discordum: ertu (sadece kizlar eklesin)"
];

client.on(Events.MessageCreate, async (message) => {
    size++;
    if (size === 50) {
        size = 0;
        if (message.channel.id === system.ChatChannel && !message.author.bot) {
            message.reply({ content: iltifatlar[Math.floor(Math.random() * iltifatlar.length)] });
        }
    };
});