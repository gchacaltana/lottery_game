import { printLine } from "../helpers/string_helper";
import { RaffleInterface } from "../interfaces/RaffleInterface";
import { RaffleBoliSuerteGameInitialData } from "../types/RaffleBoliSuerteInitialData";
import { BoliSuerteGame } from "./BoliSuerteGame";
import { LotteryTicket } from "./LotteryTicket";
import { MainGame } from "./MainGame";
import { RaffleMainGame } from "./RaffleMainGame";

/**
 * Clase que implementa el sorteo del Juego Boli Suerte
 */
export class RaffleBoliSuerteGame implements RaffleInterface {
    boliSuerteGame: BoliSuerteGame;
    raffleMainGame: RaffleMainGame;
    amountPrize: number;

    //Lista de boletos ganadores - Boli Suerte
    listTicketWinnersBoliSuerte: Array<LotteryTicket> = [];

    constructor(initialData: RaffleBoliSuerteGameInitialData) {
        this.raffleMainGame = initialData.raffleMainGame;
        this.amountPrize = initialData.amountPrize;
        this.boliSuerteGame = new BoliSuerteGame(
            initialData.ballValueIni,
            initialData.ballValueEnd,
            initialData.priceGame
        );
    }

    generateBallsGame(): void {
        this.boliSuerteGame.generateBalls();
        console.log(`Bolillas Boli Suerte: ${this.boliSuerteGame.getPreviewBall()}`);
    }

    findWinners() {
        this.raffleMainGame.playersTickets.forEach(playerTicket => {
            if (playerTicket.listGames[0] instanceof MainGame && playerTicket.listGames[0].sumBalls === this.boliSuerteGame.balls[0].value) {
                this.listTicketWinnersBoliSuerte.push(playerTicket);
            }
        });
    }

    showResult() {
        printLine();
        console.log("Ganadores Boli Suerte");
        if (this.listTicketWinnersBoliSuerte.length == 0) {
            console.log(`No tuvimos ganadores en la Boli Suerte`);
        } else {
            console.log(`Tuvimos ${this.listTicketWinnersBoliSuerte.length} ganadores con la BoliSuerte`);
            this.listTicketWinnersBoliSuerte.forEach(ticketPlayer => {
                console.log(`Jugador: ${ticketPlayer.player.name}`);
                console.log(`Premio: ${this.amountPrize}`);
            });
        }
    }

}