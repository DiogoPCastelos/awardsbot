const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions } = require("discord.js");
const GuildSettings = require("../models/GuildSettings");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("entrada")
		.setDescription("Define o canal de entrada")
		.addChannelOption(option => option
			.setName("canal")
			.setDescription("O canal que queres selecionar.")
			.setRequired(true)
		),
	async execute(interaction) {
		
		// Check for admin permissions
		if (!interaction.member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])) {
			interaction.reply("You do not have permission to use this command!");
			return;
		}

		GuildSettings.findOne({ guild_id: interaction.guild.id }, (err, settings) => {
			if (err) {
				console.log(err);
				interaction.reply("An error occurred while trying to set the welcome channel!");
				return;
			}

			if (!settings) {
				settings = new GuildSettings({
					guild_id: interaction.guild.id,
					welcome_channel_id: interaction.options.getChannel("canal").id
				});
			} else {
				settings.welcome_channel_id = interaction.options.getChannel("canal").id;
			}

			settings.save(err => {
				if (err) {
					console.log(err);
					interaction.reply("An error occurred while trying to set the welcome channel!");
					return;
				}

				interaction.reply(`Welcome channel jas been set to ${interaction.options.getChannel("canal")}`);
			})
		})

	}
}