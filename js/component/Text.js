/**
 * テキスト管理クラス
 */
export class Text {
    /**
     * コンストラクタ
     *
     */
    constructor() {
        this.textArea = document.getElementById("txt2");
    }

    /**
     * 初期化
     */
    init() {
    }

    draw(deviceMotion) {
        this.textArea.innerHTML = "x: " + deviceMotion.aX + "<br>"         // x軸の値
            + "y値: " + deviceMotion.aY + "<br>"         // y軸の値
            + "z: " + deviceMotion.aZ;                 // z軸の値
    }
}