/**
 * オブジェクトを計算するクラス
 */
export class CalcObject {
    /**
     * あたり判定を行う
     *
     * @param obj1
     * @param obj2
     * @return boolean
     */
    static isCollision(obj1, obj2) {
        const distX = obj1.x - obj2.x;
        const distY = obj1.y - obj2.y;
        const dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

        return dist < (obj1.radius + obj2.radius)
    }
}
