module scenes {
    export class StartScene extends objects.Scene {
        //variables
        private welcomeLabel:objects.Label;
        private startButton:objects.Button;
        
        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        //methods
        public Start():void {
            //Initialize our objects for the scene
            this.welcomeLabel = new objects.Label("Welcome to School", "60px", "Consolas", "#000000", 320, 240, true);
            this.startButton = new objects.Button(this.assetManager, "nextButton", 320, 300);
            this.Main();
        }

        public Update():void{

        }

        public Main():void{
            //Add items to the scene
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }

        private startButtonClick():void{
            //Change from START to GAME scene
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}