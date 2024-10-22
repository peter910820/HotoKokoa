import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config'

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply(`delay: ${client.ws.ping}ms`);
  }else if(interaction.commandName === 'exit'){
    await interaction.reply('bot close...');
    client.destroy();
  }
});

client.login(process.env['BOT_TOKEN']);