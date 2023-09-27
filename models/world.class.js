class World {
    /** Instance of the character */
    character = new Character();
    /** Array where the objects are created */
    level = level1;
    /** Canvas where the objects are shown */
    canvas;
    /** Context of the canvas */
    ctx;
    /** Keybinds for the gameplay */
    keyboard;
    /** To move the camera with the character */
    camera_x = 0;
    /** Play the backgroundsound*/
    backgroundmusic = new Audio('audio/background.mp3');
    /** Play the collecting sound for the coin */
    coin_sound = new Audio('audio/coin.mp3');
    /** Play the collecting sound for the poison bottle */
    poisonBottle_sound = new Audio('audio/poisonBottle.mp3');
    /** Instance of the livebar */
    statusBar = new StatusBar();
    /** Instance of the coinbar */
    coinBar = new CoinBar();
    /** Instance of the Poisonbottlebar */
    poisonBottleBar = new PoisonBottleBAR();
    /** To save all throwed bottles */
    throwableObject = [];
    throwableObjectPoison = [];
    /** To check if the next bubble can be throwed */
    objectIsThrowable = true;
    bulletDelayTime = 5000;
    bulletLastTime = 0;
    bottlesCollected = 0;
    /** Play the sound for collecting bottles */
    bubble_sound = new Audio('audio/bubble.mp3');
    backgroundmusic = new Audio('audio/background.mp3');
    
    
    
    
      
  

    /**
    * The whole world of the game
    * @param {Object} canvas - Canvas where the world drawed on
    * @param {Object} keyboard - Bind the keyboard in the game
    */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.endboss = this.level.endboss[0];
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.checkColecttedCoin();
        this.checkCollecttedPoisonBottle();
        this.run();
        this.nextBubble();
    }


    /** Set this world to the endboss and character objects to interact with values */
    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }


    /** Let the game starts the functions for the logic */
    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkColecttedCoin();
            this.checkCollecttedPoisonBottle();
            this.checkThrowObjects();
            this.checkHitThrowObject();
            this.checkCollisionWithEndboss();
            this.checkHitEndboss();
            this.setWorld();
            this.win();
            this.lose();
        }, 200);
    }


    /** Hurt the character and update the percentage of its life */
    checkCollision() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) && enemy.energy > 0 ) { 
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            });
        }, 1000);
    }


    /**Collect the coin and update the percentage of coinbar */
    checkColecttedCoin() {
        setInterval(() => {
            this.level.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    this.character.collecting();
                    this.coin_sound.play();
                    this.coin_sound.volume = 0.2;
                    this.removeCoin(coin);
                    this.coinBar.setPercentage(this.character.collected);
                }
            });
        });
    }


    /**Collect the poison bottle and update the percentage of poison bottlebar */
    checkCollecttedPoisonBottle() {
        setInterval(() => {
            this.level.poisonBottles.forEach((poisonBottle) => {
                if (this.character.isColliding(poisonBottle)) {
                    this.character.collectingBottles();
                    this.bottlesCollected += 1;
                    this.poisonBottle_sound.play();
                    this.removePoisonBottles(poisonBottle);
                    this.poisonBottleBar.setPercentage(this.character.bottles);
                }
            });
        });
    }


    /**Check hit the enmies with a bubble */
    checkHitThrowObject() {
        setInterval(() => {
            this.level.enemies.forEach((enemie) => {
                this.throwableObject.forEach((throwableOb) => {
                    if (enemie.isColliding(throwableOb)) {
                        enemie.hitEnemies();
                        enemie.energy;
                        this.removeBubble(enemie);
                    }
                });
            });
        });
    }


    /** Hurt the endboss and update the life */
    checkHitEndboss() {
        setInterval(() => {
            this.level.endboss.forEach((endbos) => {
                this.throwableObjectPoison.forEach((throwableObPosion) => {
                    if (endbos.isColliding(throwableObPosion)) {
                        endbos.hitEndboss();
                        endbos.energy;
                        this.removePoisonBubble(endbos);
                    }
                });
            });
        });
    }


    /** Set a timeout to one second for throwing the next bubble */
    nextBubble() {
        this.objectIsThrowable = false;
        setTimeout(() => {
            this.objectIsThrowable = true;
        }, 700);
    }


    /**Shot the bubble */
    checkThrowObjects() {

        if (this.keyboard.D && this.objectIsThrowable && this.character.otherDirection == false && this.bottlesCollected > 0) {
            this.nextBubble();
            this.bottlesCollected--;
            let poison = new ThrowableObjectPoison(this.character.x + 200, this.character.y + 100);
            this.throwableObjectPoison.push(poison);
            this.character.posionShotCounter();
            this.poisonBottleBar.setPercentage(this.character.posionShot);

        } if (this.keyboard.Space && this.objectIsThrowable && this.character.otherDirection == false) {
            this.nextBubble();
            let bubble = new ThrowableObject(this.character.x + 200, this.character.y + 100);
            this.throwableObject.push(bubble);
        }
    }


    /** Hurt the character and update the percentage of its life */
    checkCollisionWithEndboss() {
        setInterval(() => {
            this.level.endboss.forEach((end) => {
                if (this.character.isColliding(end) && this.endboss.energy > 0) {
                    this.character.hitMeEndboss();
                    this.statusBar.setPercentage(this.character.energy);
                }
            });
        },800);
    }


    /**Splice the coin */
    removeCoin(coin) {
        let index = this.level.coins.indexOf(coin);
        this.level.coins.splice(index, 1);
    }


    /**Splice the bubble */
    removeBubble(bubble) {
        let index = this.throwableObject.indexOf(bubble);
        this.throwableObject.splice(index, 1);
    }


    /**Splice the poison bubble */
    removePoisonBubble(bubblePoison) {
        let index = this.throwableObjectPoison.indexOf(bubblePoison);
        this.throwableObjectPoison.splice(index, 1);
    }


    /**Splice the poison bottle */
    removePoisonBottles(poisonBottle) {
        let index = this.level.poisonBottles.indexOf(poisonBottle);
        this.level.poisonBottles.splice(index, 1);
    }


    /** 
   * Draw the world on the canvas.
   * First the canvas will be cleared by call this function and redraw all objects.
   * If all objects drawn the function will be call itself and repeat the process.
   */
    draw() {
        this.backgroundmusic.play();
        this.backgroundmusic.volume = 0.1;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.poisonBottleBar);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.throwableObjectPoison);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisonBottles);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    /**
    * To add the objects which are more than once in the game
    * @param {Array} objects - Multiple objects which should be drawn on the canvas
    */
    addObjectsToMap(objects) {
        if (objects.length > 0) {
            objects.forEach((o) => {
                this.addToMap(o);
            });
        }
    }


    /**
    * To add the seperate object in the game 
    * @param {Object} mo - Seperate object which should be drwan on the canvas
    */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    /**
    * To flip the Images of the objects by turning around with the character
    * @param {Object} mo - Movable object by turn the character around
    */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
  * To flip the Images of the objects back by turning around with the character
  * @param {Object} mo - Movable object by turn the character around
  */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


     /**Show the lose screen */
    lose() {
        if(this.character.energy == 0) {
            document.getElementById('lose').classList.remove('d-none');
        }
    }

    
     /**Show the win screen */
    win() {
        if(this.endboss.energy == 0) {
            document.getElementById('win').classList.remove('d-none');
        }
    }
}