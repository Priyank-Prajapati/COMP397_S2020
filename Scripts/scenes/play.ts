module scenes{
    export class PlayScene extends objects.Scene {
        //varaibles

        private playLabel:objects.Label;
        private nextButton:objects.Button;
        private previousButton:objects.Button;
        private background:objects.Background;

        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);

            this.Start();
        }

        public Start():void {
            //Inititalize our variables
            this.playLabel = new objects.Label("Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
            this.nextButton = new objects.Button(this.assetManager, "nextButton", 320, 300);
            this.previousButton = new objects.Button(this.assetManager, "previousButton", 120, 300);
            this.background = new objects.Background(this.assetManager);
            this.Main();
        }

        public Update():void{
            this.background.Update();
        }

        public Main():void{
            this.addChild(this.background);
            this.addChild(this.playLabel);
            this.addChild(this.nextButton);
            this.addChild(this.previousButton);

            //register for the click events
            this.nextButton.on("click", this.nextButtonClick);
            this.previousButton.on("click", this.previousButtonClick);
        }

        private nextButtonClick():void{
            objects.Game.currentScene = config.Scene.OVER;
        }

        private previousButtonClick():void{
            objects.Game.currentScene = config.Scene.START;
        }
    }
}