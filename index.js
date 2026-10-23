const bedrock = require('bedrock-protocol')
const bot = bedrock.createClient({
  host: 'play.void.fun',
  port: 19132,
  username: 'VoidAFK_Raju',
  offline: true,
  version: '1.20.80'
})
bot.on('spawn', () => {
  console.log('BOT ONLINE')
})
