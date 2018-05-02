const Discord = require("discord.js");
const moment = require("moment");

require("moment-duration-format");

exports.run = (client, message) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor('İstatistikler',"https://cdn.discordapp.com/avatars/434771960849760258/b546921364b470cc10213d6c3e4ca6c3.png?size=2048")
.setThumbnail("https://cdn.discordapp.com/avatars/434771960849760258/b546921364b470cc10213d6c3e4ca6c3.png?size=2048")
.setFooter('© 2018 Rahatsız Adam|@ßatu Murt#7406 tarfından kodlandı.',"https://cdn.discordapp.com/avatars/434771960849760258/b546921364b470cc10213d6c3e4ca6c3.png?size=2048")
.addField('❯  Açık kalma süresi: ',`${duration}`)
.addField('❯  Sürümler:','Discord.JS:  v'+Discord.version+'\nBot:  v0.1.1')
.addField('❯  Bellek kullaımı:',(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' MB')
.addField('❯  Genel istatistikler','•Sunucu sayısı: '+ client.guilds.size.toLocaleString()+'\n•Kişi sayısı:  '+ client.users.size+'\n•Kanal sayısı: '+client.channels.size.toLocaleString()+'\n•Pingim:  '+client.ping)
return message.channel.sendEmbed(embed);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};
