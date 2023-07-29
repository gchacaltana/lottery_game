import { getRandomNumber } from "../helpers/number_helper";
import { BallInterface } from "../interfaces/BallInterface";

/**
 * Estrategia para obtener una bolilla numérica al azar.
 */
export class BallNumberRandom implements BallInterface {
    public min: number;
    public max: number;
    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }
    execute(): number {
        return getRandomNumber(this.min, this.max);
    }
}