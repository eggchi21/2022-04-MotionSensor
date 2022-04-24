/**
 * ボール管理クラス
 */
export class Ball {
    /**
     * コンストラクタ
     */
    constructor() {
        this.x = 150;                           // x座標の初期値
        this.y = 200;                           // y座標の初期値
        this.radius = 20;                       // 半径の初期値
        this.color = "rgb(0, 0, 255)";          // 色の初期値
        this.speed = 3;                            // 速さの係数
        this.sx = 0;                            // ★x方向の加速
        this.sy = 0;                            // ★y方向の加速
    }

    /**
     * 初期化
     */
    init() {
    }

    draw() {}
}
