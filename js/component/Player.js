import { Ball } from './Ball.js';

/**
 * プレイヤー管理クラス
 */
export class Player extends Ball {
    /**
     * コンストラクタ
     *
     */
    constructor() {
        super();
    }

    /**
     * 初期化
     */
    init() {
    }

    draw(deviceMotion, canvas, context) {
        this.sx += 0.2 * deviceMotion.aX;
        this.sy += 0.2 * deviceMotion.aY;
        this.x -= this.speed * deviceMotion.aX + this.sx;                 // プレイヤのx座標を更新（a -= b は a = a - b の意味）
        this.y += this.speed * deviceMotion.aY + this.sy;                 // プレイヤのy座標を更新（a += b は a = a + b の意味）
        if (this.x < 0) {                          // xが0未満なら
            this.x = 0;                               // xを0にする（それより左に行かない）
        } else if (this.x > canvas.width) {        // xがcanvasの幅以上なら
            this.x = canvas.width;                    // xをcanvasの幅の値にする（それより右に行かない）
        }
        if (this.y < 0) {                          // yが0未満なら
            this.y = 0;                               // yを0にする（それより上に行かない）
        } else if (this.y > canvas.height) {       // yがcanvasの高さ以上なら
            this.y = canvas.height;                   // yをcanvasの高さの値にする（それより下に行かない）
        }
        context.clearRect(0, 0, canvas.width, canvas.height);   // canvasの内容を消す clearRect(x, y, w, h)
        context.beginPath();                        // 描画開始
        context.arc(this.x, this.y, this.radius,  // 円を描く arc(x, y, 半径, 開始角度, 終了角度)
            0, 2 * Math.PI);                // 角度の単位はラジアン（2π = 360度）で指定
        context.fillStyle = this.color;            // 塗りつぶす色の設定
        context.fill();
    }
}
