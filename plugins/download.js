const config = require('../settings')
const apkdl = require('../lib/apkdl'),
  maker = require('mumaker')
var request = require('request')
const { mediafireDl } = require('mfiredlcore-vihangayt'),
  {
    pinterest,
    wallpaper,
    wikimedia,
    quotesAnime,
    aiovideodl,
    umma,
    ringtone,
    styletext,
  } = require('../lib/scraper'),
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
  fg = require('api-dylux'),
  { searchSinhalasub, downSinhalasub } = require('../lib/movie.js'),
  gis = require('async-g-i-s'),
  l = console.log,
  getFbVideoInfo = require('fb-downloader-scrapper')
var { subsearch, subdl } = require('@sl-code-lords/si-subdl'),
  { SinhalaSub } = require('@sl-code-lords/movie-dl')
const { Tiktok } = require('../lib/tiktok')
function regtik(_0x3866e0) {
  return _0x3866e0.includes('tiktok.com')
}
const { cmd, commands } = require('../lib/command')
let soundcloud = async (_0x1a7a8a) => {
    return new Promise((_0x327760, _0x21eb97) => {
      const _0x3c77b0 = {
        method: 'POST',
        url: 'https://www.klickaud.co/download.php',
        headers: {},
        formData: {},
      }
      _0x3c77b0.headers['content-type'] = 'application/x-www-form-urlencoded'
      _0x3c77b0.formData.value = _0x1a7a8a
      _0x3c77b0.formData[
        '2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37'
      ] = '710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3'
      const _0x17769e = _0x3c77b0
      request(_0x17769e, async function (_0x8d052b, _0x513f34, _0x3b1964) {
        if (_0x8d052b) {
          throw new Error(_0x8d052b)
        }
        const _0x2f65c3 = cheerio.load(_0x3b1964)
        _0x327760({
          judul: _0x2f65c3(
            '#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)'
          ).text(),
          download_count: _0x2f65c3(
            '#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)'
          ).text(),
          thumb: _0x2f65c3(
            '#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img'
          ).attr('src'),
          link: _0x2f65c3('#dlMP3')
            .attr('onclick')
            .split("downloadFile('")[1]
            .split("',")[0],
        })
      })
    })
  },
  axios = require('axios')
async function ssearch(_0x5da8da) {
  let _0x23748b = 'https://m.soundcloud.com',
    _0x317925 = await axios.get(
      _0x23748b + '/search?q=' + encodeURIComponent(_0x5da8da),
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        },
      }
    ),
    _0x30e2f7 = cheerio.load(_0x317925.data),
    _0x3b5715 = []
  return (
    _0x30e2f7('div > ul > li > div').each(function (_0xdfdf45, _0x2dfda0) {
      let _0x32517a = _0x30e2f7(_0x2dfda0).find('a').attr('aria-label'),
        _0x2a7ad2 = _0x23748b + _0x30e2f7(_0x2dfda0).find('a').attr('href'),
        _0x386439 = _0x30e2f7(_0x2dfda0)
          .find('a > div > div > div > picture > img')
          .attr('src'),
        _0x4b1e1a = _0x30e2f7(_0x2dfda0)
          .find('a > div > div > div')
          .eq(1)
          .text(),
        _0x1e1b7c = _0x30e2f7(_0x2dfda0)
          .find('a > div > div > div > div > div')
          .eq(0)
          .text(),
        _0x2dbdc9 = _0x30e2f7(_0x2dfda0)
          .find('a > div > div > div > div > div')
          .eq(1)
          .text(),
        _0x319c6c = _0x30e2f7(_0x2dfda0)
          .find('a > div > div > div > div > div')
          .eq(2)
          .text()
      const _0x57f630 = {
        title: _0x32517a,
        url: _0x2a7ad2,
        thumb: _0x386439,
        artist: _0x4b1e1a,
        views: _0x1e1b7c,
        release: _0x319c6c,
        timestamp: _0x2dbdc9,
      }
      _0x3b5715.push(_0x57f630)
    }),
    {
      status: _0x317925.status,
      creator: 'Caliph',
      result: _0x3b5715,
    }
  )
}
var needus = ''
if (config.LANG === 'SI') {
  needus = '*කරුණාකර මට threads url එකක් දෙන්න !! 𓄂⃫尺𝚲丂н_❖*'
} else {
  needus = '*Please give me threads url !!*'
}
var desc = ''
if (config.LANG === 'SI') {
  desc = 'Tiktok වෙතින් වීඩියෝ බාගත කරයි.'
} else {
  desc = 'Download videos from Facebook.'
}
var N_FOUND = ''
if (config.LANG === 'SI') {
  N_FOUND = '*මට කිසිවක් සොයාගත නොහැකි විය :(*'
} else {
  N_FOUND = "*I couldn't find anything :(*"
}
var urlneed = ''
if (config.LANG === 'SI') {
  urlneed = '*කරුණාකර Tiktok video url එකක් ලබා දෙන්න 𓄂⃫尺𝚲丂н_❖*'
} else {
  urlneed = '*Please give me tiktok video url..*'
}
if (config.COMMAND_TYPE === 'button') {
  const _0x5d1030 = {
    pattern: 'save',
    category: 'download',
    react: '\uD83C\uDFA7',
    use: '.save',
    filename: __filename,
  }
  cmd(
    _0x5d1030,
    async (
      _0x2af288,
      _0x4e4a66,
      _0xc0056e,
      { from: _0x174bfa, q: _0x1332f9, reply: _0x30d393 }
    ) => {
      try {
        var _0x13d653 =
            (this && this['__setModuleDefault']) ||
            (Object.create
              ? function (_0x47cee1, _0x4d8f3f) {
                  const _0x3965c3 = {
                    enumerable: true,
                    value: _0x4d8f3f,
                  }
                  Object.defineProperty(_0x47cee1, 'default', _0x3965c3)
                }
              : function (_0x12cc09, _0x32fa67) {
                  _0x12cc09.default = _0x32fa67
                }),
          _0x4ea39d =
            (this && this['__importStar']) ||
            function (_0x1caad7) {
              if (_0x1caad7 && _0x1caad7['__esModule']) {
                return _0x1caad7
              }
              var _0x4f0ecc = {}
              if (_0x1caad7 != null) {
                for (var _0x290ff8 in _0x1caad7)
                  if (
                    _0x290ff8 !== 'default' &&
                    Object.prototype.hasOwnProperty.call(_0x1caad7, _0x290ff8)
                  ) {
                    __createBinding(_0x4f0ecc, _0x1caad7, _0x290ff8)
                  }
              }
              _0x13d653(_0x4f0ecc, _0x1caad7)
              return _0x4f0ecc
            }
        const _0x206363 = _0x4ea39d(require('@whiskeysockets/baileys')),
          _0x24260f = (_0x2aa452) => {
            if (!_0x2aa452) {
              return _0x2aa452
            }
            if (/:\d+@/gi.test(_0x2aa452)) {
              let _0x21c7be = (0, _0x206363.jidDecode)(_0x2aa452) || {}
              return (
                (_0x21c7be.user &&
                  _0x21c7be.server &&
                  _0x21c7be.user + '@' + _0x21c7be.server) ||
                _0x2aa452
              )
            } else {
              return _0x2aa452
            }
          }
        var _0x5cb0b1 = _0xc0056e.key.remoteJid
        const _0xba2489 = _0x5cb0b1?.endsWith('@g.us')
        var _0x555eae = _0xba2489
            ? ms.key.participant
              ? ms.key.participant
              : ms.participant
            : _0x5cb0b1,
          _0x1b28e8 = _0x24260f(_0x2af288.user.id),
          _0x3fd614 = _0x1b28e8.split('@')[0]
        const _0x357582 = '94719199757'
        var _0x5cb494 =
            _0xc0056e.message.extendedTextMessage?.contextInfo?.quotedMessage,
          _0x28e533 = [_0x3fd614, _0x357582]
            .map(
              (_0x10fc78) => _0x10fc78.replace(/[^0-9]/g) + '@s.whatsapp.net'
            )
            .includes(_0x555eae),
          _0x555eae = _0xba2489
            ? _0xc0056e.key.participant
              ? _0xc0056e.key.participant
              : _0xc0056e.participant
            : _0x5cb0b1
        if (_0x5cb494) {
          console.log(_0x5cb494)
          let _0x1c88db
          if (_0x5cb494.imageMessage) {
            let _0xea933d = await _0x2af288.downloadAndSaveMediaMessage(
              _0x5cb494.imageMessage
            )
            const _0x2d99c7 = { url: _0xea933d }
            const _0x2af091 = {
              image: _0x2d99c7,
              caption: _0x5cb494.imageMessage.caption,
            }
            _0x1c88db = _0x2af091
          } else {
            if (_0x5cb494.videoMessage) {
              let _0x4f98eb = await _0x2af288.downloadAndSaveMediaMessage(
                _0x5cb494.videoMessage
              )
              const _0x14831e = { url: _0x4f98eb }
              const _0x15cf36 = {
                video: _0x14831e,
                caption: _0x5cb494.videoMessage.caption,
              }
              _0x1c88db = _0x15cf36
            } else {
              if (_0x5cb494.audioMessage) {
                let _0x1b7b75 = await _0x2af288.downloadAndSaveMediaMessage(
                  _0x5cb494.audioMessage
                )
                const _0x12382c = { url: _0x1b7b75 }
                const _0x37af14 = {
                  audio: _0x12382c,
                  mimetype: 'audio/mp4',
                }
                _0x1c88db = _0x37af14
              } else {
                if (_0x5cb494.stickerMessage) {
                  let _0x545f8e = await _0x2af288.downloadAndSaveMediaMessage(
                    _0x5cb494.stickerMessage
                  )
                  const _0x655af = {
                    pack: 'VAJIRA-MD',
                    type: StickerTypes.CROPPED,
                    categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
                    id: '12345',
                    quality: 70,
                    background: 'transparent',
                  }
                  let _0xb58048 = new Sticker(_0x545f8e, _0x655af)
                  const _0x2ddbd1 = await _0xb58048.toBuffer(),
                    _0x2b61d7 = { sticker: _0x2ddbd1 }
                  _0x1c88db = _0x2b61d7
                } else {
                  const _0x268247 = { q: _0x5cb494.conversation }
                  _0x1c88db = _0x268247
                }
              }
            }
          }
          _0x2af288.sendMessage(_0x555eae, _0x1c88db)
        } else {
          _0x30d393('Mention the message that you want to save')
        }
      } catch (_0x21d2ad) {
        console.log(_0x21d2ad), _0x30d393('*Error !!*')
      }
    }
  )
  const _0x37b058 = {
    pattern: 'testm',
    react: '\uD83D\uDCC3',
    desc: 'Search Sinhala sub  from Web Site',
    category: 'download',
    use: '.slsub',
    filename: __filename,
  }
  cmd(
    _0x37b058,
    async (
      _0x31af69,
      _0x150331,
      _0x2fd3af,
      {
        from: _0x856ea1,
        l: _0x3928c7,
        quoted: _0x53f478,
        body: _0x362675,
        isCmd: _0x50220b,
        command: _0x23aaf2,
        args: _0x1f2b4a,
        q: _0x51ed61,
        isGroup: _0x253f3c,
        sender: _0x55f556,
        senderNumber: _0x55ed9d,
        botNumber2: _0x2f74af,
        botNumber: _0x1939e8,
        pushname: _0x5f4da0,
        isMe: _0x241890,
        isOwner: _0x5bdd40,
        groupMetadata: _0x2fc5b1,
        groupName: _0x9f88cb,
        participants: _0x50b75c,
        groupAdmins: _0x4635f7,
        isBotAdmins: _0x2fe03b,
        isCreator: _0x417b91,
        isDev: _0x29df0d,
        isAdmins: _0x46c005,
        reply: _0x720fd,
      }
    ) => {
      try {
        if (!_0x51ed61) {
          return _0x720fd('\u2757 *Please enter movie name to download*')
        }
        var _0x252c46 = require('@sl-code-lords/movie-dl'),
          { SinhalaSub: _0x267697 } = require('@sl-code-lords/movie-dl'),
          _0x2d9d02 = await _0x267697.movie(_0x51ed61)
        let _0x2bea70 =
          '\uD83D\uDC68‍\uD83D\uDCBB RASH ＴＥＣＨ ＮＥＷＳ \uD83D\uDC68‍\uD83D\uDCBB\n\n'
        for (let _0x47f71e = 0; _0x47f71e < 1; _0x47f71e++) {
          _0x2bea70 +=
            '*\u26D3️ No:* ' + _0x2d9d02.result[_0x47f71e].title + '\n'
          _0x2bea70 +=
            '*\uD83D\uDCC3 Title:* ' +
            _0x2d9d02.result[_0x47f71e].subtitle_author +
            '\n'
          _0x2bea70 +=
            '*\uD83D\uDCDA CatName:* ' +
            _0x2d9d02.result[_0x47f71e].country +
            '\n'
          _0x2bea70 +=
            '*\uD83D\uDD52 Time:* ' +
            _0x2d9d02.result[_0x47f71e].duration +
            '\n'
          _0x2bea70 +=
            '*\uD83D\uDCDA CatName:* ' +
            _0x2d9d02.result[_0x47f71e].categories +
            '\n'
          _0x2bea70 +=
            '*\uD83D\uDD52 Time:* ' +
            _0x2d9d02.result[_0x47f71e].release_date +
            '\n'
          _0x2bea70 +=
            '*\uD83D\uDCCE Link:* ' +
            _0x2d9d02.result[_0x47f71e].cast +
            '\n\n--------------------------------------------\n\n\n'
        }
        return await _0x720fd(_0x2bea70)
        const _0x7529e6 = { url: _0x2d9d02.result[i].images }
        const _0xcf7fdb = {
          image: _0x7529e6,
          caption: _0x2bea70,
        }
        const _0x23215f = {}
        return (
          (_0x23215f.quoted = _0x150331),
          await _0x31af69.sendMessage(_0x856ea1, _0xcf7fdb, _0x23215f)
        )
      } catch (_0x5d3a31) {
        _0x720fd('\uD83D\uDEAB *Error Accurated !!*\n\n' + _0x5d3a31)
        _0x3928c7(_0x5d3a31)
      }
    }
  )
  const _0x5bcd28 = {
    pattern: 'soundcloud',
    react: '\uD83D\uDDC3️',
    desc: 'Download songs in SoundCloud',
    category: 'download',
    use: '.soundcloud',
    filename: __filename,
  }
  cmd(
    _0x5bcd28,
    async (
      _0x55ae5a,
      _0x90627f,
      _0x340741,
      { from: _0xa33db8, q: _0x145d64, pushname: _0x10131f, reply: _0x11dd98 }
    ) => {
      try {
        const _0x59fc56 = await ssearch(_0x145d64),
          _0x51346a = _0x59fc56.result
        let _0x48f27b =
          '> \uD83D\uDCE5 VAJIRA MD SOUNDCLOUD \uD83D\uDCE5\n\n\t SONGS DOWNLOADER \uD83D\uDCE5'
        const _0x7b7d14 = []
        for (var _0x552e35 = 0; _0x552e35 < _0x51346a.length; _0x552e35++) {
          _0x7b7d14.push({
            header: _0x552e35 + 1,
            title: '' + _0x51346a[_0x552e35].title,
            description:
              _0x51346a[_0x552e35].title +
              ' | ' +
              _0x51346a[_0x552e35].artist +
              ' | ' +
              _0x51346a[_0x552e35].views +
              ' | ' +
              _0x51346a[_0x552e35].release +
              ' | ' +
              _0x51346a[_0x552e35].timestamp,
            id: '.selectaud3 ' + _0x51346a[_0x552e35].url,
          })
        }
        const _0x5e99ec = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL,
        }
        let _0x55875d = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0x5e99ec),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Select news types',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'VAJIRA-MD',
                  rows: _0x7b7d14,
                },
              ],
            }),
          },
        ]
        const _0x31de12 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x48f27b,
        }
        let _0x24d3f8 = _0x31de12
        return await _0x55ae5a.sendButtonMessage(
          _0xa33db8,
          _0x55875d,
          _0x340741,
          _0x24d3f8
        )
      } catch (_0x567fbd) {
        _0x11dd98('*Error !!*')
        console.log(_0x567fbd)
      }
    }
  )
  const _0xbb69df = {
    alias: ['selectaud3'],
    react: '\uD83C\uDFA7',
    filename: __filename,
  }
  cmd(
    _0xbb69df,
    async (
      _0x5a64a0,
      _0x45e283,
      _0x5aba22,
      { from: _0x139dfc, q: _0x7e3450, reply: _0x3010b7 }
    ) => {
      try {
        if (!_0x7e3450) {
          return await _0x3010b7('*Please enter a query or a url!*')
        }
        const _0x39bce8 =
          '`\u2726 \uD835\uDDE6\uD835\uDDE2\uD835\uDDE1\uD835\uDDDA \uD835\uDDD7\uD835\uDDE2\uD835\uDDEA\uD835\uDDE1\uD835\uDDDF\uD835\uDDE2\uD835\uDDD4\uD835\uDDD7\uD835\uDDD8\uD835\uDDE5 \u2726`\n\n  > *SELECT AUDIO QUALITY*'
        let _0x1c1322 = [
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'Audio',
              id: '.soundaud ' + _0x7e3450,
            }),
          },
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'Document',
              id: '.sounddoc ' + _0x7e3450,
            }),
          },
        ]
        const _0x3852dc = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x39bce8,
        }
        let _0x4954e9 = _0x3852dc
        return await _0x5a64a0.sendButtonMessage(
          _0x139dfc,
          _0x1c1322,
          _0x45e283,
          _0x4954e9
        )
      } catch (_0x52781b) {
        console.log(_0x52781b)
        _0x3010b7('*Error !!*')
      }
    }
  )
  const _0x119e72 = {
    pattern: 'sounddoc',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x119e72,
    async (
      _0x345a26,
      _0x20f138,
      _0x555ed6,
      {
        from: _0x1bd775,
        l: _0x2b8e42,
        quoted: _0x5b69ac,
        body: _0x3e7c32,
        isCmd: _0x48fa85,
        command: _0x120a56,
        args: _0x444b78,
        q: _0x1bfd3e,
        isGroup: _0xd59dcf,
        sender: _0x969fca,
        senderNumber: _0x1c75cc,
        botNumber2: _0x268a84,
        botNumber: _0x34b944,
        pushname: _0x32ab2f,
        isMe: _0x42478e,
        isOwner: _0x1e0d9b,
        groupMetadata: _0x2b8c51,
        groupName: _0x3a1fbe,
        participants: _0x2c51e2,
        groupAdmins: _0x2b0475,
        isBotAdmins: _0x6b7158,
        isAdmins: _0xd03c66,
        reply: _0x3a2603,
      }
    ) => {
      try {
        const _0x2f6a29 = {
          text: '\uD83D\uDCE5',
          key: _0x20f138.key,
        }
        const _0x12d67a = { react: _0x2f6a29 }
        await _0x345a26.sendMessage(_0x1bd775, _0x12d67a)
        const _0x377e7d = { text: '*Need link...*' }
        const _0x2ebacd = { quoted: _0x20f138 }
        if (!_0x1bfd3e) {
          return await _0x345a26.sendMessage(_0x1bd775, _0x377e7d, _0x2ebacd)
        }
        const _0x560e7c = await soundcloud(_0x1bfd3e)
        let _0x325800 =
          '*\uD83D\uDCDA Name :* ' +
          _0x560e7c.judul +
          '\n*\uD83D\uDCFA Down Count :* ' +
          _0x560e7c.download_count
        const _0x413222 = { url: _0x560e7c.thumb }
        const _0x3955f6 = {
          image: _0x413222,
          caption: _0x325800,
        }
        const _0x238f88 = { quoted: _0x20f138 }
        await _0x345a26.sendMessage(_0x1bd775, _0x3955f6, _0x238f88)
        const _0x3ff31f = { url: _0x560e7c.link }
        const _0x418a1d = { quoted: _0x20f138 }
        let _0x5cc7bb = await _0x345a26.sendMessage(
          _0x1bd775,
          {
            document: _0x3ff31f,
            mimetype: 'audio/mpeg',
            fileName: _0x560e7c.judul + '.' + 'mp3',
          },
          _0x418a1d
        )
        const _0x12e397 = {
          text: '\uD83D\uDCC1',
          key: _0x5cc7bb.key,
        }
        const _0x1f03dd = { react: _0x12e397 }
        await _0x345a26.sendMessage(_0x1bd775, _0x1f03dd)
        const _0x7d8605 = {
          text: '\u2714',
          key: _0x20f138.key,
        }
        const _0xd1a251 = { react: _0x7d8605 }
        await _0x345a26.sendMessage(_0x1bd775, _0xd1a251)
      } catch (_0x30ab65) {
        _0x3a2603('*ERROR !!*')
        _0x2b8e42(_0x30ab65)
      }
    }
  )
  const _0x1068f4 = {
    pattern: 'soundaud',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x1068f4,
    async (
      _0x2cb024,
      _0x2fe0cf,
      _0x1c8ae5,
      {
        from: _0x28d850,
        l: _0x22b4c8,
        quoted: _0x11b9dc,
        body: _0x3f2049,
        isCmd: _0x261a28,
        command: _0x15a6e7,
        args: _0x5d068f,
        q: _0x2ef9de,
        isGroup: _0x1df4f3,
        sender: _0x242564,
        senderNumber: _0x484be5,
        botNumber2: _0x3dcd76,
        botNumber: _0x1174da,
        pushname: _0x446540,
        isMe: _0x540305,
        isOwner: _0x555a21,
        groupMetadata: _0x29969f,
        groupName: _0x1c3b45,
        participants: _0x5532b7,
        groupAdmins: _0x889cdd,
        isBotAdmins: _0x5a0030,
        isAdmins: _0x275d71,
        reply: _0x44ba97,
      }
    ) => {
      try {
        const _0x457596 = {
          text: '\uD83D\uDCE5',
          key: _0x2fe0cf.key,
        }
        const _0x37e228 = { react: _0x457596 }
        await _0x2cb024.sendMessage(_0x28d850, _0x37e228)
        const _0x47dcd9 = { text: '*Need link...*' }
        const _0x177108 = { quoted: _0x2fe0cf }
        if (!_0x2ef9de) {
          return await _0x2cb024.sendMessage(_0x28d850, _0x47dcd9, _0x177108)
        }
        const _0x4a9bff = await soundcloud(_0x2ef9de)
        let _0xa1f8e5 =
          '*\uD83D\uDCDA Name :* ' +
          _0x4a9bff.judul +
          '\n*\uD83D\uDCFA Down Count :* ' +
          _0x4a9bff.download_count
        const _0x2310c4 = { url: _0x4a9bff.thumb }
        const _0x10abac = {
          image: _0x2310c4,
          caption: _0xa1f8e5,
        }
        const _0x286e3c = { quoted: _0x2fe0cf }
        await _0x2cb024.sendMessage(_0x28d850, _0x10abac, _0x286e3c)
        const _0x3471eb = { url: _0x4a9bff.link }
        const _0x5b2212 = { quoted: _0x2fe0cf }
        let _0x5ed588 = await _0x2cb024.sendMessage(
          _0x28d850,
          {
            audio: _0x3471eb,
            mimetype: 'audio/mpeg',
            fileName: _0x4a9bff.judul + '.' + 'mp3',
          },
          _0x5b2212
        )
        const _0x57087d = {
          text: '\uD83D\uDCC1',
          key: _0x5ed588.key,
        }
        const _0xb3200b = { react: _0x57087d }
        await _0x2cb024.sendMessage(_0x28d850, _0xb3200b)
        const _0x4987fd = {
          text: '\u2714',
          key: _0x2fe0cf.key,
        }
        const _0x22865c = { react: _0x4987fd }
        await _0x2cb024.sendMessage(_0x28d850, _0x22865c)
      } catch (_0x1cf695) {
        _0x44ba97('*ERROR !!*'), _0x22b4c8(_0x1cf695)
      }
    }
  )
  const _0x576a70 = {
    pattern: 'fmmods',
    react: '\uD83D\uDDC3️',
    desc: 'get applications',
    category: 'download',
    use: '.fmmods',
    filename: __filename,
  }
  cmd(
    _0x576a70,
    async (
      _0x2e154f,
      _0x16de24,
      _0x1b8380,
      { from: _0x90d538, q: _0x1dee1d, pushname: _0x23cb86, reply: _0x119b8f }
    ) => {
      try {
        let _0x2dc9aa = (
            await fetchJson(
              'https://vajira-api-7967fdc132a8.herokuapp.com/downloader/fmmods'
            )
          ).data,
          _0x56cab2 =
            '> \uD83D\uDCE5 VAJIRA MD APKDL \uD83D\uDCE5\n\n\t APPLICATION DOWNLOADER \uD83D\uDCE5'
        const _0x44e2d4 = []
        for (var _0x39a0a8 = 0; _0x39a0a8 < 1; _0x39a0a8++) {
          _0x44e2d4.push({
            header: '',
            title: 'Beta Whatsapp',
            description: 'Download Beta Whatsapp',
            id:
              '.dmod ' +
              _0x2dc9aa.com_whatsapp.link +
              '+' +
              _0x2dc9aa.com_whatsapp.name,
          })
          _0x44e2d4.push({
            header: '',
            title: 'Fm Whatsapp',
            description: 'Download Fm Whatsapp',
            id:
              '.dmod ' +
              _0x2dc9aa.com_fmwhatsapp.link +
              '+' +
              _0x2dc9aa.com_fmwhatsapp.name,
          })
          _0x44e2d4.push({
            header: '',
            title: 'Gb Whatsapp',
            description: 'Download Gb Whatsapp',
            id:
              '.dmod ' +
              _0x2dc9aa.com_gbwhatsapp.link +
              '+' +
              _0x2dc9aa.com_gbwhatsapp.name,
          })
          _0x44e2d4.push({
            header: '',
            title: 'Yo Whatsapp',
            description: 'Download Yo Whatsapp',
            id:
              '.dmod ' +
              _0x2dc9aa.com_yowhatsapp.link +
              '+' +
              _0x2dc9aa.com_yowhatsapp.name,
          })
        }
        const _0x154369 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL,
        }
        let _0x45f3c3 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0x154369),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Select news types',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'VAJIRA-MD',
                  rows: _0x44e2d4,
                },
              ],
            }),
          },
        ]
        const _0x383ef2 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x56cab2,
        }
        let _0x5c9daf = _0x383ef2
        return await _0x2e154f.sendButtonMessage(
          _0x90d538,
          _0x45f3c3,
          _0x1b8380,
          _0x5c9daf
        )
      } catch (_0x140fc4) {
        _0x119b8f('*Error !!*'), console.log(_0x140fc4)
      }
    }
  )
  const _0x2f3343 = {
    pattern: 'dmod',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x2f3343,
    async (
      _0x297994,
      _0x3e3ee1,
      _0x1cd9a8,
      {
        from: _0x12ce13,
        l: _0x3096b2,
        quoted: _0x475e61,
        body: _0x29a1e2,
        isCmd: _0x3d3918,
        command: _0x10640d,
        args: _0x4a1597,
        q: _0x2bb67e,
        isGroup: _0x478126,
        sender: _0x2628a3,
        senderNumber: _0x26a475,
        botNumber2: _0x2b87a3,
        botNumber: _0x26a535,
        pushname: _0x2e79d4,
        isMe: _0x466ff6,
        isOwner: _0x2f8455,
        groupMetadata: _0xb471a8,
        groupName: _0x14bc31,
        participants: _0x1bd89d,
        groupAdmins: _0x24f78c,
        isBotAdmins: _0x46c91a,
        isAdmins: _0x43a784,
        reply: _0x33a053,
      }
    ) => {
      try {
        const _0x1974d7 = {
          text: '\uD83D\uDCE5',
          key: _0x3e3ee1.key,
        }
        const _0x3c34a8 = { react: _0x1974d7 }
        await _0x297994.sendMessage(_0x12ce13, _0x3c34a8)
        let [_0x2df622, _0x38914e] = _0x2bb67e.split`+`
        const _0x20195b = { url: _0x2df622 }
        const _0x4e80d5 = { quoted: _0x3e3ee1 }
        await _0x297994.sendMessage(
          _0x12ce13,
          {
            document: _0x20195b,
            fileName: _0x38914e + '.apk',
            mimetype: 'application/vnd.android.package-archive',
          },
          _0x4e80d5
        )
        const _0x4c92dc = {
          text: '\u2714',
          key: _0x3e3ee1.key,
        }
        const _0x6a793a = { react: _0x4c92dc }
        await _0x297994.sendMessage(_0x12ce13, _0x6a793a)
      } catch (_0x26e3ab) {
        _0x33a053('*ERROR !!*'), _0x3096b2(_0x26e3ab)
      }
    }
  )
  const _0x4e5380 = {
    pattern: 'wallpaper',
    use: '.wallpaper bike',
    react: '\uD83C\uDFA7',
    desc: 'Download images',
    category: 'download',
    filename: __filename,
  }
  cmd(
    _0x4e5380,
    async (
      _0x3dd2ce,
      _0x4f97f1,
      _0x3301cc,
      { from: _0x1e3704, q: _0x15d327, reply: _0x484b01 }
    ) => {
      try {
        let { wallpaper: _0x5791e9 } = require('../lib/scraper')
        anu = await _0x5791e9(_0x15d327)
        result = anu[Math.floor(Math.random() * anu.length)]
        let _0x52b59f = [
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'Next Picture',
              id: '.wallpaper ' + _0x15d327,
            }),
          },
        ]
        const _0x5b187a = { url: result.image[0] }
        const _0x4e03bd = {
          image: _0x5b187a,
          header: '',
          footer: config.FOOTER,
          body:
            '\uD83D\uDD2E \uD835\uDDE7\uD835\uDDDC\uD835\uDDE7\uD835\uDDDF\uD835\uDDD8 : ' +
            result.title +
            '\n\uD83D\uDD2E \uD835\uDDD6\uD835\uDDD4\uD835\uDDE7\uD835\uDDD8\uD835\uDDDA\uD835\uDDE2\uD835\uDDE5\uD835\uDDEC : ' +
            result.type +
            '\n\uD83D\uDD2E \uD835\uDDD7\uD835\uDDD8\uD835\uDDE7\uD835\uDDD4\uD835\uDDDC\uD835\uDDDF : ' +
            result.source +
            '\n\uD83D\uDD2E \uD835\uDDE0\uD835\uDDD8\uD835\uDDD7\uD835\uDDDC\uD835\uDDD4 \uD835\uDDE8\uD835\uDDE5\uD835\uDDDF : ' +
            (result.image[2] || result.image[1] || result.image[0]),
        }
        let _0x3aebf9 = _0x4e03bd
        return await _0x3dd2ce.sendButtonMessage(
          _0x1e3704,
          _0x52b59f,
          _0x4f97f1,
          _0x3aebf9
        )
      } catch (_0x266390) {
        _0x484b01('*Error !!*'), l(_0x266390)
      }
    }
  )
  const _0x1747d0 = {
    pattern: 'apk2',
    react: '\uD83D\uDDC3️',
    desc: 'get applications',
    category: 'download',
    use: '.apk2 whatsapp',
    filename: __filename,
  }
  cmd(
    _0x1747d0,
    async (
      _0x3398bb,
      _0x390288,
      _0x266720,
      { from: _0x7ffdbd, q: _0x208959, pushname: _0x21a1c1, reply: _0x115443 }
    ) => {
      try {
        const _0x2f41e8 = await apkdl.search(_0x208959),
          _0x1dfc64 = _0x2f41e8
        let _0x577c29 =
          '> \uD83D\uDCE5 VAJIRA MD APKDL \uD83D\uDCE5\n\n\t APPLICATION DOWNLOADER \uD83D\uDCE5'
        const _0x22829b = []
        for (var _0x3b481e = 0; _0x3b481e < _0x1dfc64.length; _0x3b481e++) {
          _0x22829b.push({
            header: _0x3b481e + 1,
            title: '' + _0x1dfc64[_0x3b481e].name,
            description: '',
            id: '.dapk ' + _0x1dfc64[_0x3b481e].id,
          })
        }
        const _0x26b32b = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL,
        }
        let _0x189d68 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0x26b32b),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Select news types',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'VAJIRA-MD',
                  rows: _0x22829b,
                },
              ],
            }),
          },
        ]
        const _0x31975d = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x577c29,
        }
        let _0x5e289f = _0x31975d
        return await _0x3398bb.sendButtonMessage(
          _0x7ffdbd,
          _0x189d68,
          _0x266720,
          _0x5e289f
        )
      } catch (_0x2ecb56) {
        _0x115443('*Error !!*'), console.log(_0x2ecb56)
      }
    }
  )
  const _0x41f44f = {
    pattern: 'sub',
    react: '\uD83D\uDDC3️',
    desc: 'get subtitles',
    category: 'download',
    use: '.sub avengers',
    filename: __filename,
  }
  cmd(
    _0x41f44f,
    async (
      _0x56706c,
      _0x19e88c,
      _0x582b23,
      { from: _0x494a9d, q: _0x310740, pushname: _0x4b9399, reply: _0x318a16 }
    ) => {
      try {
        const _0x217e67 = await subsearch(_0x310740),
          _0x1b1dd1 = _0x217e67.results
        let _0x36bbd3 =
          '> \uD83C\uDFAC VAJIRA MD SUBDL \uD83C\uDFAC\t\n\n\t> SUBTITILE DOWNLOADER \uD83C\uDFA5'
        const _0x345cbf = []
        for (var _0x5b5186 = 0; _0x5b5186 < _0x1b1dd1.length; _0x5b5186++) {
          _0x345cbf.push({
            header: _0x5b5186 + 1,
            title: '' + _0x1b1dd1[_0x5b5186].title,
            description: '',
            id: '.dsub ' + _0x1b1dd1[_0x5b5186].link,
          })
        }
        const _0x2ff893 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL,
        }
        let _0x59a7b6 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0x2ff893),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Select news types',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'VAJIRA-MD',
                  rows: _0x345cbf,
                },
              ],
            }),
          },
        ]
        const _0x175214 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x36bbd3,
        }
        let _0x10bb18 = _0x175214
        return await _0x56706c.sendButtonMessage(
          _0x494a9d,
          _0x59a7b6,
          _0x582b23,
          _0x10bb18
        )
      } catch (_0x5038bd) {
        _0x318a16('*Error !!*')
        console.log(_0x5038bd)
      }
    }
  )
  const _0x5eb2dc = {
    pattern: 'dsub',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x5eb2dc,
    async (
      _0x3c2725,
      _0x2f3619,
      _0x26cff2,
      {
        from: _0x4b9733,
        l: _0x39f007,
        quoted: _0x3c3956,
        body: _0x7c63f7,
        isCmd: _0x208237,
        command: _0x1fdc94,
        args: _0x46d57a,
        q: _0x20689f,
        isGroup: _0x49838b,
        sender: _0x2c573f,
        senderNumber: _0x36d09f,
        botNumber2: _0x2754d4,
        botNumber: _0xc6053b,
        pushname: _0x4e0021,
        isMe: _0x484907,
        isOwner: _0x555584,
        groupMetadata: _0x76188b,
        groupName: _0x4badb3,
        participants: _0x32fc26,
        groupAdmins: _0x56b329,
        isBotAdmins: _0x3792ab,
        isAdmins: _0xeeeb67,
        reply: _0x52be1b,
      }
    ) => {
      try {
        const _0x4e34d4 = {
          text: '\uD83D\uDCE5',
          key: _0x2f3619.key,
        }
        const _0x172602 = { react: _0x4e34d4 }
        await _0x3c2725.sendMessage(_0x4b9733, _0x172602)
        const _0x211a3b = { text: '*Need sub link...*' }
        const _0x40a9f1 = { quoted: _0x2f3619 }
        if (!_0x20689f) {
          return await _0x3c2725.sendMessage(_0x4b9733, _0x211a3b, _0x40a9f1)
        }
        const _0x422c92 = await subdl(_0x20689f)
        let _0x29f4ad = _0x422c92.results,
          _0x57cf56 =
            '*\uD83D\uDCDA Title :* ' +
            _0x29f4ad.title.trim() +
            '\n*\uD83D\uDCBC Creater :* ' +
            _0x29f4ad.creater
        const _0x3f8f84 = { url: _0x29f4ad.img }
        const _0x13d2ac = {
          image: _0x3f8f84,
          caption: _0x57cf56,
        }
        const _0x5692ab = { quoted: _0x2f3619 }
        await _0x3c2725.sendMessage(_0x4b9733, _0x13d2ac, _0x5692ab)
        const _0x914110 = { url: _0x29f4ad.dl_link }
        const _0x5119ee = { quoted: _0x2f3619 }
        let _0x116769 = await _0x3c2725.sendMessage(
          _0x4b9733,
          {
            document: _0x914110,
            mimetype: 'application/zip',
            fileName: _0x29f4ad.title.trim() + '.' + 'zip',
            caption: '',
          },
          _0x5119ee
        )
        const _0x1b6a4c = {
          text: '\uD83D\uDCC1',
          key: _0x116769.key,
        }
        const _0x1abef7 = { react: _0x1b6a4c }
        await _0x3c2725.sendMessage(_0x4b9733, _0x1abef7)
        const _0x116942 = {
          text: '\u2714',
          key: _0x2f3619.key,
        }
        const _0x1170a2 = { react: _0x116942 }
        await _0x3c2725.sendMessage(_0x4b9733, _0x1170a2)
      } catch (_0x169505) {
        _0x52be1b('*ERROR !!*'), _0x39f007(_0x169505)
      }
    }
  )
  const _0x387fda = {
    pattern: 'xnxx',
    react: '\uD83D\uDDC3️',
    desc: 'Get news',
    category: 'download',
    use: '.xxx',
    filename: __filename,
  }
  cmd(
    _0x387fda,
    async (
      _0x543781,
      _0x339ac1,
      _0x2db0ea,
      {
        from: _0x2d1c2c,
        q: _0x22d024,
        isMe: _0x153cc8,
        pushname: _0x4819b2,
        reply: _0x1d9b12,
      }
    ) => {
      try {
        if (!_0x153cc8) {
          return await _0x1d9b12(
            ' \uD83D\uDD10 Premium users only can use this command\nbuy via message to owner buy type .owner!!'
          )
        }
        const _0x38451e = require('api-dylux')
        let _0x4921eb = await _0x38451e.xnxxSearch(_0x22d024),
          _0xa97c6c =
            '> \uD83E\uDD24 VAJIRA MD XXXDL \uD83E\uDD24\t\n\n\t> DONT USE FOR WRONG THINGS \u2716'
        const _0x5b735e = []
        let _0xc10569 = _0x4921eb.result
          .map(
            (_0x3317e7, _0x1e2010) =>
              _0x1e2010 +
              1 +
              '\u2503 *Title* : ' +
              _0x3317e7.title +
              '\n*Link:* ' +
              _0x3317e7.link +
              '\n'
          )
          .join('\n')
        if (_0x4921eb.status) {
          _0x339ac1.reply(_0xc10569)
        }
        const _0x448cb0 = _0x4921eb.result
        for (var _0x48096b = 0; _0x48096b < _0x448cb0.length; _0x48096b++) {
          _0x5b735e.push({
            header: _0x48096b + 1,
            title: '' + _0x448cb0[_0x48096b].title,
            description: '',
            id: '.xnxxdl ' + _0x448cb0[_0x48096b].link,
          })
        }
        const _0x3cebe6 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL,
        }
        let _0x3c69f3 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0x3cebe6),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Select news types',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'VAJIRA-MD',
                  rows: _0x5b735e,
                },
              ],
            }),
          },
        ]
        const _0x15c60d = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0xa97c6c,
        }
        let _0x1132c8 = _0x15c60d
        return await _0x543781.sendButtonMessage(
          _0x2d1c2c,
          _0x3c69f3,
          _0x2db0ea,
          _0x1132c8
        )
      } catch (_0x5c0800) {
        _0x1d9b12('*Error !!*')
        console.log(_0x5c0800)
      }
    }
  )
  const _0x1940a9 = {
    pattern: 'xnxxdl',
    react: '\uD83D\uDC7E',
    desc: 'to take xnxx video',
    category: 'download',
    use: '.xnxxdl',
    filename: __filename,
  }
  cmd(
    _0x1940a9,
    async (
      _0xa5ef5a,
      _0x274fb0,
      _0x1244b1,
      {
        from: _0x357e43,
        l: _0x3e3fdf,
        prefix: _0x58bf06,
        quoted: _0x36f6d3,
        body: _0x3ac9d6,
        isCmd: _0x176c7f,
        command: _0xf6ec31,
        args: _0xcedd40,
        q: _0x43abc1,
        isGroup: _0x39c138,
        sender: _0xaa73f7,
        senderNumber: _0x59a27d,
        botNumber2: _0x49d3cc,
        botNumber: _0x340e03,
        pushname: _0x405185,
        isMe: _0x5d0bff,
        isOwner: _0x13772d,
        groupMetadata: _0x525467,
        groupName: _0x50205e,
        participants: _0x40bd4e,
        groupAdmins: _0x4b6de9,
        isBotAdmins: _0x537e29,
        isAdmins: _0x5c8534,
        reply: _0x55cecb,
      }
    ) => {
      try {
        if (!_0x43abc1.includes('xnxx.com')) {
          return _0x274fb0.reply('Enter an xnxx link')
        }
        const _0x2c0764 = require('api-dylux')
        let _0x3c8fa7 = await _0x2c0764.xnxxdl(_0x43abc1)
        const _0x4b230c = {
          caption:
            '  *XNXX DL*\n        \n\u270D *Title:* ' +
            _0x3c8fa7.title +
            '\n\u231B *Duration:* ' +
            _0x3c8fa7.duration +
            '\n\uD83D\uDCFD *Visual Quality:* ' +
            _0x3c8fa7.quality,
          video: {},
        }
        _0x4b230c.video.url = _0x3c8fa7.url_dl
        _0xa5ef5a.sendMessage(_0x274fb0.chat, _0x4b230c, { quoted: _0x274fb0 })
      } catch (_0x2f9f53) {
        _0x3e3fdf(_0x2f9f53)
      }
    }
  )
  const _0x412c75 = {
    pattern: 'apk',
    react: '\uD83D\uDDC3️',
    desc: 'apk download.',
    category: 'download',
    use: '.apk whatsapp',
    filename: __filename,
  }
  cmd(
    _0x412c75,
    async (
      _0x4b9e9d,
      _0x1af0f4,
      _0x243a87,
      { from: _0x1a6dc8, q: _0x616ce5, pushname: _0x5c4df6, reply: _0x5ae3ce }
    ) => {
      try {
        const _0x621b5d = { text: '*Need apk name...*' }
        const _0x32a024 = { quoted: _0x1af0f4 }
        if (!_0x616ce5) {
          return await _0x4b9e9d.sendMessage(_0x1a6dc8, _0x621b5d, _0x32a024)
        }
        const _0xfc9922 = await apkdl.download(_0x616ce5)
        let _0x3ea81c =
            '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n   \n *APK-DOWNLOADER*\n\n *\uD83D\uDCDA ᴀᴘᴘ ɴᴀᴍᴇ: ' +
            _0xfc9922.name +
            '*\n *\uD83D\uDCC8 ᴀᴘᴘ ꜱɪᴢᴇ: ' +
            _0xfc9922.size +
            '*\n \n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
          _0x2e94eb = [
            {
              name: 'cta_url',
              buttonParamsJson: JSON.stringify({
                display_text: 'see in playstore',
                url: _0x616ce5,
                merchant_url: _0x616ce5,
              }),
            },
            {
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: 'Download apk \uD83D\uDCE5',
                id: '.dapk ' + _0x616ce5,
              }),
            },
            {
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: 'Info of apk \uD83D\uDCCA',
                id: '.apkinfo ' + _0x616ce5,
              }),
            },
          ]
        const _0x217068 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x3ea81c,
        }
        let _0x6b92cf = _0x217068
        return await _0x4b9e9d.sendButtonMessage(
          _0x1a6dc8,
          _0x2e94eb,
          _0x243a87,
          _0x6b92cf
        )
      } catch (_0x21cec3) {
        _0x5ae3ce('*Error !!*')
        console.log(_0x21cec3)
      }
    }
  )
  const _0x25c38e = {
    pattern: 'dapk',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x25c38e,
    async (
      _0x14f086,
      _0x38078f,
      _0x19d3e4,
      { from: _0x5b323f, q: _0x1f69dd, reply: _0x157865 }
    ) => {
      try {
        const _0x9ba14d = {
          text: '\uD83D\uDCE5',
          key: _0x19d3e4.key,
        }
        const _0x492eba = { react: _0x9ba14d }
        await _0x14f086.sendMessage(_0x5b323f, _0x492eba)
        const _0x2fa38b = { text: '*Need apk link...*' }
        const _0x722b90 = { quoted: _0x19d3e4 }
        if (!_0x1f69dd) {
          return await _0x14f086.sendMessage(_0x5b323f, _0x2fa38b, _0x722b90)
        }
        const _0x2279c7 = await apkdl.download(_0x1f69dd),
          _0x56f4cc = { url: _0x2279c7.dllink }
        const _0x12229f = { quoted: _0x19d3e4 }
        let _0x4c6423 = await _0x14f086.sendMessage(
          _0x5b323f,
          {
            document: _0x56f4cc,
            mimetype: 'application/vnd.android.package-archive',
            fileName: _0x2279c7.name + '.' + 'apk',
            caption:
              '*ᴠᴀᴊɪʀᴀ-ᴍᴅ\u2022ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
          },
          _0x12229f
        )
        const _0x40a0b1 = {
          text: '\uD83D\uDCC1',
          key: _0x4c6423.key,
        }
        const _0xd24f10 = { react: _0x40a0b1 }
        await _0x14f086.sendMessage(_0x5b323f, _0xd24f10)
        const _0x1d45d8 = {
          text: '\u2714',
          key: _0x19d3e4.key,
        }
        const _0x33ffdc = { react: _0x1d45d8 }
        await _0x14f086.sendMessage(_0x5b323f, _0x33ffdc)
      } catch (_0x5c75ea) {
        _0x157865('*ERROR !!*'), l(_0x5c75ea)
      }
    }
  )
  const _0x4a5574 = {
    pattern: 'apkinfo',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x4a5574,
    async (
      _0x349bb6,
      _0x263481,
      _0x1e0208,
      { from: _0x4df62f, q: _0x27a325, reply: _0x40aed4 }
    ) => {
      try {
        var _0x10c599 = _0x1e0208
        const _0x39039f = {
          text: 'ℹ️',
          key: _0x10c599.key,
        }
        const _0xd9ed9e = { react: _0x39039f }
        await _0x349bb6.sendMessage(_0x4df62f, _0xd9ed9e)
        const _0x4101ae = { text: '*Need apk link...*' }
        const _0x514e59 = { quoted: _0x10c599 }
        if (!_0x27a325) {
          return await _0x349bb6.sendMessage(_0x4df62f, _0x4101ae, _0x514e59)
        }
        const _0x126901 = await apkdl.download(_0x27a325)
        let _0x531e2f =
          '\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n*\u2551\uD83E\uDD33VAJIRA PLAYSTORE-SEARCH*\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D\n\n*\uD83D\uDCDA ᴀᴘᴘ ɴᴀᴍᴇ: ' +
          _0x126901.name +
          '* \n\n*\uD83D\uDCC8 ᴀᴘᴘ ꜱɪᴢᴇ(ᴍʙ): ' +
          _0x126901.size +
          '*\n\n*\uD83D\uDCF1 ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ: ' +
          _0x126901.lastup +
          '*\n\n*\uD83D\uDCE6 ᴅᴇᴠᴇʟᴏᴘᴇʀ: ' +
          _0x126901.package +
          '* \n\n_*\u25EF\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25EF*_'
        const _0x1b758d = { url: _0x126901.icon }
        const _0xacddb7 = {
          image: _0x1b758d,
          caption: _0x531e2f,
        }
        const _0x12e61e = { quoted: _0x10c599 }
        await _0x349bb6.sendMessage(_0x4df62f, _0xacddb7, _0x12e61e)
        const _0x5539c4 = {
          text: '\u2714',
          key: _0x10c599.key,
        }
        const _0x2f6afe = { react: _0x5539c4 }
        await _0x349bb6.sendMessage(_0x4df62f, _0x2f6afe)
      } catch (_0x1e60c0) {
        l(_0x1e60c0)
      }
    }
  )
  const _0x32010e = {
    pattern: 'img',
    react: '\uD83D\uDDC3️',
    desc: 'image list.',
    category: 'download',
    use: '.img',
    filename: __filename,
  }
  cmd(
    _0x32010e,
    async (
      _0x5d54fd,
      _0xa0d6c7,
      _0x42036c,
      { from: _0x1e0293, q: _0x3539d1, pushname: _0x4a4a8d, reply: _0x23c777 }
    ) => {
      try {
        const _0x1ccc49 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n   \n \u258F *IMG-DOWNLOADER*\n\n \u258F *\uD83C\uDFAD ʀᴇǫᴜᴇꜱᴛᴇʀ: ' +
          _0x4a4a8d +
          '*\n \u258F *\u270F️ ʀᴇꜱᴜʟᴛ: ' +
          _0x3539d1 +
          '*\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u25C9'
        let _0x104f8c = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: 'see in google',
              url: _0x3539d1,
              merchant_url: _0x3539d1,
            }),
          },
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'Normal type \uD83D\uDDBC️',
              id: '.imgno ' + _0x3539d1,
            }),
          },
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'Document type \uD83D\uDCC2',
              id: '.imgdoc ' + _0x3539d1,
            }),
          },
        ]
        const _0x20c2cd = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x1ccc49,
        }
        let _0x1ac2d5 = _0x20c2cd
        return await _0x5d54fd.sendButtonMessage(
          _0x1e0293,
          _0x104f8c,
          _0x42036c,
          _0x1ac2d5
        )
      } catch (_0x208814) {
        _0x23c777('*Error !!*')
        console.log(_0x208814)
      }
    }
  )
  const _0x2ebb3e = {
    pattern: 'imgno',
    react: '\uD83D\uDC7E',
    desc: 'to down images',
    category: '',
    use: '.im',
    filename: __filename,
  }
  cmd(
    _0x2ebb3e,
    async (
      _0x431b5d,
      _0x1ac5b0,
      _0x1fac18,
      { from: _0x4847ab, q: _0x34fde7, reply: _0x1169f7 }
    ) => {
      try {
        if (!_0x34fde7) {
          throw 'Example: ' + (prefix + command) + ' Bike'
        }
        let _0x1dbb93 = require('g-i-s')
        _0x1dbb93(_0x34fde7, async (_0x43ece4, _0x3c9fe7) => {
          if (_0x43ece4) {
            return (
              console.error('Error fetching images:', _0x43ece4),
              _0x1169f7('Error fetching images. Please try again later.')
            )
          }
          const _0x1b96c5 = _0x3c9fe7.slice(0, 5)
          for (let _0x245b67 = 0; _0x245b67 < _0x1b96c5.length; _0x245b67++) {
            const _0x653479 = _0x1b96c5[_0x245b67].url,
              _0x20dc68 = { url: _0x653479 }
            let _0x28ba01 = {
              image: _0x20dc68,
              caption:
                '*-------\u300C VAJIRA MD GIMAGE SEARCH \u300D-------*\n\uD83E\uDD20 *Query* : ' +
                _0x34fde7 +
                '\n\n\uD83D\uDD17 *Image ' +
                (_0x245b67 + 1) +
                ' Url* : ' +
                _0x653479,
            }
            const _0xe6754c = { quoted: _0x1fac18 }
            _0x431b5d.sendMessage(_0x4847ab, _0x28ba01, _0xe6754c)
          }
        })
        const _0x243404 = {
          text: '\u2705',
          key: _0x1fac18.key,
        }
        const _0x2d7fc9 = { react: _0x243404 }
        await _0x431b5d.sendMessage(_0x4847ab, _0x2d7fc9)
      } catch (_0x2fb9b5) {
        l(_0x2fb9b5)
      }
    }
  )
  const _0x342ee6 = {
    pattern: 'imgdoc',
    react: '\uD83D\uDC7E',
    desc: 'to down images',
    category: '',
    use: '.im',
    filename: __filename,
  }
  cmd(
    _0x342ee6,
    async (
      _0x31be40,
      _0x364e72,
      _0x3fcc8c,
      { from: _0x332af4, q: _0x8df994, reply: _0x3cab46 }
    ) => {
      try {
        if (!_0x8df994) {
          throw 'Example: ' + (prefix + command) + ' Bike'
        }
        let _0x3c824f = require('g-i-s')
        _0x3c824f(_0x8df994, async (_0x37daad, _0x23b5b0) => {
          if (_0x37daad) {
            return (
              console.error('Error fetching images:', _0x37daad),
              _0x3cab46('Error fetching images. Please try again later.')
            )
          }
          const _0x3a9d07 = _0x23b5b0.slice(0, 5)
          for (let _0xffbf4f = 0; _0xffbf4f < _0x3a9d07.length; _0xffbf4f++) {
            const _0x851c68 = _0x3a9d07[_0xffbf4f].url,
              _0x2832d5 = { url: _0x851c68 }
            let _0x1857f5 = {
              document: _0x2832d5,
              fileName: 'image.jpg',
              mimetype: 'image/jpeg',
              caption:
                '*-------\u300C VAJIRA MD GIMAGE SEARCH \u300D-------*\n\uD83E\uDD20 *Query* : ' +
                _0x8df994 +
                '\n\n\uD83D\uDD17 *Image ' +
                (_0xffbf4f + 1) +
                ' Url* : ' +
                _0x851c68,
            }
            const _0x4dd0d3 = { quoted: _0x3fcc8c }
            _0x31be40.sendMessage(_0x332af4, _0x1857f5, _0x4dd0d3)
          }
        })
        const _0x5c8c01 = {
          text: '\u2705',
          key: _0x3fcc8c.key,
        }
        const _0x474300 = { react: _0x5c8c01 }
        await _0x31be40.sendMessage(_0x332af4, _0x474300)
      } catch (_0x5d545a) {
        l(_0x5d545a)
      }
    }
  )
  const _0x2b1e9b = {
    pattern: 'fb',
    alias: ['facebook'],
    use: '.fb https://www.facebook.com/100029474354770/videos/837567391064603/',
    react: '\uD83C\uDFA5',
    desc: 'Download videos from facebook',
    category: 'download',
    filename: __filename,
  }
  cmd(
    _0x2b1e9b,
    async (
      _0x5953be,
      _0x17bd93,
      _0xb89e9e,
      { from: _0x4fee8e, q: _0x14af65, reply: _0x4e2c2c }
    ) => {
      if (!_0x14af65 || !_0x14af65.includes('facebook.com')) {
        return await _0x4e2c2c('*Please enter a valid facebook url!*')
      }
      const _0x4fdaf1 = _0x14af65.replace(/\?mibextid=[^&]*/, '')
      getFbVideoInfo(_0x4fdaf1)
        .then((_0x2cc956) => {
          const _0x70b8d1 =
            '`\u2726 \uD835\uDDD9\uD835\uDDD4\uD835\uDDD6\uD835\uDDD8\uD835\uDDD5\uD835\uDDE2\uD835\uDDE2\uD835\uDDDE \uD835\uDDD7\uD835\uDDE2\uD835\uDDEA\uD835\uDDE1\uD835\uDDDF\uD835\uDDE2\uD835\uDDD4\uD835\uDDD7\uD835\uDDD8\uD835\uDDE5 \u2726`\n'
          let _0x1bb7d6 = [
            {
              name: 'cta_url',
              buttonParamsJson: JSON.stringify({
                display_text: 'Watch on Facebook',
                url: _0x14af65,
                merchant_url: _0x14af65,
              }),
            },
            {
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: 'SD Quality',
                id: '.downfb ' + _0x2cc956.sd,
              }),
            },
            {
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: 'HD Quality',
                id: '.downfb ' + _0x2cc956.hd,
              }),
            },
          ]
          const _0x160805 = {
            image: _0x2cc956.thumbnail,
            header: '',
            footer: config.FOOTER,
            body: _0x70b8d1,
          }
          let _0x5cdeec = _0x160805
          return _0x5953be.sendButtonMessage(
            _0x4fee8e,
            _0x1bb7d6,
            _0x17bd93,
            _0x5cdeec
          )
        })
        .catch((_0x7c061a) => {
          console.log(_0x7c061a)
        })
    }
  )
  const _0x368c6d = {
    pattern: 'downfb',
    react: '\uD83C\uDFA5',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x368c6d,
    async (
      _0x27a019,
      _0x5becf3,
      _0x21f0ed,
      { from: _0x44d92e, q: _0x15af90, reply: _0x5a3e69 }
    ) => {
      try {
        if (!_0x15af90) {
          return await _0x5a3e69('*Not Found!*')
        }
        const _0xb14082 = { url: _0x15af90 }
        const _0x16a036 = { video: _0xb14082 }
        const _0x1ab7a2 = { quoted: _0x5becf3 }
        await _0x27a019.sendMessage(_0x44d92e, _0x16a036, _0x1ab7a2)
        const _0x10cead = {
          text: '\u2705',
          key: _0x5becf3.key,
        }
        const _0x59e57f = { react: _0x10cead }
        await _0x27a019.sendMessage(_0x44d92e, _0x59e57f)
      } catch (_0xc591b8) {
        _0x5a3e69('*Error !!*'), console.log(_0xc591b8)
      }
    }
  )
  const _0x3a8993 = {
    pattern: 'tiktok',
    alias: ['tt'],
    use: '.fb url',
    react: '\uD83C\uDFA5',
    desc: 'Download videos from tiktok',
    category: 'download',
    filename: __filename,
  }
  cmd(
    _0x3a8993,
    async (
      _0xd9007d,
      _0x1353e7,
      _0x3834f3,
      { from: _0x3112a6, q: _0x1d389d, reply: _0x318212 }
    ) => {
      try {
        if (!regtik(_0x1d389d)) {
          return await _0x318212(urlneed)
        }
        var _0x2c6f91 = ''
        let _0x4e35f = await fetchJson(
          'https://vajira-apis-803339515192.herokuapp.com/api/dowloader/tikok?url=' +
            _0x1d389d
        )
        if (_0x4e35f.msg == 'OK') {
          let _0x38ddc2 = _0x4e35f
          const _0x52959e = {
            title: _0x38ddc2.result.desc,
            nowm: _0x38ddc2.result.withoutWaterMarkVideo,
            watermark: _0x38ddc2.result.waterMarkVideo,
            audio: _0x38ddc2.result.music,
            thumbnail: _0x38ddc2.result.cover,
            author: _0x38ddc2.result.author,
          }
          _0x2c6f91 = _0x52959e
        } else {
          let _0x4decca = await Tiktok(_0x1d389d)
          _0x2c6f91 = _0x4decca
        }
        const _0x2dc784 =
          '`\u2726 \uD835\uDDE7\uD835\uDDDC\uD835\uDDDE\uD835\uDDE7\uD835\uDDE2\uD835\uDDDE \uD835\uDDD7\uD835\uDDE2\uD835\uDDEA\uD835\uDDE1\uD835\uDDDF\uD835\uDDE2\uD835\uDDD4\uD835\uDDD7\uD835\uDDD8\uD835\uDDE5 \u2726`\n'
        let _0x349bf7 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: 'Watch on tiktok',
              url: _0x1d389d,
              merchant_url: _0x1d389d,
            }),
          },
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'VIDEO NO WATERMARK',
              id: '.dvideo ' + _0x2c6f91.nowm,
            }),
          },
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'VIDEO WITH WATERMARK',
              id: '.dvideo ' + _0x2c6f91.watermark,
            }),
          },
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'AUDIO DOWNLOAD',
              id: '.dau ' + _0x2c6f91.audio,
            }),
          },
        ]
        const _0xed0eae = {
          image: result.thumbnail,
          header: '',
          footer: config.FOOTER,
          body: _0x2dc784,
        }
        let _0x3954cf = _0xed0eae
        return await _0xd9007d.sendButtonMessage(
          _0x3112a6,
          _0x349bf7,
          _0x1353e7,
          _0x3954cf
        )
      } catch (_0x58eb76) {
        console.log(_0x58eb76)
        _0x318212('*Error !!*')
      }
    }
  )
  const _0x190bed = {
    pattern: 'dau',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x190bed,
    async (
      _0x47bc58,
      _0x1598c7,
      _0x3a7819,
      {
        from: _0x3125b2,
        l: _0x513442,
        quoted: _0x5c737b,
        body: _0x3113b9,
        isCmd: _0x1f3824,
        command: _0x53fe93,
        args: _0x17559a,
        q: _0x4cea59,
        isGroup: _0x453944,
        sender: _0x20503f,
        senderNumber: _0x3481ee,
        botNumber2: _0x4c46cc,
        botNumber: _0x26d063,
        pushname: _0x49fd01,
        isMe: _0x29ca6f,
        isOwner: _0x4251d5,
        groupMetadata: _0x8036e7,
        groupName: _0x530853,
        participants: _0x5823d4,
        groupAdmins: _0x4d918b,
        isBotAdmins: _0x1ac118,
        isAdmins: _0x361015,
        reply: _0xfda3b,
      }
    ) => {
      try {
        const _0xcb2ab0 = {
          text: '\uD83D\uDCE5',
          key: _0x1598c7.key,
        }
        const _0x40d64b = { react: _0xcb2ab0 }
        await _0x47bc58.sendMessage(_0x3125b2, _0x40d64b)
        const _0x4feb57 = { url: _0x4cea59 }
        const _0x1efef3 = { quoted: _0x1598c7 }
        await _0x47bc58.sendMessage(
          _0x3125b2,
          {
            document: _0x4feb57,
            mimetype: 'audio/mpeg',
            fileName: 'TikTok Audio.mp3',
            caption: config.FOOTER,
          },
          _0x1efef3
        )
        const _0xae8dd0 = {
          text: '\u2714',
          key: _0x1598c7.key,
        }
        const _0xad0a83 = { react: _0xae8dd0 }
        await _0x47bc58.sendMessage(_0x3125b2, _0xad0a83)
      } catch (_0x5858cb) {
        _0xfda3b('*ERROR !!*')
        _0x513442(_0x5858cb)
      }
    }
  )
  const _0x3d3f2e = {
    pattern: 'dvideo',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x3d3f2e,
    async (
      _0xb480ca,
      _0x37fdca,
      _0x5e1306,
      {
        from: _0x36b24b,
        l: _0x3883ff,
        quoted: _0x2506fe,
        body: _0x590744,
        isCmd: _0x5e63d6,
        command: _0x59a277,
        args: _0xb0888a,
        q: _0x3db7f3,
        isGroup: _0x1f5449,
        sender: _0x5dc14e,
        senderNumber: _0x4ff8e5,
        botNumber2: _0x1d0c65,
        botNumber: _0x41aa74,
        pushname: _0x2a867c,
        isMe: _0x5c0e81,
        isOwner: _0x4111e4,
        groupMetadata: _0x3c3c03,
        groupName: _0x2cb7df,
        participants: _0x102267,
        groupAdmins: _0x15e7a1,
        isBotAdmins: _0x85d81e,
        isAdmins: _0xbb39c7,
        reply: _0x3f4809,
      }
    ) => {
      try {
        const _0x3f233d = {
          text: '\uD83D\uDCE5',
          key: _0x37fdca.key,
        }
        const _0x5167b6 = { react: _0x3f233d }
        await _0xb480ca.sendMessage(_0x36b24b, _0x5167b6)
        const _0x153110 = { url: _0x3db7f3 }
        const _0x1e9e47 = {
          video: _0x153110,
          caption: config.FOOTER,
        }
        const _0x32b010 = { quoted: _0x37fdca }
        await _0xb480ca.sendMessage(_0x36b24b, _0x1e9e47, _0x32b010)
        const _0x59d4e6 = {
          text: '\u2714',
          key: _0x37fdca.key,
        }
        const _0x3deb6a = { react: _0x59d4e6 }
        await _0xb480ca.sendMessage(_0x36b24b, _0x3deb6a)
      } catch (_0x2403ba) {
        _0x3f4809('*ERROR !!*')
        _0x3883ff(_0x2403ba)
      }
    }
  )
}
const _0x5a7577 = {}
_0x5a7577.pattern = 'threads'
_0x5a7577.alias = ['thread']
_0x5a7577.react = '\uD83E\uDDF5'
_0x5a7577.desc = 'Download threads videos/photos.'
_0x5a7577.category = 'download'
_0x5a7577.use = '.threads <threads link>'
_0x5a7577.filename = __filename
cmd(
  _0x5a7577,
  async (
    _0x4738cc,
    _0x5ded6f,
    _0x21fb00,
    {
      from: _0x3dc5c6,
      l: _0x186daa,
      quoted: _0x472af9,
      body: _0x577271,
      isCmd: _0x2e0e87,
      command: _0x540943,
      args: _0xf75d5d,
      q: _0x5a9cb,
      isGroup: _0x4a11b9,
      sender: _0x15f3f2,
      senderNumber: _0x405425,
      botNumber2: _0x2bb510,
      botNumber: _0x247299,
      pushname: _0x5f2a7d,
      isMe: _0x3b1623,
      isOwner: _0x2eb04d,
      groupMetadata: _0x274a5e,
      groupName: _0x3f6122,
      participants: _0x1598ed,
      groupAdmins: _0x1a1923,
      isBotAdmins: _0x5346ea,
      isAdmins: _0x104610,
      reply: _0x3b2ee3,
    }
  ) => {
    try {
      if (!_0x5a9cb) {
        return await _0x3b2ee3(needus)
      }
      let _0x5407a2 = await Download(_0x5a9cb)
      for (
        let _0x6c992f = 0;
        _0x6c992f < _0x5407a2.download.length;
        _0x6c992f++
      ) {
        const _0x446256 = { quoted: _0x5ded6f }
        const _0x777904 = { quoted: _0x5ded6f }
        if (_0x5407a2.download[_0x6c992f].type === 'image') {
          await _0x4738cc.sendMessage(
            _0x3dc5c6,
            {
              image: { url: _0x5407a2.download[_0x6c992f].url },
              caption: config.FOOTER,
            },
            _0x446256
          )
        } else {
          await _0x4738cc.sendMessage(
            _0x3dc5c6,
            {
              video: { url: _0x5407a2.download[_0x6c992f].url },
              caption: config.FOOTER,
            },
            _0x777904
          )
        }
      }
    } catch (_0x52b689) {
      _0x3b2ee3(cantf)
      _0x186daa(_0x52b689)
    }
  }
)
const _0x55b2dd = {}
_0x55b2dd.pattern = 'pindl'
_0x55b2dd.react = '\uD83D\uDD16'
_0x55b2dd.desc = 'download pinterest images'
_0x55b2dd.category = 'download'
_0x55b2dd.use = '.pindl'
_0x55b2dd.filename = __filename
cmd(
  _0x55b2dd,
  async (
    _0x2fecf0,
    _0x3284f8,
    _0x271110,
    {
      from: _0x54c2dc,
      l: _0x19fc94,
      quoted: _0x2a44c4,
      body: _0x4c76a0,
      isCmd: _0x15b1db,
      command: _0x4171ea,
      args: _0x280732,
      q: _0x55cbb9,
      isGroup: _0x4dd7ff,
      sender: _0x37aae3,
      senderNumber: _0x53ecca,
      botNumber2: _0x23fed8,
      botNumber: _0x4c4fc3,
      pushname: _0xeed672,
      isMe: _0x497bf4,
      isOwner: _0x5b0df4,
      groupMetadata: _0x1568ea,
      groupName: _0x4463b7,
      participants: _0x494fe8,
      groupAdmins: _0x208a80,
      isBotAdmins: _0x34bde1,
      isAdmins: _0x32d08b,
      reply: _0x28a249,
    }
  ) => {
    try {
      let { pinterest: _0x1ffcd7 } = require('../lib/scraper')
      anu = await _0x1ffcd7(_0x55cbb9)
      result = anu[Math.floor(Math.random() * anu.length)]
      const _0x4b87ad = { url: result }
      _0x2fecf0.sendMessage(
        _0x3284f8.chat,
        {
          image: _0x4b87ad,
          caption: '\uD83D\uDD2E Media Url : ' + result,
        },
        { quoted: _0x3284f8 }
      )
      const _0x4dfa4c = {
        text: '\u2705',
        key: _0x3284f8.key,
      }
      const _0x247620 = { react: _0x4dfa4c }
      await _0x2fecf0.sendMessage(_0x54c2dc, _0x247620)
    } catch (_0xef9fb1) {
      _0x28a249()
      _0x19fc94(_0xef9fb1)
    }
  }
)
const _0x4972a3 = {}
_0x4972a3.pattern = 'gdrive'
_0x4972a3.alias = ["googledrive'"]
_0x4972a3.react = '\uD83D\uDCD1'
_0x4972a3.desc = 'Download googledrive files.'
_0x4972a3.category = 'download'
_0x4972a3.use = '.gdrive <googledrive link>'
_0x4972a3.filename = __filename
cmd(
  _0x4972a3,
  async (
    _0x4c066a,
    _0x2e419e,
    _0x5f364c,
    {
      from: _0x4cde23,
      l: _0x55cdbc,
      quoted: _0xc24045,
      body: _0x221462,
      isCmd: _0x31f82f,
      command: _0x1195fe,
      args: _0x93a1f3,
      q: _0x43a86d,
      isGroup: _0x344686,
      sender: _0x5c900c,
      senderNumber: _0x24e862,
      botNumber2: _0x285f2a,
      botNumber: _0x5995d9,
      pushname: _0x253909,
      isMe: _0x1023ff,
      isOwner: _0x55bf09,
      groupMetadata: _0x5e0485,
      groupName: _0xfa26c9,
      participants: _0x2a243c,
      groupAdmins: _0xfb9a80,
      isBotAdmins: _0x40599c,
      isAdmins: _0x134179,
      reply: _0x3296dd,
    }
  ) => {
    try {
      if (!_0x43a86d) {
        return await _0x3296dd('*Please give me googledrive url !!*')
      }
      let _0xc0cf7f = await fg.GDriveDl(_0x43a86d)
      _0x3296dd(
        '*\uD83D\uDCC3 File name:*  ' +
          _0xc0cf7f.fileName +
          '\n*\uD83D\uDC88 File Size:* ' +
          _0xc0cf7f.fileSize +
          '\n*\uD83D\uDD79️ File type:* ' +
          _0xc0cf7f.mimetype
      )
      const _0x34f736 = { url: _0xc0cf7f.downloadUrl }
      const _0x2c20cf = {
        document: _0x34f736,
        fileName: _0xc0cf7f.fileName,
        mimetype: _0xc0cf7f.mimetype,
      }
      const _0x11d19d = { quoted: _0x2e419e }
      _0x4c066a.sendMessage(_0x4cde23, _0x2c20cf, _0x11d19d)
    } catch (_0x34d15e) {
      _0x3296dd('*Error !!*')
      _0x55cdbc(_0x34d15e)
    }
  }
)
const _0x5d7eb2 = {}
_0x5d7eb2.pattern = 'tempmail'
_0x5d7eb2.react = '\uD83D\uDC7E'
_0x5d7eb2.desc = 'to take a tempmail'
_0x5d7eb2.category = 'download'
_0x5d7eb2.use = '.tempmail'
_0x5d7eb2.filename = __filename
cmd(
  _0x5d7eb2,
  async (
    _0x29c382,
    _0x3e44e9,
    _0x430dff,
    {
      from: _0x56a755,
      l: _0x2b7430,
      prefix: _0x503fbf,
      quoted: _0x2d4b53,
      body: _0x33cc8f,
      isCmd: _0x1c6170,
      command: _0x4671c8,
      args: _0x19da08,
      q: _0x41ce21,
      isGroup: _0x5ad718,
      sender: _0x1ea8ab,
      senderNumber: _0x1b2434,
      botNumber2: _0x4e2fa2,
      botNumber: _0x1735f6,
      pushname: _0x23b13a,
      isMe: _0x5c5a85,
      isOwner: _0x4d89e4,
      groupMetadata: _0x54ee26,
      groupName: _0x50f1a7,
      participants: _0xf57566,
      groupAdmins: _0x47f746,
      isBotAdmins: _0x28e415,
      isAdmins: _0x26181f,
      reply: _0x366895,
    }
  ) => {
    try {
      const _0x404fe7 = 'https://tempmail.apinepdev.workers.dev/api/gen',
        _0x3fd9d7 = await fetch(_0x404fe7),
        _0x1eb672 = await _0x3fd9d7.json()
      if (!_0x1eb672 || !_0x1eb672.email) {
        return _0x366895('Failed to generate temporary email')
      }
      const _0x2600ba = _0x1eb672.email
      return _0x366895('Generated Temporary Email: ' + _0x2600ba)
    } catch (_0x435c70) {
      return _0x366895('Unexpected error occurred during the request.')
      _0x2b7430(_0x435c70)
    }
  }
)
const _0x16680b = {}
_0x16680b.pattern = 'checkmail'
_0x16680b.react = '\uD83D\uDC7E'
_0x16680b.desc = 'to see mail'
_0x16680b.category = 'download'
_0x16680b.use = '.checkmail'
_0x16680b.filename = __filename
cmd(
  _0x16680b,
  async (
    _0x5e866b,
    _0x297261,
    _0xc65929,
    {
      from: _0x33b86c,
      l: _0x57a49b,
      prefix: _0x385cb6,
      quoted: _0x5cf121,
      body: _0x3656ea,
      isCmd: _0x2a58dd,
      command: _0x178945,
      args: _0x5e8467,
      q: _0xc2f2bb,
      isGroup: _0x280ea4,
      sender: _0x13fc2e,
      senderNumber: _0x42a333,
      botNumber2: _0x21e0be,
      botNumber: _0x1d3b17,
      pushname: _0x2496ac,
      isMe: _0x2f9d7b,
      isOwner: _0x54e913,
      groupMetadata: _0x348be5,
      groupName: _0x7d5efd,
      participants: _0x49913b,
      groupAdmins: _0x99b0ea,
      isBotAdmins: _0x2861cc,
      isAdmins: _0x5eb1b8,
      reply: _0x356026,
    }
  ) => {
    try {
      if (!_0xc2f2bb) {
        return _0x356026('*Provide me tempmail for view inbox*')
      }
      const _0x575521 = encodeURIComponent(_0xc2f2bb),
        _0x4061e5 =
          'https://tempmail.apinepdev.workers.dev/api/getmessage?email=' +
          _0x575521,
        _0x2e2791 = await fetch(_0x4061e5)
      if (!_0x2e2791.ok) {
        return _0x356026(
          'Invalid response from the API. Status code: ' + _0x2e2791.status
        )
      }
      const _0x446cef = await _0x2e2791.json()
      if (!_0x446cef || !_0x446cef.messages) {
        return _0x356026('Failed to retrieve email messages')
      }
      const _0x3acf5b = _0x446cef.messages
      for (const _0x2abc9f of _0x3acf5b) {
        const _0x40817b = _0x2abc9f.sender,
          _0x2722f7 = _0x2abc9f.subject,
          _0x2aa83f = new Date(
            JSON.parse(_0x2abc9f.message).date
          ).toLocaleString(),
          _0x5c5b17 = JSON.parse(_0x2abc9f.message).body,
          _0x15bf63 =
            'Sender: ' +
            _0x40817b +
            '\nSubject: ' +
            _0x2722f7 +
            '\nDate: ' +
            _0x2aa83f +
            '\nMessage: ' +
            _0x5c5b17
        await _0x356026(_0x15bf63)
      }
    } catch (_0x21259d) {
      console.error('Error during API request:', _0x21259d)
      return _0x356026('Unexpected error occurred during the request.')
      _0x57a49b(_0x21259d)
    }
  }
)
const _0x327511 = {}
_0x327511.pattern = 'gitclone'
_0x327511.react = '\uD83D\uDD16'
_0x327511.desc = 'download github repos'
_0x327511.category = 'download'
_0x327511.use = '.gitclone'
_0x327511.filename = __filename
cmd(
  _0x327511,
  async (
    _0x35d528,
    _0x4cc19e,
    _0x47a44d,
    {
      from: _0x2f40fb,
      prefix: _0x2eb624,
      l: _0x39f905,
      quoted: _0x468da5,
      body: _0x47e19b,
      isCmd: _0x480a26,
      command: _0x503f78,
      args: _0x1adcaa,
      q: _0x5798c1,
      isGroup: _0x5929d2,
      sender: _0x220437,
      senderNumber: _0x4d9b72,
      botNumber2: _0x32c95f,
      botNumber: _0x5ea350,
      pushname: _0x4f75c5,
      isMe: _0x5aebca,
      isOwner: _0x153a80,
      groupMetadata: _0x5b8490,
      groupName: _0x2df3c2,
      participants: _0x3d955a,
      groupAdmins: _0x41d497,
      isBotAdmins: _0x22e19c,
      isAdmins: _0x42b391,
      reply: _0x523969,
    }
  ) => {
    try {
      if (!_0x1adcaa[0]) {
        _0x523969(
          'Use ' +
            _0x2eb624 +
            'gitclone repo link\n: https://github.com/VajiraTech/QUEEN-IZUMI-MD'
        )
      }
      if (
        !/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i.test(
          _0x1adcaa[0]
        )
      ) {
        return _0x523969('link')
      }
      let [, _0x58b4d7, _0x4766a2] =
        _0x1adcaa[0].match(
          /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
        ) || []
      _0x4766a2 = _0x4766a2.replace(/.git$/, '')
      let _0x836b88 =
          'https://api.github.com/repos/' +
          _0x58b4d7 +
          '/' +
          _0x4766a2 +
          '/zipball',
        _0x3f95d6 = '' + _0x58b4d7 + _0x4766a2
      const _0x101fc7 = { url: _0x836b88 }
      _0x35d528
        .sendMessage(
          _0x4cc19e.chat,
          {
            document: _0x101fc7,
            fileName: _0x3f95d6 + '.zip',
            mimetype: 'application/zip',
            caption:
              '*ǫᴜᴇᴇɴ-ɪᴢᴜᴍɪ\u2022ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
          },
          { quoted: _0x4cc19e }
        )
        .catch((_0x3c819b) => _0x523969(mess.error))
    } catch (_0x4a688e) {
      _0x523969()
      _0x39f905(_0x4a688e)
    }
  }
)
const _0x18068c = {}
_0x18068c.pattern = 'ringtone'
_0x18068c.react = '\uD83D\uDD16'
_0x18068c.desc = 'to download ringtone'
_0x18068c.category = 'download'
_0x18068c.use = '.ringtone'
_0x18068c.filename = __filename
cmd(
  _0x18068c,
  async (
    _0x5e3d16,
    _0x24daa1,
    _0x36485e,
    {
      from: _0x431af6,
      l: _0x4db44e,
      quoted: _0x540e17,
      prefix: _0x4699b8,
      body: _0x3b5563,
      isCmd: _0x427142,
      command: _0xfbd92e,
      args: _0x393b6b,
      q: _0xd3392e,
      isGroup: _0x1854ca,
      sender: _0x25284e,
      senderNumber: _0x14a2da,
      botNumber2: _0x58dbe6,
      botNumber: _0x157c19,
      pushname: _0x2618a8,
      isMe: _0x19a744,
      isOwner: _0x501e02,
      groupMetadata: _0x32df0c,
      groupName: _0x17b9e5,
      participants: _0x3a607b,
      groupAdmins: _0x4c2b6e,
      isBotAdmins: _0x40900d,
      isAdmins: _0x39c876,
      reply: _0x2baefc,
    }
  ) => {
    try {
      if (!_0xd3392e) {
        _0x2baefc`${Lang.EXAMPLE}\n : ${_0x4699b8 + _0xfbd92e} black rover`
      }
      let { ringtone: _0xddbb1a } = require('../lib/scraper'),
        _0x41d3d0 = await _0xddbb1a(_0xd3392e),
        _0x4f5b28 = _0x41d3d0[Math.floor(Math.random() * _0x41d3d0.length)]
      const _0x4fb215 = { url: _0x4f5b28.audio }
      _0x5e3d16.sendMessage(
        _0x24daa1.chat,
        {
          audio: _0x4fb215,
          fileName: _0x4f5b28.title + '.mp3',
          mimetype: 'audio/mpeg',
        },
        { quoted: _0x24daa1 }
      )
      const _0x2b1421 = {
        text: '\u2705',
        key: _0x24daa1.key,
      }
      const _0x3e4336 = { react: _0x2b1421 }
      await _0x5e3d16.sendMessage(_0x431af6, _0x3e4336)
    } catch (_0x3df198) {
      _0x2baefc()
      _0x4db44e(_0x3df198)
    }
  }
)
const _0x59e3cd = {}
_0x59e3cd.pattern = 'couplepp'
_0x59e3cd.react = '\uD83D\uDD16'
_0x59e3cd.desc = 'couple pic download'
_0x59e3cd.category = 'download'
_0x59e3cd.use = '.couplepp'
_0x59e3cd.filename = __filename
cmd(
  _0x59e3cd,
  async (
    _0x297561,
    _0x3ca165,
    _0x4dc2ec,
    {
      from: _0x28f7e2,
      l: _0x14bdf4,
      quoted: _0x5a3bb8,
      body: _0x1c87f4,
      isCmd: _0x352b99,
      command: _0x5c4b79,
      args: _0x432ebf,
      q: _0x31d304,
      isGroup: _0x18dccd,
      sender: _0x1e26b9,
      senderNumber: _0x30ab1f,
      botNumber2: _0x2de5ac,
      botNumber: _0x53d72d,
      pushname: _0x2eff2c,
      isMe: _0x6aa4ea,
      isOwner: _0x1b20a7,
      groupMetadata: _0x4ee131,
      groupName: _0x239c49,
      participants: _0x4f7fe0,
      groupAdmins: _0x1f7255,
      isBotAdmins: _0x1710d1,
      isAdmins: _0x2072f4,
      reply: _0x4ecc52,
    }
  ) => {
    try {
      const _0x5315c2 = {
        text: '\uD83D\uDC8F',
        key: _0x3ca165.key,
      }
      const _0x4c3bc6 = { react: _0x5315c2 }
      await _0x297561.sendMessage(_0x28f7e2, _0x4c3bc6)
      let _0x1c97ee = await fetchJson(
          'https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json'
        ),
        _0x193e1d = _0x1c97ee[Math.floor(Math.random() * _0x1c97ee.length)]
      const _0x409cec = { url: _0x193e1d.male }
      const _0x57def3 = {
        image: _0x409cec,
        caption: 'Couple Male',
      }
      _0x297561.sendMessage(_0x3ca165.chat, _0x57def3, { quoted: _0x3ca165 })
      const _0x382582 = { url: _0x193e1d.female }
      const _0x3b8ad0 = {
        image: _0x382582,
        caption: 'Couple Female',
      }
      _0x297561.sendMessage(_0x3ca165.chat, _0x3b8ad0, { quoted: _0x3ca165 })
      const _0x2c4a0f = {
        text: '\u2705',
        key: _0x3ca165.key,
      }
      const _0x37a8f2 = { react: _0x2c4a0f }
      await _0x297561.sendMessage(_0x28f7e2, _0x37a8f2)
    } catch (_0x45c11f) {
      _0x4ecc52()
      _0x14bdf4(_0x45c11f)
    }
  }
)
const _0x97e0ac = {}
_0x97e0ac.pattern = 'slsub'
_0x97e0ac.react = '\uD83D\uDCC3'
_0x97e0ac.alias = ['srisub']
_0x97e0ac.desc = 'Search Sinhala Subtitles  from Web Site'
_0x97e0ac.category = 'download'
_0x97e0ac.use = '.slsub'
_0x97e0ac.filename = __filename
cmd(
  _0x97e0ac,
  async (
    _0x16eae9,
    _0xa15873,
    _0x50fea7,
    {
      from: _0x44d8c5,
      l: _0x38f9d9,
      quoted: _0x40b076,
      body: _0x5cfec5,
      isCmd: _0x2f7645,
      command: _0x28e498,
      args: _0xefe311,
      q: _0x21183b,
      isGroup: _0x49ef01,
      sender: _0x38aee,
      senderNumber: _0x3fb97c,
      botNumber2: _0x436d85,
      botNumber: _0x432336,
      pushname: _0x421c95,
      isMe: _0x120230,
      isOwner: _0x53cb77,
      groupMetadata: _0x431888,
      groupName: _0x4efbf8,
      participants: _0x1b61c4,
      groupAdmins: _0x1a1895,
      isBotAdmins: _0xca9b4a,
      isCreator: _0x27a757,
      isDev: _0x362d6e,
      isAdmins: _0x45faa7,
      reply: _0x1657a2,
    }
  ) => {
    try {
      if (!_0x21183b) {
        return _0x1657a2(
          '\u2757 *Please enter movie name to download Subtitles*'
        )
      }
      const _0x115aef = await subsearch(_0x21183b),
        _0x2f510d = await subdl(_0x115aef.results[0].link),
        _0x40ca3b =
          '*VAJIRA-MD SINHALA SUB DOWNLOADER*\n\n\uD83D\uDCCA *Movie Title - ' +
          _0x2f510d.results.title +
          '*\n\n\uD83D\uDD12 Creator - ' +
          _0x2f510d.results.creater +
          '\n\n\uD83D\uDD87️ _Link_ - ' +
          _0x115aef.results[0].link +
          '\n\n',
        _0xf9c5c7 = { url: _0x2f510d.results.img }
      const _0x4544fc = { quoted: _0xa15873 }
      await _0x16eae9.sendMessage(
        _0x44d8c5,
        {
          image: _0xf9c5c7,
          caption:
            _0x40ca3b +
            '*ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
        },
        _0x4544fc
      )
      const _0x2d52e2 = { url: _0x2f510d.results.dl_link }
      const _0x1aa8ea = {
        document: _0x2d52e2,
        caption: _0x2f510d.results.title,
        mimetype: 'application/zip',
        fileName: _0x2f510d.results.title + '.zip',
      }
      const _0x187f72 = { quoted: _0xa15873 }
      await _0x16eae9.sendMessage(_0x44d8c5, _0x1aa8ea, _0x187f72)
    } catch (_0x122f7e) {
      _0x1657a2('\uD83D\uDEAB *Error Accurated !!*\n\n' + _0x122f7e)
      _0x38f9d9(_0x122f7e)
    }
  }
)
const _0x13072e = {}
_0x13072e.pattern = 'subdlfromlink'
_0x13072e.react = '\uD83D\uDCC3'
_0x13072e.desc = 'Download subtitles from Web Sites'
_0x13072e.category = 'download'
_0x13072e.use = '.subdlfromlink'
_0x13072e.filename = __filename
cmd(
  _0x13072e,
  async (
    _0x389e49,
    _0x5101cf,
    _0x125d9f,
    {
      from: _0x2d2508,
      l: _0x8fa1e7,
      quoted: _0x40f77a,
      body: _0x546893,
      isCmd: _0x1b3989,
      command: _0x1d78c8,
      args: _0x2c2328,
      q: _0x56c234,
      isGroup: _0x5369e3,
      sender: _0x1b751d,
      senderNumber: _0x25be4f,
      botNumber2: _0x237638,
      botNumber: _0xb6531f,
      pushname: _0xc17c35,
      isMe: _0x296b3d,
      isOwner: _0x166408,
      groupMetadata: _0x9ab496,
      groupName: _0x4925c6,
      participants: _0x2416fe,
      groupAdmins: _0x5d0b5b,
      isBotAdmins: _0x3baa50,
      isCreator: _0x56a67f,
      isDev: _0x4d4441,
      isAdmins: _0x302f69,
      reply: _0x1eb9c9,
    }
  ) => {
    try {
      if (!_0x56c234) {
        return _0x1eb9c9(
          '\u2757 Please enter movie Link to download Subtitles*'
        )
      }
      if (!_0x56c234.includes('baiscope')) {
        return _0x1eb9c9('\uD83D\uDEAB *Please enter Valid Movie url*')
      }
      const _0x3787de = await subdl(_0x56c234),
        _0x4acc03 =
          '*VAJIRA-MD SL SUBTITLES DOWNLOADER*\n\n\uD83D\uDCCA *Movie title - ' +
          _0x3787de.results.title +
          '*\n\n\uD83D\uDD12 Creator - ' +
          _0x3787de.results.creater +
          '\n\n\uD83D\uDD87️ _Link_ - ' +
          _0x56c234 +
          '\n\n*ᴠᴀᴊɪʀᴀ-ᴍᴅ-ᴠ3*\n*ᴀʟʟ ʀɪɢʜᴛ ʀᴇꜱᴇʀᴠᴇᴅ - ʙʏ ᴠᴀᴊɪʀᴀ*',
        _0x569bac = { text: _0x4acc03 }
      const _0xc34b83 = { quoted: _0x5101cf }
      await _0x389e49.sendMessage(_0x2d2508, _0x569bac, _0xc34b83)
      const _0xdb8e52 = { url: _0x3787de.results.dl_link }
      const _0x145929 = {
        document: _0xdb8e52,
        caption: _0x3787de.results.title,
        mimetype: 'application/zip',
        fileName: _0x3787de.results.title + '.zip',
      }
      const _0x892687 = { quoted: _0x5101cf }
      await _0x389e49.sendMessage(_0x2d2508, _0x145929, _0x892687)
    } catch (_0x11b733) {
      _0x1eb9c9('\uD83D\uDEAB *Error Accurated !!*\n\n' + _0x11b733)
      _0x8fa1e7(_0x11b733)
    }
  }
)
const _0x490a61 = {}
_0x490a61.pattern = 'movies'
_0x490a61.react = '\uD83D\uDCF1'
_0x490a61.desc = 'movie dowloader'
_0x490a61.category = 'download'
_0x490a61.use = '.movies mia kalifa'
_0x490a61.filename = __filename
cmd(
  _0x490a61,
  async (
    _0x841811,
    _0xbd6fa4,
    _0xc313a8,
    { from: _0x9ee8fb, q: _0x4d5db8, reply: _0x1a04ac }
  ) => {
    try {
      let _0x174252 = await searchSinhalasub(_0x4d5db8),
        _0x3b4010 =
          '\uD83D\uDC68‍\uD83D\uDCBB VAJIRA MOVIE SEARCH \uD83D\uDC68‍\uD83D\uDCBB\n\n'
      for (var _0x1385c4 = 0; _0x1385c4 < 9; _0x1385c4++) {
        _0x3b4010 += '*\u26D3️ Title:* ' + _0x174252[_0x1385c4].title + '\n'
        _0x3b4010 += '*\uD83D\uDCC3 Link:* ' + _0x174252[_0x1385c4].link + '\n'
        _0x3b4010 +=
          '*\uD83D\uDCCE Desc:* ' +
          _0x174252[_0x1385c4].description +
          '\n\n--------------------------------------------\n\n\n'
      }
      return await _0x1a04ac(_0x3b4010)
      const _0x17afed = { url: _0x174252[_0x1385c4].thumbnail }
      const _0x421f18 = {
        image: _0x17afed,
        caption: _0x3b4010,
      }
      const _0x24f08a = { quoted: _0xc313a8 }
      return await _0x841811.sendMessage(_0x9ee8fb, _0x421f18, _0x24f08a)
      const _0x413890 = {
        text: '\u2705',
        key: _0xc313a8.key,
      }
      const _0x29d446 = { react: _0x413890 }
      await _0x841811.sendMessage(_0x9ee8fb, _0x29d446)
    } catch (_0x591fb2) {
      _0x1a04ac()
      l(_0x591fb2)
    }
  }
)
const _0x42d2e5 = {}
_0x42d2e5.pattern = 'mediafire'
_0x42d2e5.alias = ['mfire']
_0x42d2e5.react = '\uD83D\uDCC1'
_0x42d2e5.desc = 'Download mediafire files.'
_0x42d2e5.category = 'download'
_0x42d2e5.use = '.mediafire <mediafire link>'
_0x42d2e5.filename = __filename
cmd(
  _0x42d2e5,
  async (
    _0xfd47fc,
    _0x6b782c,
    _0x541362,
    {
      from: _0xe5d07e,
      l: _0x358711,
      quoted: _0x38f7c5,
      body: _0x1516fe,
      isCmd: _0x4e3b41,
      command: _0x1fab76,
      args: _0x9449d3,
      q: _0x1f5181,
      isGroup: _0x5c938f,
      sender: _0x24aca,
      senderNumber: _0x42864a,
      botNumber2: _0xe8c0ad,
      botNumber: _0x319d7e,
      pushname: _0x5c97ac,
      isMe: _0x1d1a90,
      isOwner: _0x266461,
      groupMetadata: _0x205533,
      groupName: _0x2e88e0,
      participants: _0x188494,
      groupAdmins: _0x36e767,
      isBotAdmins: _0x53476c,
      isAdmins: _0x3a50e1,
      reply: _0x40cc73,
    }
  ) => {
    try {
      if (!_0x1f5181) {
        return await _0x40cc73('*Please give me google drive url*')
      }
      if (!_0x1f5181.includes('mediafire.com')) {
        return await _0x40cc73('*Please give me google drive url*')
      }
      if (!_0x1f5181.includes('/file')) {
        return await _0x40cc73('*Please give me google drive url*')
      }
      const _0x33d059 = await mediafireDl(_0x1f5181)
      if (
        _0x33d059.size.includes('MB') &&
        _0x33d059.size.replace('MB', '') > config.MAX_SIZE
      ) {
        return await _0x40cc73('*This file is too big !!*')
      }
      if (_0x33d059.size.includes('GB')) {
        return await _0x40cc73('*This file is too big !!*')
      }
      const _0x447ce1 = { url: _0x33d059.link }
      const _0x1d449d = {
        document: _0x447ce1,
        fileName: _0x33d059.name,
        mimetype: _0x33d059.mime,
        caption:
          '*\uD83E\uDDF8 Name* : ' +
          _0x33d059.name +
          '\n*\uD83D\uDCCA Size* : ' +
          _0x33d059.size +
          '\n*\uD83D\uDD79️ Mime* : ' +
          _0x33d059.mime,
      }
      const _0x4ed516 = { quoted: _0x6b782c }
      const _0x7e350e = _0xfd47fc.sendMessage(_0xe5d07e, _0x1d449d, _0x4ed516),
        _0x5f4f67 = {
          text: '\uD83D\uDCC1',
          key: _0x7e350e.key,
        }
      const _0x273b9d = { react: _0x5f4f67 }
      await _0xfd47fc.sendMessage(_0xe5d07e, _0x273b9d)
    } catch (_0x5531b4) {
      _0x40cc73('*Error !!*')
      _0x358711(_0x5531b4)
    }
  }
)
const _0x22afc7 = {}
_0x22afc7.pattern = 'ig'
_0x22afc7.alias = ['igstory']
_0x22afc7.react = '\uD83C\uDF80'
_0x22afc7.desc = 'Download instagram videos/photos.'
_0x22afc7.category = 'download'
_0x22afc7.use = '.ig <Instagram link>'
_0x22afc7.filename = __filename
cmd(
  _0x22afc7,
  async (
    _0x3397e9,
    _0x128371,
    _0x5a8641,
    {
      from: _0x3dd82d,
      l: _0x1f4035,
      quoted: _0x2b69be,
      body: _0x49dc48,
      isCmd: _0x1ef6ae,
      command: _0x47fa63,
      args: _0x21fd67,
      q: _0x376a6e,
      isGroup: _0xdac472,
      sender: _0x22be58,
      senderNumber: _0x497a79,
      botNumber2: _0x2657c9,
      botNumber: _0x277e58,
      pushname: _0x383973,
      isMe: _0x5a7bc9,
      isOwner: _0x58efc1,
      groupMetadata: _0x5c40b1,
      groupName: _0x119b4e,
      participants: _0x2008f3,
      groupAdmins: _0x5044bc,
      isBotAdmins: _0x6ec2fd,
      isAdmins: _0x1454d5,
      reply: _0x26c3fe,
    }
  ) => {
    try {
      if (!_0x376a6e) {
        return await _0x26c3fe(needus)
      }
      let _0x293f55 = await fetchJson(
        'https://api.maher-zubair.tech/download/instagram2?url=' + _0x376a6e
      )
      for (
        let _0x53ebfb = 0;
        _0x53ebfb < _0x293f55.data.data.length;
        _0x53ebfb++
      ) {
        const _0xac0bd4 = { quoted: _0x128371 }
        const _0x55f60a = { quoted: _0x128371 }
        if (_0x293f55.data.data[_0x53ebfb].type === 'image') {
          await _0x3397e9.sendMessage(
            _0x3dd82d,
            {
              image: { url: _0x293f55.data.data[_0x53ebfb].url },
              caption: config.FOOTER,
            },
            _0xac0bd4
          )
        } else {
          await _0x3397e9.sendMessage(
            _0x3dd82d,
            {
              video: { url: _0x293f55.data.data[_0x53ebfb].url },
              caption: config.FOOTER,
            },
            _0x55f60a
          )
        }
      }
    } catch (_0x299a37) {
      _0x26c3fe()
      _0x1f4035(_0x299a37)
    }
  }
)
const _0x22cc95 = {}
_0x22cc95.pattern = 'snack'
_0x22cc95.react = '\uD83C\uDF80'
_0x22cc95.desc = 'Download snack videos/photos.'
_0x22cc95.category = 'download'
_0x22cc95.use = '.snack <Snack link>'
_0x22cc95.filename = __filename
cmd(
  _0x22cc95,
  async (
    _0x472c70,
    _0x4d7080,
    _0x504c95,
    {
      from: _0x357658,
      l: _0x3372dd,
      quoted: _0x31e886,
      body: _0x58441d,
      isCmd: _0x6ae0ac,
      command: _0x4855d3,
      args: _0x1a9dff,
      q: _0x50be0a,
      isGroup: _0xd6861,
      sender: _0x5ee177,
      senderNumber: _0x426381,
      botNumber2: _0x339c40,
      botNumber: _0x6b6008,
      pushname: _0x32f971,
      isMe: _0x4a5be3,
      isOwner: _0x49e556,
      groupMetadata: _0x2d7819,
      groupName: _0x311ed3,
      participants: _0xf2c83,
      groupAdmins: _0x488798,
      isBotAdmins: _0x2e231a,
      isAdmins: _0x49829c,
      reply: _0x490991,
    }
  ) => {
    try {
      if (!_0x50be0a) {
        return await _0x4d7080.reply('*Please provide a Snack video URL.*')
      }
      const _0x1b11cd =
          'https://api.maher-zubair.tech/download/snack?url=' +
          encodeURIComponent(_0x50be0a),
        _0x37c020 = await fetchJson(_0x1b11cd)
      if (_0x37c020.status !== 200) {
        return await _0x4d7080.reply('*Error: ' + _0x37c020.result + '*')
      }
      const { caption: _0x1ae557, q: _0x502b4e } = _0x37c020.result,
        _0x1a9fe3 = { caption: _0x1ae557 }
      await _0x472c70.sendMessage(_0x502b4e, _0x1a9fe3, 'video', _0x4d7080)
    } catch (_0x497b7f) {
      console.error(_0x497b7f)
      await _0x4d7080.reply('*An error occurred while downloading the video.*')
      _0x490991()
      _0x3372dd(e)
    }
  }
)
