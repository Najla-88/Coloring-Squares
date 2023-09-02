var btn = document.querySelectorAll('.btn');
var currentColor = 'red';

let content = "";

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        content += `<button id="block1" type="button " class="btn"></button>`;
    }
    content += `<br>`
}
document.getElementById("show").innerHTML = content;

let allButtons = document.querySelectorAll("#show button");
console.log(allButtons);


allButtons.forEach(element => {

    element.onclick = function() {
        currentColor === 'red' ?
            element.style = "background:red;" :
            element.style = "background:blue;";
    }
});

function setRed() {
    currentColor = 'red';
}

function setBlue() {
    currentColor = 'blue';
}