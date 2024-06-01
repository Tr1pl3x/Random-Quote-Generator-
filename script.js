const unsplashID = "dFl2jbtBrc_KFtpjv_du4bIR-dvxDZGfkCG-kq3jah4";
const filter = "cats";
const quoteBox = document.getElementById("bg-img");

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";
const darkModeButton = document.getElementById("darkMode");


async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
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

async function getImg(){
    const img_endpoint = `https://api.unsplash.com/photos/random?query=${filter}&client_id=${unsplashID}`;
    try {
        const res = await fetch(img_endpoint);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        var data = await res.json();
        console.log(`url(${data.urls.regular})`);
        quoteBox.style.backgroundImage = `url(${data.urls.regular})`;
    } catch (error) {
        console.error('Error fetching Image:', error);
        quoteBox.style.background = `#7f7f7f`;
    }
}

getQuote(api_url);
