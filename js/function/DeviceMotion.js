/**
 * スマホの加速度センサの情報を管理する
 */
export class DeviceMotion {
    /**
     * コンストラクタ
     */
    constructor() {
        window.onload = () => { this.requestDeviceMotionPermission() }
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
                            var hoge = document.querySelector("#txt2");
                            var aX = event.accelerationIncludingGravity.x;    // x軸の重力加速度（Android と iOSでは正負が逆）
                            var aY = event.accelerationIncludingGravity.y;    // y軸の重力加速度（Android と iOSでは正負が逆）
                            var aZ = event.accelerationIncludingGravity.z;    // z軸の重力加速度（Android と iOSでは正負が逆）
                            hoge.innerHTML = "x: " + aX + "<br>"         // x軸の値
                            + "y: " + aY + "<br>"         // y軸の値
                            + "z: " + aZ;                 // z軸の値
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
}
