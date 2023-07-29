import { LotteryTicket } from "../entities/LotteryTicket";

export type RaffleMainGameInitialData = {
    playersTickets: Array<LotteryTicket>;
    ballValueIni: number;
    ballValueEnd: number;
    numberBalls: number;
    priceGame: number;
    amountFirstPrizeMainGame: number;
    amountSecondPrizeMainGame: number;
    amountThirdPrizeMainGame: number;
}