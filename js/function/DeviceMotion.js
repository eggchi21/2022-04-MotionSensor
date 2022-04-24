/**
 * スマホの加速度センサの情報を管理する
 */
export class DeviceMotion {
    /**
     * コンストラクタ
     */
    constructor() {
        // ボタンクリックでrequestDeviceMotionPermission実行
        const startButton = document.getElementById("start-button")
        startButton.addEventListener('click', this.requestDeviceMotionPermission, false)
        this.aX = 0;
        this.aY = 0;
        this.coefficient = ["iPhone", "iPad", "iPod"].includes(navigator.platform) ? -1 : 1;
        this.isPermitted = false;
    }

    /**
     * スマホの加速度センサを取得許可依頼をする
     */
    requestDeviceMotionPermission = () => {
        if (
            DeviceMotionEvent &&
            typeof DeviceMotionEvent.requestPermission === 'function'
        ) {
            // iOS 13+ の Safari
            // 許可を取得
            DeviceMotionEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        // 許可を得られた場合、devicemotionをイベントリスナーに追加
                        window.addEventListener('devicemotion', (event) => {
                            this.aX = event.accelerationIncludingGravity.x * this.coefficient;    // x軸の重力加速度（Android と iOSでは正負が逆）
                            this.aY = event.accelerationIncludingGravity.y * this.coefficient;    // y軸の重力加速度（Android と iOSでは正負が逆）
                        });
                        this.isPermitted = true;
                    } else {
                        // 許可を得られなかった場合の処理
                    }
                }).catch(console.error) // https通信でない場合などで許可を取得できなかった場合
        } else {
            console.log('上記以外のブラウザ');
        }
    }
}
