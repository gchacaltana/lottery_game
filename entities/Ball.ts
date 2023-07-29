import { BallInterface } from "../interfaces/BallInterface";

export class Ball {
    public value: number | string = 0;
    private strategy: BallInterface;
    constructor(strategy: BallInterface) {
        this.strategy = strategy
    }

    setStrategy(strategy: BallInterface) {
        this.strategy = strategy;
    }

    execute(): void {
        this.value = this.strategy.execute();
    }
}