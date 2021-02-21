let handler = function (m) {
  // this.sendContact(m.chat, '6283191632340', 'JereOfficial', m)
  this.sendContact(m.chat, '6283191632340', 'JereOfficial', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
