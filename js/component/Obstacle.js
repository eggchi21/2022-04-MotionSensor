import { Ball } from './Ball.js';

/**
 * 障害物管理クラス
 */
export class Obstacle extends Ball {
    /**
     * コンストラクタ
     *
     */
    constructor() {
        super();
        this.color = "rgb(0, 0, 0)";
        // this.counts = 5;
        // for(var i = 0; i < this.counts; i++) {
        //     const obstacle = new Ball();
        //     obstacle.x = i * canvas.area.width / this.counts + (canvas.area.width / this.counts / 2);
        //     obstacle.color = "rgb(0, 0, 0)";
        //     obstacle.y = Math.random() * (0 + canvas.area.height) - canvas.area.height; // 隕石のy座標
        //     obstacle.radius = Math.random() * (canvas.area.width / this.counts / 2 - 10) + 10;   // 隕石の半径
        //     obstacle.sp = Math.random() * (15 - 1) + 1;                                  // 隕石の速さ
        //     this.obstacles.push(obstacle);
        // }
    }

    /**
     * 初期化
     */
    init() {
    }

    draw(player, canvas, context) {
        this.y += this.speed;              // それぞれのスピードで動かす
        if (Obstacle.collision(player, this) === true) {  // 衝突判定結果がtrueなら
            // window.clearInterval(this.timer);            // タイマーを止める
            alert("GAME OVER");
        }
        if (this.y > canvas.height + this.radius) {  // もし隕石が画面から消えたら
            // randomizeMeteo(this);           // 位置やサイズを初期化・ランダム化する
        }
        context.beginPath();                    // 描画開始
        context.arc(this.x, this.y, this.radius,  // 円を描く arc(x, y, 半径, 開始角度, 終了角度)
            0, 2 * Math.PI);            // 角度の単位はラジアン（2π = 360度）で指定
        context.fillStyle = this.color      // 塗りつぶす色の設定
        context.fill();                         // 塗る
    }


    static collision(obj1, obj2) {
        const distX = obj1.x - obj2.x;
        const distY = obj1.y - obj2.y;
        const dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

        return dist < (obj1.radius + obj2.radius)
    }
}
