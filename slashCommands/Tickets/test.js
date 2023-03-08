const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require ("discord.js")
const fs = require('fs');
const yaml = require("js-yaml")
const config = yaml.load(fs.readFileSync('././config.yml', 'utf8'))
//const lang = yaml.load(fs.readFileSync('././lang.yml', 'utf8'))

module.exports = {
    data: new SlashCommandBuilder()
        .setName('springi')
        .setDescription(`Get a user's avatar`)
        .addUserOption(option => option.setName('user').setDescription('The user to get the avatar from')),
    async execute(interaction, client) {

        let user = interaction.options.getUser("user");
        let mentionedUser = user || interaction.user;
        let avatarurl = mentionedUser.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });

        let embed = new Discord.EmbedBuilder()
        .setImage(avatarurl)
        .setColor(config.EmbedColors)
        .setTitle(`${mentionedUser.tag}'s Avatar`)
        .setFooter({ text: `${lang.AvatarSearchedBy} ${interaction.user.tag}` })
        .setDescription(`[${lang.AvatarClickHere}](${avatarurl})`);
        interaction.reply({ embeds: [embed] })

    }

}
