class DrawableObject {
    /** Present image as an Image-Object */
    img;
    /** Entire images of the respective drawable object for the animation */
    imgCache = [];
    /** Current image to show on the canvas for the animation */
    currentImage = 0;
    /** X-Axis of the respective object */
    x = 120;
    /** Y-Axis of the respective object */
    y = 250;
    /** Height of the respective object */
    height = 100;
    /** Width of the respective object */
    width = 200;


    /**
    * Load one image
    * @param {Path2D} path - Path of the respective image
    */
    loadimage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
    * Draw the object on the canvas
    * @param {CanvasRenderingContext2D} ctx - The context of the canvas
    */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
    }

    
     /**
     * draw square border around images in canvas
     * @param {Object} ctx 
     */
    drawFrame(ctx) {
        if (this instanceof PoisonBottle || this instanceof Coins || this instanceof JellyfishLila || this instanceof JellyfishGreen || this instanceof JellyfishPink || this instanceof JellyfishYellow || this instanceof ThrowableObject || this instanceof ThrowableObjectPoison) {
            ctx.beginPath();
            ctx.linewidth = '5';
           // ctx.strokeStyle = 'blue';
           //ctx.rect(this.x, this.y, this.width, this.height);
            //ctx.stroke();
        }else if (this instanceof Fish  ){
            ctx.beginPath();
            //ctx.linewidth = '5';
            //ctx.strokeStyle = 'blue';
            //ctx.rect(this.x, this.y, this.width +30, this.height - 60);
            //ctx.stroke();

        } else if (this instanceof Character) {
            ctx.beginPath();
           // ctx.linewidth = '5';
            //ctx.strokeStyle = 'blue';
            //ctx.rect(this.x +60 , this.y +100 , this.width -30, this.height -240);
           // ctx.stroke();

        } else if (this instanceof Endboss) {
            ctx.beginPath();
            ctx.linewidth = '5';
            //ctx.strokeStyle = 'blue';
           // ctx.rect(this.x + 60, this.y, this.width, this.height);
           // ctx.stroke();      
        }
    }


    /**
    * Load several images and save them in the imageCache-Array
    * @param {Array} arr - Contains the paths of the images
    */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }
}

