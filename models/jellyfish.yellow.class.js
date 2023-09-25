class JellyfishYellow extends MovableObject {
    /** Height of the jellyfish */
    height = 100;
    /** width of the jellyfish */
    width = 100;

    
    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png' 
    ];


    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
    ];


    constructor() {
        super().loadimage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2600   
        this.y = 200 + Math.random() * 10;  
        this.speed = 0.15 
        this.animate();
    }

    
    animate() {
        this.movedown();

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.moveup();
            } else {
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 150);
    }
}