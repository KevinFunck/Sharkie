class PoisonBottle extends MovableObject {
    height = 60;
    width = 60;
    fair = 1500;
    IMAGES_POISONBUBBLE = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png',
    ];
    
    /** Sets the object of the bottles in the world */
    constructor() {
        super().loadimage('img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_POISONBUBBLE);
        this.x = 100 + Math.random() * 2800;  
        this.y = 380 - Math.random() * 250;    
        this.animate();
    }

    
    animate() {
        setInterval(() => {
           this.playAnimation(this.IMAGES_POISONBUBBLE);
        }, 150);
    }
}