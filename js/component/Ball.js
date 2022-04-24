/**
 * ボール管理クラス
 */
export class Ball {
    /**
     * コンストラクタ
     */
    constructor(x, y, radius, color, speed, sx, sy) {
        this.x = x;                           // x座標の初期値
        this.y = y;                           // y座標の初期値
        this.radius = radius;                 // 半径の初期値
        this.color = color;                   // 色の初期値
        this.speed = speed;                   // 速さの係数
        this.sx = sx;                         // x方向の加速
        this.sy = sy;                         // y方向の加速
    }

    /**
     * 初期化
     */
    init() {
    }

    draw() {}
}
