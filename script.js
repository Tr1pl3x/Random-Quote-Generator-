
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";
const darkModeButton = document.getElementById("darkMode");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML= data.content;
    author.innerHTML = `-${data.author}`;
}

function copyText() {
    const text = `${quote.innerHTML} - ${author.innerHTML}`;
    navigator.clipboard.writeText(text);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        darkModeButton.innerHTML = '<i class="fa-solid fa-sun fa-2xl"></i> <span class="text-container">light mode?</span>';
    } else {
        darkModeButton.innerHTML = '<i class="fa-solid fa-circle-half-stroke fa-2xl"></i><span class="text-container">dark mode?</span>';
    }
}

getQuote(api_url);