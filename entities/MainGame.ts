
import { BallInterface } from "../interfaces/BallInterface";
import { GameInterface } from "../interfaces/GameInterface";
import { Ball } from "./Ball";
import { BallNumberRandom } from "./BallNumberRandom";
import { Game } from "./Game";

/**
 * Clase que implementa el Juego Principal 
 */
export class MainGame extends Game implements GameInterface {
    private ballType: BallInterface;
    public sumBalls: number = 0;
    constructor(
        minBallValue: number,
        maxBallValue: number,
        maxBalls: number,
        price: number
    ) {
        super("Juego Principal", minBallValue, maxBallValue, maxBalls, price);
        // Tipo de Bolilla por default
        this.ballType = new BallNumberRandom(minBallValue, maxBallValue);
    }

    setBallType(ballType: BallInterface): void {
        this.ballType = ballType;
    }

    generateBalls(): void {
        for (let x = 0; x < this.maxBalls; x++) {
            const ball = new Ball(this.ballType);
            ball.execute();
            this.balls.push(ball);
            if (typeof ball.value == 'number') {
                this.sumBalls += ball.value;
            }
        }
    }

    public getBallsValue(): Array<number | string> {
        let balls: Array<number | string> = [];
        this.balls.forEach(ball => {
            balls.push(ball.value);
        });
        return balls;
    }
}