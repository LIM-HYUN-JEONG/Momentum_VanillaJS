const quotes = [
  {
    quote:
      '"Good judgement comes from experience, and a lot of that comes from badjudgement."',
    author: "Will Rogers",
  },
  {
    quote:
      '"The road to success and the road to failure are almost exactly the same."',
    author: "Colin R. Davis",
  },
  {
    quote:
      '"It is better to fail in originality than to succeed in imitation."',
    author: "Herman Melville",
  },
  {
    quote:
      '"Success is walking from failure to failure with no loss of enthusiasm."',
    author: "Winston Churchill",
  },
  {
    quote: '"All progress takes place outside the comfort zone."',
    author: "Michael John Bobak",
  },
  {
    quote:
      '"Success usually comes to those who are too busy to be looking for it."',
    author: "Henry David Thoreau",
  },
  {
    quote: '"The way to get started is to quit talking and begin doing."',
    author: "Walt Disney",
  },
  {
    quote:
      '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."',
    author: "Albert Schweitzer",
  },
  {
    quote:
      '"Success seems to be connected with action. Successful people keep moving."',
    author: "Conrad Hilton",
  },
  {
    quote: '"In order to succeed, we must first believe that we can."',
    author: "Nikos Kazantzakis",
  },
  {
    quote:
      '"The only place where success comes before work is in the dictionary."',
    author: "Vidal Sassoon",
  },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
