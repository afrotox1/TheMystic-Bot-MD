import fetch from 'node-fetch'
let handler = async (m, { isPrems, conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" 
}
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]    

let user = global.db.data.users[m.sender]
let premium = user.premium

let limit = `${pickRandom([15, 23, 29, 36, 42, 50, 59, 65, 70, 83])}` * 1
let limitpremium = `${pickRandom([45, 59, 70, 88, 100, 120, 135, 143, 149, 150])}` * 1

let emas = `${pickRandom([5, 8, 12, 16, 19, 22, 25, 27, 29, 30])}` * 1
let emaspremium = `${pickRandom([14, 16, 18, 22, 27, 29, 33, 36, 38, 40])}` * 1

let joincount = `${pickRandom([5, 9, 15, 16, 25, 28, 30])}` * 1
let joincountpremium = `${pickRandom([12, 19, 25, 34, 44, 50])}` * 1

let eleksirb = `${pickRandom([20, 30, 39, 50, 55, 59, 60])}` * 1
let eleksirbpremium = `${pickRandom([35, 55, 80, 120, 150, 170])}` * 1

let gold = `${pickRandom([4, 7, 9, 14, 18])}` * 1
let goldpremium = `${pickRandom([9, 18, 26, 38, 45])}` * 1

let berlian = `${pickRandom([5, 7, 9, 11, 15, 19, 26, 28, 29, 30])}` * 1
let berlianpremium = `${pickRandom([16, 22, 31, 39, 42, 53, 65, 67, 69, 70])}` * 1

let kardus = `${pickRandom([5, 8, 10, 17, 25, 39, 46, 48, 49, 50])}` * 1
let karduspremium = `${pickRandom([17, 30, 49, 55, 58, 59, 73, 79, 81, 89])}` * 1

let pet = `${pickRandom([4, 4, 4, 6, 6, 7, 7, 2, 2, 2])}` * 1
let petpremium = `${pickRandom([7, 7, 7, 12, 12, 12, 18, 18, 18, 20])}` * 1

let gardenboxs = `${pickRandom([3, 3, 3, 3, 4, 4, 2, 2, 2, 5])}` * 1
let gardenboxspremium = `${pickRandom([6, 6, 8, 8, 10, 10, 12, 12, 12, 15])}` * 1

let legendary = `${pickRandom([2, 2, 2, 2, 2, 3, 3, 4, 4, 4])}` * 1
let legendarypremium = `${pickRandom([4, 4, 4, 6, 6, 6, 7, 7, 9, 10])}` * 1
 
const recompensas = {
  limit: premium ? limitpremium : limit,
  emas: premium ? emaspremium : emas,
  joincount: premium ? joincountpremium : joincount,
  eleksirb: premium ? eleksirbpremium : eleksirb,
  gold: premium ? goldpremium : gold,
  berlian: premium ? berlianpremium : berlian,
  kardus: premium ? karduspremium : kardus,
  pet: premium ? petpremium : pet,
  gardenboxs: premium ? gardenboxspremium : gardenboxs,
  mythic: premium ? legendarypremium : legendary,
}

let time = user.lastmonthly + 432000000 //432000000 5 dias
if (new Date - user.lastmonthly < 432000000) return await conn.reply(m.chat, `𝒀𝒂 𝒓𝒆𝒄𝒊𝒃𝒊𝒔𝒕𝒆 𝒕𝒖 𝒓𝒆𝒄𝒐𝒎𝒑𝒆𝒏𝒔𝒂 𝒎𝒆𝒏𝒔𝒖𝒂𝒍 🌅`, wm + `\n\n𝑽𝒖𝒆𝒍𝒗𝒆 𝒆𝒏 : \n${clockString(time - new Date() * 1)}`, fkontak,  m)
//await conn.sendButton(m.chat, `𝙔𝘼 𝙍𝙀𝘾𝙄𝘽𝙄𝙎𝙏𝙀 𝙏𝙐 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼 𝙈𝙀𝙉𝙎𝙐𝘼𝙇 🌅\n\n𝙔𝙊𝙐 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝙍𝙀𝘾𝙀𝙄𝙑𝙀𝘿 𝙔𝙊𝙐𝙍 𝙈𝙊𝙉𝙏𝙃𝙇𝙔 𝙍𝙀𝙒𝘼𝙍𝘿 🌅`, wm + `\n\n𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 : 𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙄𝙉\n${clockString(time - new Date() * 1)}`, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n┃ `}
let text = `╭━━🏄‍♂️━⛷️━🤾‍♀️━━⬣
┃ 🏅 𝑹𝒆𝒄𝒐𝒎𝒑𝒆𝒏𝒔𝒂 𝒎𝒆𝒏𝒔𝒖𝒂𝒍!!!
┃ *${premium ? '🎟️ مكافأة مميزة' : '🆓 مكافأة مجانية'}*
┃ ${texto}
╰━━🧘‍♂️━🤺━🚴‍♀️━━⬣\n\n🎟️ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 ⇢ ${premium ? '✅' : '❌'}\n${wm}`
await conn.sendFile(m.chat, img, 'gata.jpg', text, fkontak)
//await conn.sendButton(m.chat, text, texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, gata.getRandom(), [['⚗️ 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙍 𝘾𝙊𝙁𝙍𝙀 ⚗️', '/cofre'], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, enlace)  
user.lastmonthly = new Date * 1
}
handler.command = ['شهري', 'cadames', 'mes', 'mensual', 'entregadelmes'] 
handler.level = 10
handler.register = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['┃⇢ ', ye, ' *🗓️ Años*\n', '┃⇢ ', mo, ' *⛅ Mes*\n', '┃⇢ ', d, ' *☀️ Días*\n', '┃⇢ ', h, ' *⏰ Horas*\n', '┃⇢ ', m, ' *🕐 Minutos*\n', '┃⇢ ', s, ' *⏱️ Segundos*'].map(v => v.toString().padStart(2, 0)).join('')
}
