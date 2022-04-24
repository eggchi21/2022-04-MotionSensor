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

        this.player = new Player();

        this.obstacles = [];
        this.counts = 5;
        for (var i = 0; i < this.counts; i++) {
            const obstacle = new Obstacle();
            obstacle.x = i * this.canvas.width / this.counts + (this.canvas.width / this.counts / 2);
            obstacle.y = Math.random() * (0 + this.canvas.height) - this.canvas.height; // 隕石のy座標
            obstacle.radius = Math.random() * (this.canvas.width / this.counts / 2 - 10) + 10;   // 隕石の半径
            obstacle.speed = Math.random() * (15 - 1) + 1;                                  // 隕石の速さ
            this.obstacles.push(obstacle);
        }

        this.deviceMotion = new DeviceMotion();

        this.text = new Text();

        this.timer = window.setInterval(() => {
            this.text.draw(this.deviceMotion);
            this.player.draw(this.deviceMotion, this.canvas, this.context);         // ★drawBall 関数を実行
            for (var i = 0; i < this.obstacles.length; i++) {
                this.obstacle[i].draw(this.player, this.canvas, this.context);
            }
        }, 50);
    }

    /**
     * 初期化
     */
    init() {
    }
}
