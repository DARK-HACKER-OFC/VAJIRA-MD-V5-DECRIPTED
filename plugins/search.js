const config = require('../settings'),
  fg = require('api-dylux'),
  os = require('os'),
  { cmd, commands } = require('../lib/command'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    jsonformat,
  } = require('../lib/functions'),
  cheerio = require('cheerio'),
  axios = require('axios'),
  vm = require('vm'),
  util = require('util'),
  { find } = require('raganork-bot'),
  fetch = require('node-fetch'),
  farrkey = require('xfarr-api'),
  trueCaller = async (_0x406475) => {
    try {
      var _0x2f6de5 = await find(_0x406475, '', '')
    } catch {
      var _0x2f6de5 = false
    }
    return _0x2f6de5
  },
  { lyrics, lyricsv2 } = require('@bochilteam/scraper')
var { subsearch, subdl } = require('@sl-code-lords/si-subdl')
const Esana = require('@sl-code-lords/esana-news')
var api = new Esana()
const sirasanews = require('sirasa-news'),
  derananews = require('@kaveesha-sithum/derana-news'),
  uptime = process.uptime(),
  day = Math.floor(uptime / 86400),
  hours = Math.floor((uptime % 86400) / 3600),
  minutes = Math.floor((uptime % 3600) / 60),
  seconds = Math.floor(uptime % 60)
var cants = ''
if (config.LANG === 'SI') {
  cants = 'I cant find this anime.'
} else {
  cants = 'I cant find this anime.'
}
var N_FOUND = ''
if (config.LANG === 'SI') {
  N_FOUND = '*මට කිසිවක් සොයාගත නොහැකි විය :(*'
} else {
  N_FOUND = "*I couldn't find anything :(*"
}
var tmsg5 = ''
if (config.LANG === 'SI') {
  tmsg5 = '*කරුණාකර මට ගීතයක නමක් දෙන්න. !*'
} else {
  tmsg5 = '*Please give me a song name. !*'
}
var descg1 = '',
  tmsg = ''
if (config.LANG === 'SI') {
  tmsg = 'එය Tech news ලබා දෙයි.'
} else {
  tmsg = 'It gives Tech news.'
}
var tmsg3 = ''
if (config.LANG === 'SI') {
  tmsg3 = 'එය IOS news ලබා දෙයි.'
} else {
  tmsg3 = 'It gives IOS news.'
}
var needus = ''
if (config.LANG === 'SI') {
  needus = '*කරුණාකර මට chatgpt AI හි සෙවීමට වචන ලබා දෙන්න !*'
} else {
  needus = '*Please give me words to search on chatgpt ai !*'
}
var descg = ''
if (config.LANG === 'SI') {
  descg = 'එය ලබා දී ඇති දුරකථන අංකයේ හිමිකරු සොයා ගනී.'
} else {
  descg = 'It find owner of given phone number.'
}
var desct = ''
if (config.LANG === 'SI') {
  desct = 'එය ඔබ ලබා දුන් දේ සඳහා chatgpt AI මත සොයයි.'
} else {
  desct = 'It search on chatgpt ai for what you provided.'
}
var descgs = ''
if (config.LANG === 'SI') {
  descgs = 'එය ලබා දී ඇති anime නම පිළිබඳ විස්තර සපයයි.'
} else {
  descgs = 'It gives details of given anime name.'
}
const _0x44aa47 = {}
_0x44aa47.pattern = 'anime'
_0x44aa47.alias = ['animesearch', 'sanime']
_0x44aa47.react = '\u26E9️'
_0x44aa47.desc = descgs
_0x44aa47.category = 'search'
_0x44aa47.use = '.anime astro'
_0x44aa47.filename = __filename
cmd(
  _0x44aa47,
  async (
    _0x5f20f7,
    _0x3ebf24,
    _0x134072,
    {
      from: _0x41f1c8,
      l: _0x2214d2,
      prefix: _0x1c77cb,
      quoted: _0x32ca54,
      body: _0x3aee58,
      isCmd: _0x56a3e7,
      command: _0x2a1325,
      args: _0x2448f1,
      q: _0xdb5ea,
      isGroup: _0x4bdfaf,
      sender: _0x52adbf,
      senderNumber: _0x409a42,
      botNumber2: _0x577ac8,
      botNumber: _0x3b62fe,
      pushname: _0xca1fb4,
      isMe: _0x28ab78,
      isOwner: _0x550715,
      groupMetadata: _0x35d9c0,
      groupName: _0x38450f,
      participants: _0x6ac4b3,
      groupAdmins: _0x45b843,
      isBotAdmins: _0x246212,
      isAdmins: _0x20676d,
      reply: _0x1e0dd0,
    }
  ) => {
    try {
      if (!_0xdb5ea) {
        return _0x1e0dd0('Give a anime name')
      }
      let _0x1a2419 = await fetchJson(
          'https://api.jikan.moe/v4/anime?q=' + _0xdb5ea
        ),
        _0x8ff3c8 = 'SAKURA MD ANIME SEARCH\n\n\t > ANIME SEARCHER \uD83D\uDEB6'
      const _0x3edf74 = []
      for (let _0x5dbc97 of _0x1a2419.data) {
        _0x3edf74.push({
          header: _0x5dbc97 + 1,
          title: 'Anime number',
          description: '' + _0x5dbc97.title,
          id: '.animeeg ' + _0x5dbc97.mal_id,
        })
      }
      const _0x1bc076 = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL,
      }
      let _0x344be9 = [
        {
          name: 'cta_url',
          buttonParamsJson: JSON.stringify(_0x1bc076),
        },
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Select Anime types',
            sections: [
              {
                title: 'Please select a category',
                highlight_label: 'SAKURA-MD',
                rows: _0x3edf74,
              },
            ],
          }),
        },
      ]
      const _0x2b692d = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: _0x8ff3c8,
      }
      let _0x449e07 = _0x2b692d
      return await _0x5f20f7.sendButtonMessage(
        _0x41f1c8,
        _0x344be9,
        _0x134072,
        _0x449e07
      )
    } catch (_0x1aa836) {
      _0x1e0dd0('*Error !!*')
      console.log(_0x1aa836)
    }
  }
)
const _0x95ac85 = {}
_0x95ac85.pattern = 'animeeg'
_0x95ac85.dontAddCommandList = true
_0x95ac85.filename = __filename
cmd(
  _0x95ac85,
  async (
    _0x347af1,
    _0x470fcc,
    _0x38df51,
    {
      from: _0x2a3805,
      l: _0xbf3248,
      quoted: _0x19cdf3,
      body: _0x34a462,
      isCmd: _0x5e3f47,
      command: _0x57dec4,
      args: _0xcba493,
      q: _0x1568d0,
      isGroup: _0x1b6f18,
      sender: _0x4fd477,
      senderNumber: _0x5d9113,
      botNumber2: _0x300aaa,
      botNumber: _0x355283,
      pushname: _0x16b5ff,
      isMe: _0xa9f784,
      isOwner: _0x4f3124,
      groupMetadata: _0x556ccb,
      groupName: _0x1a915b,
      participants: _0x166a9f,
      groupAdmins: _0x2073a3,
      isBotAdmins: _0xf1908e,
      isAdmins: _0x58ba9b,
      reply: _0x28bca9,
    }
  ) => {
    try {
      const _0x207516 = {
        text: '\uD83D\uDD03',
        key: _0x470fcc.key,
      }
      const _0x53076e = { react: _0x207516 }
      await _0x347af1.sendMessage(_0x2a3805, _0x53076e)
      res = await fetchJson('https://api.jikan.moe/v4/anime/' + _0x1568d0)
      let _0xcf9a4b =
        '*TITLE:* *' +
        res.data.title +
        '*\n*ENGLISH:* *' +
        res.data.title_english +
        '*\n*JAPANESE:* *' +
        res.data.title_japanese +
        '*\n*TYPE ANIME:* *' +
        res.data.type +
        '*\n*ADAPTER:* *' +
        res.data.source +
        '*\n*TOTAL EPISODE:* *' +
        res.data.episodes +
        '*\n*STATUS:* *' +
        res.data.status +
        '*\n*ONGOING:* *' +
        (res.data.airing ? 'Ya' : 'DRIS') +
        '*\n*AIRED:* *' +
        res.data.aired.string +
        '*\n*DURATION:* *' +
        res.data.duration +
        '*\n*RATING:* *' +
        res.data.rating +
        '*\n*SCORE:* *' +
        res.data.score +
        '*\n*RANK:* *' +
        res.data.rank +
        '*\n*STUDIO:* *' +
        res.data.studios[0].name +
        '* '
      const _0x5c4bd7 = { url: res.data.images.jpg.image_url }
      const _0x2f4f2b = {
        image: _0x5c4bd7,
        caption: _0xcf9a4b,
      }
      const _0x2da20e = { quoted: _0x470fcc }
      _0x347af1
        .sendMessage(_0x2a3805, _0x2f4f2b, _0x2da20e)
        .catch((_0x3e6a9e) => _0x28bca9(''))
      const _0x3d41b6 = {
        text: '\u2714',
        key: _0x470fcc.key,
      }
      const _0x128a72 = { react: _0x3d41b6 }
      await _0x347af1.sendMessage(_0x2a3805, _0x128a72)
    } catch (_0x4f48a5) {
      _0x28bca9(cants)
      _0xbf3248(_0x4f48a5)
    }
  }
)
const _0x2ca7a7 = {}
_0x2ca7a7.pattern = 'tiktokstalk'
_0x2ca7a7.react = '\uD83C\uDF99️'
_0x2ca7a7.desc = 'To search tiktok username'
_0x2ca7a7.category = 'search'
_0x2ca7a7.use = '.tiktokstalk <tt user name>'
_0x2ca7a7.filename = __filename
cmd(
  _0x2ca7a7,
  async (
    _0x4ae771,
    _0x226328,
    _0x129a77,
    {
      from: _0x43f144,
      l: _0x9da841,
      quoted: _0x42134b,
      body: _0x36c598,
      isCmd: _0x792e2c,
      command: _0x563310,
      args: _0x2db42d,
      q: _0x45c490,
      isGroup: _0x3e0849,
      sender: _0x18c5b9,
      senderNumber: _0x271046,
      botNumber2: _0x1d4dd9,
      botNumber: _0x2e58bc,
      pushname: _0x8fbefa,
      isMe: _0x528e2f,
      isOwner: _0x3383cb,
      groupMetadata: _0x52abd2,
      groupName: _0x5b669e,
      participants: _0x47f249,
      groupAdmins: _0x3712eb,
      isBotAdmins: _0x535c2b,
      isAdmins: _0x5dd351,
      reply: _0x3003c3,
    }
  ) => {
    try {
      if (!_0x45c490) {
        return _0x3003c3('please give a tiktok username')
      }
      const _0x453b96 = await fetchJson(
        'https://api.maher-zubair.tech/stalk/tiktok?q=' + _0x45c490
      )
      let _0x554326 =
        '\uD83D\uDC68‍\uD83D\uDCBB \uD835\uDDE9\uD835\uDDD4\uD835\uDDDD\uD835\uDDDC\uD835\uDDE5\uD835\uDDD4 \uD835\uDDE7\uD835\uDDE7 \uD835\uDDE8\uD835\uDDE6\uD835\uDDD8\uD835\uDDE5\uD835\uDDE1\uD835\uDDD4\uD835\uDDE0\uD835\uDDD8 \uD835\uDDE6\uD835\uDDD8\uD835\uDDD4\uD835\uDDE5\uD835\uDDD6\uD835\uDDDB\uD83D\uDC68‍\uD83D\uDCBB\n\n*\uD83D\uDCDA NAME:* ' +
        _0x453b96.result.name +
        '\n*\uD83D\uDD16 USERNAME:* ' +
        _0x453b96.result.username +
        '\n*\u26D3️ FOLLOWERS:* ' +
        _0x453b96.result.followers +
        '\n*\u2728 FOLLOWING:* ' +
        _0x453b96.result.following +
        '\n*\uD83D\uDCC3 DESCRIPTION:* ' +
        _0x453b96.result.desc +
        '\n*\uD83D\uDC4D LIKES:* ' +
        _0x453b96.result.likes +
        '\n*\uD83D\uDE80 BIO:* ' +
        _0x453b96.result.bio
      const _0x19ed91 = { url: _0x453b96.result.profile }
      const _0x9ea5cc = {
        image: _0x19ed91,
        caption: _0x554326,
      }
      const _0x32d8fd = { quoted: _0x226328 }
      return await _0x4ae771.sendMessage(_0x43f144, _0x9ea5cc, _0x32d8fd)
      const _0x2a04fb = {
        text: '\u2705',
        key: _0x226328.key,
      }
      const _0x2494f5 = { react: _0x2a04fb }
      await _0x4ae771.sendMessage(_0x43f144, _0x2494f5)
    } catch (_0x34fd6a) {
      _0x9da841(_0x34fd6a)
    }
  }
)
const _0x36f79c = {}
_0x36f79c.pattern = 'igstalk'
_0x36f79c.react = '\uD83C\uDF99️'
_0x36f79c.desc = 'To search instagram username'
_0x36f79c.category = 'search'
_0x36f79c.use = '.igstalk <tt user name>'
_0x36f79c.filename = __filename
cmd(
  _0x36f79c,
  async (
    _0x3aed36,
    _0x298c00,
    _0xef4163,
    {
      from: _0x53a5f9,
      l: _0x39a8ad,
      quoted: _0x4ea28b,
      body: _0x47f88e,
      isCmd: _0x577690,
      command: _0x239a3e,
      args: _0x1c8124,
      q: _0x495371,
      isGroup: _0x23ead2,
      sender: _0x4fae42,
      senderNumber: _0xcae2ad,
      botNumber2: _0x26fb02,
      botNumber: _0x37d9d0,
      pushname: _0x10ce35,
      isMe: _0x18386e,
      isOwner: _0x285ff1,
      groupMetadata: _0x26f55f,
      groupName: _0x1a4c41,
      participants: _0xfd18f6,
      groupAdmins: _0x492a6d,
      isBotAdmins: _0x30557c,
      isAdmins: _0x3f5b55,
      reply: _0x366067,
    }
  ) => {
    try {
      if (!_0x495371) {
        return _0x366067('please give a instagram username')
      }
      const _0x25093b = await fetchJson(
        'https://api.maher-zubair.tech/stalk/instagram?q=' + _0x495371
      )
      let _0x445b35 =
        '\uD83D\uDC68‍\uD83D\uDCBB \uD835\uDDE9\uD835\uDDD4\uD835\uDDDD\uD835\uDDDC\uD835\uDDE5\uD835\uDDD4 \uD835\uDDDC\uD835\uDDDA \uD835\uDDE8\uD835\uDDE6\uD835\uDDD8\uD835\uDDE5\uD835\uDDE1\uD835\uDDD4\uD835\uDDE0\uD835\uDDD8 \uD835\uDDE6\uD835\uDDD8\uD835\uDDD4\uD835\uDDE5\uD835\uDDD6\uD835\uDDDB\uD83D\uDC68‍\uD83D\uDCBB\n\n*\uD83D\uDCDA NAME:* ' +
        _0x25093b.result.username +
        '\n*\uD83D\uDD16 USERNAME:* ' +
        _0x25093b.result.fullname +
        '\n*\u26D3️ FOLLOWERS:* ' +
        _0x25093b.result.followers +
        '\n*\u2728 FOLLOWING:* ' +
        _0x25093b.result.posts +
        '\n*\uD83D\uDCC3 DESCRIPTION:* ' +
        _0x25093b.result.following +
        '\n*\uD83D\uDE80 BIO:* ' +
        _0x25093b.result.bio
      const _0x56efea = { url: _0x25093b.result.photo_profile }
      const _0x2481aa = {
        image: _0x56efea,
        caption: _0x445b35,
      }
      const _0x40f97a = { quoted: _0x298c00 }
      return await _0x3aed36.sendMessage(_0x53a5f9, _0x2481aa, _0x40f97a)
      const _0x2a6751 = {
        text: '\u2705',
        key: _0x298c00.key,
      }
      const _0x2c803b = { react: _0x2a6751 }
      await _0x3aed36.sendMessage(_0x53a5f9, _0x2c803b)
    } catch (_0x1a9195) {
      _0x39a8ad(_0x1a9195)
    }
  }
)
if (config.COMMAND_TYPE === 'button') {
  const _0x286b6f = {
    pattern: 'news',
    react: '\uD83D\uDDC3️',
    desc: 'Get news',
    category: 'search',
    use: '.news',
    filename: __filename,
  }
  cmd(
    _0x286b6f,
    async (
      _0x57c195,
      _0xe0cca,
      _0x601498,
      { from: _0x5473ba, pushname: _0x1c130f, reply: _0x2293a6 }
    ) => {
      try {
        const _0x56c6ff =
            '`\u2726 \uD835\uDDE1\uD835\uDDD8\uD835\uDDEA\uD835\uDDE6 \uD835\uDDE6\uD835\uDDD8\uD835\uDDD4\uD835\uDDE5\uD835\uDDD6\uD835\uDDDB \u2726`\n    ',
          _0x2bc3ab = [],
          _0x47048d = new Map()
        for (let _0x49327d = 0; _0x49327d < 1; _0x49327d++) {
          const _0x49e113 = commands[_0x49327d]
          if (
            !_0x49e113.dontAddCommandList &&
            _0x49e113.pattern !== undefined
          ) {
            const _0x570cc5 = _0x49e113.category.toUpperCase()
            if (!_0x47048d.has(_0x570cc5)) {
              _0x2bc3ab.push(_0x570cc5)
              _0x47048d.set(_0x570cc5, [])
            }
            _0x47048d.get(_0x570cc5).push(_0x49e113.pattern)
          }
        }
        const _0x1aa093 = []
        for (const _0x4f39ba of _0x2bc3ab) {
          const _0x3e7097 = {
            header: 'Select you want to see news',
            title: 'Ios News',
            description: '',
            id: '.ios',
          }
          _0x1aa093.push(_0x3e7097)
          _0x1aa093.push(_0x173824)
          _0x1aa093.push(_0x2015e6)
          _0x1aa093.push(_0x3cacc5)
          _0x1aa093.push(_0x57dbf1)
          _0x1aa093.push(_0x427923)
          _0x1aa093.push(_0x365d0a)
          _0x1aa093.push(_0x61520e)
          _0x1aa093.push(_0x229bf1)
          const _0x173824 = {
            header: '',
            title: 'wabeta News',
            description: '',
            id: '.wabeta',
          }
          const _0x2015e6 = {
            header: '',
            title: 'Nasa News',
            description: '',
            id: '.nasanews',
          }
          const _0x3cacc5 = {
            header: '',
            title: 'Tech News',
            description: '',
            id: '.technews',
          }
          const _0x57dbf1 = {
            header: '',
            title: 'Sirasa News',
            description: '',
            id: '.sirasanews',
          }
          const _0x427923 = {
            header: '',
            title: 'Esana News',
            description: '',
            id: '.esananews',
          }
          const _0x365d0a = {
            header: '',
            title: 'Derana News',
            description: '',
            id: '.derananews',
          }
          const _0x61520e = {
            header: '',
            title: 'Hiru News',
            description: '',
            id: '.hirunews',
          }
          const _0x229bf1 = {
            header: '',
            title: 'Cricket News',
            description: '',
            id: '.cricketnews',
          }
          _0x1aa093.push(_0x3e7097),
            _0x1aa093.push(_0x173824),
            _0x1aa093.push(_0x2015e6),
            _0x1aa093.push(_0x3cacc5),
            _0x1aa093.push(_0x57dbf1),
            _0x1aa093.push(_0x427923),
            _0x1aa093.push(_0x365d0a),
            _0x1aa093.push(_0x61520e),
            _0x1aa093.push(_0x229bf1)
        }
        const _0x26222b = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL,
        }
        let _0x4d25d4 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0x26222b),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Select news types',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'SAKURA-MD',
                  rows: _0x1aa093,
                },
              ],
            }),
          },
        ]
        const _0x3a345b = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x56c6ff,
        }
        let _0x29ba22 = _0x3a345b
        return await _0x57c195.sendButtonMessage(
          _0x5473ba,
          _0x4d25d4,
          _0x601498,
          _0x29ba22
        )
      } catch (_0x15de7a) {
        _0x2293a6('*Error !!*'), console.log(_0x15de7a)
      }
    }
  )
  const _0x1bc984 = {
    pattern: 'ios',
    alias: ['apple', 'applenews'],
    react: '\uD83C\uDF4E',
    desc: tmsg,
    category: 'search',
    use: '.ios',
  }
  cmd(
    _0x1bc984,
    async (
      _0x52be65,
      _0x2c2f2f,
      _0x3203a6,
      { from: _0xd9af39, q: _0x3ecd9a, reply: _0x31df73 }
    ) => {
      try {
        const _0x25c60b = await fetchJson(
          'https://api.maher-zubair.tech/details/ios'
        )
        let _0x51924d =
          '\uD83D\uDC68 ‍SAKURA-MD IOS NEWS \uD83D\uDCBB SS \uD83D\uDC68‍\uD83D\uDCBB\n\n*\uD83D\uDD16 Title:* ' +
          _0x25c60b.result.title +
          '\n*\u26D3️ Link:* ' +
          _0x25c60b.result.link +
          '\n*\uD83D\uDCDA Description:* ' +
          _0x25c60b.result.desc
        const _0x546fdd = { url: _0x25c60b.result.images }
        const _0x18ba2b = {
          image: _0x546fdd,
          caption: _0x51924d,
        }
        const _0x1f4881 = { quoted: _0x3203a6 }
        return await _0x52be65.sendMessage(_0xd9af39, _0x18ba2b, _0x1f4881)
        const _0x17c844 = {
          text: '\u2705',
          key: _0x3203a6.key,
        }
        const _0x29c339 = { react: _0x17c844 }
        await _0x52be65.sendMessage(_0xd9af39, _0x29c339)
      } catch (_0x36208e) {
        l(_0x36208e)
      }
    }
  )
  const _0x5e0846 = {
    pattern: 'wabeta',
    alias: ['wabetainfo', 'betawa'],
    react: '\u2714️',
    desc: 'To see info of wabeta',
    category: 'search',
    use: '.wabeta',
  }
  cmd(
    _0x5e0846,
    async (
      _0x35a224,
      _0x3748cd,
      _0x444345,
      { from: _0x4eff17, q: _0x17022e, reply: _0x55a48b }
    ) => {
      try {
        const _0x1a065b = await fetchJson(
          'https://api.maher-zubair.tech/details/wabetainfo'
        )
        let _0x3f1d4a =
          '\uD83D\uDC68\uD83D\uDCBB SAKURA-MD WABETA NEWS \uD83D\uDC68‍\uD83D\uDCBB\n\n*\uD83E\uDD4F Title :* ' +
          _0x1a065b.result.title +
          '\n*\uD83D\uDCC5 Date :* ' +
          _0x1a065b.result.date +
          '\n*\uD83D\uDDA5️ Platform :* ' +
          _0x1a065b.result.subtitle +
          '\n*\uD83D\uDD17 URL :* ' +
          _0x1a065b.result.link +
          '\n*\uD83D\uDDDE️ Short Desc :* ' +
          _0x1a065b.result.desc
        const _0x441204 = { url: _0x1a065b.result.image }
        const _0x17d782 = {
          image: _0x441204,
          caption: _0x3f1d4a,
        }
        const _0x49f796 = { quoted: _0x444345 }
        return await _0x35a224.sendMessage(_0x4eff17, _0x17d782, _0x49f796)
        const _0x1f55c9 = {
          text: '\u2705',
          key: _0x444345.key,
        }
        const _0x1eac03 = { react: _0x1f55c9 }
        await _0x35a224.sendMessage(_0x4eff17, _0x1eac03)
      } catch (_0xb1728b) {
        l(_0xb1728b)
      }
    }
  )
  const _0x22aa23 = {
    pattern: 'nasanews',
    react: '\uD83D\uDCE1',
    desc: 'To see nasa news info',
    category: 'search',
    use: '.nasanews',
  }
  cmd(
    _0x22aa23,
    async (
      _0x28feff,
      _0x4b9578,
      _0x45dc39,
      { from: _0x213f14, q: _0x3751c3, reply: _0x40e62b }
    ) => {
      try {
        const _0x5da407 = await fetchJson(
            'https://api.maher-zubair.tech/details/nasa'
          ),
          _0x1cbb1a =
            '\uD83D\uDC68‍\uD83D\uDCBB SAKURA-MD NASA NEWS \uD83D\uDC68‍\uD83D\uDCBB\n\n\uD83E\uDE84 \uD835\uDE4F\uD835\uDE44\uD835\uDE4F\uD835\uDE47\uD835\uDE40: ' +
            _0x5da407.result.title + 
            '\n\uD83D\uDCC6\uD835\uDE3F\uD835\uDE3C\uD835\uDE4F\uD835\uDE40: ' +
            _0x5da407.result.date +
            '\n\uD83D\uDE80 \uD835\uDE51\uD835\uDE40\uD835\uDE4D\uD835\uDE4E\uD835\uDE44\uD835\uDE4A\uD835\uDE49: ' +
            _0x5da407.result.service_version +
            '\n\uD83D\uDD16\uD835\uDE50\uD835\uDE4D\uD835\uDE47: ' +
            _0x5da407.result.url +
            '\n\uD83D\uDCDD \uD835\uDE40\uD835\uDE53\uD835\uDE4B\uD835\uDE47\uD835\uDE3C\uD835\uDE49\uD835\uDE3C\uD835\uDE4F\uD835\uDE44\uD835\uDE4A\uD835\uDE49: ' +
            _0x5da407.result.explanation,
          _0x39daa5 = { url: _0x5da407.result.hdurl }
        const _0x5ca980 = {
          image: _0x39daa5,
          caption: _0x1cbb1a,
        }
        const _0x1c048b = { quoted: _0x45dc39 }
        return _0x28feff.sendMessage(_0x213f14, _0x5ca980, _0x1c048b)
        const _0x36960a = {
          text: '\u2705',
          key: _0x45dc39.key,
        }
        const _0x43b29f = { react: _0x36960a }
        await _0x28feff.sendMessage(_0x213f14, _0x43b29f)
      } catch (_0x52ce31) {
        l(_0x52ce31)
      }
    }
  )
  const _0x232fb7 = {
    pattern: 'technews',
    alias: ['tech', 'gadgets360'],
    react: '\uD83D\uDCE1',
    desc: tmsg,
    category: '',
    use: '.technews',
  }
  cmd(
    _0x232fb7,
    async (
      _0x19708d,
      _0x26dd46,
      _0x3450ca,
      { from: _0x185928, q: _0x5ef693, reply: _0x44025e }
    ) => {
      try {
        const _0x5868a9 = require('tech-news-scraper'),
          _0x4d4a36 = await _0x5868a9.allNews()
        let _0x5a0a04 =
          '\uD83D\uDC68‍\uD83D\uDCBB SAKURA-MD TECH NEWS \uD83D\uDC68‍\uD83D\uDCBB\n\n'
        for (let _0x35f398 = 0; _0x35f398 < 16; _0x35f398++) {
          _0x5a0a04 += '*\u26D3️ No:* ' + _0x4d4a36.result[_0x35f398].no + '\n'
          _0x5a0a04 +=
            '*\uD83D\uDCC3 Title:* ' + _0x4d4a36.result[_0x35f398].title + '\n'
          _0x5a0a04 +=
            '*\uD83D\uDCDA CatName:* ' +
            _0x4d4a36.result[_0x35f398].catname +
            '\n'
          _0x5a0a04 +=
            '*\uD83D\uDD52 Time:* ' + _0x4d4a36.result[_0x35f398].date + '\n'
          _0x5a0a04 +=
            '*\uD83D\uDCCE Link:* ' +
            _0x4d4a36.result[_0x35f398].link +
            '\n\n--------------------------------------------\n\n\n'
        }
        return await _0x44025e(_0x5a0a04)
        const _0xdf998f = { url: _0x4d4a36.result[i].img }
        const _0x3611d2 = {
          image: _0xdf998f,
          caption: _0x5a0a04,
        }
        const _0xd5bc0f = { quoted: _0x3450ca }
        return await _0x19708d.sendMessage(_0x185928, _0x3611d2, _0xd5bc0f)
        const _0x289f1e = {
          text: '\u2705',
          key: _0x3450ca.key,
        }
        const _0x10f3c4 = { react: _0x289f1e }
        await _0x19708d.sendMessage(_0x185928, _0x10f3c4)
      } catch (_0x566e43) {
        _0x44025e(), l(_0x566e43)
      }
    }
  )
  const _0xaa27d0 = {
    pattern: 'sirasanews',
    react: '\uD83C\uDF99️',
    desc: 'To see Sirasa news',
    category: '',
    use: '.esananews',
    filename: __filename,
  }
  cmd(
    _0xaa27d0,
    async (
      _0x7d9b27,
      _0x5d3238,
      _0x430a1f,
      { from: _0x5bd469, q: _0x3c3dc2, reply: _0x4a1aec }
    ) => {
      const _0x5a2786 = await sirasanews()
      try {
        const _0x368b68 =
            '\u26F6 \uD835\uDE51\uD835\uDE3C\uD835\uDE45\uD835\uDE44\uD835\uDE4D\uD835\uDE3C \uD835\uDE48\uD835\uDE3F \uD835\uDE4E\uD835\uDE44\uD835\uDE4D\uD835\uDE3C\uD835\uDE4E\uD835\uDE3C \uD835\uDE49\uD835\uDE40\uD835\uDE52\uD835\uDE4E \u26F6    \n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *\uD835\uDD4B\uD835\uDD40\uD835\uDD4B\uD835\uDD43\uD835\uDD3C:* ' +
            _0x5a2786.result.title +
            '\n\n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *\uD835\uDD3B\uD835\uDD38\uD835\uDD4B\uD835\uDD3C \uD835\uDD38ℕ\uD835\uDD3B \uD835\uDD4B\uD835\uDD40\uD835\uDD44\uD835\uDD3C* : ' +
            _0x5a2786.result.dateandtime +
            '\n\n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *\uD835\uDD3B\uD835\uDD3C\uD835\uDD4Aℂℝ\uD835\uDD40\uD835\uDD43\uD835\uDD4B\uD835\uDD40\uD835\uDD46ℕ:* ' +
            _0x5a2786.result.description +
            '\n\n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *ℕ\uD835\uDD3C\uD835\uDD4E\uD835\uDD4A \uD835\uDD43\uD835\uDD40ℕ\uD835\uDD42:* ' +
            _0x5a2786.result.link,
          _0xa220dc = { url: _0x5a2786.result.image }
        const _0x1505ce = {
          image: _0xa220dc,
          caption: _0x368b68,
        }
        const _0x4a5511 = { quoted: _0x430a1f }
        await _0x7d9b27.sendMessage(_0x5bd469, _0x1505ce, _0x4a5511)
        const _0x142129 = {
          text: '\u2705',
          key: _0x430a1f.key,
        }
        const _0x2feeb4 = { react: _0x142129 }
        await _0x7d9b27.sendMessage(_0x5bd469, _0x2feeb4)
      } catch (_0x76a9df) {
        _0x4a1aec(), l(_0x76a9df)
      }
    }
  )
  const _0x4beb83 = {
    pattern: 'esananews',
    react: '\uD83C\uDF99️',
    desc: 'To see esana news',
    category: '',
    use: '.sirasa',
    filename: __filename,
  }
  cmd(
    _0x4beb83,
    async (
      _0x44d2d2,
      _0x254a24,
      _0x2bb80b,
      { from: _0x15a756, q: _0x24392b, reply: _0x18fd99 }
    ) => {
      try {
        const _0x2e81e0 = await api.latest_id(),
          _0x257fb2 = _0x2e81e0.results.news_id
        let _0x56d724 = _0x24392b || _0x257fb2
        const _0xa69a2a = await api.news(_0x56d724),
          _0x1d6d4b = _0xa69a2a.results,
          _0x4646e = { url: _0x1d6d4b.COVER }
        const _0x288713 = {
          image: _0x4646e,
          caption:
            '\n*\u2520\u2500\u2772 \uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDFA8 SAKURA-MD ESANA NEWS \uD83D\uDDDE️\u2773* \n\n*\u2503\u25C9* *\u21E8 ᴛɪᴛᴇʟ :*\n ' +
            _0x1d6d4b.TITLE +
            '\n\n*\u2503\u25C9* *\u21E8 DATE :*\n ' +
            _0x1d6d4b.PUBLISHED +
            '\n\n*\u2503\u25C9* *\u21E8 URL :*\n ' +
            _0x1d6d4b.URL +
            '\n\n*\u2503\u25C9* *\u21E8 Description :*\n ' +
            _0x1d6d4b.DESCRIPTION +
            '\n\n*\uD835\uDE7F\uD835\uDE7E\uD835\uDE86\uD835\uDE74\uD835\uDE81\uD835\uDE73 \uD835\uDE71\uD835\uDE88 \uD835\uDE85\uD835\uDE70\uD835\uDE79\uD835\uDE78\uD835\uDE81\uD835\uDE70 \uD835\uDE88\uD835\uDE83 \xAE*\n\n',
        }
        const _0xc2c6e0 = { quoted: _0x2bb80b }
        const _0x3641de = await _0x44d2d2.sendMessage(
            _0x15a756,
            _0x288713,
            _0xc2c6e0
          ),
          _0x19ca64 = {
            text: '\u2705',
            key: _0x2bb80b.key,
          }
        const _0x3a5a8f = { react: _0x19ca64 }
        await _0x44d2d2.sendMessage(_0x15a756, _0x3a5a8f)
      } catch (_0x28db1f) {
        _0x18fd99(), l(_0x28db1f)
      }
    }
  )
  const _0x4cce65 = {
    pattern: 'derananews',
    react: '\uD83C\uDF99️',
    desc: 'To see derana news',
    category: '',
    use: '.derananews',
    filename: __filename,
  }
  cmd(
    _0x4cce65,
    async (
      _0x2e83cf,
      _0x51dfee,
      _0x1c6186,
      { from: _0x6acae0, q: _0x2ff1e9, reply: _0x2a2f86 }
    ) => {
      const _0x30b572 = await derananews()
      try {
        const _0x376e47 =
            ' SAKURA-MD DERANA NEWS\n\n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *\uD835\uDD4B\uD835\uDD40\uD835\uDD4B\uD835\uDD43\uD835\uDD3C:* ' +
            _0x30b572.title +
            '\n\n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *ℕ\uD835\uDD3C\uD835\uDD4E\uD835\uDD4A \uD835\uDD43\uD835\uDD40ℕ\uD835\uDD42:* ' +
            _0x30b572.link +
            '\n\n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *\uD835\uDD3B\uD835\uDD3C\uD835\uDD4Aℂℝ\uD835\uDD40\uD835\uDD43\uD835\uDD4B\uD835\uDD40\uD835\uDD46ℕ:* ' +
            _0x30b572.description,
          _0x317f9f = { url: _0x30b572.image }
        const _0x4ab8c2 = {
          image: _0x317f9f,
          caption: _0x376e47,
        }
        const _0x275fc4 = { quoted: _0x1c6186 }
        await _0x2e83cf.sendMessage(_0x6acae0, _0x4ab8c2, _0x275fc4)
        const _0x2e744e = {
          text: '\u2705',
          key: _0x1c6186.key,
        }
        const _0x394790 = { react: _0x2e744e }
        await _0x2e83cf.sendMessage(_0x6acae0, _0x394790)
      } catch (_0xa8f444) {
        _0x2a2f86()
        l(_0xa8f444)
      }
    }
  )
  const _0x5bd86f = {
    pattern: 'hirunews',
    react: '\uD83D\uDD16',
    desc: 'To see info of hirunews',
    category: '',
    use: '.hirunews',
    filename: __filename,
  }
  cmd(
    _0x5bd86f,
    async (
      _0x591366,
      _0x1cebd3,
      _0x4bf874,
      { from: _0x319992, q: _0xb3dc6f, reply: _0x4c500e }
    ) => {
      try {
        const _0x194ee = require('hirunews-scrap')
        var _0x179f6a = new _0x194ee()
        const _0x39a77a = await _0x179f6a.MainNews(),
          _0x3b63c2 = _0x39a77a.results,
          _0x4fb087 = _0x3b63c2.title,
          _0x3bcfd5 = _0x3b63c2.news,
          _0x22cfcc = _0x3b63c2.date,
          _0x12cf83 = _0x3b63c2.thumb,
          _0x500ee1 = { url: _0x12cf83 }
        const _0x4476da = {
          image: _0x500ee1,
          caption:
            '\nSAKURA-MD HIRU NEWS\n\n\uD83D\uDCCD\u27A3*' +
            _0x4fb087 +
            '* \n\u25CF\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25CF  \n\uD83D\uDCC3\u27A3' +
            _0x3bcfd5 +
            ' \n\u25CF\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25CF \n\uD83D\uDCC5\u27A3' +
            _0x22cfcc +
            '\n\u25CF\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25CF\n\n\uD83D\uDDDE️ *News From hirunews.lk*\n\n\uD83D\uDD17 *CREATED BY SUNNY-LK*\n\n\uD83D\uDCCD *SL News*\n\n\uD83D\uDC64 *Owner Number* :- http://wa.me/94724400710\n\n\n\u25CF\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25CF',
        }
        const _0x470e99 = { quoted: _0x4bf874 }
        const _0x2548e5 = await _0x591366.sendMessage(
            _0x319992,
            _0x4476da,
            _0x470e99
          ),
          _0x3cc43d = {
            text: '\uD83D\uDCF0',
            key: _0x2548e5.key,
          }
        const _0x512320 = { react: _0x3cc43d }
        await _0x591366.sendMessage(_0x319992, _0x512320)
      } catch (_0x18b9b9) {
        _0x4c500e(), l(_0x18b9b9)
      }
    }
  )
  const _0x3cf025 = {
    pattern: 'cricketnews',
    react: '\uD83C\uDF99️',
    desc: 'To see info cricket news',
    category: '',
    use: '.cricketnews',
    filename: __filename,
  }
  cmd(
    _0x3cf025,
    async (
      _0x24d142,
      _0x183af1,
      _0x4cf531,
      { from: _0x3fd4c8, q: _0x597945, reply: _0x44aabd }
    ) => {
      try {
        _0x44aabd('*_Please Wait, Getting Cricket Info_*')
        const _0x224f6b = await fetch(
            'https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78'
          ),
          _0x466b37 = await _0x224f6b.json()
        console.log(_0x466b37)
        for (
          let _0x17c113 = 0;
          _0x17c113 < _0x466b37.data.length;
          _0x17c113++
        ) {
          let _0xe08fa5 = _0x17c113 + 1
          _0x597945 +=
            '\n*--------------------- MATCH ' +
            _0x17c113 +
            '-------------------*'
          _0x597945 += '\n*Match Name  :* ' + _0x466b37.data[_0x17c113].name
          _0x597945 += '\n*Match Status  :* ' + _0x466b37.data[_0x17c113].status
          _0x597945 +=
            '\n*Match  Date   :* ' + _0x466b37.data[_0x17c113].dateTimeGMT
          _0x597945 +=
            '\n*Match Started :* ' + _0x466b37.data[_0x17c113].matchStarted
          _0x597945 +=
            '\n*Match Ended:* ' + _0x466b37.data[_0x17c113].matchEnded
        }
        return await _0x44aabd(_0x597945)
        const _0x496704 = {
          text: '\u2705',
          key: _0x4cf531.key,
        }
        const _0x84d5be = { react: _0x496704 }
        await _0x24d142.sendMessage(_0x3fd4c8, _0x84d5be)
      } catch (_0x5260e4) {
        _0x44aabd(), l(_0x5260e4)
      }
    }
  )
}
const _0x21d194 = {}
_0x21d194.pattern = 'manga'
_0x21d194.react = '\uD83C\uDF99️'
_0x21d194.desc = 'To see info of manga'
_0x21d194.category = 'search'
_0x21d194.use = '.manga'
_0x21d194.filename = __filename
cmd(
  _0x21d194,
  async (
    _0x4b2e33,
    _0x433fdf,
    _0x336f62,
    {
      from: _0x42ff31,
      l: _0x21aacf,
      prefix: _0x1e76e4,
      quoted: _0x3d77d9,
      body: _0x1e3e2d,
      isCmd: _0x19ea37,
      command: _0x231685,
      args: _0x23cfff,
      q: _0x3a72ad,
      isGroup: _0x570b1d,
      sender: _0x57c650,
      senderNumber: _0x3f2332,
      botNumber2: _0x481805,
      botNumber: _0x4e3302,
      pushname: _0x2e07be,
      isMe: _0x3829ab,
      isOwner: _0x54d945,
      groupMetadata: _0x44bdc6,
      groupName: _0x552ef5,
      participants: _0x43e2a4,
      groupAdmins: _0x1c90ef,
      isBotAdmins: _0x571def,
      isAdmins: _0x28a8ae,
      reply: _0x2f5b1f,
    }
  ) => {
    try {
      const { Manga: _0x34033e } = require('@shineiichijo/marika'),
        _0x451224 = new _0x34033e()
      if (!_0x3a72ad) {
        return _0x2f5b1f(
          'Which manga do you want to search?\nExample ' +
            _0x1e76e4 +
            'manga naruto'
        )
      }
      let _0x454f55 = await _0x451224.searchManga(_0x3a72ad),
        _0x8aaf27 = '\uD83C\uDF80 *Title: ' + _0x454f55.data[0].title + '*\n'
      _0x8aaf27 += '\uD83D\uDCC8 *Status: ' + _0x454f55.data[0].status + '*\n'
      _0x8aaf27 +=
        '\uD83C\uDF38 *Total Volumes: ' + _0x454f55.data[0].volumes + '*\n'
      _0x8aaf27 +=
        '\uD83C\uDF97 *Total Chapters: ' + _0x454f55.data[0].chapters + '*\n'
      _0x8aaf27 += '\uD83E\uDDE7 *Genres:*\n'
      for (
        let _0xcef242 = 0;
        _0xcef242 < _0x454f55.data[0].genres.length;
        _0xcef242++
      ) {
        _0x8aaf27 +=
          '\t\t\t\t\t\t\t\t*' + _0x454f55.data[0].genres[_0xcef242].name + '*\n'
      }
      _0x8aaf27 +=
        '\u2728 *Published on: ' + _0x454f55.data[0].published.from + '*\n'
      _0x8aaf27 += '\uD83C\uDF1F *Score: ' + _0x454f55.data[0].scored + '*\n'
      _0x8aaf27 +=
        '\uD83C\uDF90 *Popularity: ' + _0x454f55.data[0].popularity + '*\n'
      _0x8aaf27 +=
        '\uD83C\uDF8F *Favorites: ' + _0x454f55.data[0].favorites + '*\n'
      _0x8aaf27 += '\u270D *Authors:*\n'
      for (
        let _0x10161c = 0;
        _0x10161c < _0x454f55.data[0].authors.length;
        _0x10161c++
      ) {
        _0x8aaf27 +=
          '\t\t\t\t\t\t\t\t\t*' +
          _0x454f55.data[0].authors[_0x10161c].name +
          '* *(' +
          _0x454f55.data[0].authors[0].type +
          ')*\n'
      }
      _0x8aaf27 += '\n\uD83C\uDF10 *URL: ' + _0x454f55.data[0].url + '*\n\n'
      if (_0x454f55.data[0].background !== null) {
        _0x8aaf27 +=
          '\uD83C\uDF86 *Background:* ' + _0x454f55.data[0].background
      }
      _0x8aaf27 +=
        '\u2744️ *Description:* ' +
        _0x454f55.data[0].synopsis.replace(/\[Written by MAL Rewrite]/g, '')
      const _0xafcb61 = { url: _0x454f55.data[0].images.jpg.large_image_url }
      const _0x3a9d88 = {
        image: _0xafcb61,
        caption: _0x8aaf27,
      }
      const _0x336058 = { quoted: _0x433fdf }
      _0x4b2e33.sendMessage(_0x42ff31, _0x3a9d88, _0x336058)
      const _0x2c6513 = {
        text: '\u2705',
        key: _0x433fdf.key,
      }
      const _0x1a6b12 = { react: _0x2c6513 }
      await _0x4b2e33.sendMessage(_0x42ff31, _0x1a6b12)
    } catch (_0x25ff93) {
      _0x2f5b1f()
      _0x21aacf(_0x25ff93)
    }
  }
)
const _0xe7829e = {}
_0xe7829e.pattern = 'weather'
_0xe7829e.react = '\uD83C\uDF99️'
_0xe7829e.desc = 'To see info of weather'
_0xe7829e.category = 'search'
_0xe7829e.use = '.weather'
_0xe7829e.filename = __filename
cmd(
  _0xe7829e,
  async (
    _0x4fdd56,
    _0x2f9e87,
    _0x3d0dec,
    {
      from: _0x4ed2b6,
      l: _0x5d8c8f,
      prefix: _0x2c9a3f,
      quoted: _0x5a381a,
      body: _0x221696,
      isCmd: _0x246a78,
      command: _0x5a081,
      args: _0x227a45,
      q: _0x2543d3,
      isGroup: _0x339619,
      sender: _0x4f3fac,
      senderNumber: _0x2dfdd4,
      botNumber2: _0x4e24ef,
      botNumber: _0x13a7bb,
      pushname: _0x4e4201,
      isMe: _0x115fff,
      isOwner: _0xf373e3,
      groupMetadata: _0x2e52b0,
      groupName: _0x464816,
      participants: _0x363b51,
      groupAdmins: _0x31783d,
      isBotAdmins: _0x449638,
      isAdmins: _0x5a3b13,
      reply: _0x499c84,
    }
  ) => {
    try {
      if (!_0x2543d3) {
        return _0x499c84('What location?')
      }
      let _0x3d2c63 = _0x2543d3.split(' ')[0],
        _0x1b4909 = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=' +
            _0x3d2c63 +
            '&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en'
        ),
        _0x58e944 = ''
      _0x58e944 += '*\uD83D\uDDFA️Weather of  ' + _0x3d2c63 + '*\n\n'
      _0x58e944 += '*Weather:-* ' + _0x1b4909.data.weather[0].main + '\n'
      _0x58e944 +=
        '*Description:-* ' + _0x1b4909.data.weather[0].description + '\n'
      _0x58e944 += '*Avg Temp:-* ' + _0x1b4909.data.main.temp + '\n'
      _0x58e944 += '*Feels Like:-* ' + _0x1b4909.data.main.feels_like + '\n'
      _0x58e944 += '*Pressure:-* ' + _0x1b4909.data.main.pressure + '\n'
      _0x58e944 += '*Humidity:-* ' + _0x1b4909.data.main.humidity + '\n'
      _0x58e944 += '*Humidity:-* ' + _0x1b4909.data.wind.speed + '\n'
      _0x58e944 += '*Latitude:-* ' + _0x1b4909.data.coord.lat + '\n'
      _0x58e944 += '*Longitude:-* ' + _0x1b4909.data.coord.lon + '\n'
      _0x58e944 += '*Country:-* ' + _0x1b4909.data.sys.country + '\n'
      const _0x86c0a4 = { text: _0x58e944 }
      const _0xc9fd = { quoted: _0x2f9e87 }
      _0x4fdd56.sendMessage(_0x4ed2b6, _0x86c0a4, _0xc9fd)
      const _0x2fdd5d = {
        text: '\u2705',
        key: _0x2f9e87.key,
      }
      const _0x265195 = { react: _0x2fdd5d }
      await _0x4fdd56.sendMessage(_0x4ed2b6, _0x265195)
    } catch (_0x21d34b) {
      _0x499c84()
      _0x5d8c8f(_0x21d34b)
    }
  }
)
const _0x431db9 = {}
_0x431db9.pattern = 'cricketscore'
_0x431db9.alias = ['score']
_0x431db9.react = '\uD83C\uDF99️'
_0x431db9.desc = 'To see info of cricket'
_0x431db9.category = 'search'
_0x431db9.use = '.cricketscore'
_0x431db9.filename = __filename
cmd(
  _0x431db9,
  async (
    _0x4ff9f5,
    _0x3f4c94,
    _0x564a39,
    {
      from: _0xa7f723,
      l: _0x50a637,
      prefix: _0x306dfe,
      quoted: _0x491adb,
      body: _0x285135,
      isCmd: _0x1b242e,
      command: _0x4c82ee,
      args: _0x10e715,
      q: _0x18022c,
      isGroup: _0x3a83ee,
      sender: _0x5c5fe9,
      senderNumber: _0x53aded,
      botNumber2: _0xf61994,
      botNumber: _0x5f0b81,
      pushname: _0x250c36,
      isMe: _0x3c2508,
      isOwner: _0x137469,
      groupMetadata: _0x51dc7b,
      groupName: _0x1b55dd,
      participants: _0x4262f6,
      groupAdmins: _0x1b1751,
      isBotAdmins: _0x5d15de,
      isAdmins: _0x328b6e,
      reply: _0x16ba84,
    }
  ) => {
    try {
      if (!_0x18022c) {
        return _0x3f4c94.reply(
          '*Provide a match ID for cricket score.*\nExample: !cricketscore 12345'
        )
      }
      const _0x49f022 = encodeURIComponent(_0x18022c),
        _0x3f5916 = 'https://cricket-olive.vercel.app/score?id=' + _0x49f022,
        _0x20abaf = await fetch(_0x3f5916)
      if (!_0x20abaf.ok) {
        return _0x3f4c94.reply(
          'Invalid response from the cricket score API. Status code: ' +
            _0x20abaf.status
        )
      }
      const _0x1d353a = await _0x20abaf.json()
      let _0x5da7d4 =
        '\u256D\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2022\u221E\u2022\u2550\u2550\u256E\n'
      _0x5da7d4 +=
        '\u2502\u2FFB   *\uD83D\uDC68‍\uD83D\uDCBB SAKURA-MD \uD83D\uDC68‍\uD83D\uDCBB*\n'
      _0x5da7d4 += '\u2502\u2FFB   *LIVE MATCH INFO* \u2728\n'
      _0x5da7d4 += '\u2502\u2FFB\n'
      if (
        _0x1d353a.update &&
        _0x1d353a.update.toLowerCase() !== 'data not found'
      ) {
        ;(_0x5da7d4 += '\u2502\u2FFB   *' + _0x1d353a.title + '*\n'),
          (_0x5da7d4 += '\u2502\u2FFB   *' + _0x1d353a.update + '*\n'),
          (_0x5da7d4 += '\u2502\u2FFB \n')
      } else {
        await _0x564a39.reply(
          '*Update:* Data not found for the specified match ID.'
        )
        return
      }
      if (
        _0x1d353a.livescore &&
        _0x1d353a.livescore.toLowerCase() !== 'data not found'
      ) {
        _0x5da7d4 +=
          '\u2502\u2FFB   *Live Score:* ' + _0x1d353a.livescore + '\n'
        _0x5da7d4 += '\u2502\u2FFB   *Run Rate:* ' + _0x1d353a.runrate + '\n'
        _0x5da7d4 += '\u2502\u2FFB\n'
        _0x5da7d4 += '\u2502\u2FFB   *Batter 1:* ' + _0x1d353a.batterone + '\n'
        _0x5da7d4 +=
          '\u2502\u2FFB   *' +
          _0x1d353a.batsmanonerun +
          ' (' +
          _0x1d353a.batsmanoneball +
          ')* SR: ' +
          _0x1d353a.batsmanonesr +
          ' ' +
          (_0x1d353a.batsmanone === _0x1d353a.batterone ? '' : '') +
          '\n'
        _0x5da7d4 += '\u2502\u2FFB\n'
        _0x5da7d4 += '\u2502\u2FFB   *Batter 2:* ' + _0x1d353a.battertwo + '\n'
        _0x5da7d4 +=
          '\u2502\u2FFB   *' +
          _0x1d353a.batsmantworun +
          ' (' +
          _0x1d353a.batsmantwoball +
          ')* SR: ' +
          _0x1d353a.batsmantwosr +
          ' ' +
          (_0x1d353a.battertwo === _0x1d353a.battertwo ? '' : '') +
          '\n'
        _0x5da7d4 += '\u2502\u2FFB\n'
        _0x5da7d4 += '\u2502\u2FFB   *Bowler 1:* ' + _0x1d353a.bowlerone + '\n'
        _0x5da7d4 +=
          '\u2502\u2FFB   *' +
          _0x1d353a.bowleroneover +
          ' overs, ' +
          _0x1d353a.bowleronerun +
          '/' +
          _0x1d353a.bowleronewickers +
          ', Econ:* ' +
          _0x1d353a.bowleroneeconomy +
          ' ' +
          (_0x1d353a.bowlerone === _0x1d353a.bowlerone ? '' : '') +
          '\n'
        _0x5da7d4 += '\u2502\u2FFB\n'
        _0x5da7d4 += '\u2502\u2FFB    *Bowler 2:* ' + _0x1d353a.bowlertwo + '\n'
        _0x5da7d4 +=
          '\u2502\u2FFB   *' +
          _0x1d353a.bowlertwoover +
          ' overs, ' +
          _0x1d353a.bowlertworun +
          '/' +
          _0x1d353a.bowlertwowickers +
          ', Econ:* ' +
          _0x1d353a.bowlertwoeconomy +
          ' ' +
          (_0x1d353a.bowlertwo === _0x1d353a.bowlertwo ? '' : '') +
          '\n'
      }
      _0x5da7d4 +=
        '\u2570\u2550\u2550\u2022\u221E\u2022\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256F '
      await _0x564a39.reply(_0x5da7d4)
    } catch (_0x451dd2) {
      console.error(_0x451dd2)
      return _0x3f4c94.reply(
        'An error occurred while processing the cricket score request. ' +
          _0x451dd2.message
      )
      const _0x9ff530 = {}
      _0x9ff530.text = '\u2705'
      _0x9ff530.key = _0x3f4c94.key
      const _0x4a0d9e = {}
      _0x4a0d9e.react = _0x9ff530
      await _0x4ff9f5.sendMessage(_0xa7f723, _0x4a0d9e)
      _0x16ba84()
      _0x50a637(e)
    }
  }
)
const _0x187cbf = {}
_0x187cbf.pattern = 'gitstalk'
_0x187cbf.react = '\uD83C\uDF99️'
_0x187cbf.desc = 'To search github info'
_0x187cbf.category = 'gitstalk'
_0x187cbf.use = '.gitstalk username'
_0x187cbf.filename = __filename
cmd(
  _0x187cbf,
  async (
    _0x598470,
    _0x19229c,
    _0x29633e,
    {
      from: _0x49a6c9,
      l: _0x45fe85,
      prefix: _0x11a0d4,
      quoted: _0x333c22,
      body: _0x1e6b7f,
      isCmd: _0x2b1a03,
      command: _0x410753,
      args: _0x2de5b6,
      q: _0x55ac6f,
      isGroup: _0x2f2f49,
      sender: _0x30cdae,
      senderNumber: _0x5ac35f,
      botNumber2: _0x1bd512,
      botNumber: _0x316199,
      pushname: _0x590250,
      isMe: _0x5baf4f,
      isOwner: _0x167df3,
      groupMetadata: _0xa2bbd8,
      groupName: _0x155530,
      participants: _0x1db7a1,
      groupAdmins: _0x5a29b4,
      isBotAdmins: _0x36bb5d,
      isAdmins: _0x5b3207,
      reply: _0x250cd7,
    }
  ) => {
    try {
      if (!_0x2de5b6[0]) {
        return _0x29633e.reply('Mention a GitHub username to stalk.')
      }
      const _0x1d0a8b = _0x2de5b6[0],
        _0xc97529 = await axios.get(
          'https://api.github.com/users/' + _0x1d0a8b
        ),
        _0x44fa53 = _0xc97529.data
      if (_0xc97529.status !== 200) {
        return _0x19229c.reply('\u274C GitHub user not found.')
      }
      let _0x5b9652 =
        '\uD83C\uDF1F *GitHub Profile - @' + _0x44fa53.login + '*\n\n'
      _0x5b9652 += '  \u25E6  *Name*: ' + (_0x44fa53.name || 'N/A') + '\n'
      _0x5b9652 += '  \u25E6  *Username*: @' + _0x44fa53.login + '\n'
      _0x5b9652 += '  \u25E6  *Bio*: ' + (_0x44fa53.bio || 'N/A') + '\n'
      _0x5b9652 += '  \u25E6  *ID*: ' + _0x44fa53.id + '\n'
      _0x5b9652 += '  \u25E6  *Node ID*: ' + _0x44fa53.node_id + '\n'
      _0x5b9652 += '  \u25E6  *Profile URL*: ' + _0x44fa53.avatar_url + '\n'
      _0x5b9652 += '  \u25E6  *GitHub URL*: ' + _0x44fa53.html_url + '\n'
      _0x5b9652 += '  \u25E6  *Type*: ' + _0x44fa53.type + '\n'
      _0x5b9652 +=
        '  \u25E6  *Admin*: ' + (_0x44fa53.site_admin ? 'Yes' : 'No') + '\n'
      _0x5b9652 += '  \u25E6  *Company*: ' + (_0x44fa53.company || 'N/A') + '\n'
      _0x5b9652 += '  \u25E6  *Blog*: ' + (_0x44fa53.blog || 'N/A') + '\n'
      _0x5b9652 +=
        '  \u25E6  *Location*: ' + (_0x44fa53.location || 'N/A') + '\n'
      _0x5b9652 += '  \u25E6  *Email*: ' + (_0x44fa53.email || 'N/A') + '\n'
      _0x5b9652 +=
        '  \u25E6  *Public Repositories*: ' + _0x44fa53.public_repos + '\n'
      _0x5b9652 += '  \u25E6  *Public Gists*: ' + _0x44fa53.public_gists + '\n'
      _0x5b9652 += '  \u25E6  *Followers*: ' + _0x44fa53.followers + '\n'
      _0x5b9652 += '  \u25E6  *Following*: ' + _0x44fa53.following + '\n'
      _0x5b9652 += '  \u25E6  *Created At*: ' + _0x44fa53.created_at + '\n'
      _0x5b9652 += '  \u25E6  *Updated At*: ' + _0x44fa53.updated_at + '\n'
      const _0x589165 = await fetch(
          'https://api.github.com/users/' +
            _0x1d0a8b +
            '/repos?per_page=5&sort=stargazers_count&direction=desc'
        ),
        _0x5cbcf2 = await _0x589165.json()
      if (_0x5cbcf2.length > 0) {
        const _0x3d412f = _0x5cbcf2.slice(0, 5),
          _0x5c814f = _0x3d412f.map((_0x41717d) => {
            return (
              '  \u25E6  *Repository*: [' +
              _0x41717d.name +
              '](' +
              _0x41717d.html_url +
              ')\n  \u25E6  *Description*: ' +
              (_0x41717d.description || 'N/A') +
              '\n  \u25E6  *Stars*: ' +
              _0x41717d.stargazers_count +
              '\n  \u25E6  *Forks*: ' +
              _0x41717d.forks
            )
          }),
          _0x5e8b09 =
            '\uD83D\uDCDA *Top Starred Repositories*\n\n' +
            _0x5c814f.join('\n\n')
        _0x5b9652 += '\n\n' + _0x5e8b09
      } else {
        _0x5b9652 += '\n\nNo public repositories found.'
      }
      const _0x4d4f1a = { url: _0x44fa53.avatar_url }
      const _0x2b6000 = {
        image: _0x4d4f1a,
        caption: _0x5b9652,
      }
      await _0x598470.sendMessage(_0x19229c.chat, _0x2b6000, {
        quoted: _0x19229c,
      })
      const _0xcbc8be = {
        text: '\u2714',
        key: _0x29633e.key,
      }
      const _0x31c29c = { react: _0xcbc8be }
      const _0x166225 = _0x31c29c
      await _0x598470.sendMessage(_0x29633e.chat, _0x166225)
    } catch (_0x275d01) {
      console.error('Error fetching GitHub data:', _0x275d01)
      const _0x15156e = {}
      _0x15156e.quoted = _0x19229c
      await _0x598470.sendMessage(
        _0x29633e.chat,
        'An error occurred while fetching GitHub data.',
        _0x15156e
      )
      const _0x3bad94 = {}
      _0x3bad94.text = '\u2705'
      _0x3bad94.key = _0x19229c.key
      const _0x2e03c4 = {}
      _0x2e03c4.react = _0x3bad94
      await _0x598470.sendMessage(_0x49a6c9, _0x2e03c4)
      _0x250cd7()
      _0x45fe85(e)
    }
  }
)
const _0x3383b6 = {}
_0x3383b6.pattern = 'infobot'
_0x3383b6.react = '\uD83C\uDF99️'
_0x3383b6.desc = 'To see info of bot'
_0x3383b6.category = 'search'
_0x3383b6.use = '.infobot'
_0x3383b6.filename = __filename
cmd(
  _0x3383b6,
  async (
    _0x26be17,
    _0x4f83b3,
    _0x575696,
    {
      from: _0x52198f,
      l: _0x1d4559,
      prefix: _0x318b28,
      quoted: _0x1574ad,
      body: _0x5c34f3,
      isCmd: _0x16a452,
      command: _0x375655,
      args: _0x41f039,
      q: _0x36bca6,
      isGroup: _0x3d7045,
      sender: _0x479de9,
      senderNumber: _0x36d9d8,
      botNumber2: _0x8a6fcb,
      botNumber: _0xe9d025,
      pushname: _0x5105b0,
      isMe: _0xef5602,
      isOwner: _0xd707d9,
      groupMetadata: _0x2afc51,
      groupName: _0x89ad74,
      participants: _0x277eee,
      groupAdmins: _0x33c9fb,
      isBotAdmins: _0x160f36,
      isAdmins: _0x4026d2,
      reply: _0x5490e4,
    }
  ) => {
    try {
      const _0x310379 =
          '\n\u256D\u2501\u2500\u2500\u2501\u2500\u25C8\u2500\u2501\u2500\u2501\u256E\n\u2502\uD83D\uDD16 *Bot Name* : SAKURA-MD\n\u2502\uD83D\uDD16 *Owner Name* : SUNNY-LK\n\u2502\uD83D\uDD16 *Owner Number* : 94724400710\n\u2502\uD83D\uDD16 *Prefix* : .\n\u2502\uD83D\uDD16 *Runtime* : _*' +
          hours +
          'h ' +
          minutes +
          'm ' +
          seconds +
          's*_\n\u2570\u2501\u2501\u2500\u2501\u2500\u25C8\u2500\u2501\u2500\u2501\u256F',
        _0x1b04bf = ['.menu', '.ping']
      _0x26be17.sendPoll(_0x4f83b3.chat, _0x310379, _0x1b04bf)
      const _0x4db298 = {
        text: '\u2705',
        key: _0x4f83b3.key,
      }
      const _0x48a4d1 = { react: _0x4db298 }
      await _0x26be17.sendMessage(_0x52198f, _0x48a4d1)
    } catch (_0x2b1126) {
      _0x5490e4()
      _0x1d4559(_0x2b1126)
    }
  }
)
const _0x1990af = {}
_0x1990af.pattern = 'nofind'
_0x1990af.react = '\uD83C\uDF99️'
_0x1990af.desc = 'To see same to the number'
_0x1990af.category = 'search'
_0x1990af.use = '.nofind'
_0x1990af.filename = __filename
cmd(
  _0x1990af,
  async (
    _0x7d8975,
    _0x47070d,
    _0x5b9f6a,
    {
      from: _0x4fe30b,
      l: _0x123038,
      prefix: _0x1a2e5a,
      quoted: _0x24d864,
      body: _0x133c0c,
      isCmd: _0x4d16ba,
      command: _0x251119,
      args: _0x5237a0,
      q: _0x1d91e8,
      isGroup: _0x47dcc9,
      sender: _0x1d14ab,
      senderNumber: _0x5f085c,
      botNumber2: _0x3d0e10,
      botNumber: _0x352f0a,
      pushname: _0x56ee9c,
      isMe: _0x3e8ff5,
      isOwner: _0x4d845e,
      groupMetadata: _0x12b9fb,
      groupName: _0x546508,
      participants: _0x327949,
      groupAdmins: _0x5d8115,
      isBotAdmins: _0x5854e3,
      isAdmins: _0x3cd782,
      reply: _0x48ee29,
    }
  ) => {
    try {
      if (!_0x1d91e8) {
        throw 'Give a number to search'
      }
      if (!_0x1d91e8.match(/x/g)) {
        throw '*Example: ' + (_0x1a2e5a + _0x251119) + ' 919142294xxx'
      }
      let _0x56859c = _0x1d91e8.match(/x/g).length,
        _0x2930b7 = Math.pow(10, _0x56859c),
        _0x1eaef3 = []
      for (let _0x527c9f = 0; _0x527c9f < _0x2930b7; _0x527c9f++) {
        let _0x40030f = [..._0x527c9f.toString().padStart(_0x56859c, '0')],
          _0x41de82 =
            _0x1d91e8.replace(/x/g, () => _0x40030f.shift()) + '@s.whatsapp.net'
        if (
          await _0x7d8975
            .onWhatsApp(_0x41de82)
            .then((_0x12696e) => (_0x12696e[0] || {}).exists)
        ) {
          let _0x113fec = await _0x7d8975
            .fetchStatus(_0x41de82)
            .catch((_0x7b6340) => {})
          const _0xe774a1 = {
            exists: true,
            jid: _0x41de82,
            ..._0x113fec,
          }
          _0x1eaef3.push(_0xe774a1)
        } else {
          const _0x530906 = {
            exists: false,
            jid: _0x41de82,
          }
          _0x1eaef3.push(_0x530906)
        }
      }
      const _0x3a63a7 = {
        text: '\u2705',
        key: _0x47070d.key,
      }
      const _0xd533eb = { react: _0x3a63a7 }
      await _0x7d8975.sendMessage(_0x4fe30b, _0xd533eb)
    } catch (_0x254a2e) {
      _0x48ee29()
      _0x123038(_0x254a2e)
    }
  }
)
const _0x370913 = {}
_0x370913.pattern = 'google'
_0x370913.react = '\uD83C\uDF99️'
_0x370913.desc = 'To search infomations'
_0x370913.category = 'search'
_0x370913.use = '.google <search name>'
_0x370913.filename = __filename
cmd(
  _0x370913,
  async (
    _0x1ebc27,
    _0x3ff6e4,
    _0x28e98d,
    {
      from: _0xfd92c5,
      l: _0x5e2d27,
      prefix: _0x1865b4,
      quoted: _0x125821,
      body: _0x7b8239,
      isCmd: _0x5176bb,
      command: _0x5c98dc,
      args: _0x3f75f0,
      q: _0x2e8cd2,
      isGroup: _0x81e14c,
      sender: _0x5e6c11,
      senderNumber: _0x21fd7a,
      botNumber2: _0xabe11d,
      botNumber: _0x5029ee,
      pushname: _0x464535,
      isMe: _0x1168c9,
      isOwner: _0x43e8db,
      groupMetadata: _0x24ab1c,
      groupName: _0x5e6a7b,
      participants: _0x59a343,
      groupAdmins: _0x4a4cd0,
      isBotAdmins: _0x483d0b,
      isAdmins: _0x1cad96,
      reply: _0x5a7eca,
    }
  ) => {
    try {
      if (!_0x2e8cd2) {
        throw 'Example : ' + (_0x1865b4 + _0x5c98dc) + ' what is a bot'
      }
      let _0x21eff3 = require('google-it')
      const _0x55e5a6 = { query: _0x2e8cd2 }
      _0x21eff3(_0x55e5a6).then((_0x4e1e42) => {
        let _0x97747 = 'Google Search From : ' + _0x2e8cd2 + '\n\n'
        for (let _0x3b94d3 of _0x4e1e42) {
          _0x97747 += '\u2B54 *Title* : ' + _0x3b94d3.title + '\n'
          _0x97747 += '\u2B54 *Description* : ' + _0x3b94d3.snippet + '\n'
          _0x97747 +=
            '\u2B54 *Link* : ' +
            _0x3b94d3.link +
            '\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n'
        }
        _0x3ff6e4.reply(_0x97747)
      })
      let _0x3a5e1d = [
        {
          name: 'cta_url',
          buttonParamsJson: JSON.stringify({
            display_text: 'see in google',
            url: _0x2e8cd2,
            merchant_url: _0x2e8cd2,
          }),
        },
        {
          name: 'quick_reply',
          buttonParamsJson: JSON.stringify({
            display_text: 'restart again',
            id: '.google ' + _0x2e8cd2,
          }),
        },
      ]
      const _0xf45a89 = {
        image: 'https://telegra.ph/file/497a6d76131059588e9e2.jpg',
        header: '',
        footer: config.FOOTER,
        body: 'VAJIRA MD GOOGLE SEARCH',
      }
      let _0x1b03db = _0xf45a89
      return await _0x1ebc27.sendButtonMessage(
        _0xfd92c5,
        _0x3a5e1d,
        _0x28e98d,
        _0x1b03db
      )
      const _0x5361b4 = {
        text: '\u2705',
        key: _0x3ff6e4.key,
      }
      const _0x56300d = { react: _0x5361b4 }
      await _0x1ebc27.sendMessage(_0xfd92c5, _0x56300d)
    } catch (_0x255345) {
      _0x5a7eca()
      _0x5e2d27(_0x255345)
    }
  }
)
const _0x41e663 = {}
_0x41e663.pattern = 'lyrics'
_0x41e663.alias = ['lyric']
_0x41e663.react = '\uD83C\uDF99️'
_0x41e663.desc = 'song lyrics search'
_0x41e663.category = 'search'
_0x41e663.use = '.lyric <song name>'
_0x41e663.filename = __filename
cmd(
  _0x41e663,
  async (
    _0x4e838a,
    _0x21efbf,
    _0x4f017a,
    {
      from: _0x1c1a6c,
      l: _0xb28e73,
      quoted: _0xfee92b,
      body: _0x2624b4,
      isCmd: _0x5d8e0b,
      command: _0x4c9f0e,
      args: _0x237c9d,
      q: _0x328483,
      isGroup: _0x33c77a,
      sender: _0x47287d,
      senderNumber: _0x524a03,
      botNumber2: _0x30efc5,
      botNumber: _0xb6ed8,
      pushname: _0x281b32,
      isMe: _0x52196d,
      isOwner: _0x3aa7bf,
      groupMetadata: _0x4cca85,
      groupName: _0x7e6e67,
      participants: _0x4ac927,
      groupAdmins: _0x3decb4,
      isBotAdmins: _0x2ffa82,
      isAdmins: _0x3c1a4a,
      reply: _0x332527,
    }
  ) => {
    try {
      if (!_0x328483) {
        return _0x332527(tmsg5)
      }
      const _0x4e19dc = await fetchJson(
        'https://api.sdbots.tech/lyrics?song=' + _0x328483
      )
      if (_0x4e19dc.lyrics) {
        _0x332527(
          '\n\u250C\u2500\u2500\u2500[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *LYRICS SEARCH*\n   \n*' +
            _0x4e19dc.title +
            '*\n_' +
            _0x4e19dc.artist +
            '_\n\n\n' +
            _0x4e19dc.lyrics +
            '\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C9'
        )
      } else {
        _0x332527()
      }
    } catch (_0x11704d) {
      _0x332527()
      _0xb28e73(_0x11704d)
    }
  }
)
const _0x5b430d = {}
_0x5b430d.pattern = 'itunes'
_0x5b430d.react = '\uD83C\uDF99️'
_0x5b430d.desc = descg1
_0x5b430d.category = 'search'
_0x5b430d.use = '.itunes <song name>'
_0x5b430d.filename = __filename
cmd(
  _0x5b430d,
  async (
    _0x4ab97e,
    _0x181cbf,
    _0x35fbb0,
    {
      from: _0x469978,
      l: _0x25d4b9,
      quoted: _0x568b25,
      body: _0x529a1d,
      isCmd: _0x1d8399,
      command: _0x225fb1,
      args: _0x5b3b30,
      q: _0x80386b,
      isGroup: _0xe11fdd,
      sender: _0xf6396f,
      senderNumber: _0x38bf92,
      botNumber2: _0x20e02e,
      botNumber: _0x33f04d,
      pushname: _0x4f1044,
      isMe: _0x3b64ac,
      isOwner: _0xf34fab,
      groupMetadata: _0x1f8141,
      groupName: _0x3607bb,
      participants: _0x2b8bf0,
      groupAdmins: _0x94404,
      isBotAdmins: _0x3b378d,
      isAdmins: _0x4c55c0,
      reply: _0x240bf8,
    }
  ) => {
    try {
      if (!_0x80386b) {
        return _0x240bf8('Please provide a song name')
      }
      let _0x49fe03 = await fetch(
        'https://api.popcat.xyz/itunes?q=' + _0x80386b
      )
      if (!_0x49fe03.ok) {
        throw new Error('API request failed with status ' + _0x49fe03.status)
      }
      let _0x9e541e = await _0x49fe03.json()
      console.log('JSON response:', _0x9e541e)
      let _0x29aab0 =
        '*Song Information:*\n\n     \u2022 *Name:* ' +
        _0x9e541e.name +
        '\n\n     \u2022 *Artist:* ' +
        _0x9e541e.artist +
        '\n\n     \u2022 *Album:* ' +
        _0x9e541e.album +
        '\n\n     \u2022 *Release Date:* ' +
        _0x9e541e.release_date +
        '\n\n     \u2022 *Price:* ' +
        _0x9e541e.price +
        '\n\n     \u2022 *Length:* ' +
        _0x9e541e.length +
        '\n\n     \u2022 *Genre:* ' +
        _0x9e541e.genre +
        '\n\n     \u2022 *URL:* ' +
        _0x9e541e.url
      if (_0x9e541e.thumbnail) {
        const _0x43a1c4 = { url: _0x9e541e.thumbnail }
        const _0xe1feeb = {
          image: _0x43a1c4,
          caption: _0x29aab0,
        }
        await _0x4ab97e.sendMessage(_0x181cbf.chat, _0xe1feeb, {
          quoted: _0x181cbf,
        })
      }
      const _0x440b61 = {
        text: '\u2705',
        key: _0x181cbf.key,
      }
      const _0x6fa149 = { react: _0x440b61 }
      await _0x4ab97e.sendMessage(_0x469978, _0x6fa149)
    } catch (_0x21574c) {
      _0x240bf8()
      _0x25d4b9(_0x21574c)
    }
  }
)
const _0x42a9ec = {}
_0x42a9ec.pattern = 'true'
_0x42a9ec.alias = ['truecaller']
_0x42a9ec.react = '\uD83D\uDCAF'
_0x42a9ec.desc = descg
_0x42a9ec.category = 'search'
_0x42a9ec.use = '.true <phone number>'
_0x42a9ec.filename = __filename
cmd(
  _0x42a9ec,
  async (
    _0x4151fc,
    _0x415135,
    _0x47e679,
    {
      from: _0xc4eb7b,
      l: _0x4cc0f8,
      quoted: _0x3a018f,
      body: _0x236071,
      isCmd: _0x1fb81b,
      command: _0x5a3ea3,
      args: _0x359c3e,
      q: _0xf10a77,
      isGroup: _0xe4fff6,
      sender: _0x4c67f5,
      senderNumber: _0x13ae62,
      botNumber2: _0x56106c,
      botNumber: _0x1f5274,
      pushname: _0x285bf8,
      isMe: _0x582ec4,
      isOwner: _0xf7111d,
      groupMetadata: _0x14e0e2,
      groupName: _0x3cbd15,
      participants: _0x4684e6,
      groupAdmins: _0x49393e,
      isBotAdmins: _0x1e574b,
      isAdmins: _0x3868cc,
      reply: _0x3783bd,
    }
  ) => {
    try {
      if (!_0xf10a77) {
        return _0x3783bd('Please provide a phone number.')
      }
      const _0x3b9bfc =
          'a1i0h--loh5IMkhktEDXmgSLUQDHGrXDUbWqFoWEgiItBNgppvYin-rG97CRLpuh',
        _0x2c4d71 =
          'https://sid-bhai.vercel.app/api/truecaller?phone=' +
          encodeURIComponent(_0xf10a77) +
          '&id=' +
          _0x3b9bfc
      let _0x4fbf06 = await axios.get(_0x2c4d71)
      console.log(_0x4fbf06)
      let _0x504608 = _0x4fbf06.data
      const {
        name: _0x260f7c,
        alternateName: _0x57fbcb,
        addresses: _0x265a19,
        email: _0x50e921,
        countryDetails: _0x1c7b91,
      } = _0x504608
      let _0x1b5dbc = '\u256D\u2013\u2013\u300E *Phone Detail* \u300F\n'
      _0x1b5dbc += '\u2506 \u269D *Name:* ' + _0x260f7c + '\n'
      _0x265a19 &&
        _0x265a19.length > 0 &&
        ((_0x1b5dbc +=
          '\u2506 \u269D *Address:* ' +
          _0x265a19[0].city +
          ', ' +
          _0x265a19[0].countryCode +
          '\n'),
        (_0x1b5dbc +=
          '\u2506 \u269D *Time Zone:* ' + _0x265a19[0].timeZone + '\n'),
        (_0x1b5dbc +=
          '\u2506 \u269D *Pin Code* ' + _0x265a19[0].zipCode + '\n'),
        (_0x1b5dbc += '\u2506 \u269D *Street* ' + _0x265a19[0].street + '\n'))
      _0x1b5dbc += '\u2506 \u269D *Email:* ' + _0x50e921 + '\n'
      _0x1b5dbc +=
        '\u2570\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u0F13\n'
      if (_0x1c7b91) {
        _0x1b5dbc += '\u256D\u2013\u2013\u300E *countryDetails* \u300F\n'
        _0x1b5dbc += '\u2506 \u269D *Name:* ' + _0x1c7b91.name + '\n'
        _0x1b5dbc += '\u2506 \u269D *Native:* ' + _0x1c7b91.native + '\n'
        _0x1b5dbc += '\u2506 \u269D *Phone Code:* +' + _0x1c7b91.phone[0] + '\n'
        _0x1b5dbc += '\u2506 \u269D *Continent:* ' + _0x1c7b91.continent + '\n'
        _0x1b5dbc += '\u2506 \u269D *Capital:* ' + _0x1c7b91.capital + '\n'
        _0x1b5dbc +=
          '\u2506 \u269D *Currency:* ' + _0x1c7b91.currency.join(', ') + '\n'
        _0x1b5dbc +=
          '\u2506 \u269D *Languages:* ' + _0x1c7b91.languages.join(', ') + '\n'
        _0x1b5dbc += '\u2506 \u269D *Flag:* ' + _0x1c7b91.flag + '\n'
        _0x1b5dbc +=
          '\u2570\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u0F13'
      }
      const _0x3d1e68 = { q: _0x1b5dbc }
      const _0x33c59e = { quoted: _0x415135 }
      await _0x4151fc.sendMessage(_0xc4eb7b, _0x3d1e68, _0x33c59e)
    } catch (_0x5bbf62) {
      _0x3783bd('*Error !!*')
      _0x4cc0f8(_0x5bbf62)
    }
  }
)
const _0x2e3263 = {}
_0x2e3263.pattern = 'ip'
_0x2e3263.alias = ['ipstalk', 'sip', 'searchip', 'ip-locator']
_0x2e3263.react = '\uD83C\uDF10'
_0x2e3263.desc = desct
_0x2e3263.category = 'search'
_0x2e3263.use = '.ipstalk 112.134.193.130'
_0x2e3263.filename = __filename
cmd(
  _0x2e3263,
  async (
    _0xeb48f,
    _0x41cf1a,
    _0x8dfce,
    {
      from: _0x151237,
      l: _0x5bec9e,
      quoted: _0x452bdd,
      body: _0x4ce154,
      isCmd: _0x3e2ee8,
      command: _0x460d94,
      args: _0x22cd93,
      q: _0x268bc7,
      isGroup: _0x434271,
      sender: _0x1a4d02,
      senderNumber: _0xc4d350,
      botNumber2: _0x3bbccd,
      botNumber: _0x38a5b0,
      pushname: _0x17d49c,
      isMe: _0x10f0b2,
      isOwner: _0x486757,
      groupMetadata: _0x13c379,
      groupName: _0x54aed6,
      participants: _0x3e3ae1,
      groupAdmins: _0x2105cc,
      isBotAdmins: _0x4b5578,
      isAdmins: _0x16e9b6,
      reply: _0xda98ac,
    }
  ) => {
    try {
      if (!_0x268bc7) {
        return _0xda98ac(needus)
      }
      if (!_0x268bc7.includes('.')) {
        return _0xda98ac(needus)
      }
      const _0x13608e = 'IP :',
        _0x5d0e0b = 'STATUS :',
        _0x4bafb6 = 'CONTINENT :',
        _0x427523 = 'COUNTRY :',
        _0x169066 = 'COUNTRYCODE :',
        _0x13c95b = 'REGIONNAME :',
        _0x4944fa = 'CITY :',
        _0x51f76d = 'ZIP :',
        _0x16c5d2 = 'CURRENCY :',
        _0x2100d1 = 'ISP :',
        _0x1792cf = 'MOBILE :',
        _0x329950 = 'PROXY :',
        _0xbf9cd8 = await fetchJson(
          'https://api.techniknews.net/ipgeo/' + _0x268bc7
        ),
        _0x11ca75 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n    *IP STALKER*\n    \n*\uD83D\uDD34 ' +
          _0x13608e +
          '* ```' +
          _0x268bc7 +
          '```\n' +
          '*\u2705' +
          _0x5d0e0b +
          '* ```' +
          _0xbf9cd8.status +
          '```\n' +
          '*\uD83C\uDF10' +
          _0x4bafb6 +
          '* ```' +
          _0xbf9cd8.continent +
          '```\n' +
          '*\uD83D\uDDFA' +
          _0x427523 +
          '* ```' +
          _0xbf9cd8.country +
          '```\n' +
          '*\uD83D\uDD22' +
          _0x169066 +
          '* ```' +
          _0xbf9cd8.countryCode +
          '```\n' +
          '*\uD83C\uDF0D' +
          _0x13c95b +
          '* ```' +
          _0xbf9cd8.regionName +
          '```\n' +
          '*\uD83D\uDEA9' +
          _0x4944fa +
          '* ```' +
          _0xbf9cd8.city +
          '```\n' +
          '*\uD83C\uDFDB' +
          _0x51f76d +
          '* ```' +
          _0xbf9cd8.zip +
          '```\n' +
          '*\uD83D\uDCB8' +
          _0x16c5d2 +
          '* ```' +
          _0xbf9cd8.currency +
          '```\n' +
          '*\uD83D\uDCE1' +
          _0x2100d1 +
          '* ```' +
          _0xbf9cd8.isp +
          '```\n' +
          '*\uD83D\uDEE1' +
          _0x329950 +
          '* ```' +
          _0xbf9cd8.proxy +
          '```\n' +
          '*\uD83D\uDCF1' +
          _0x1792cf +
          '* ```' +
          _0xbf9cd8.mobile +
          '```\n\n' +
          '\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C9',
        _0x5bc476 = { text: _0x11ca75 }
      const _0xe1901e = { quoted: _0x41cf1a }
      await _0xeb48f.sendMessage(_0x151237, _0x5bc476, _0xe1901e)
    } catch (_0xeee6f4) {
      _0xda98ac(cantf)
      _0x5bec9e(_0xeee6f4)
    }
  }
)
const _0x394871 = {}
_0x394871.pattern = 'pemoji'
_0x394871.react = '\uD83D\uDD16'
_0x394871.desc = 'imoji to image convert'
_0x394871.category = 'search'
_0x394871.use = '.pemoji'
_0x394871.filename = __filename
cmd(
  _0x394871,
  async (
    _0xeb8289,
    _0x445cc7,
    _0x2119bb,
    {
      from: _0x1f5c4a,
      l: _0x27c9ef,
      quoted: _0x6a3bc,
      body: _0x545aef,
      isCmd: _0x5842fa,
      command: _0x7c4ab,
      args: _0x819c25,
      q: _0x5ded7a,
      isGroup: _0x2f416d,
      sender: _0x18f317,
      senderNumber: _0xff31b9,
      botNumber2: _0x427f14,
      botNumber: _0x38cdff,
      pushname: _0x120c79,
      isMe: _0x2b4fd8,
      isOwner: _0x347ba9,
      groupMetadata: _0x346800,
      groupName: _0x37c421,
      participants: _0x13964b,
      groupAdmins: _0x30c807,
      isBotAdmins: _0xf7d325,
      isAdmins: _0x1c28b0,
      reply: _0xf64828,
    }
  ) => {
    try {
      if (!_0x5ded7a) {
        return _0xf64828(
          '*\uD83D\uDC78\uD83D\uDCAC Please Give me a imoji*\nExample - .' +
            _0x7c4ab +
            '\uD83D\uDC78'
        )
      }
      const _0x2b45c5 = {
        text: '\u2728',
        key: _0x445cc7.key,
      }
      const _0x23e9ec = { react: _0x2b45c5 }
      await _0xeb8289.sendMessage(_0x1f5c4a, _0x23e9ec)
      await _0xeb8289.sendMessage(
        _0x445cc7.chat,
        {
          image: {
            url:
              'https://api.vihangayt.me/search/semoji?q=' +
              encodeURIComponent(_0x5ded7a) +
              ' ',
          },
          caption: '' + global.cap,
        },
        { quoted: _0x445cc7 }
      )
      const _0x39a5f8 = {
        text: '\u2705',
        key: _0x445cc7.key,
      }
      const _0x3fbcc1 = { react: _0x39a5f8 }
      await _0xeb8289.sendMessage(_0x1f5c4a, _0x3fbcc1)
    } catch (_0x3bcf58) {
      _0xf64828()
      _0x27c9ef(_0x3bcf58)
    }
  }
)
const _0x5f5837 = {}
_0x5f5837.pattern = 'bard'
_0x5f5837.alias = ['bardai', 'gbard', 'googlebard', 'googleai', 'ai2']
_0x5f5837.react = '\uD83D\uDC7E'
_0x5f5837.desc = desct
_0x5f5837.category = 'search'
_0x5f5837.use = '.bard ha'
_0x5f5837.filename = __filename
cmd(
  _0x5f5837,
  async (
    _0x21fe21,
    _0x563033,
    _0x4e3ac0,
    {
      from: _0x52e32b,
      l: _0x5b31fb,
      prefix: _0x3c6939,
      quoted: _0x1f565f,
      body: _0x429f53,
      isCmd: _0x23e481,
      command: _0xe7beb7,
      args: _0x896d68,
      q: _0x11753e,
      isGroup: _0x6f5a00,
      sender: _0x446635,
      senderNumber: _0xc9ddd0,
      botNumber2: _0x5a6680,
      botNumber: _0x16aa8a,
      pushname: _0x29d70f,
      isMe: _0x242792,
      isOwner: _0x1856b9,
      groupMetadata: _0x4370c3,
      groupName: _0x413a2c,
      participants: _0x4e04a2,
      groupAdmins: _0x3f6ac7,
      isBotAdmins: _0xe2daf4,
      isAdmins: _0x39da76,
      reply: _0x2fc064,
    }
  ) => {
    try {
      if (!_0x11753e) {
        return _0x2fc064(needus)
      }
      let _0x1dc438 = await fetchJson(
          'https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json'
        ),
        _0x2d7ece = _0x1dc438.users,
        _0x527e20 = _0x2d7ece[Math.floor(Math.random() * _0x2d7ece.length)]
      const _0x1f006c = await fetchJson(
        _0x1dc438.xz + 'api/bard?text=' + _0x11753e + '&apikey=' + _0x527e20
      )
      return await _0x2fc064(_0x1f006c.content)
    } catch (_0x2d83db) {
      try {
        const _0x28cbb8 = await fetchJson(
          'https://api.akuari.my.id/ai/gbard?chat=' + _0x11753e
        )
        return await _0x2fc064(_0x28cbb8.respon)
      } catch (_0x47414d) {
        _0x2fc064(cantf)
        _0x5b31fb(_0x47414d)
      }
    }
  }
)
const _0x38468c = {}
_0x38468c.pattern = 'bingimgai'
_0x38468c.alias = ['midj']
_0x38468c.react = '\uD83D\uDCF7'
_0x38468c.desc = 'Generate Images using Bing AI'
_0x38468c.category = 'search'
_0x38468c.use = '.bingimgai <prompt>'
_0x38468c.filename = __filename
cmd(
  _0x38468c,
  async (
    _0x221fa6,
    _0x35a3b1,
    _0x19e6e3,
    {
      from: _0x3f28c6,
      l: _0x5578fe,
      quoted: _0x47e0cd,
      body: _0x1d35a0,
      isCmd: _0x3ccf67,
      command: _0x16c18b,
      args: _0x27ca54,
      q: _0xb155f2,
      isGroup: _0xb17bbd,
      sender: _0x13a0f5,
      senderNumber: _0xa92a29,
      botNumber2: _0x2c1287,
      botNumber: _0x445985,
      pushname: _0x271b74,
      isMe: _0x3ffb9b,
      isOwner: _0x4577e9,
      groupMetadata: _0x353dce,
      groupName: _0x519e4a,
      participants: _0x4eee0c,
      groupAdmins: _0x4eea20,
      isBotAdmins: _0x2373c3,
      isAdmins: _0x38c6e0,
      reply: _0x4d9e50,
    }
  ) => {
    try {
      if (!_0xb155f2) {
        return await _0x4d9e50('*Give me a prompt to generate images*')
      }
      let _0x184c9e = await fetchJson(
        'https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=' +
          _0xb155f2 +
          '&apiKey=vihangayt0'
      )
      if (
        _0x184c9e &&
        _0x184c9e.result &&
        Array.isArray(_0x184c9e.result) &&
        _0x184c9e.result.length > 0
      ) {
        for (
          let _0x3be92d = 0;
          _0x3be92d < _0x184c9e.result.length;
          _0x3be92d++
        ) {
          const _0x3631a5 = { url: _0x184c9e.result[_0x3be92d] }
          const _0x1a4535 = {
            image: _0x3631a5,
            caption: config.FOOTER,
          }
          const _0x5dcc83 = { quoted: _0x35a3b1 }
          await _0x221fa6.sendMessage(_0x3f28c6, _0x1a4535, _0x5dcc83)
        }
      } else {
        _0x4d9e50('No images found for the given prompt')
      }
    } catch (_0x234327) {
      _0x4d9e50('Unable to generate images to the given prompt')
      _0x5578fe(_0x234327)
    }
  }
)
const _0x1155ae = {}
_0x1155ae.pattern = 'blackbox'
_0x1155ae.alias = ['bb']
_0x1155ae.react = '\uD83D\uDC7E'
_0x1155ae.desc = 'Blackbox ai chat'
_0x1155ae.category = 'search'
_0x1155ae.use = '.blackbox hi'
_0x1155ae.filename = __filename
cmd(
  _0x1155ae,
  async (
    _0x91bc65,
    _0x5196fd,
    _0x353c01,
    {
      from: _0x3d41c0,
      l: _0x1c5ecc,
      prefix: _0x142b3e,
      quoted: _0x2f0b51,
      body: _0x5d4839,
      isCmd: _0x13babe,
      command: _0x506b09,
      args: _0x37fa08,
      q: _0x2eab9e,
      isGroup: _0x5a7213,
      sender: _0xcfc292,
      senderNumber: _0xeda4f,
      botNumber2: _0x23f1ec,
      botNumber: _0x216e94,
      pushname: _0x380a79,
      isMe: _0x4fcce4,
      isOwner: _0xa3befb,
      groupMetadata: _0xb7b686,
      groupName: _0x296bdb,
      participants: _0x90c05f,
      groupAdmins: _0x25ecc0,
      isBotAdmins: _0x9545f9,
      isAdmins: _0x68fc1f,
      reply: _0x5eb4ad,
    }
  ) => {
    try {
      if (!_0x2eab9e) {
        return _0x5eb4ad('Need a keyword')
      }
      var _0x26ef57 = (
        await fetchJson('https://api.vihangayt.asia/ai/blackbox?q=' + _0x2eab9e)
      ).result
      return await _0x5eb4ad(_0x26ef57)
    } catch (_0xf8e070) {
      _0x5eb4ad('Unable to generate')
      _0x1c5ecc(_0xf8e070)
    }
  }
)
const _0x5b66fa = {}
_0x5b66fa.pattern = 'slsubsearch'
_0x5b66fa.react = '\uD83D\uDD0E'
_0x5b66fa.desc = 'Search All Subtitles  from Web Site'
_0x5b66fa.category = 'search'
_0x5b66fa.use = '.slsubsearch'
_0x5b66fa.filename = __filename
cmd(
  _0x5b66fa,
  async (
    _0x4a20ac,
    _0xd690f8,
    _0x34f4a0,
    {
      from: _0x17d0d2,
      l: _0x5c4da3,
      quoted: _0x299aea,
      body: _0x4ce0a9,
      isCmd: _0x3654cc,
      command: _0x403c28,
      args: _0x539a77,
      q: _0x3362eb,
      isGroup: _0x134179,
      sender: _0x38fa10,
      senderNumber: _0x26620e,
      botNumber2: _0x2182d1,
      botNumber: _0x261ac8,
      pushname: _0x1ced39,
      isMe: _0x3ff703,
      isOwner: _0x3e49bc,
      groupMetadata: _0x2a0cd6,
      groupName: _0x22c1fc,
      participants: _0x483ab6,
      groupAdmins: _0x84c7e4,
      isBotAdmins: _0x4341cf,
      isCreator: _0x5c72e4,
      isDev: _0x2f4c97,
      isAdmins: _0x59c717,
      reply: _0x391629,
    }
  ) => {
    try {
      if (!_0x3362eb) {
        return _0x391629('\u2757 *Please enter movie name to Search Subtitles*')
      }
      const _0x370537 = await subsearch(_0x3362eb)
      let _0x4fc2ab =
        '\n\u274D\u26AF\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u26AF\u274D\n        \uD83C\uDF10  *\uD835\uDE82\uD835\uDE7B \uD835\uDE82\uD835\uDE84\uD835\uDE71 \uD835\uDE82\uD835\uDE74\uD835\uDE70\uD835\uDE81\uD835\uDE72\uD835\uDE77 \uD835\uDE7B\uD835\uDE78\uD835\uDE82\uD835\uDE83*  \uD83C\uDF10\n \u26A1 *ᴠᴀᴊɪʀᴀ ᴍᴅ ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* \u26A1\n\u274D\u26AF\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u26AF\u274D\n\n\n'
      for (let _0x1369c8 of _0x370537.results) {
        _0x4fc2ab +=
          '\uD83D\uDCC3 *' +
          _0x1369c8.no +
          ' - ' +
          _0x1369c8.title +
          '*\n\uD83D\uDD17 _Link : ' +
          _0x1369c8.link +
          '_ \n\n\n'
      }
      const _0x946ba5 = {
        url: 'https://telegra.ph/file/b4caa5682d75220623b83.jpg',
      }
      const _0xed5b5c = { quoted: _0xd690f8 }
      await _0x4a20ac.sendMessage(
        _0x17d0d2,
        {
          image: _0x946ba5,
          caption:
            _0x4fc2ab +
            '*ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
        },
        _0xed5b5c
      )
    } catch (_0x365bb6) {
      _0x391629('\u26D4 *Error accurated !!*\n\n' + _0x365bb6)
      _0x5c4da3(_0x365bb6)
    }
  }
)
const _0x3c9416 = {}
_0x3c9416.pattern = 'imdb'
_0x3c9416.react = '\uD83C\uDF4E'
_0x3c9416.desc = 'To check imdb'
_0x3c9416.category = 'search'
_0x3c9416.use = '.imdb'
cmd(
  _0x3c9416,
  async (
    _0x23e6a3,
    _0x34617f,
    _0xadb1d4,
    {
      from: _0x59fdad,
      l: _0x5606e1,
      quoted: _0x53186e,
      body: _0x44c8fc,
      isCmd: _0x4ff725,
      command: _0x140f63,
      args: _0x1f6801,
      q: _0x636037,
      isGroup: _0x3d0f77,
      sender: _0x31675f,
      senderNumber: _0x30b276,
      botNumber2: _0x10b89e,
      botNumber: _0x511c01,
      pushname: _0x2c6aca,
      isMe: _0x54b519,
      isOwner: _0x1396c8,
      groupMetadata: _0x57122d,
      groupName: _0x1da0c9,
      participants: _0x15d790,
      groupAdmins: _0x3c5602,
      isBotAdmins: _0x1be906,
      isAdmins: _0x1d7dc7,
      reply: _0x2313c,
    }
  ) => {
    try {
      if (!_0x636037) {
        return _0x2313c('_Name a Series or movie')
      }
      let _0x36250f = await axios.get(
          'http://www.omdbapi.com/?apikey=742b2d09&t=' +
            _0x636037 +
            '&plot=full'
        ),
        _0x21be9a = ''
      console.log(_0x36250f.data)
      _0x21be9a +=
        '\u268D\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268D\n ``` IMDB SEARCH```\n\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\n'
      _0x21be9a += '\uD83C\uDFACTitle      : ' + _0x36250f.data.Title + '\n'
      _0x21be9a += '\uD83D\uDCC5Year       : ' + _0x36250f.data.Year + '\n'
      _0x21be9a += '\u2B50Rated      : ' + _0x36250f.data.Rated + '\n'
      _0x21be9a += '\uD83D\uDCC6Released   : ' + _0x36250f.data.Released + '\n'
      _0x21be9a += '\u23F3Runtime    : ' + _0x36250f.data.Runtime + '\n'
      _0x21be9a += '\uD83C\uDF00Genre      : ' + _0x36250f.data.Genre + '\n'
      _0x21be9a +=
        '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBBDirector   : ' +
        _0x36250f.data.Director +
        '\n'
      _0x21be9a += '\u270DWriter     : ' + _0x36250f.data.Writer + '\n'
      _0x21be9a += '\uD83D\uDC68Actors     : ' + _0x36250f.data.Actors + '\n'
      _0x21be9a += '\uD83D\uDCC3Plot       : ' + _0x36250f.data.Plot + '\n'
      _0x21be9a += '\uD83C\uDF10Language   : ' + _0x36250f.data.Language + '\n'
      _0x21be9a += '\uD83C\uDF0DCountry    : ' + _0x36250f.data.Country + '\n'
      _0x21be9a += '\uD83C\uDF96️Awards     : ' + _0x36250f.data.Awards + '\n'
      _0x21be9a += '\uD83D\uDCE6BoxOffice  : ' + _0x36250f.data.BoxOffice + '\n'
      _0x21be9a +=
        '\uD83C\uDFD9️Production : ' + _0x36250f.data.Production + '\n'
      _0x21be9a +=
        '\uD83C\uDF1FimdbRating : ' + _0x36250f.data.imdbRating + '\n'
      _0x21be9a += '\u2705imdbVotes  : ' + _0x36250f.data.imdbVotes + ''
      const _0x3f2295 = { url: _0x36250f.data.Poster }
      const _0xbda4b6 = {
        image: _0x3f2295,
        caption: _0x21be9a,
      }
      const _0x5c340d = { quoted: _0x34617f }
      _0x23e6a3.sendMessage(_0xadb1d4.chat, _0xbda4b6, _0x5c340d)
      const _0x57af4c = {
        text: '\u2705',
        key: _0x34617f.key,
      }
      const _0x3c4605 = { react: _0x57af4c }
      await _0x23e6a3.sendMessage(_0x59fdad, _0x3c4605)
    } catch (_0x390c55) {
      _0x5606e1(_0x390c55)
    }
  }
)
