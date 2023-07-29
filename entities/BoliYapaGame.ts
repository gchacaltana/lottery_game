import { BallInterface } from "../interfaces/BallInterface";
import { GameInterface } from "../interfaces/GameInterface";
import { Ball } from "./Ball";
import { BallNumberRandom } from "./BallNumberRandom";
import { Game } from "./Game";

/**
 * Clase que implementa el Juego Boli Suerte 
 */
export class BoliYapaGame extends Game implements GameInterface {
    private ballType: BallInterface;
    constructor(
        minBallValue: number,
        maxBallValue: number,
        price: number,
        maxBalls: number = 1
    ) {
        super("Boli Yapa", minBallValue, maxBallValue, maxBalls, price);
        this.ballType = new BallNumberRandom(minBallValue, maxBallValue);
    }

    generateBalls(): void {
        const ball = new Ball(this.ballType);
        ball.execute();
        this.balls.push(ball);
    }
    
    getBallsValue(): Array<number | string> {
        let balls: Array<number | string> = [];
        this.balls.forEach(ball => {
            balls.push(ball.value);
        });
        return balls;
    }
}