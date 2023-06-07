import { SlashCommand } from "../../types";
import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

export const command: SlashCommand = {
  name: 'ping',
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('reply pong!'),
  execute: async ( interaction ) => {
    const message = await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setAuthor({name: 'Vaillant'})
          .setDescription(`Pong !\n Ping : ${interaction.client.ws.ping}`)
          .setColor('#ff8e4d'),
      ],
      fetchReply: true,
    });
    await message.react('🥳');
  }
}