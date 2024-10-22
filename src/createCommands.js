import { REST, Routes } from 'discord.js';
import 'dotenv/config'

const commands = [
  {
    name: 'exit',
    description: 'close bot',
  },
  {
    name: 'ping',
    description: 'get delay',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env['BOT_TOKEN']);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(process.env['CLIENT_ID']), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}