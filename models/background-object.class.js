class BackgroundObject extends MovableObject {
     /** Width of the movable object */
    width = 480;
        /** Height of the movable object */
    height= 720;
     /**
     * Sets the objects measures
     * @param {Path2D} imagePath - Current image of the object
     * @param {Number} x - X-Axis of the current object
     */
    constructor(imagePath, x, y) {
        super().loadimage(imagePath);
        this.x = x;
        this.y = y;
    }
}