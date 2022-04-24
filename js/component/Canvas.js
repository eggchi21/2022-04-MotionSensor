/**
 * キャンバス管理クラス
 */
export class Canvas {
    /**
     * コンストラクタ
     */
    constructor() {
        this.area = document.getElementById('canvas');
        this.context = this.area.getContext('2d');
    }

    /**
     * 初期化
     */
    init() {
    }
}
