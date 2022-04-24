/**
 * スマホのジャイロセンサの情報を管理する
 */
export class DeviceOrientation {
    /**
     * コンストラクタ
     */
    constructor() {
        window.onload = () => { this.requestDeviceOrientationPermission() }
    }

    /**
     * デバイス
     */
    requestDeviceOrientationPermission() {
        if (
            DeviceOrientationEvent &&
            typeof DeviceOrientationEvent.requestPermission === 'function'
        ) {
            // iOS 13+ の Safari
            // 許可を取得
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        // 許可を得られた場合、devicemotionをイベントリスナーに追加
                        window.addEventListener('deviceorientation', (event) => {
                            // console.log('event', event);
                            var hoge = document.querySelector("#txt");
                            var absolute = event.absolute;
                            var alpha = event.alpha;
                            var beta = event.beta;
                            var gamma = event.gamma;
                            hoge.innerHTML =
                                "absolute: " + absolute + "<br>"
                                + "alpha: " + alpha + "<br>"
                                + "beta: " + beta + "<br>"
                                + "gamma: " + gamma + "<br>";
                        });
                    } else {
                        // 許可を得られなかった場合の処理
                    }
                }).catch(console.error) // https通信でない場合などで許可を取得できなかった場合
        } else {
            console.log('上記以外のブラウザ');
        }
    }
}
