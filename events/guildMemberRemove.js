const Discord = require('discord.js');
const GuildSettings = require('../models/GuildSettings');

module.exports = {
	name: "guildMemberRemove",
	async execute(member) {
		console.log(member.user);
		const guildSettings = await GuildSettings.findOne({ guild_id: member.guild.id });
		
		if (!guildSettings && !guildSettings.welcome_channel_id) {
			return;
		}
		member.guild.channels.cache.get(guildSettings.welcome_channel_id).send(`${member.user} meteu-se na **PUTA QUE O PARIU** :middle_finger:!`);
	}
}