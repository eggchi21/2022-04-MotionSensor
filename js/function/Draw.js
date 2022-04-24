import { Player } from '../component/Player.js';
import { Obstacle } from '../component/Obstacle.js';
import { Text } from '../component/Text.js';
import { DeviceMotion } from './DeviceMotion.js';
import { CalcObject } from '../util/CalcObject.js';

/**
 * 描画管理クラス
 */
export class Draw {
    // 障害物を作成する個数
    static get OBSTACLE_COUNT() {
        return 5;
    }

    /**
     * コンストラクタ
     */
    constructor() {
        // キャンバスのラッパー要素の大きさから、キャンバスの大きさを設定
        const canvasWrapper = document.getElementById('canvas-wrapper');
        this.canvas = document.getElementById('canvas');
        this.canvas.width = canvasWrapper.offsetWidth;
        this.canvas.height = canvasWrapper.offsetHeight;
        this.context = this.canvas.getContext('2d');

        // プレイヤークラスのインスタンスを作成
        this.player = new Player(this.canvas, this.context);

        // 障害物クラスのインスタンスを作成
        this.obstacles = [];
        for (var i = 0; i < Draw.OBSTACLE_COUNT; i++) {
            this.obstacles.push(new Obstacle(this.canvas, this.context, Draw.OBSTACLE_COUNT, i));
        }

        // テキストクラスのインスタンスを作成
        this.text = new Text();

        // スマフォの加速度を取得するクラスのインスタンスを作成
        this.deviceMotion = new DeviceMotion();
    }

    /**
     * 初期化
     */
    init() {
        this.player.init();
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].init();
        }
        this.text.init();
    }

    /**
     * 描画する
     */
    draw() {
        this.timer = window.setInterval(() => {
            if (this.deviceMotion.isPermitted) {
                this.player.draw(this.deviceMotion);
                for (let i = 0; i < this.obstacles.length; i++) {
                    this.obstacles[i].draw(this.player);
                    if (CalcObject.isCollision(this.player, this.obstacles[i])) {
                        this.text.lifeDown();
                        this.obstacles[i].init();
                    }
                }
                this.text.draw();
            }

        }, 40);
    }
}
