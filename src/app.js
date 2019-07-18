const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");

let gamePlay = false;

button.addEventListener("click", function () {
    if(!gamePlay){
        gamePlay = true;
        button.innerHTML = "Check Combo";
        maker();
    }else{
        const numbers = document.querySelectorAll(".numb");
        for(let i = 0; i < numbers.length; i++) {
            console.log(numbers[i].value);
            console.log(numbers[i].correct);
            if (parseInt(numbers[i].value) === numbers[i].correct) {
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.color = "white";
            } else {
               let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "black";
            }
        }

    }

});

const maker = function () {
    for(let i = 0; i < 4; i++){
        let el = document.createElement("input");
        el.setAttribute("type", "number");
        el.classList.add("numb");
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.style.width = "60px";
        el.order = 0;
        el.correct = Math.floor(Math.random()*10);
        console.log(el.correct);
        el.value = 0;
        console.log(el);
        gameArea.appendChild(el);
    }
};

