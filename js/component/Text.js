/**
 * テキスト管理クラス
 */
export class Text {
    /**
     * コンストラクタ
     *
     */
    constructor() {
        this.score = 0;
        this.scoreArea = document.getElementById("score");
        this.motionArea = document.getElementById("motion");
    }

    /**
     * 初期化
     */
    init() {
    }

    draw(deviceMotion) {
        this.score += 1;
        this.scoreArea.innerHTML = "スコア: " + this.score;
        this.motionArea.innerHTML = "横の傾き: " + deviceMotion.aX + "<br>"
            + "縦の傾き: " + deviceMotion.aY + "<br>"
            + "z: " + deviceMotion.aZ;
    }
}