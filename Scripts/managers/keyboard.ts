module managers{
    export class Keyboard{
        //variables
        public moveUp: boolean;
        public moveDown: boolean;
        public moveRight: boolean;
        public moveLeft: boolean;
        public shoot: boolean;
        public enabled: boolean;
        //constructor
        constructor(){
            this.enabled = true;
            //listen for keyup and keydown events through the DOM

            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);

        }
        //methods

        public onKeyDown(event:KeyboardEvent):void{
            switch(event.keyCode){
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = true;
                break;

                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = true;
                break;

                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = true;
                break;

                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = true;
                break;

                case config.Keys.SPACE:
                    console.log("Pewwww");
                break;
            }
        }
        public onKeyUp(event:KeyboardEvent):void{
            switch(event.keyCode){
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = false;
                break;

                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = false;
                break;

                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = false;
                break;

                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = false;
                break;

                case config.Keys.SPACE:
                    console.log("False Pewwww");
                break;
            }
        }
    }
}