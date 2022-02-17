const quotes = [
  {
    quote: "aaaaaaaaaaaaaaaaaaaa",
    author: "aaaaaaaa"
  },
  {
    quote: "bbbbbbbbbbbbbbb",
    author: "bbbbb"
  },
  {
    quote: "cccccccccccccccccc",
    author: "ccccc"
  },
  {
    quote: "dddddddddddddddddddddd",
    author: "dddddd"
  },
  {
    quote: "eeeeeeeeeeeeeeeeeeeeee",
    author: "eeeeeeeee"
  },
  {
    quote: "ffffffffffffffffffff",
    author: "fffffff"
  },
  {
    quote: "gggggggggggggggggggg",
    author: "gggggggggggg"
  },
  {
    quote: "hhhhhhhhhhhhhhhhh",
    author: "hhhhhhhh"
  },
  {
    quote: "iiiiiiiiiiiiiiiiii",
    author: "iiiiiiii"
  },
  {
    quote: "jjjjjjjjjjjjjjjjjjjjjj",
    author: "jjjjjjj"
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

