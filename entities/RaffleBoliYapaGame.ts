import { printLine } from "../helpers/string_helper";
import { RaffleInterface } from "../interfaces/RaffleInterface";
import { RaffleBoliYapaGameInitialData } from "../types/RaffleBoliYapaGameInitialData";
import { BoliYapaGame } from "./BoliYapaGame";
import { LotteryTicket } from "./LotteryTicket";
import { MainGame } from "./MainGame";
import { RaffleMainGame } from "./RaffleMainGame";

/**
 * Clase que implementa el sorteo del Juego Boli Yapa
 */
export class RaffleBoliYapaGame implements RaffleInterface {
    boliYapaGame: BoliYapaGame;
    raffleMainGame: RaffleMainGame;
    percentagePrize: number;
    amountPrize: number;

    //Lista de boletos ganadores - Boli Yapa
    listTicketWinnersBoliYapa: Array<LotteryTicket> = [];

    constructor(initialData: RaffleBoliYapaGameInitialData) {
        this.raffleMainGame = initialData.raffleMainGame;
        this.percentagePrize = initialData.percentagePrizeBoliYapa;
        this.amountPrize = this.raffleMainGame.amountFirstPrize * this.percentagePrize / 100;
        this.boliYapaGame = new BoliYapaGame(
            initialData.ballValueIni, 
            initialData.ballValueEnd, 
            initialData.priceGame
        );
    }

    generateBallsGame(): void {
        this.boliYapaGame.generateBalls();
        console.log(`Bolillas Boli Yapa: ${this.boliYapaGame.getPreviewBall()}`);
    }

    findWinners() {
        const keyLastBall = this.raffleMainGame.mainGame.maxBalls - 1
        this.raffleMainGame.listTicketWinnersSecondPrize.forEach(playerTicket => {
            if (playerTicket.listGames[0] instanceof MainGame && playerTicket.listGames[0].balls[keyLastBall].value == this.boliYapaGame.balls[0].value) {
                this.listTicketWinnersBoliYapa.push(playerTicket);
            }
        });
    }

    showResult() {
        printLine();
        console.log("Ganadores Boli Yapa");
        if (this.listTicketWinnersBoliYapa.length == 0) {
            console.log(`No tuvimos ganadores en la Boli Yapa`);
        } else if (this.listTicketWinnersBoliYapa.length == 1) {
            console.log(`Tuvimos un ganador`);
            console.log(`Jugador: ${this.listTicketWinnersBoliYapa[0].player.name}`);
            console.log(`Premio: ${this.amountPrize}`);
        } else {
            console.log(`Tuvimos ${this.listTicketWinnersBoliYapa.length} ganadores con la BoliYapa`);
            const prize = this.amountPrize / this.listTicketWinnersBoliYapa.length;
            this.listTicketWinnersBoliYapa.forEach(ticketPlayer => {
                console.log(`Jugador: ${ticketPlayer.player.name}`);
                console.log(`Premio: ${prize}`);
            });
        }
    }

}