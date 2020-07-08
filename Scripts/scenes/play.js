var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        //constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            //Inititalize our variables
            this.playLabel = new objects.Label("Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
            this.nextButton = new objects.Button(this.assetManager, "nextButton", 320, 300);
            this.previousButton = new objects.Button(this.assetManager, "previousButton", 120, 300);
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this.background.Update();
            this.player.Update();
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.playLabel);
            this.addChild(this.player);
            this.addChild(this.nextButton);
            this.addChild(this.previousButton);
            //register for the click events
            this.nextButton.on("click", this.nextButtonClick);
            this.previousButton.on("click", this.previousButtonClick);
        };
        PlayScene.prototype.nextButtonClick = function () {
            objects.Game.currentScene = config.Scene.OVER;
        };
        PlayScene.prototype.previousButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map