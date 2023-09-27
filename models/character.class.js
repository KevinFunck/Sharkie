class Character extends MovableObject {
    /** Height of the character */
    height = 250;
    /** Width of the character */
    width = 250;
    /** Speed of the character */
    speed = 4.5;
    currentImage = 0;
    /** Instance of the world where the objects are shown and animated */
    world;
    /** Sound of the swimming */
    swim_sound = new Audio('audio/swim.mp3');
    /** Sound of bubble */
    bubble_sound = new Audio('audio/bubble.mp3');
    /** Sound of sleeping */
    snoring_sound = new Audio('audio/snoring.mp3');
    hurt_sound = new Audio('audio/hurt.mp3');
    /** Its the start position of character */
    x = 150;
    /**
    * The timeout ID for the idle timer.
    * @type {?number}
    */
    idleTimeout = null;
    /**
     * A flag to indicate if the idle timeout is started.
     * @type {boolean}
     */
    isIdleTimeoutStarted = false;

    /**
     * A flag to indicate if the character is in a long sleep state.
     * @type {boolean}
     */
    longsleep = false;
    attack = true;
 
    
    /** Images of the swim */
    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    /** Images of the dead */
    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    /** Images of the hurt */
    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'

    ];

    /** Images of the attack */
    IMAGES_ATTACK = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'

    ];

    /** Images of the attack of poison bubble */
    IMAGES_ATTACK_POISON = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    /** Images of character stand*/
    IMAGES_STAND = [
        'img/1.Sharkie/1.IDLE/1.png'
    ];

    /** Images of character of sleep*/
    IMAGES_SLEEP = [
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'

    ];


    /** Set the character which can do various acts */
    constructor() {
        super().loadimage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_ATTACK_POISON);
        this.loadImages(this.IMAGES_STAND);
        this.loadImages(this.IMAGES_SLEEP);
        this.startIdleTimer();
        this.timerForAnimation();
        this.animate();
    }


    /** Characters movement */
    animate() {
        setInterval(() => {
          this.moveCharacter();
        }, 1000 / 60);

        /** Animate the situation of the character */
        setInterval(() => {
          this.playCharacter();
        }, 100);
    }
   

     /** Starts the idle timer for the character's sleeping animation  */
    startIdleTimer() {
        if (!this.isIdleTimeoutStarted) {
            this.idleTimeout = setTimeout(() => {
                this.longsleep = true;
            }, 3000);
            this.isIdleTimeoutStarted = true;     
        }    
    }

     
     /** Stops the idle timer for the character's sleeping animation.  */
    stopIdleTimer() {
        if (this.idleTimeout) {
            clearTimeout(this.idleTimeout);
            this.idleTimeout = null;
            this.isIdleTimeoutStarted = false;
        }
    }

    
    /** Timer for the bubble shoot animation.  */
    timerForAnimation() {
        this.attack = false;
        setTimeout(() => {
            this.attack = true;   
        }, 100);
    }


     /** Move the character */
    moveCharacter() {
        let isMoving = false;
        this.world.camera_x = -this.x + 100;
        this.swim_sound.pause();

        if (this.world.keyboard.Right && this.x < this.world.level.level_end_x) {
           this.moveRight();
           isMoving = true;
        }

        if (this.world.keyboard.Left && this.x > 0) {
           this.moveLeft();
           isMoving = true;
        }

        if (this.world.keyboard.Up && this.y > 0) {
            this.moveUp(); 
            isMoving = true; 
        }

        if (this.world.keyboard.Down && this.y < this.world.level.level_end_y) {
           this.moveDown();
           isMoving = true;
        }

        if (this.world.keyboard.Space && this.otherDirection == false) {
            isMoving = true;
        } 

        if (this.world.keyboard.D && this.otherDirection == false) {
            isMoving = true;     
        } 
        if (!isMoving) {
            this.startIdleTimer();
        } else {
            this.stopIdleTimer(); 
            this.longsleep = false;
        }
        if(this.x > 1800) {
            this.world.endboss.startEndboss();
        }
    }


    /** Animate the situation of the character */
    playCharacter() {
         
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            this.moveupDead();     

        } else if (this.isHurt()) {
           this.hurtCharacter()

        } else if (this.world.keyboard.Space && this.otherDirection == false && this.attack) {
          this.attackCharacter()

        }else if (this.world.keyboard.D && this.otherDirection == false && this.world.bottlesCollected > 0) {
            this.playAnimation(this.IMAGES_ATTACK_POISON);
            this.bubble_sound.play();

        } else if (this.world.keyboard.Right || this.world.keyboard.Left || this.world.keyboard.Up || this.world.keyboard.Down) {
            this.playAnimation(this.IMAGES_SWIM);
        
        } else if (this.longsleep) {
            this.playAnimation(this.IMAGES_SLEEP);
            //this.snoring_sound.play();

        } else {
            this.playAnimation(this.IMAGES_STAND);
        }
    }


    /** Move the character right */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        this.swim_sound.play();
        this.swim_sound.volume = 0.2;
    }


    /** Move the character left */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
        this.swim_sound.play();
        this.swim_sound.volume = 0.2;
    }


    /** Move the character up */
    moveUp() {
        this.y -= this.speed;
        this.swim_sound.play();
        this.swim_sound.volume = 0.2;
    }


    /** Move the character down */
    moveDown() {
        this.y += this.speed;
        this.swim_sound.play();
        this.swim_sound.volume = 0.2;
    }


    /** Animation for hurt */
    hurtCharacter() {
        this.hurt_sound.play();
        this.hurt_sound.volume = 0.1;
        this.playAnimation(this.IMAGES_HURT);
    }


    /** Animation for attack */
    attackCharacter() {
        this.timerForAnimation();
        this.playAnimation(this.IMAGES_ATTACK);  
        this.bubble_sound.play();
    }

}