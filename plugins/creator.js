let handler = function (m) {
  // this.sendContact(m.chat, '6283173108368', 'Ferdy', m)
  this.sendContact(m.chat, '0', '6283173108368', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
