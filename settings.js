const fs = require('fs'),
  _0x20735e = {}
_0x20735e.path = './config.env'
if (fs.existsSync('config.env')) {
  require('dotenv').config(_0x20735e)
}
function convertToBool(_0x1ca5da, _0x1bcba8 = 'true') {
  return _0x1ca5da === _0x1bcba8 ? true : false
}
global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = 'RASH-MD|-WA-BOT\u2122',
  FOOTERNAME = '> RAASH -  ＭＤ - Ｖ1'
global.owner = process.env.OWNER_NUMBER || '94707765200'
const _0x327eef = {}
_0x327eef.SESSION_ID = process.env.SESSION_ID || 'youre session id'
_0x327eef.travaSend = process.env.TRAVA_SEND || '25'
_0x327eef.MAX_SIZE =
  process.env.MAX_SIZE === undefined ? '1536' : process.env.MAX_SIZE
_0x327eef.OWNER_NAME = process.env.OWNER_NAME || 'RASH'
_0x327eef.COMMAND_TYPE = process.env.COMMAND_TYPE || 'button'
_0x327eef.LOGO =
  process.env.LOGO || 'https://telegra.ph/file/ab0ea6ad90e2eb98090d9.jpg'
_0x327eef.POSTGRESQL_URL =
  process.env.POSTGRESQL_URL ||
  'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech'
_0x327eef.MONGODB_URI =
  process.env.MONGODB_URI === undefined
    ? 'mongodb+srv://sachintharashan26:9hVStJbuE3uxwRtZ@cluster0.o0ec025.mongodb.net/'
    : process.env.MONGODB_URI
_0x327eef.FOOTER =
  process.env.FOOTER ||
  '‌\uD83D\uDC68‍\uD83D\uDCBB RASH -  ＭＤ - Ｖ1  \uD83D\uDC68‍\uD83D\uDCBB'
_0x327eef.PREFIX = process.env.PREFIX || '.'
_0x327eef.LANG = process.env.LANG || 'SI'
_0x327eef.ANTI_BAD = process.env.ANTI_BAD || false
_0x327eef.AUTO_REACT = process.env.AUTO_REACT || false
_0x327eef.AUTO_TYPING = process.env.AUTO_TYPING || false
_0x327eef.AUTO_RECORDING = process.env.AUTO_RECORDING || false
_0x327eef.AUTO_READ = process.env.AUTO_READ || false
_0x327eef.AUTO_BIO = process.env.AUTO_BIO || false
_0x327eef.ALWAYS_ONLINE = process.env.ALWAYS_ONLINE || false
_0x327eef.WORK_TYPE = process.env.WORK_TYPE || 'public'
_0x327eef.DISABLE_PM = process.env.DISABLE_PM || false
_0x327eef.ANTI_LINK = process.env.ANTI_LINK || false
_0x327eef.ANTI_BOT = process.env.ANTI_BOT || false
_0x327eef.ANTI_CALL = process.env.ANTI_CALL || false
_0x327eef.ALIVE = process.env.ALIVE || 'default'
_0x327eef.AUTO_STATUS_READ = process.env.AUTO_STATUS_READ || false
_0x327eef.AUTO_VOICE = process.env.AUTO_VOICE || false
_0x327eef.AUTO_STICKER = process.env.AUTO_STICKER || false
_0x327eef.WELCOME = process.env.WELCOME || false
_0x327eef.ANTI_DELETE = process.env.ANTI_DELETE || false
_0x327eef.imagenotfound = 'https://telegra.ph/file/dae6a8989dee17b7566f1.jpg'
_0x327eef.imagesearch = 'https://telegra.ph/file/dae6a8989dee17b7566f1.jpg'
_0x327eef.imageconnect = 'https://telegra.ph/file/dae6a8989dee17b7566f1.jpg'
_0x327eef.DEVAPIKEY = 'SACHIBOT'
_0x327eef.Itzcp = '94707765200'
_0x327eef.IMAGE_ENHANCE = ''
_0x327eef.WHATSAPP_DEFAULT_SIZE = 1.7
_0x327eef.BOTNUMBER =
  process.env.BOTNUMBER === undefined ? '94707765200' : process.env.BOTNUMBER
_0x327eef.OWNERNUMBER =
  process.env.OWNERNUMBER === undefined
    ? '94701992015'
    : process.env.OWNERNUMBER
_0x327eef.BOTNAME = BOTNAME
_0x327eef.FOOTERNAME = FOOTERNAME
_0x327eef.DEVNUMBER = '94707765200'
_0x327eef.DEVBOT = '94707765200'
_0x327eef.CHANNEL = ''
_0x327eef.DOWNLOADSAPI = 'https://sachibot-downloads.up.railway.app/'
_0x327eef.DELETEMSGSENDTO =
  process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
module.exports = _0x327eef
