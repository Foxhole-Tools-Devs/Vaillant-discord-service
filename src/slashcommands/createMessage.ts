import { SlashCommand } from "../../types";
import { Channel, ForumChannel, SlashCommandBuilder, ThreadAutoArchiveDuration } from "discord.js";

export const command: SlashCommand = {
  name: "thread-message",
  data: new SlashCommandBuilder()
    .setName("thread-message")
    .setDescription("create a thread basic message")
    ,
  execute: async interaction => {
    const threadChannel: Channel = await interaction.client.channels.cache.get('1085981106882490449');
    if (threadChannel instanceof ForumChannel) {
      await threadChannel.threads.create({
        name: `LOGI-LIST: ${new Date().getDay()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`,
        message: { content: '300 BMAT !' },
        autoArchiveDuration: ThreadAutoArchiveDuration.OneHour,
        reason: "LOGI-LIST du jour",
        appliedTags: ['1085981349099352085'],
      });
    }
    console.log(threadChannel)
    await interaction.reply({
      content: "OK",
    });
  }
   // const thread = await ((ThreadChannel) threadChannel);
  /*.threads.create({
      name: "Logi-list",
      autoArchiveDuration: 5,
      reason: 'Need a new logi list'
    })
  },*/
}