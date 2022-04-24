/**
 * スマホの加速度センサの情報を管理する
 */
export class DeviceMotion {
    /**
     * コンストラクタ
     */
    constructor() {
        window.onload = () => { this.requestDeviceMotionPermission() }
        // this.player = player;
        // this.canvas = canvas;
        this.aX = 0;
        this.aY = 0;
        this.aZ = 0;
        // this.timer = window.setInterval(() => {
        //     this.displayData();      // displayData 関数を実行
        //     this.drawPlayer();         // ★drawBall 関数を実行
        // }, 50);
        this.coefficient = ["iPhone", "iPad", "iPod"].includes(navigator.platform) ? -1 : 1;
    }

    /**
     * 初期化
     */
    init() {
    }

    /**
     * デバイス
     */
    requestDeviceMotionPermission() {
        if (
            DeviceMotionEvent &&
            typeof DeviceMotionEvent.requestPermission === 'function'
        ) {
            // iOS 13+ の Safari
            // 許可を取得
            DeviceMotionEvent.requestPermission()
                .then(permissionState => {
                    console.log('permissionState', permissionState);

                    if (permissionState === 'granted') {
                        // 許可を得られた場合、devicemotionをイベントリスナーに追加
                        window.addEventListener('devicemotion', (event) => {
                            this.aX = event.accelerationIncludingGravity.x * this.coefficient;    // x軸の重力加速度（Android と iOSでは正負が逆）
                            this.aY = event.accelerationIncludingGravity.y * this.coefficient;    // y軸の重力加速度（Android と iOSでは正負が逆）
                            this.aZ = event.accelerationIncludingGravity.z * this.coefficient;    // z軸の重力加速度（Android と iOSでは正負が逆）

                        });
                    } else {
                        // 許可を得られなかった場合の処理
                    }
                }).catch(console.error) // https通信でない場合などで許可を取得できなかった場合
            // console.log('エラー');

        } else {
            console.log('上記以外のブラウザ');
            // 上記以外のブラウザ
        }
    }

    // displayData() {
    //     this.text.innerHTML = "x: " + this.aX + "<br>"         // x軸の値
    //     + "y: " + this.aY + "<br>"         // y軸の値
    //     + "z: " + this.aZ;                 // z軸の値
    // }


    // drawPlayer() {
    //     var os = navigator.platform;                // OS名の取得
    //     if(os === "iPhone" || os === "iPad" || os === "iPod") {     // iOSなら
    //         this.aX *= -1;                               // 加速度の正負を反転させる
    //         this.aY *= -1;                               // a *= b は a = a * b の意味
    //         this.aZ *= -1;
    //     }
    //     this.player.sx += 0.2 * this.aX;
    //     this.player.sy += 0.2 * this.aY; 
    //     this.player.x -= this.player.speed * this.aX + this.player.sx;                 // プレイヤのx座標を更新（a -= b は a = a - b の意味）
    //     this.player.y += this.player.speed * this.aY + this.player.sy;                 // プレイヤのy座標を更新（a += b は a = a + b の意味）
    //     if(this.player.x < 0) {                          // xが0未満なら
    //         this.player.x = 0;                               // xを0にする（それより左に行かない）
    //     } else if(this.player.x > this.canvas.area.width) {        // xがcanvasの幅以上なら
    //         this.player.x = this.canvas.area.width;                    // xをcanvasの幅の値にする（それより右に行かない）
    //     }
    //     if(this.player.y < 0) {                          // yが0未満なら
    //         this.player.y = 0;                               // yを0にする（それより上に行かない）
    //     } else if(this.player.y > this.canvas.area.height) {       // yがcanvasの高さ以上なら
    //         this.player.y = this.canvas.area.height;                   // yをcanvasの高さの値にする（それより下に行かない）
    //     }
    //     this.canvas.context.clearRect(0, 0, this.canvas.area.width, this.canvas.area.height);   // canvasの内容を消す clearRect(x, y, w, h)
    //     this.canvas.context.beginPath();                        // 描画開始
    //     this.canvas.context.arc(this.player.x, this.player.y, this.player.radius,  // 円を描く arc(x, y, 半径, 開始角度, 終了角度)
    //                 0, 2 * Math.PI);                // 角度の単位はラジアン（2π = 360度）で指定
    //     this.canvas.context.fillStyle = this.player.color            // 塗りつぶす色の設定
    //     this.canvas.context.fill();
    // }
}
