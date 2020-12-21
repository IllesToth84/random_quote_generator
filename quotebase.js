const QUOTEBASE = [
    {
        quote: "People still mourn when people die. That’s self-sympathy. All human beings are selfish to a certain extent, and that’s why people get so sad when someone dies. They haven’t finished using him.",
        author: "Jimi Hendrix"
    },
    {
        quote: "Don’t trust people whose feelings change with time. Trust people whose feelings remain the same, even when the time changes.",
        author: "Bob Marley"
    },
    {
        quote: "We live in a world where we have to hide to make love, while violence is practiced in broad daylight.",
        author: "John Lennon"
    },
    {
        quote: "For me there is something primitively soothing about this music, and it went straight to my nervous system, making me feel ten feet tall.",
        author: "Eric Clapton"
    },
    {
        quote: "For what is a man, what has he got? If not himself, then he has naught. To say the things he truly feels, and not the words of one who kneels.",
        author: "Elvis Presley"
    },
    {
        quote: "The past is a great place and I don't want to erase it or to regret it, but I don't want to be its prisoner either.",
        author: "Mick Jagger"
    },
    {
        quote: "A friend is nothing but a known enemy.",
        author: "Kurt Cobain"
    },
    {
        quote: "Behind every beautiful thing, there’s some kind of pain.",
        author: "Bob Dylan"
    },
    {
        quote: "When God took it, he accepted it; when he brought it back, he accepted it. That's what's happening with me.",
        author: "James Brown"
    },
    {
        quote: "Lies run sprints, but the truth runs marathons. The truth will win this marathon in court.",
        author: "Michael Jackson"
    },
    {
        quote: "The most important kind of freedom is to be what you really are. You trade in your reality for a role. You give up your ability to feel, and in exchange, put on a mask.",
        author: "Jim Morrison"
    },
    {
        quote: "On stage I make love to twenty five thousand people; and then I go home alone.",
        author: "Janis Joplin"
    },
    {
        quote: "It’s like, how did Columbus discover America when the Indians were already here? What kind of shit is that, but white people’s shit?",
        author: "Miles Davis"
    },
    {
        quote: "I've always wanted to smash a guitar over someone's head. You just can't do that with a piano.",
        author: "Elton John"
    },
    {
        quote: "I can't really change my life to accommodate people who are jealous. I don't see why I should.",
        author: "Sting"
    },
    {
        quote: "You can be anything you want to be, just turn yourself into anything you think that you could ever be.",
        author: "Freddie Mercury"
    },
    {
        quote: "With this darkness all around me, I like to be liked. In this emptiness and fear, I want to be wanted. Cause I love to be loved.",
        author: "Peter Gabriel"
    },
    {
        quote: "Some scientists claim that hydrogen, because it is so plentiful, is the basic building block of the universe. I dispute that. I say there is more stupidity than hydrogen, and that is the basic building block of the universe.",
        author: "Frank Zappa"
    },
    {
       quote: "Instead of getting married again, I'm going to find a woman I don't like and just give her a house.",
       author: "Rod Stewart"
    },
]

window.onload = init;
function init() {
    createQuote();
};

function createQuote() {
    let quoteSize = QUOTEBASE.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuote = QUOTEBASE[randomIndex].quote;
    let randomAuthor = QUOTEBASE[randomIndex].author;
    let randomQuoteData = QUOTEBASE[randomIndex];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="
    
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat;
    
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += authorInApiFormat;

    document.querySelector("#tweet-quote").href = twitterLink;
    document.querySelector("#text").innerText = `"${randomQuote}"`;
    document.querySelector("#author").innerText = `-${randomAuthor}`;
}