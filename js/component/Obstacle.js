import { Ball } from './Ball.js';

/**
 * 障害物管理クラス
 */
export class Obstacle {
    /**
     * コンストラクタ
     *
     * @param {Canvas} canvas キャンバス
     */
    constructor(canvas) {
        this.counts = 5;
        for(var i = 0; i < this.counts; i++) {
            const obstacle = new Ball();
            obstacle.x = i * canvas.area.width / this.counts + (canvas.area.width / this.counts / 2);
            obstacle.color = "rgb(0, 0, 0)";
            obstacle.y = Math.random() * (0 + canvas.area.height) - canvas.area.height; // 隕石のy座標
            obstacle.radius = Math.random() * (canvas.area.width / this.counts / 2 - 10) + 10;   // 隕石の半径
            obstacle.sp = Math.random() * (15 - 1) + 1;                                  // 隕石の速さ
            this.obstacles.push(obstacle);
        }
    }

    /**
     * 初期化
     */
    init() {
    }
}
