import { DeviceOrientation } from './function/DeviceOrientation.js';
import { DeviceMotion } from './function/DeviceMotion.js';

const deviceOrientation = new DeviceOrientation();
const deviceMotion = new DeviceMotion();

deviceOrientation.init();
deviceMotion.init();