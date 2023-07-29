import { RaffleMainGame } from "../entities/RaffleMainGame";

export type RaffleBoliSuerteGameInitialData = {
    raffleMainGame: RaffleMainGame;
    amountPrize: number;
    ballValueIni:number;
    ballValueEnd: number;
    priceGame: number;
}