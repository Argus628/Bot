const handler = async (m, {conn, isROwner, text}) => {
  const delay = (time) => new Promise((res) => setTimeout(res, time));
  const getGroups = await conn.groupFetchAllParticipating();
  const groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
  const anu = groups.map((v) => v.id);
  const pesan = m.quoted && m.quoted.text ? m.quoted.text : text;
  if (!pesan) throw '*ingrese el mensaje que quiere que transmita*';
  // m.reply(`*mensaje enviado a ${anu.length} grupo/s*\n\n*𝐍𝐎𝐓𝐀: es posible que este comando tenga fallas y no se envie a todos los chats, disculpe por el momento`)
  for (const i of anu) {
    await delay(500);
    conn.relayMessage(i,
        {liveLocationMessage: {
          degreesLatitude: 35.685506276233525,
          degreesLongitude: 139.75270667105852,
          accuracyInMeters: 0,
          degreesClockwiseFromMagneticNorth: 2,
          caption: '[𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎]\n\n' + pesan + '\n\n𝙀𝙎𝙏𝙀 𝙀𝙎 𝙐𝙉 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇',
          sequenceNumber: 2,
          timeOffset: 3,
          contextInfo: m,
        }}, {}).catch((_) => _);
  }
  m.reply(`*mensaje enviado a ${anu.length} 𝙶𝚁𝚄𝙿𝙾/𝚂*\n\n*𝐍𝐎𝐓𝐀: es posible que este comando tenga fallas y no se envie a todos los chats, disculpe por el momento*`);
};
handler.help = ['broadcastgroup', 'bcgc'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(broadcast|bc)(group|grup|gc)$/i;
handler.owner = true;

export default handler;

/* import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) {
conn.sendButton(id, `*╔══❰ 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '𝙀𝙎𝙏𝙀 𝙀𝙎 𝙐𝙉 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝙾𝚆𝙽𝙴𝚁 🤖', '.owner'],['💎 𝙳𝙾𝙽𝙰𝚁 💎', '.donasi']], false, {
contextInfo: { externalAdReply: {
title: 'ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ɢʀᴜᴘᴏs',
body: '𝚋𝚢 𝙹𝚘𝚝𝚌𝚑𝚞𝚊-𝚋𝚘𝚝',
sourceUrl: `https://github.com/AleXD0009/Jotchua-Bot`,
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 ${groups.length} 𝙶𝚁𝚄𝙿𝙾/𝚂*\n\n*𝐍𝐎𝐓𝐀: es posible que este comando tenga fallas y no se envie a todos los chats, disculpe por el momento*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler*/
