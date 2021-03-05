const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Botlist Yardım Komutları')
.setTimestamp()
.addField(' .bot-onayla botid sahipid ', 'Botu Onaylarsınız')
.addField(' .bot-reddet botid sahipid sebep', 'Botu Reddedersiniz')
.addField(' .bot-ekle', 'Bot eklersiniz')
.addField(' .botlist-ayar', 'Ayarlama Komutlarını Gösterir')
.setImage('https://media.discordapp.net/attachments/811257903977725954/811274744757223444/Animated_Banner_By_iAliOsmanTR.gif')
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
  name: 'botlistyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};