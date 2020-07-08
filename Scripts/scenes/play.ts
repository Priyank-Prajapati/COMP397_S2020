module scenes{
    export class PlayScene extends objects.Scene {
        //varaibles

        private playLabel:objects.Label;
        private nextButton:objects.Button;
        private previousButton:objects.Button;

        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);

            this.Start();
        }

        public Start():void {
            //Inititalize our variables
            this.playLabel = new objects.Label("Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
            this.nextButton = new objects.Button(this.assetManager, "nextButton", 500, 340);
            this.previousButton = new objects.Button(this.assetManager, "previousButton", 100, 340);
        }

        public Update():void{

        }

        public Main():void{
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