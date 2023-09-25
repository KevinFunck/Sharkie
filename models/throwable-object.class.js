class ThrowableObject extends MovableObject {

    bulletDelayTime = 5000; 
      /**
     * Set the bottle which is thrown and its measures
     * @param {Number} x - X-Axis where the throwable object starts at
     * @param {Number} y - Y-Axis where the throwable object starts at
     */
    constructor(x, y) {
        super().loadimage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.height = 40;
        this.width = 40;
        this.throw();    
    }
      
     /** 
     * Check the direction of the throwing bubble
     * and set the animations of the throwing and 
     * splashing moments
     */
    throw() { 
        this.speedY = 1;
        this.applyGravity();
        setInterval(() => {
            this.x += 25;
            this.objectIsThrowable = false;
            setTimeout(() => {
                this.objectIsThrowable = true;
            }, 1500)     
        }, 50);  
    }
}