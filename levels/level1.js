let level1;
function initLevel() {
     level1 = new Level(
        [
            new Fish(),
            new Fish(),
            new Fish(),
            new Fish(),
            new Fish(),
            new JellyfishGreen(),
            new JellyfishGreen(),
            new JellyfishGreen(),
            new JellyfishGreen(),
            new JellyfishPink(),
            new JellyfishPink(),
            new JellyfishPink(),
            new JellyfishPink(),
            new JellyfishLila(),
            new JellyfishYellow()
        ],
        [
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins(),
            new Coins()
        ],
        [
            new PoisonBottle(),
            new PoisonBottle(),
            new PoisonBottle(),
            new PoisonBottle(),
            new PoisonBottle()

        ],
        [
            new Light()
        ],
        [
            new Endboss()
        ],
        [
            new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', -719, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', -719, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', -719, 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D1.png', -719, 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/L2.png', 0,0 ),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 0,0 ),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 0,0 ),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D2.png', 0, 0),

            new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 719, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719, 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D1.png', 719, 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/L2.png', 719 * 2, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 2, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 2, 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D2.png', 719 * 2, 0),

            new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 719 * 3, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 3, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 3, 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D1.png', 719 * 3, 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/L2.png', 719 * 4, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 4, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 4, 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D2.png', 719 * 4, 0),

            new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 719 * 5, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 5, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 5, 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D1.png', 719 * 5, 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/L2.png', 719 * 6, 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 6, 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 6, 0),
            new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D2.png', 719 * 6, 0)

        ]
    );
}