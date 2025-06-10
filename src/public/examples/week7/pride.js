const button = document.querySelector(".quote-button");

const alreadyLoaded = CheckQuotes();
let quotes = null;

if (alreadyLoaded) {
  quotes = LoadQuotesFromStorage();
  LoadQuotes(quotes);
}

async function LoadQuotes(quotes) {
  button.classList.toggle("hidden");

  quotes = await LoadQuotesFromJSON("quotes.json");
  StoreQuotes(quotes);
  const quoteList = QuoteList(quotes);
  const quoteBox = document.querySelector(".quote-box");
  quoteBox.innerHTML = quoteList;
}

function QuoteList(quotes) {
  const quoteList = quotes.map((quote) => QuotesTemplate(quote)).join("");
  return quoteList;
}

function StoreQuotes(quotes) {
  localStorage.setItem("quotes", JSON.stringify(quotes));
  localStorage.setItem("quotesLoaded", JSON.stringify(true));
}

async function LoadQuotesFromJSON(file_name) {
  let data = {};
  const response = await fetch(file_name);
  if (response.ok) {
    data = await response.json();
    console.log(data);
  } else throw new Error("response not ok");
  const quotes = data["books"][0]["quotes"];
  return quotes;
}

function LoadQuotesFromStorage() {
  const quotes = JSON.parse(localStorage.getItem("quotes"));
  return quotes;
}

function CheckQuotes() {
  const alreadyLoaded = JSON.parse(localStorage.getItem("quotesLoaded"));
  return alreadyLoaded;
}

function QuotesTemplate(quote) {
  return `<li>${quote}</li>`;
}

button.addEventListener("click", async () => {
  try {
    await LoadQuotes();
  } catch (error) {
    console.error("Failed to load quotes:", error);
  }
});
