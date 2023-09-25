class PoisonBottleBAR extends DrawableObject {
      /** Images to set the statusbar of the collected bottles */
    IMAGES =  [
        'img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        'img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png'
    ];
   
    /** 
     * Loads the images
     * Sets the coordinates where the statusbar should be
     * Sets the percentage of the collected bottles 
     */ 
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
        this.x = 10;
        this.y = 80;
        this.height = 200;
        this.width = 50;
    }

    /**
     * Set the percentage of the bar
     * @param {Number} percentage The percentage of the respective bar
     */
    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex(percentage)];
        this.img = this.imgCache[path];
    }

       /**
     * Check the percentage to return the index of the respective image
     * @returns The index of the image for the respective percentage
     */
    resolveImageIndex(percentage){
        
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 79) {
            return 4;
        } else if (this.percentage > 59) {
            return 3;
        } else if (this.percentage > 39) {
            return 2;
        } else if (this.percentage > 19) {
            return 1;
        } else {
            return 0;
        }
    }
}