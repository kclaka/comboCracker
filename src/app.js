const gameArea = document.querySelector(".game");

const button = document.querySelector("button");
let gamePlay = false;

button.addEventListener("click", function () {
    if(!gamePlay){
        gamePlay = true;
        button.innerHTML = "Check Combo";
    }else{
        maker();
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
        el.style.width = "40px";
        el.value = 0;
        el.order = 0;
        console.log(el);
        gameArea.appendChild(el);
    }

};