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
        super();
        this.canvas = canvas;
        this.context = context;
        // this.x = integer * this.canvas.width / this.counts + (this.canvas.width / sum / 2);
        // this.color = "rgb(0, 0, 0)";
        // this.y = Math.random() * (0 + this.canvas.height) - this.canvas.height; // 隕石のy座標
        // // obstacle.y = Math.random() * (0 + this.canvas.height) - this.canvas.height; // 隕石のy座標
        // this.radius = Math.random() * (this.canvas.width / sum / 2 - 10) + 10;   // 隕石の半径
        // this.speed = Math.random() * (15 - 1) + 1;                                  // 隕石の速さ
    }

    /**
     * 初期化
     */
    init() {
    }

    draw(player) {
        this.y += this.speed;              // それぞれのスピードで動かす
        // if (Obstacle.collision(player, this) === true) {  // 衝突判定結果がtrueなら
        //     // window.clearInterval(this.timer);            // タイマーを止める
        //     alert("GAME OVER");
        // }
        if (this.y > this.canvas.height + this.radius) {  // もし隕石が画面から消えたら
            // randomizeMeteo(this);           // 位置やサイズを初期化・ランダム化する
        }
        this.context.beginPath();                    // 描画開始
        this.context.arc(this.x, this.y, this.radius,  // 円を描く arc(x, y, 半径, 開始角度, 終了角度)
            0, 2 * Math.PI);            // 角度の単位はラジアン（2π = 360度）で指定
        this.context.fillStyle = this.color      // 塗りつぶす色の設定
        this.context.fill();                         // 塗る
    }


    static collision(obj1, obj2) {
        const distX = obj1.x - obj2.x;
        const distY = obj1.y - obj2.y;
        const dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

        return dist < (obj1.radius + obj2.radius)
    }
}
