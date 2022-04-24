import { DeviceOrientation } from './function/DeviceOrientation.js';
import { DeviceMotion } from './function/DeviceMotion.js';
import { Ball } from './component/Ball.js';

const deviceOrientation = new DeviceOrientation();
const deviceMotion = new DeviceMotion(
    new Ball()
);

deviceOrientation.init();
deviceMotion.init();