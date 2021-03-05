const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField(' Roxy',`
Roxy Abone Yardım Menüsü  

**.abonerol** 
Abone Rolünü ayarlarsınız

**.abonelog** 
Abone Log'u ayarlarsınız

**.abone-y-rol** 
Abone Yetkili Rolü Ayarlarsınız

**.abone** 
Abone rolü verirsiniz
`)
.setImage("https://media.discordapp.net/attachments/811257903977725954/811274744757223444/Animated_Banner_By_iAliOsmanTR.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'aboneyardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};