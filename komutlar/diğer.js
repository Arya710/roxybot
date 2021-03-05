const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Roxy Bot Diğer Komutları')
.setTimestamp()
.addField(' .git @etiket', 'Etiketlediğiniz Kişinin Yanına Gidersiniz')
.addField(' .çek @etiket', 'Etiketlediğiniz Kişiyi Yanına Çekersiniz')
.addField(' .kes @etiket', 'Etiketlediğiniz Kişinin Bağlantısını Kesersiniz')
.setImage("https://cdn.discordapp.com/attachments/811257903977725954/811274744757223444/Animated_Banner_By_iAliOsmanTR.gif")
.setFooter('Roxy', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'diğer',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};