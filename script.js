let quotes = [
    "Wow , to be born is to die. Problem solved !",
    "It's tomorrow now",
    "Sports!",
    "¡Deportes!",
    "I'm gonna KILL you, driving crooner",
    "I FELL",
    "yaaaaaAAAAAYYYY",
    "get on my bad side? shame on you... get on my good side? shame on me",
    "PLEASE LET ME GO I'M DOING SOMETHING",
    "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues",
    "Jake Naysh Y'all",
    "IT CAN'T BE REAL IT'S NOT SAFE",
    "I'M NOT A LITTLE RAT BOY",
    "wanna play some catan?",
    "Ay que rico",
    "A lot of everything has some of them"
];

let quoteUsed = "";

function getRandomQuote(){
    let r = Math.floor(Math.random() * quotes.length);
    quoteUsed = quotes[r];
}

Object.onload = getRandomQuote();

document.getElementById('current-quote').innerHTML = quoteUsed;
