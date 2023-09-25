/** Draw the Game on the Webpage */
let canvas;
/** Set the world what can be interact with */
let world;
/** Keybind for the movement of the character */
let keyboard = new Keyboard();
const portait = window.matchMedia('(orientation: portrait)').matches;


/** initialising the start page */
function init() {
    canvas = document.getElementById('canvas');
}


/** Show the controls */
function options() {
    document.getElementById('optionKeys').classList.remove('d-none');
    document.getElementById('start').classList.add('d-none');
}


/** Start the game */
function startTheGame() {
    initLevel();
    world = new World(canvas, keyboard);
    document.getElementById('start').classList.add('d-none');
    setInterval(() => {
        if (isMobile()) {
            document.getElementById('mobile-controls').classList.remove('d-none');
        } else {
            document.getElementById('mobile-controls').classList.add('d-none');
        }
    }, 2000);
    addTouch();
}


/** Close the controlls */
function closeOption() {
    document.getElementById('optionKeys').classList.add('d-none');
    document.getElementById('start').classList.remove('d-none');
}


/** reloads canvas and all elements. parameters set back to zero */
function restartGame() {
    location.reload();
}


/**
 * adds eventlistener for keyboard if key down
 */
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.Right = true;
    }
    if (e.keyCode == 37) {
        keyboard.Left = true;
    }
    if (e.keyCode == 38) {
        keyboard.Up = true;
    }
    if (e.keyCode == 40) {
        keyboard.Down = true;
    }
    if (e.keyCode == 32) {
        keyboard.Space = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});


/**
 * adds eventlistener for keyboard if not pressed
 */
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.Right = false;
    }
    if (e.keyCode == 37) {
        keyboard.Left = false;
    }
    if (e.keyCode == 38) {
        keyboard.Up = false;
    }
    if (e.keyCode == 40) {
        keyboard.Down = false;
    }
    if (e.keyCode == 32) {
        keyboard.Space = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});


/**
 * adds eventlistener for touch
 */

function addTouch() {
    document.getElementById('LEFTBTN').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.Left = true;
    });
    document.getElementById('LEFTBTN').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.Left = false;
    });
    document.getElementById('UPBTN').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.Up = true;
    });
    document.getElementById('UPBTN').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.Up = false;
    });
    document.getElementById('RIGHTBTN').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.Right = true;
    });
    document.getElementById('RIGHTBTN').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.Right = false;
    });
    document.getElementById('DBTN').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.Down = true;
    });
    document.getElementById('DBTN').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.Down = false;
    });
    document.getElementById('POISON').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.D = true;
    });
    document.getElementById('POISON').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.D = false;
    });
     document.getElementById('BUBBLE').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.Space = true;
    });
    document.getElementById('BUBBLE').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.Space = false;
    });
}


   /**
 * Checks if the current device is a mobile device based on its touch capabilities
 * and user agent information.
 *
 * @returns {boolean} True if the device is considered a mobile device, false otherwise.
 */
   function isMobile() {
    return navigator.maxTouchPoints > 0 && /Android|iPhone/i.test(navigator.userAgent);
}


/**
 * Checks the device orientation and displays a phone rotation message
 * if the device is in portrait mode and is considered a mobile device.
 */
function checkOrientation() {
    if (portait && isMobile()) {
        document.getElementById('phone-rotation').classList.remove('d-none');
    } else {
        document.getElementById('phone-rotation').classList.add('d-none');
    }
}










