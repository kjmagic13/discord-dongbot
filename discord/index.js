const { DISCORD_BOT_TOKEN } = process.env

const { Client } = require('discord.js')
const client = new Client()

client.once('ready', () => {
  console.log('Discord ready!')
})

client.login(DISCORD_BOT_TOKEN)

client.on('message', require('./message'))
