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
        this.lifeArea = document.getElementById("life")
    }

    /**
     * 初期化
     */
    init() {
        this.score = 0;
        this.life = 5;
    }

    /**
     *  描画する
     *
     */
    draw() {
        this.score += 1;
        this.scoreArea.innerHTML = "スコア: " + this.score;
    }

    /**
     * ライフを減らす
     */
    lifeDown(){
        this.life -= 1;
        if (this.life > 0) {
            this.lifeArea.innerHTML = Text.LIFE_OBJECT.repeat(this.life);
        } else if (this.life == 0) {
            this.lifeArea.innerHTML = "GAME OVER";
            alert("GAME OVER");
        }
    }
}