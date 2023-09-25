class StatusBar extends DrawableObject {
    percentage = 100;
    /** Images to set the statusbar */
    IMAGES =  [
        'img/4. Marcadores/green/Life/0_  copia 3.png', //0 live
        'img/4. Marcadores/green/Life/20_ copia 4.png',
        'img/4. Marcadores/green/Life/40_  copia 3.png',
        'img/4. Marcadores/green/Life/60_  copia 3.png',
        'img/4. Marcadores/green/Life/80_  copia 3.png',
        'img/4. Marcadores/green/Life/100_  copia 2.png'
    ];

     /** 
     * Loads the images
     * Sets the coordinates where the statusbar should be
     * Sets the percentage of the health 
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 10;
        this.y = -0;
         /** Height of the bars */
        this.height = 200;
         /** Width of the bars */
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
        
        if (percentage == 100) {
            return 5;
        }
        else if (percentage > 80) {
            return 4;
        }
        else if (percentage > 60) {
            return 3;
        }
        else if (percentage > 40) {
            return 2;
        }
        else if (percentage > 20) {
            return 1;
        }
        else{
            return 0;
        }
    }  
}