import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*حط النص او رقم التلفون او اي حاجه انت عاوز تحولها لباركود (Qr Code)*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '¯\\_(𝐵𝑌:𝑺𝐻𝐴𝐷𝑂𝑊&𝐸𝐿𝐺𝐴𝑍𝐴𝑅)_/¯', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?|كود|باركود$/i
export default handler
