let quotes = [];
quotes.push("Wow, to be born is to die. Problem solved!");
quotes.push("Believe it or not I actually programmed this.");
quotes.push("To dip is to die. Problem solved.");
quotes.push("It's tomorrow now");
quotes.push("We all die. You either kill yourself or get killed");
quotes.push("Sports!");
quotes.push("¡Deportes!");

let quoteUsed = "Hey man";

function getRandomQuote(){
    let r = Math.floor(Math.random() * quotes.length);
    quoteUsed = quotes[r];
}

Object.onload = getRandomQuote();

document.getElementById('current-quote').innerHTML = quoteUsed;
