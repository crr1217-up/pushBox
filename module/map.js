const SPACE = 0,
    PLAYER = 1,
    WALL = 2,
    BOX = 3;

/**
 * 0. 空白
 * 1. 玩家
 * 2. 墙
 * 3. 箱子
 */
const content = [
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 0, 1, 0, 2, 0, 0],
    [0, 0, 2, 0, 3, 0, 2, 0, 0],
    [2, 2, 2, 0, 0, 0, 2, 2, 2],
    [2, 0, 0, 0, 3, 0, 0, 0, 2],
    [2, 0, 3, 3, 3, 3, 3, 0, 2],
    [2, 0, 0, 0, 3, 0, 0, 0, 2],
    [2, 2, 0, 3, 3, 3, 0, 2, 2],
    [0, 2, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 3, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0]
],
    correct = [
        { row: 3, col: 4 },
        { row: 4, col: 4 },
        { row: 5, col: 2 },
        { row: 5, col: 3 },
        { row: 5, col: 4 },
        { row: 5, col: 5 },
        { row: 5, col: 6 },
        { row: 6, col: 4 },
        { row: 7, col: 4 },
        { row: 8, col: 4 },
        { row: 9, col: 4 },
        { row: 10, col: 4 }
    ];

const rowNum = content.length,
    colNum = content[0].length;
export {SPACE,PLAYER,WALL,BOX,content,correct,colNum,rowNum };