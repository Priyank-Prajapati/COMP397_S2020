module objects{
    export class Player extends objects.GameObject{
        //variables
        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager, "player");

            this.Start();
        }

        public Start():void{
            this.x = 320;
            this.y = 700;

            this.scaleX = 0.25;
            this.scaleY = 0.25;
        }

        public Update():void{
            this.Move();
            this.CheckBound();
        }

        public Reset():void{

        }

        public Move():void{
            //need a reference to the stage createjs object to get mouse position
            this.x = objects.Game.stage.mouseX;

            //this will eventually be replaced with the keyboard input
        }

        public CheckBound():void{

        }
    }
}