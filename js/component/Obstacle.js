import { Ball } from './Ball.js';

/**
 * 障害物管理クラス
 */
export class Obstacle extends Ball {
    /**
     * コンストラクタ
     *
     */
    constructor(canvas, context, sum, integer) {
        super(
            integer * canvas.width / sum + (canvas.width / sum / 2),
            Math.random() * (0 + canvas.height) - canvas.height,
            Math.random() * (canvas.width / sum / 2 - 10) + 10,
            "rgb(215, 0, 0)",
            Math.random() * (15 - 1) + 1,
            0,
            0
        );
        this.canvas = canvas;
        this.context = context;
        this.sum = sum;
    }

    /**
     *  描画する
     *
     * @param player
     */
    draw() {
        // それぞれのスピードで動かす
        this.y += this.speed;

        if (this.y > this.canvas.height + this.radius) {
            this.randomize();
        }
        // 描画開始
        this.context.beginPath();
        // 円を描く arc(x, y, 半径, 開始角度, 終了角度)
        this.context.arc(
            this.x,
            this.y,
            this.radius,
            0,
            2 * Math.PI
        );
        // 塗りつぶす色の設定
        this.context.fillStyle = this.color;
        this.context.fill();
    }

    /**
     * ランダムな位置・サイズを設定する
     */
    randomize() {
        this.y = Math.random() * (0 + this.canvas.height) - this.canvas.height;
        this.radius = Math.random() * (this.canvas.width / this.sum / 2 - 10) + 10;
        this.speed = Math.random() * (15 - 1) + 1;
    }

    /**
     * あたり判定を行う
     *
     * @param obj1
     * @param obj2
     * @return boolean
     */
    static isCollision(obj1, obj2) {
        const distX = obj1.x - obj2.x;
        const distY = obj1.y - obj2.y;
        const dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

        return dist < (obj1.radius + obj2.radius)
    }
}
