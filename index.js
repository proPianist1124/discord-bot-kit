const express = require("express");
const app = express();
const Discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

app.listen(4000, () => {
    console.log("Systems are running");
})

app.get("/", (req, res) => {
    res.send("Bot is running");
})

const client = new Discord.Client(
    { intents: 131071 }
);

client.on("ready", () => {
    console.log("SUCCESS");
});

const prefix = "b!";

client.on("messageCreate", message => {
    if (message.content === `${prefix}help`) {
        const helpEmbed = new Discord.EmbedBuilder()
            .setColor("#f2d679")
            .setTitle("**bot name**")
            .setDescription("bot description")
            .addFields([{ name: "Fun", value: "*im a good bot!*" },
            { name: "Commands", value: "your commands" },
            { name: "Prefixes", value: "your prefix" },
            { name: "Website", value: "your website here" },
            { name: "__LIKE ME? INVITE ME!__", value: "your link here" }])
            .setFooter({ text: "your bot name" })
            .setTimestamp()
            .setImage("https://www.pngitem.com/pimgs/m/31-315200_question-mark-png-computer-graphics-transparent-background-question.png")
            .setThumbnail("https://www.pngitem.com/pimgs/m/31-315200_question-mark-png-computer-graphics-transparent-background-question.png")

        message.channel.send({ embeds: [helpEmbed] })
    }
    if (message.content === `${prefix}button`) {
        message.channel.send("This is a button")
        const newButton = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('Test button')
                    .setLabel('Are you sure?')
                    .setStyle(ButtonStyle.Primary),
            );
        message.channel.send({ components: [ newButton ] });
    }
});

client.login(`your bot token here`);