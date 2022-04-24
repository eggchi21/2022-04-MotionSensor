import { Player } from '../component/Player.js';
import { Obstacle } from '../component/Obstacle.js';
import { Text } from '../component/Text.js';
import { DeviceMotion } from './DeviceMotion.js';

/**
 * 描画管理クラス
 */
export class Draw {
    /**
     * コンストラクタ
     */
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');

        this.player = new Player(this.canvas, this.context);

        this.obstacles = [];
        this.counts = 5;
        for (var i = 0; i < this.counts; i++) {
            this.obstacles.push(new Obstacle(this.canvas, this.context, this.counts, i));
        }

        this.deviceMotion = new DeviceMotion();

        this.text = new Text();

        this.timer = window.setInterval(() => {
            this.text.draw(this.deviceMotion);
            this.player.draw(this.deviceMotion);
            for (var i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].draw(this.player);
            }
        }, 110);
    }

    /**
     * 初期化
     */
    init() {
    }
}
