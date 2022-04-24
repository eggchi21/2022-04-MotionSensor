import { Player } from '../component/Player.js';
import { Obstacle } from '../component/Obstacle.js';
import { DeviceMotion } from './DeviceMotion.js';

/**
 * 描画管理クラス
 */
export class Draw {
    /**
     * コンストラクタ
     */
    constructor() {
        this.player = new Player();
        this.obstacles = new Obstacle();
        this.deviceMotion = new DeviceMotion();

        this.text = document.getElementById("txt2");
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.timer = window.setInterval(() => {
            this.displayData();      // displayData 関数を実行
            this.drawPlayer();         // ★drawBall 関数を実行
        }, 50);
    }

    /**
     * 初期化
     */
    init() {
    }

    displayData() {
        this.text.innerHTML = "x: " + this.deviceMotion.aX + "<br>"         // x軸の値
        + "y: " + this.deviceMotion.aY + "<br>"         // y軸の値
        + "z: " + this.deviceMotion.aZ;                 // z軸の値
    }

    drawPlayer() {
        // var os = navigator.platform;                // OS名の取得
        // if(os === "iPhone" || os === "iPad" || os === "iPod") {     // iOSなら
        //     this.aX *= -1;                               // 加速度の正負を反転させる
        //     this.aY *= -1;                               // a *= b は a = a * b の意味
        //     this.aZ *= -1;
        // }
        this.player.sx += 0.2 * this.deviceMotion.aX;
        this.player.sy += 0.2 * this.deviceMotion.aY;
        this.player.x -= this.player.speed * this.deviceMotion.aX + this.player.sx;                 // プレイヤのx座標を更新（a -= b は a = a - b の意味）
        this.player.y += this.player.speed * this.deviceMotion.aY + this.player.sy;                 // プレイヤのy座標を更新（a += b は a = a + b の意味）
        if(this.player.x < 0) {                          // xが0未満なら
            this.player.x = 0;                               // xを0にする（それより左に行かない）
        } else if(this.player.x > this.canvas.width) {        // xがcanvasの幅以上なら
            this.player.x = this.canvas.width;                    // xをcanvasの幅の値にする（それより右に行かない）
        }
        if(this.player.y < 0) {                          // yが0未満なら
            this.player.y = 0;                               // yを0にする（それより上に行かない）
        } else if(this.player.y > this.canvas.height) {       // yがcanvasの高さ以上なら
            this.player.y = this.canvas.height;                   // yをcanvasの高さの値にする（それより下に行かない）
        }
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);   // canvasの内容を消す clearRect(x, y, w, h)
        this.context.beginPath();                        // 描画開始
        this.context.arc(this.player.x, this.player.y, this.player.radius,  // 円を描く arc(x, y, 半径, 開始角度, 終了角度)
                    0, 2 * Math.PI);                // 角度の単位はラジアン（2π = 360度）で指定
        this.context.fillStyle = this.player.color;            // 塗りつぶす色の設定
        this.context.fill();
    }
}
