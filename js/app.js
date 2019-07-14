
if (localStorage.getItem("moment-name")) {
    console.log(localStorage.getItem("moment-name"));
} else {
    while(true) {
        const name = prompt("Seems to be your first time here. Enter your name :)");
        if (name) {
            localStorage.setItem("moment-name", name);
            break;
        }
        continue;
    }
}

let user = localStorage.getItem("moment-name");


setTimeout(() => {
    let date, hour, minutes, seconds;
    let time, quote, body, quotes, images, welcome;
    
    time = document.querySelector(".time span");
    quote = document.querySelector("p");
    body = document.querySelector("body");
    welcome = document.querySelector("h3");
    
    quotes = [
        "All that we are is the result of what we have thought.",
        "I have no special talent. I am only passionately curious.",
        "Wisely, and slow. They stumble that run fast.",
        "The future belongs to those who prepare for it today.",
        "It always seems impossible until it’s done.",
        "Try not to become a man of success but rather to become a man of value."
    ];
    images = [
        "https://images.pexels.com/photos/1367188/pexels-photo-1367188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/5234/forest-whitespace.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/662337/pexels-photo-662337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ];
    
    
    let updateView = setInterval(() => {
        
        date = new Date();
        hour = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
    
        time.textContent = `${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes}`;
        
    }, 1000);
    
    body.style.backgroundImage = "linear-gradient(to right, #ad5389c9, #3b1053c7), url("+images[Math.floor(Math.random() * 5)]+")";
    quote.textContent = quotes[Math.floor(Math.random() * 6)];
    welcome.textContent = `Welcome, ${user}!`;
}, 1000);