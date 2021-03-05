const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Roxy Bot Eğlence Komutları')
.setTimestamp()
.addField(' .ilginçbilgi', 'İlginç bilgi verir')
.addField(' .kartopu', 'Karopu Atarsın')
.addField(' .oylama', 'Oylama Yaparsınız')
.addField(' .espri', 'Espri Yaparsınız')
.addField(' .adamasmaca', 'Adam Asmaca oynarsınız')
.addField(' .kaçcm', 'Kaçcm Olduğunu Öğrenirsiniz')
.addField(' .emojiekle', 'Emoji Ekler')
.addField(' .fal', 'Güzel Sözler Yazar :D')
.addField(' .aşk', 'Aşkınızı Ölcer')
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};