const GAMEBOARD_WIDTH = 500;
const GAMEBOARD_HEIGHT = 500;

const ORIENTATION_LEFT = "left";
const ORIENTATION_RIGHT = "right";
const ORIENTATION_UP = "up";
const ORIENTATION_DOWN = "down";

const NINJA_WIDTH = 59;
const NINJA_HEIGHT = 86;

const DEFAULT_NINJA_X_POSITION = 100;
const DEFAULT_NINJA_Y_POSITION = 100;
const DEFAULT_NINJA_ORIENTATION = ORIENTATION_DOWN;
const DEFAULT_NINJA_SPEED = 20;

function Ninja() {
    this.xPosition = DEFAULT_NINJA_X_POSITION;
    this.yPosition = DEFAULT_NINJA_Y_POSITION;
    this.orientation = ORIENTATION_DOWN;
    this.speed = DEFAULT_NINJA_SPEED;
    this.step = 1;

    this.buildImage = function () {
        this.image = this.orientation + this.step + '.png';
    };
}