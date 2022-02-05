const quotes = [
    {
        quote: "We become what we think about",
        author: "Earl Nightingale",
    },
    {
        quote: "People who are crazy enough to think they can change the world, are the ones who do.",
        author: "Rob Siltanen",
    },
    {
        quote: "Optimism is the one quality more associated with success and happiness than any other.",
        author: "Brian Tracy",
    },
    {
        quote: "Happiness is not something readymade. It comes from your own actions.",
        author: "Dalai Lama",
    },
    {
        quote: "All our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney",
    },
    {
        quote: "Believe you can and you’re halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Integrity is the most valuable and respected quality of leadership. Always keep your word.",
        author: "Brian Tracy",
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein",
    },
    {
        quote: "Whether you think you can or think you can’t, you’re right..",
        author: "Henry Ford",
    },
    {
        quote: "Security is mostly a superstition. Life is either a daring adventure or nothing.",
        author: "Helen Keller",
    },
    {
        quote: "Creativity is intelligence having fun.",
        author: "Albert Einstein",
    },
    {
        quote: "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
        author: "Johann Wolfgang Von Goethe",
    },
    {
        quote: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
        author: "Unknown",
    },
    {
        quote: "It’s not whether you get knocked down, it’s whether you get back up.",
        author: "Vince Lombardi",
    },
    {
        quote: "The happiness of your life depends on the quality of your thoughts.",
        author: "Marcus Aurelius",
    },
    {
        quote: "There is no substitute for hard work.",
        author: "Thomas Edison",
    },
    {
        quote: "It hurt because it mattered.",
        author: "John Green",
    },
    {
        quote: "May your choices reflect your hopes, not your fears.",
        author: "Nelson Mandela",
    },
    {
        quote: "Change the world by being yourself.",
        author: "Amy Poehler",
    },
    {
        quote: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
        author: "Don Zimmer",
    },
    {
        quote: "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.",
        author: "Steve Jobs",
    },
    {
        quote: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Someone is sitting in the shade today because someone planted a tree a long time ago.",
        author: "Warren Buffet",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const cur_quote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = cur_quote.quote;
author.innerText = cur_quote.author;