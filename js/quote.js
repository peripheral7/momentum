const quotes = [
  {
    quote: "Have fun while you live.",
    author: "Jason",
  },
  {
    quote: "Try, fail, then try.",
    author: "Jason",
  }
]

const quote = document.querySelector(".quote span:first-child")
const author = document.querySelector(".quote span:last-child")

const todaysQuote = Math.floor((Math.random())*quotes.length)


quote.innerText = quotes[todaysQuote].quote
author.innerText = `-${quotes[todaysQuote].author}`