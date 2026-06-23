// Comprehensive Bad Word Filter
const badWords = [
    // Core swear words and variations
    "fuck", "fucking", "fucked", "fucker", "fuckers", "fuckoff", "fuckyou", "fuk", "fck",
    "shit", "shitty", "shitface", "shithead", "bullshit", "shits",
    "ass", "asshole", "assholes", "asshat", "asswipe", "dumbass",
    "bitch", "bitches", "bitchy", "sonofabitch",
    "cunt", "cunts", "twat",
    "dick", "dickhead", "dickwad",
    "pussy", "pussies",
    "cock", "cocksucker", "cockhead",
    "motherfucker", "mothafucker", "mf", "mofos",
    "bastard", "bastards",
    
    // Sexual / explicit terms
    "anal", "anilingus", "anus", "arse", "arsehole", "assfucker", "asslick", "assmunch",
    "ballbag", "ballsack", "blowjob", "blumpkin", "boob", "boobs", "bukakke", "bukkake",
    "clit", "clitoris", "cum", "cumbubble", "cumshot", "cunnilingus", "deepthroat",
    "dildo", "ejaculate", "faggot", "fag", "fanny", "fistfuck", "gangbang", "handjob",
    "horny", "jizz", "masturbate", "orgasm", "orgy", "penis", "porn", "porno", "prostitute",
    "rimjob", "scat", "semen", "sex", "slut", "tit", "tits", "titties", "vagina", "whore",
    
    // Racial / derogatory slurs (very common in filters)
    "nigger", "nigga", "nigg", "chink", "kike", "spic", "wetback", "beaner", "gook", "paki",
    "raghead", "towelhead", "jap", "coon", "cracker",
    
    // More from extensive lists
    "2g1c", "5h1t", "5hit", "a55", "acrotomophilia", "alabama hot pocket", "alaskan pipeline",
    "apeshit", "arrse", "assbag", "assbanger", "assbite", "assclown", "assface", "assgoblin",
    "asshopper", "assjacker", "assmonkey", "asspirate", "asswad", "autoerotic", "babeland",
    "ball gag", "ball gravy", "bbw", "bdsm", "beaners", "beastiality", "bestiality",
    "biatch", "big black cock", "bimbos", "birdlock", "bloody", "blue waffle", "bollock",
    "bollocks", "bondage", "boner", "boobies", "booty call", "brown showers", "bugger",
    "camel toe", "carpetmuncher", "cawk", "choad", "chode", "circlejerk", "cleveland steamer",
    "clusterfuck", "cockbite", "cockface", "cockjockey", "cockknoker", "cockmongler",
    "cockmunch", "cocknugget", "cocksuck", "coochie", "coon", "cooter", "cornhole",
    "creampie", "cumdumpster", "cumguzzler", "cunthole", "cuntlicker", "cyalis", "cyberfuck",
    "dammit", "damn", "darkie", "daterape", "dickbag", "dickface", "dickhole", "dickjuice",
    "dickmilk", "dickslap", "dickwad", "dickweed", "dike", "dingleberry", "dipshit",
    "dirty sanchez", "doggiestyle", "doggystyle", "domination", "donkey punch", "douchebag",
    "dumshit", "dyke", "eat my ass", "ecchi", "ejakulate", "f4nny", "faggit", "fannyflaps",
    "fannyfucker", "fart", "fatass", "fcuk", "felch", "fellatio", "fingerbang", "fingerfuck",
    "fistfuck", "flamer", "fook", "footjob", "frotting", "fucka", "fuckhead", "fucktard",
    "fudgepacker", "gangbanged", "gaysex", "goddamn", "gooch", "goregasm", "grope",
    "g-spot", "handjob", "hardcore", "heeb", "hentai", "heshe", "hoe", "honkey", "honky",
    "hooker", "hot carl", "incest", "jackoff", "jailbait", "jerkoff", "jigaboo", "jism",
    "jiz", "jizz", "kawk", "kike", "kinky", "knob", "knobhead", "kunilingus", "kunt",
    "labia", "lesbo", "lmfao", "lolita", "lust", "m0fo", "masterbate", "milf", "minge",
    "mofo", "mothafucka", "muff", "muffdiver", "n1gga", "n1gger", "nazi", "negro", "neonazi",
    "nig nog", "nigg3r", "niggah", "niggas", "niggaz", "niglet", "nimphomania", "nympho",
    "octopussy", "omorashi", "paedophile", "panooch", "pecker", "pedophile", "pegging",
    "penisfucker", "phuck", "phuk", "piece of shit", "pigfucker", "piss", "pissed", "pissoff",
    "poon", "poonani", "poontang", "poop", "pornos", "prick", "pthc", "pube", "punanny",
    "punta", "pusy", "queef", "queer", "queerbait", "quim", "raghead", "rape", "rapist",
    "retard", "rimming", "ruski", "s_h_i_t", "sadism", "santorum", "schlong", "scissoring",
    "shag", "shagger", "shemale", "shibari", "shitass", "shitbag", "shitface", "shithead",
    "shithole", "shitting", "shitty", "skank", "skeet", "slanteye", "slutbag", "smegma",
    "snatch", "snowballing", "sodomize", "spac", "spic", "spunk", "strapon", "sucker",
    "suicide girls", "swastika", "tard", "tea bagging", "thundercunt", "titfuck", "titty",
    "tosser", "towelhead", "tranny", "turd", "tw4t", "twat", "twathead", "twink", "twunt",
    "upskirt", "v14gra", "va-j-j", "vagina", "viagra", "voyeur", "vulva", "wang", "wank",
    "wanker", "wetback", "whore", "willy", "yaoi", "zoophilia"
    // Add more here if needed - this is already very long
];

const badWordRegex = new RegExp(
    '\\b(' + badWords.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b',
    'gi'
);

function filterBadWords(message, replacement = '****') {
    if (!message || typeof message !== 'string') return message;
    
    return message.replace(badWordRegex, replacement);
}

// Example usage:
console.log(filterBadWords("Hey you fucking asshole, go to hell!")); 
// Output: "Hey you **** ****, go to hell!"

console.log(filterBadWords("This is a nice message")); 
// Output: "This is a nice message"
