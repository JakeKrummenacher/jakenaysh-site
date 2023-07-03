let quotes = [
    "Wow , to be born is to die. Problem solved !",
    "It's tomorrow now",
    "Sports!",
    "¡Deportes!",
    "I'm gonna KILL you, driving crooner",
    "I FELL",
    "yaaaaaAAAAAYYYY",
    "get on my bad side -- shame on you... get on my good side -- shame on me",
    "PLEASE LET ME GO I'M DOING SOMETHING",
    "The FitnessGram Pacer Test is a multi-stage aerobic capacity test which progressively gets harder as it continues"
];

let quoteUsed = "";

function getRandomQuote(){
    let r = Math.floor(Math.random() * quotes.length);
    quoteUsed = quotes[r];
}

Object.onload = getRandomQuote();

document.getElementById('current-quote').innerHTML = quoteUsed;
