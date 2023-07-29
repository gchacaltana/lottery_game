import { Ball } from "./Ball";

export abstract class Game {
    name: string;
    minBallValue: number;
    maxBallValue: number;
    maxBalls: number;
    balls: Array<Ball> = [];
    price: number;
    constructor(
        name: string,
        minBallValue: number,
        maxBallValue: number,
        maxBalls: number,
        price: number
    ) {
        this.name = name;
        this.minBallValue = minBallValue;
        this.maxBallValue = maxBallValue;
        this.maxBalls = maxBalls;
        this.price = price;
    }

    getPreviewBall(): string {
        if (this.balls.length === 0) {
            return "-";
        } else if (this.balls.length === 1) {
            return this.balls[0].value.toString();
        }
        return this.balls.map((ball) => {
            return ball.value
        }).join(" - ");
    }

}