/**
 * スマホの加速度センサの情報を管理する
 */
export class DeviceMotion {
    /**
     * コンストラクタ
     */
    constructor() {
        window.onload = () => { this.requestDeviceMotionPermission() }
        this.aX = 0;
        this.aY = 0;
        this.aZ = 0;
        this.canvas = document.getElementById('canvas');
        this.text = document.getElementById("txt2");
        this.timer = window.setInterval(() => {
            this.displayData();      // displayData 関数を実行
            // this.drawBall();         // ★drawBall 関数を実行
        }, 33);
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
                            this.aX = event.accelerationIncludingGravity.x;    // x軸の重力加速度（Android と iOSでは正負が逆）
                            this.aY = event.accelerationIncludingGravity.y;    // y軸の重力加速度（Android と iOSでは正負が逆）
                            this.aZ = event.accelerationIncludingGravity.z;    // z軸の重力加速度（Android と iOSでは正負が逆）

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

    displayData() {
        this.text.innerHTML = "x: " + this.aX + "<br>"         // x軸の値
        + "y: " + this.aY + "<br>"         // y軸の値
        + "z: " + this.aZ;                 // z軸の値
    }


    drawBall() {
        var centerX = this.canvas.width / 2;            // canvasの中心のX座標
        var centerY = this.canvas.height / 2;	        // canvasの中心のY座標
        var ballRad = 50;                           // ボールの半径
        var ballColor = "rgb(0, 0, 255)";           // ボールの色
        var g  = 9.80665;                           // 1Gの時の重力加速度[m/s^2]
        var d  = centerX / g;                       // 1m/s^2 あたりでボールが動く量
        var os = navigator.platform;                // OS名の取得
        if(os === "iPhone" || os === "iPad" || os === "iPod") {     // iOSなら
            this.aX *= -1;                               // 加速度の正負を反転させる
            this.aY *= -1;                               // a *= b は a = a * b の意味
            this.aZ *= -1;
        }
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);   // canvasの内容を消す clearRect(x, y, w, h)
        context.beginPath();                        // 描画開始
        context.arc(centerX - d * this.aX,               // 円を描く arc(x, y, 半径, 開始角度, 終了角度)
                    centerY + d * this.aY,               // 加速度xとyに、1m/s^2あたりで動く量dをかける
                    ballRad - 3 * this.aZ,               // ボールの半径（zに掛けた係数3はテキトー）
                    0, 2 * Math.PI);                // 角度の単位はラジアン（2π = 360度）で指定
        context.fillStyle = ballColor;              // 塗りつぶす色の設定
        context.fill();                             // 塗る
    }
}
