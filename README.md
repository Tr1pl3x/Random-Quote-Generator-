# Random Quote Generator
Languages: HTML, CSS, Javascript

This is a basic random quote generator website that shows random quotes by various people. Basic functions as implemented are refreshing to get new quotes and copying the generated quote by the copy text button.

### Further Developoment
- Deploying as static web (using AWS)
- Adding pages for credit/acknowledgement
- Smoothening animations

### Random Quotes (API)
```TODO```

### Random Images (API)
```TODO```

### Acknowledgements

**[Quoteable](https://github.com/lukePeavey/quotable)**: a free, open source quotations API which generates random quotes.

**[Unsplash](https://unsplash.com/developers)**: a free, online image library that offers API that you can ask for random generated images.

**Youtube**: Tutorials from this yt channel [Great Stack](https://www.youtube.com/@GreatStackDev) are a great source of help and this project is heavily inspired by youtuber, [Coding with Lewis](https://www.youtube.com/@CodingWithLewis) in the first place.

### Updates
*  **31/05/2024**
    * A new button is added in the website to toggle between dark mode and light mode. The website will initally load in light mode and switched when the button is triggered.
* **01/06/2024**
    * Deafult image is set to ```./assets/default-background.webp```. Integrated a new button to fetch a new image that will become the background of the quote box.
    * Image generator is used from **Unsplash API**. Although the API offers a range of features, the limit is capped at 50 per hour so I might have to search for a new free api with higher cap limit.

* **03/06/2024**
    * When a user pressed on the "copy" button to copy the quote to the clipboard, the website will now show the message "copied ✅" for a second in the hover bubble and then return to the normal state.
    ```javascript
    function copyText() {
        const text = `${quote.innerHTML} - ${author.innerHTML}`;
        navigator.clipboard.writeText(text);
        navigator.clipboard.writeText(text).then(() => {
        cpT.innerHTML = '<i class="fa-solid fa-copy fa-2xl"></i> <span class="text-container">copied ✅</span>';
        setTimeout(() => {
            cpT.innerHTML = '<i class="fa-solid fa-copy fa-2xl"></i> <span class="text-container">copy</span>';
        }, 1000); // Adjust duration as needed
        }).catch(err => {
        console.error('Error copying the text:', err);
        });
    }
    ```
    * As shown in the code stub of copyText() function, the duration of the timeout for the message can be adjusted according to you preference. [ 1000 = 1 second]
