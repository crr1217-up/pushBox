import { render } from "./ui.js";
import * as map from "./map.js";
// import { direction } from "./index.js";
// let lock = false;
function isWin() { 
    const arr = [];
    let j=0;
    for (const item of map.correct) {
        if (map.content[item.row][item.col] == map.BOX) {
            arr.push(true);
        } else { 
            arr.push(false);
        }
    }
    for (const i of arr) {
        i == true ? j++ : "";
    }
    if (j==arr.length) { 
        return true;
    }
    return false;
}

function isMove(direction) {
    if (isWin()) { 
        alert("游戏胜利");
        return false;
    }
    const player = dir();
    const plaRow = player.row;
    const plaCol = player.col;
    const nextPosition = getNextInfo(plaRow, plaCol, direction);
    const nextRow = nextPosition.row;
    const nextCol = nextPosition.col;

    if (map.content[nextRow][nextCol] == map.SPACE) {
        // return true;
        exchange(plaRow, plaCol, nextRow, nextCol);
        // return true;
    } else if (map.content[nextRow][nextCol] == map.BOX) {
        const result = getNextInfo(nextRow, nextCol, direction);
        console.log(result);
        if (result.value == map.SPACE) {
            // return true;  
            exchange(nextRow, nextCol, result.row, result.col);
            exchange(plaRow, plaCol, nextRow, nextCol);
            // return true;
        } else if (result.value == map.WALL) { 
            return false;
        }
    }
    // return false;
}

function getNextInfo(row,col,direction) {
    if (direction=="up") { 
        return {
            row: row - 1,
            col,
            value:map.content[row-1][col]
        }
    }else if (direction=="down") { 
        return {
            row: row + 1,
            col,
            value:map.content[row+1][col]
        }
    }else if (direction=="left") { 
        return {
            row,
            col:col-1,
            value:map.content[row][col-1]
        }
    }else if (direction=="right") { 
        return {
            row,
            col:col+1,
            value:map.content[row][col+1]
        }
    }
}

function dir() {
    for (let row = 0; row < map.rowNum; row++) {
        for (let col = 0; col < map.colNum; col++) {
            if (map.content[row][col] == map.PLAYER) { 
                // console.log("开始移动");
                return {
                    row,
                    col
                }
            }
        }
        
    }
}

function exchange(row1,col1,row2,col2) {
   let last = map.content[row2][col2];
    map.content[row2][col2] = map.content[row1][col1];
    map.content[row1][col1] = last;
}

/**
 * 移动方向：right,left,up,down
*/

export function onmove(direction) { 
    //移动
    // console.log(direction);
    if (direction == "up") {
        isMove(direction);
    } else if (direction == "down") { 
        isMove(direction);
    }else if (direction == "left") { 
        isMove(direction);
    }else if (direction == "right") { 
        isMove(direction);
    }
    render();
}