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
                this.obstacle[i].draw(this.deviceMotion, this.canvas, this.context);
            }
        }, 50);
    }

    /**
     * 初期化
     */
    init() {
    }

    // displayData() {
    //     this.text.innerHTML = "x: " + this.deviceMotion.aX + "<br>"         // x軸の値
    //         + "y: " + this.deviceMotion.aY + "<br>"         // y軸の値
    //         + "z: " + this.deviceMotion.aZ;                 // z軸の値
    // }

    // drawPlayer() {
    //     this.player.sx += 0.2 * this.deviceMotion.aX;
    //     this.player.sy += 0.2 * this.deviceMotion.aY;
    //     this.player.x -= this.player.speed * this.deviceMotion.aX + this.player.sx;                 // プレイヤのx座標を更新（a -= b は a = a - b の意味）
    //     this.player.y += this.player.speed * this.deviceMotion.aY + this.player.sy;                 // プレイヤのy座標を更新（a += b は a = a + b の意味）
    //     if (this.player.x < 0) {                          // xが0未満なら
    //         this.player.x = 0;                               // xを0にする（それより左に行かない）
    //     } else if (this.player.x > this.canvas.width) {        // xがcanvasの幅以上なら
    //         this.player.x = this.canvas.width;                    // xをcanvasの幅の値にする（それより右に行かない）
    //     }
    //     if (this.player.y < 0) {                          // yが0未満なら
    //         this.player.y = 0;                               // yを0にする（それより上に行かない）
    //     } else if (this.player.y > this.canvas.height) {       // yがcanvasの高さ以上なら
    //         this.player.y = this.canvas.height;                   // yをcanvasの高さの値にする（それより下に行かない）
    //     }
    //     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);   // canvasの内容を消す clearRect(x, y, w, h)
    //     this.context.beginPath();                        // 描画開始
    //     this.context.arc(this.player.x, this.player.y, this.player.radius,  // 円を描く arc(x, y, 半径, 開始角度, 終了角度)
    //         0, 2 * Math.PI);                // 角度の単位はラジアン（2π = 360度）で指定
    //     this.context.fillStyle = this.player.color;            // 塗りつぶす色の設定
    //     this.context.fill();
    // }

    // drawObstacles() {
    //     for (var i = 0; i < this.obstacles.length; i++) {     // 全ての隕石について
    //         this.obstacles[i].y += this.obstacles[i].speed;              // それぞれのスピードで動かす
    //         // if(collision(player, this.obstacles[i]) === true) {  // 衝突判定結果がtrueなら
    //         //     window.clearInterval(this.timer);            // タイマーを止める
    //         // }
    //         if (this.obstacles[i].y > canvas.height + this.obstacles[i].radius) {  // もし隕石が画面から消えたら
    //             // randomizeMeteo(this.obstacles[i]);           // 位置やサイズを初期化・ランダム化する
    //         }
    //         this.context.beginPath();                    // 描画開始
    //         this.context.arc(this.obstacles[i].x, this.obstacles[i].y, this.obstacles[i].radius,  // 円を描く arc(x, y, 半径, 開始角度, 終了角度)
    //             0, 2 * Math.PI);            // 角度の単位はラジアン（2π = 360度）で指定
    //         this.context.fillStyle = this.obstacles[i].color      // 塗りつぶす色の設定
    //         this.context.fill();                         // 塗る
    //     }
    // }
}
