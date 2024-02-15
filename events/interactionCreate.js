module.exports = {
	name: "interactionCreate",
	async execute(interaction, client) {
		if (!interaction.isCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);
		if (!command) return;
		try {
			await command.execute(interaction, client);
		} catch (err) {
			if (err) console.error(err);

			await interaction.reply({
				content: "An error occurred while executing that command.",
				ephemeral: true,
			});
		}
	}
}