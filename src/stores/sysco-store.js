import moment from 'moment'

const MENUS = [
  { name: 'Hello', price: '12.99' },
  { name: 'Hello1', price: '12.99' },
  { name: 'Hello', price: '12.99' },
  { name: 'Hello', price: '12.99' },
  { name: 'Hello', price: '12.99' },
  { name: 'Hello', price: '12.99' }
]

const _now = new Date().getTime()

const CHATS = [
  { sender: 'Assistant', role: 'bot', timestamp: _now, content: 'Good morning Chef! Looks like the meatball dish didn’t do well last week  ...', actionable: true },
  { sender: 'Me (Sophie)', role: 'client', timestamp: _now, content: 'Why not?', actionable: false },
  { sender: 'Tom (Sysco MA)', role: 'sysco', timestamp: _now, content: 'Hey Sophie, you may want to try some lamb-based meatball recipes. We’ve seen some interesting market-ing stats in your region.', actionable: false },
]

const REVIEWS = [
  { ratings: 2, timestap: '2d ago', review: 'Frankly, I found the meatballs to be overcooked and underflavored. It left much to be desired.' },
  { ratings: 1, timestap: '3d ago', review: 'Boring and bland meatball dish...come on! spice it up.' },
  { ratings: 3, timestap: '3d ago', review: 'The meatball plate has been my goto dish for a while, but lately it has lost something. I don’t know what exactly, but maybe it needs a revamp...' },
  { ratings: 1, timestap: '2d ago', review: 'Your meatballs suck.' },
]

export {
  MENUS,
  CHATS,
  REVIEWS,
}
