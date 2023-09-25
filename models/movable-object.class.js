class MovableObject extends DrawableObject {
    speed = 1;
    /** For checking if the character turns around */
    otherDirection = false;
    /** Energy of the character */
    energy = 100;
    /** Speed of the endboss */
    speedEndboss = 4;
    collected = 0;
    bottles = 0;
    /** To check when the last hit happened */
    lastHit = 0;
    firstHit = 25;
    /** acceleration by a falling object */
    accerelation = 1;
    /** Speed of the y-axis */
    speedY = 0;
    posionShot = 0;


    /** Let the character move up */
    moveup() {
        setInterval(() => {
            this.y -= this.speed;
        }, 1000 / 60);
    }


    /** Let the character,enemies,endboss move up after death */
    moveupDead() {
        this.speed = 0;
        this.speedY = 2;
        this.y -= this.speedY;
    }


    /** Let the character move left */
    moveleft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }


    /** Let the endboss move left */
    moveleftEndboss() {
        setInterval(() => {
            this.x -= this.speedEndboss;
        }, 1000 / 60);
    }


    /** Let the character move down */
    movedown() {
        setInterval(() => {
            this.y += this.speed;
        }, 1000 / 60);
    }


    /** Let the bubble move up */
    bubble() {
        setInterval(() => {
            this.speed;
        }, 1000 / 60);
    }


      /**
     * 
     * @param {Array} images array of images which should be animated
     */

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;

    }


      /**
     * checks if two objects are colliding
     * @param {class} mo for example character/enemie/endboss
     * @returns the border of the object in which it counts to be hit
     * character border is made smaller than original image
     */
    isColliding(mo) {
        if (this instanceof Character) {
            return this.x + 40 + this.width >= mo.x &&
                this.x + 40 + this.width >= mo.x &&
                this.x + 40 <= mo.x + mo.width &&
                this.y + 100 + this.height - 240 > mo.y &&
                this.y + 100 <= mo.y + mo.height

        } else if (this instanceof Fish) {
            return this.x  + this.width + 30 >= mo.x &&
                this.x  + this.width + 30 >= mo.x &&
                this.x  <= mo.x + mo.width +30 &&
                this.y + this.height - 60 > mo.y &&
                this.y <= mo.y + mo.height
        } else {

            return this.x + this.width >= mo.x &&
                this.x + this.width >= mo.x &&
                this.x <= mo.x + mo.width &&
                this.y + this.height > mo.y &&
                this.y <= mo.y + mo.height
        }
    }


    /** 
    * By hitting substract health and save the time
    * when the hit is happened
    */
    hit() {
        this.energy -= 1;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /** Is for the damage what the character get from the endboss */
    hitMeEndboss() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /** Is for the damage what the enemies get from the bubble */
    hitEnemies() {
        this.energy -= 100;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /** Is for the damage what the character get from the endboss */
    hitEndboss() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    
    collecting() {
        this.collected += 16;
    }


    collectingBottles() {
        this.bottles += 20;
        this.posionShot += 20;
    }


    posionShotCounter() {
        this.posionShot -= 20;
    }


    /**
    * Check if the character were hitted
    * @returns One second damage
    */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;//Difference in ms
        timepassed = timepassed / 1000;//Difference in s
        return timepassed < 1;

    }


    /**
    * Check if the character is dead
    * @returns Is dead if the energy is 0 or lower
    */
    isDead() {
        return this.energy == 0;
    }


     /**
     * gives object gravity
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround || this.speedY > 0) {
                this.y += this.speedY;
                this.speedY -= this.accerelation;
            }
        }, 30);
    }

    
     /**
     * 
     * @returns if objects is above ground
     */
    isAboveGround() {
        return this.y < 180;
    }
}