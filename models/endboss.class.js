class Endboss extends MovableObject {
    /** Height of the endboss */
    height = 700;
    /** Width of the endboss */
    width = 700;
    /** Y-Axis of the endboss */
    y = -160;
    /** x-Axis of the endboss */
    x = 3100;
    spawning_sound = new Audio('audio/spawning.mp3');
    hadFirstContact = false;
    introPlayed = false;
    isAttacking = false;
    startedEndboss = false;
    world;
    
    /** Images of endboss spawning*/
    IMAGES_SPAWNING = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png'
       
    ];

    /** Images of endboss swim*/
    IMAGES_SWIM = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    /** Images of endboss attack*/
    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    /** Images of endboss dead*/
    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    /** Images of endboss hurt*/
    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    /**
    * @param {Function} loadImage - Load one image
    * @param {Function} loadImages - Load all images of the movement
    */
    constructor() {
        super().loadimage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadImages(this.IMAGES_SPAWNING);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 3200;
    }


    startEndboss() {
        if(!this.startedEndboss) {
            this.startedEndboss = true;
            this.animate();
            this.startBossAttack();
        }
    }

    /** Animate the situation of the endboss */
    animate() {
        setInterval(() => {
            if(!this.introPlayed) {
               
                this.playAnimation(this.IMAGES_SPAWNING);
                if(this.currentImage == this.IMAGES_SPAWNING.length) {
                    this.introPlayed = true;
                    this.spawning_sound.play();
                    this.moveleftEndboss();           
                }
            }else if(this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.moveupDead();

            } else if (this.isHurt()) {
                this.isAttacking = false;
                this.playAnimation(this.IMAGES_HURT);

            } else if (this.isAttacking == true) {
                this.playAnimation(this.IMAGES_ATTACK);
                if(this.currentImage == this.IMAGES_ATTACK.length) {
                    this.isAttacking = false;
                } 
            } else {
                this.playAnimation(this.IMAGES_SWIM);
                
            }   
        }, 500);   
    }

    
    startBossAttack() {
        setInterval(() => {
            if(!this.isAttacking && this.isHurt()) {
                this.isAttacking = true;
                this.currentImage = 0;
            }       
        }, 10);    
    }
}