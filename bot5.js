const Discord = require('discord.js');                                                                                                                                                                                                                                                                                                                                                                                                                          /*جميع حقوق هذا الملف محفوظه*/                                                     
const client = new Discord.Client();













// جميع حقوق هذا الملف محفوظة ,
client.login(''); // هنا تضع توكان البوت الخاص بك















const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`-help`,'https://www.twitch.tv/ProGamer44');
  console.log('Im Ready!');
});
/*ProGamer44*/
client.on('message', message => {
if (message.content.split(' ')[0] == '-bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		 if(!message.channel.guild) return message.reply('** This command only for servers **');
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});
client.on("message", message => {
    var prefix = "$";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
						 if(!message.channel.guild) return message.reply('** This command only for servers **');
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(":white_check_mark: | تم ارسال للكل رساله فارغه")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {

                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال للكل الرساله !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});





client.login(process.env.BOT_TOKEN5);
