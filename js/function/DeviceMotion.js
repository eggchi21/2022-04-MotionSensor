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
}
