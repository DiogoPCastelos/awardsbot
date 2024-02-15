const Discord = require('discord.js');
const GuildSettings = require('../models/GuildSettings');
var randomColor = require('randomcolor');

module.exports = {
	name: "guildMemberAdd",
	async execute(member) {
		// member.guild.channels.cache.get("849283385808912384").send(`${member.user} has joined the server!`);
		var color = randomColor(); 
		console.log(member.user);
		const guildSettings = await GuildSettings.findOne({ guild_id: member.guild.id });

		if (!guildSettings && !guildSettings.welcome_channel_id) {
			return;
		}

		const newMemberEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setTitle("NOVO SACO DO LIXO!")
			.setDescription(`${member.user} bem vindo ao **SERVER DOS REIS** seu grande filho da puta!`)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp();
		
			member.guild.channels.cache.get(guildSettings.welcome_channel_id).send({
				embeds: [newMemberEmbed] 
			})
	}
}