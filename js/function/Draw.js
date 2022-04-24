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
        // キャンババスのラッパー要素の大きさから、キャンバスの大きさを設定
        const canvasWrapper = document.getElementById('canvas-wrapper');
        this.canvas = document.getElementById('canvas');
        this.canvas.width = canvasWrapper.offsetWidth;
        this.canvas.height = canvasWrapper.offsetHeight;
        this.context = this.canvas.getContext('2d');

        // プレイヤークラスのインスタンスを作成
        this.player = new Player(this.canvas, this.context);

        // 障害物クラスのインスタンスを作成
        this.obstacles = [];
        this.counts = 5;
        for (var i = 0; i < this.counts; i++) {
            this.obstacles.push(new Obstacle(this.canvas, this.context, this.counts, i));
        }

        // テキストクラスのインスタンスを作成
        this.text = new Text();

        // スマフォの加速度を取得するクラスのインスタンスを作成
        this.deviceMotion = new DeviceMotion();

        this.timer = window.setInterval(() => {
            this.text.draw(this.deviceMotion);
            this.player.draw(this.deviceMotion);
            for (var i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].draw(this.player);
            }
        }, 110);
    }

    /**
     * 初期化
     */
    init() {
    }
}
