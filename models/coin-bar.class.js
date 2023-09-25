class CoinBar extends DrawableObject {

 
     /** Images to set the statusbar of the collected coins */
    IMAGES =  [
        'img/4. Marcadores/green/Coin/0_  copia 4.png', 
        'img/4. Marcadores/green/Coin/20_  copia 2.png',
        'img/4. Marcadores/green/Coin/40_  copia 4.png',
        'img/4. Marcadores/green/Coin/60_  copia 4.png',
        'img/4. Marcadores/green/Coin/80_  copia 4.png',
        'img/4. Marcadores/green/Coin/100_ copia 4.png'
    ];

   
     /** 
     * Loads the images
     * Sets the coordinates where the statusbar should be
     * Sets the percentage of the collected coins 
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
        this.x = 10;
        this.y = 40;
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
        
        if (percentage == 0) {
            return 0;
        }
        else if (percentage < 20) {
            return 1;
        }
        else if (percentage < 40) {
            return 2;
        }
        else if (percentage < 60) {
            return 3;
        }
        else if (percentage < 80) {
            return 4;
        }
        else {
            return 5;
        }
    }



    
    


   

    

    

}

    
