class Coins extends MovableObject {
    /** It's the height of coin */
    height = 40;
    /** It's the width of coin */
    width = 40;
    x = 300;

    
     /** Images of the coins */
    IMAGES_SWIM = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ];
    

     /** Set a coin object */
    constructor() {
        super().loadimage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = 200 + Math.random() * 2800;  
        this.y = 200 + Math.random() * 210;  
        
        this.animate();
    }

    
    animate() {
        setInterval(() => {
           this.playAnimation(this.IMAGES_SWIM);
        }, 150);
    }
}

