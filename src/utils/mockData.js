const USERS = [
  'streamlord', 'pixelwitch', 'nachtfalke', 'grocko', 'velvetfox',
  'zephyrbean', 'ironclad99', 'mossyrock', 'lunarpanda', 'glitchkid',
  'torchrunner', 'cryptonova', 'duskwhale', 'frostbyte_', 'prismcat',
  'yarngolem', 'staticdove', 'cobaltjaw', 'emberquill', 'voidshrimp',
]

const COLORS = [
  '#bf94ff', '#ff6b6b', '#4ecdc4', '#ffd93d', '#6bcb77',
  '#4d96ff', '#ff922b', '#da77f2', '#74c0fc', '#f783ac',
  '#a9e34b', '#ff6b9d', '#63e6be', '#ffa94d', '#748ffc',
]

// Built once at module load — stable user → color forever
const USER_COLOR_MAP = Object.fromEntries(
  USERS.map((user, i) => [user, COLORS[i % COLORS.length]])
)

const SHORT  = ['lol', 'omg', 'LUL', 'yes!', 'nooo', 'PogChamp', 'ez', 'gg', 'lmao', 'based']
const MEDIUM = [
  'that was actually insane',
  'how is this guy so good',
  'first time watching, loving it',
  'this chat is moving so fast',
  'classic moment right there',
  'I cannot believe that just happened',
  'the music in this part is perfect',
]
const LONG = [
  'I have been watching this stream for 3 hours and I still have no idea what is going on but I love it',
  'chat slow down I cannot read anything, every time I blink there are 50 new messages',
  'the way this was pulled off is genuinely one of the most impressive things I have seen all year',
]

function randomText() {
    const roll = Math.random();
    if (roll < 0.5) return SHORT[Math.floor(Math.random() * SHORT.length)];
    if (roll < 0.85) return MEDIUM[Math.floor(Math.random() * MEDIUM.length)];
    return LONG[Math.floor(Math.random() * LONG.length)];
}

function randomUser() {
    return USERS[Math.floor(Math.random() * USERS.length)];
}

function formatTime(date) {
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
} 

let nextId = 0;

export function createMessage() {
    const user = randomUser();
    return {
        id: nextId++,
        user,
        color: USER_COLOR_MAP[user],
        avatar: user[0].toUpperCase(),
        text: randomText(),
        timestamp: formatTime(new Date())
    }
}

export function createInitialMessages(count = 50) {
    return Array.from({length: count}, createMessage)
}