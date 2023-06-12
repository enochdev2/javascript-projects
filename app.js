let colour = ["blue", "green", 'red', 'rgb(230 250 120)', '#f356D3'];
console.log(colour)
let btn = document.getElementById("btn");
let colours = document.getElementById("colour");
btn.addEventListener("click", function () {
    let randomNumber = random();
document.body.style.backgroundColor = colour[randomNumber];
    colours.textContent = colour[randomNumber];
});

function random () {
    return Math.floor(Math.random()*colour.length)
}