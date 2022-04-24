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
        super();
        this.canvas = canvas;
        this.context = context;
    }

    /**
     * 初期化
     */
    init() {
    }

    draw(deviceMotion) {
        this.sx += 0.2 * deviceMotion.aX;
        this.sy += 0.2 * deviceMotion.aY;
        this.x -= this.speed * deviceMotion.aX + this.sx;                 // プレイヤのx座標を更新（a -= b は a = a - b の意味）
        this.y += this.speed * deviceMotion.aY + this.sy;                 // プレイヤのy座標を更新（a += b は a = a + b の意味）
        if (this.x < 0) {                          // xが0未満なら
            this.x = 0;                               // xを0にする（それより左に行かない）
        } else if (this.x > this.canvas.width) {        // xがcanvasの幅以上なら
            this.x = this.canvas.width;                    // xをcanvasの幅の値にする（それより右に行かない）
        }
        if (this.y < 0) {                          // yが0未満なら
            this.y = 0;                               // yを0にする（それより上に行かない）
        } else if (this.y > this.canvas.height) {       // yがcanvasの高さ以上なら
            this.y = this.canvas.height;                   // yをcanvasの高さの値にする（それより下に行かない）
        }
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);   // canvasの内容を消す clearRect(x, y, w, h)
        this.context.beginPath();                        // 描画開始
        this.context.arc(this.x, this.y, this.radius,  // 円を描く arc(x, y, 半径, 開始角度, 終了角度)
            0, 2 * Math.PI);                // 角度の単位はラジアン（2π = 360度）で指定
        this.context.fillStyle = this.color;            // 塗りつぶす色の設定
        this.context.fill();
    }
}
