const letters = "ABCDEFGHIJKLMNOPRSTUVZXYW"

document.querySelector("a").onmouseover = event => {
    let iterations = 0;

    setInterval(() => {
        event.target.innerText =event.target.innerText.split("")
        .map((letter, index) => {
            if (index < iterations) {
                return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
    
        
        if (iterations >= 9) clearInterval(interval);

        iterations += 1;
    }, 100);
}