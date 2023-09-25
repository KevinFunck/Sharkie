class Level {
    /** Enemy objects in this level */
    enemies;
    /** Coin objects in this level */
    coins;
    /** Bottles objects in this level */
    poisonBottles;
    /** Light object in this level */
    lights;
    /** Endboss object in this level */
    endboss;
    /** Background objects in this level */
    backgroundObjects;
    
    level_end_x = 3100;
    level_end_y = 300;

       /**
     * Set the entire objects in the world
     * @param {Object} enemies - Enemies on this level
     * @param {Object} backgroundObjects - Background objects on this level
     * @param {Object} coins - Coins on this level
     * @param {Object} poisonBottles - Bottles on this level
     * @param {Object} endboss - Endboss on this level
     * @param {Object} lights - Lights on this level
     */
    constructor(enemies, coins, poisonBottles, lights, endboss, backgroundObjects) {
        this.enemies = enemies;
        this.coins = coins;
        this.poisonBottles = poisonBottles;
        this.lights = lights;
        this.endboss = endboss; 
        this.backgroundObjects = backgroundObjects;
        

    }


}