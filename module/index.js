import { render } from "./ui.js";
import { onmove as move} from "./rule.js";
render();
// let direction = null;
window.onkeyup = (e) => {
	//console.log(e.key, e.keyCode);
	if (e.key == "ArrowUp") {
        // direction = "up";
        move("up");
	} else if (e.key == "ArrowDown") {
        // direction = "down";
        move("down");
	} else if (e.key == "ArrowLeft") {
        // direction = "left";
        move("left");
	} else if (e.key == "ArrowRight") {
        // direction = "right";
        move("right");
    }
    // rule(direction);
};
// export {direction };
