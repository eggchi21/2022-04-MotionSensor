/**
 * テキスト管理クラス
 */
export class Text {
    // ライフ
    static get LIFE_OBJECT() {
        return "☆";
    }

    /**
     * コンストラクタ
     */
    constructor() {
        this.score = 0;
        this.life = 5;
        this.scoreArea = document.getElementById("score");
        this.motionArea = document.getElementById("motion");
        this.lifeArea = document.getElementById("life")
    }

    /**
     *  描画する
     *
     * @param deviceMotion
     */
    draw(deviceMotion) {
        this.score += 1;
        this.scoreArea.innerHTML = "スコア: " + this.score;
        this.motionArea.innerHTML = "横の傾き: " + deviceMotion.aX + "<br>"
            + "縦の傾き: " + deviceMotion.aY + "<br>";
    }

    lifeDown(){
        this.life -= 1;
        if (this.life > 0) {
            this.lifeArea.innerHTML = Text.LIFE_OBJECT.repeat(this.life);
        }
    }
}