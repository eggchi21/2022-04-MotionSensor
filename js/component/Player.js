import { Ball } from './Ball.js';

/**
 * プレイヤー管理クラス
 */
export class Player extends Ball {
    /**
     * コンストラクタ
     *
     */
    constructor(canvas, context) {
        super(
            150,
            200,
            20,
            "rgb(255, 255, 255)",
            3,
            0,
            0
        );
        this.canvas = canvas;
        this.context = context;
    }

    /**
     *  描画する
     *
     * @param deviceMotion
     */
    draw(deviceMotion) {
        this.sx += 0.2 * deviceMotion.aX;
        this.sy += 0.2 * deviceMotion.aY;
        this.x -= this.speed * deviceMotion.aX + this.sx;
        this.y += this.speed * deviceMotion.aY + this.sy;
        if (this.x < 0) {                          // xが0未満なら
            this.x = 0;                            // xを0にする（それより左に行かない）
            this.sx = 0;                           // x方向の加速度を0にする
        } else if (this.x > this.canvas.width) {   // xがcanvasの幅以上なら
            this.x = this.canvas.width;            // xをcanvasの幅の値にする（それより右に行かない）
            this.sx = 0;                           // x方向の加速度を0にする
        }

        if (this.y < 0) {                          // yが0未満なら
            this.y = 0;                            // yを0にする（それより上に行かない）
            this.sy = 0;                           // y方向の加速度を0にする
        } else if (this.y > this.canvas.height) {  // yがcanvasの高さ以上なら
            this.y = this.canvas.height;           // yをcanvasの高さの値にする（それより下に行かない）
            this.sy = 0;                           // y方向の加速度を0にする
        }

        // canvasの内容を消す
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
}
