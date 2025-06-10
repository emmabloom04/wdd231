const button = document.querySelector(".quote-button");

function loadQuotes(file_name) {
    fetch(file_name)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Fetch error:", error);
        })
}

function QuotesTemplate(quote) {
    return `<li>${quote}</li>`
}

button.addEventListener("click", loadQuotes('quotes.json'));