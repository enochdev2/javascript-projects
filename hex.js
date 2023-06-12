let colour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let btn = document.getElementById("btn");
let colours = document.getElementById("colour");
btn.addEventListener("click", function () {
    let color = '#';
    for(let i=0; i<6; i++){
        color += colour[random()]
    }
    
    document.body.style.backgroundColor = color;
    colours.textContent = color;
});

function random () {
    return Math.floor(Math.random()*colour.length)
}