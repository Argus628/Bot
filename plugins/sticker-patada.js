import {sticker} from '../lib/sticker.js';
import fetch from 'node-fetch';
import MessageType from '@whiskeysockets/baileys';
const handler = async (m, {conn}) => {
  try {
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
    if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
    const res = await fetch('https://api.waifu.pics/sfw/kick');
    const json = await res.json();
    const {url} = json;
    const stiker = await sticker(null, url, `+${m.sender.split('@')[0]} pateo a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`);
    conn.sendFile(m.chat, stiker, null, {asSticker: true});
  } catch (e) { }
};
handler.command = /^(patada|patear)$/i;
export default handler;
