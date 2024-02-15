const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

const award = ["Functional", "Test1", "Test2", "**NEXT ONE WILL SHOW THE WINNERS, ONLY USE IN CORRECT TIME!**", "BEST Outfit", "BEST Camper", "BEST Farmer", "BEST Concess (Car Stand) Player", "BEST Police Player", "BEST Chill Player", "BEST PvP Player", "BEST Sniper", "BIGGEST Tryhard", "**Thanks for helping make it possible** :heart_on_fire: "]
const winner = ["Functional", "Test1", "Test2", "**NEXT ONE WILL SHOW THE WINNERS, ONLY USE IN CORRECT TIME**", "Catusse (44171)", "Juenzo (116425)", "TCH (3355)", "Frix (144649)", "Shaga (240851)", "1stin (236955)", "Tyze (147756)", "Bardock (220291)", "DAX (26197) and Neiikow (18907)", "You've completed all people! GG's Hope you two had a lot of fun boys :heart_on_fire: "]
const prize = ["Functional", "Test1", "Test2", "**NEXT ONE WILL SHOW THE WINNERS, ONLY USE IN CORRECT TIME**", "Homing", "Nightshark", "Homing", "Nightshark", "Nightshark", "RPG", "Marksman MK2", "Deluxo", "RAT LOADER", "Nothing, stop trying to scam me <@271010334091902986>."]

var n = -1
var awardtitle = "Award:"
var winnertitle = "Player:"

module.exports = {
    data : new SlashCommandBuilder()
        .setName("results")
        .setDescription("Get results **DON'T USE UNTIL CORRECT TIME!**"),
    async execute(interaction) {
        if(n < 13){
            n++
        } if(n == 13){
            awardtitle = "ALL DONE"
            winnertitle = "ALL DONE"
        }
        const result = new MessageEmbed()
        .setColor("#FFD700")
        .setAuthor({ name: 'DiogoPCastelos', iconURL: 'https://diogopcastelos.pt/images/logosmall.png', url: 'https://discord.gg/sxHcMThq8F' })
        .setThumbnail("https://media.istockphoto.com/vectors/vector-flat-golden-trophy-vector-id1176397624?k=20&m=1176397624&s=612x612&w=0&h=yICH7de39SwB1sDP4-kBHFS8bJz4srdu_HOrBC9KvzY=")
        .setTitle("Awards Cerimony")
        .addFields(
            { name: awardtitle, value: award[n], inline: true},
            { name: winnertitle, value: winner[n], inline: true },
            { name: "Prize: ", value: prize[n], inline: true },
        )
        .setTimestamp()
        .setFooter({ text: "requested by " + interaction.user.username, iconURL: interaction.user.avatarURL()});
        interaction.reply({
            embeds: [result],
            ephemeral: false,
        });
    }
}