module scenes{
    export class PlayScene extends objects.Scene {
        //varaibles

        private background:objects.Background;
        private player:objects.Player;
        private enemy:objects.Enemy;

        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);

            this.Start();
        }

        public Start():void {
            //Inititalize our variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.enemy = new objects.Enemy(this.assetManager);
            this.Main();
        }

        public Update():void{
            //this.background.Update();
            this.player.Update();
            this.enemy.Update();
        }

        public Main():void{
            this.addChild(this.background);
            this.addChild(this.player);
            this.addChild(this.enemy);

            //register for the click events
        }
    }
}