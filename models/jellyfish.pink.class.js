class JellyfishPink extends MovableObject {
    height = 100;
    width = 100;
    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ];


    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
    ];
    
    constructor() {
        super().loadimage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1500 + Math.random() * 500;  
        this.y = 200 + Math.random() * 210;  
        this.speed = 0.15 + Math.random() * 0,5;
        this.animate();
    }

    
    animate() {
        this.moveleft();

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