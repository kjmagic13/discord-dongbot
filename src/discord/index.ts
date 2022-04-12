import { Client } from 'discord.js'
import message from './message'

const { DISCORD_BOT_TOKEN } = process.env

const client = new Client()
client.login(DISCORD_BOT_TOKEN)

client.once('ready', () => {
  console.log('Discord ready!')
})

client.on('message', message)
