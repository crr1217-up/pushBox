import * as map from "./map.js";

const game = document.getElementsByClassName("game")[0];
const width = map.colNum * 45;
const height = map.rowNum * 45;
game.style.width = width + "px";
game.style.height = height + "px";


function isCorrect(row,col) {
   // for (let i = 0; i < map.correct.length; i++) {
       return map.correct.find((ele) => { 
            if (ele.row == row && ele.col == col) { 
                return true;
            }
        }) != undefined;
        
   // }
}

function print(ele,row, col) { 
    const div = document.createElement("div");
    div.className = "item";
    if (ele == map.SPACE) {
        if (isCorrect(row,col)) {
            div.classList.add("correct");
           
        } else { 
            return;
        }
    } else if (ele == map.PLAYER) {
        div.classList.add("player");
       
    } else if (ele == map.WALL) {
        div.classList.add("wall");
       
    } else if (ele == map.BOX) { 
        if (isCorrect(row,col)) {
            div.classList.add("over-box");
           
        } else { 
            div.classList.add("box");
           
        }
    }
    pailie(div,row,col);
    game.appendChild(div);
}

function pailie(dom,row,col) {
    dom.style.left = col * 45 + "px";
    dom.style.top = row * 45 + "px";
}

export function render() {
    game.innerHTML = "";
    for (let row = 0; row < map.rowNum; row++) {
        for (let col = 0; col < map.rowNum; col++) {
            const ele = map.content[row][col];
            print(ele, row, col);
        }
    }
        
}