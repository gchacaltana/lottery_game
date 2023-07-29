import { printLine } from "../helpers/string_helper";
import { RaffleInterface } from "../interfaces/RaffleInterface";
import { RaffleMainGameInitialData } from "../types/RaffleMainGameInitialData";
import { LotteryTicket } from "./LotteryTicket";
import { MainGame } from "./MainGame";

/**
 * Clase que implementa el sorteo del Juego Principal
 */
export class RaffleMainGame implements RaffleInterface {
    mainGame: MainGame;
    amountFirstPrize: number;
    amountSecondPrize: number;
    amountThirdPrize: number;
    playersTickets: Array<LotteryTicket>;

    //Lista de boletos ganadores (1er Premio) - Aciertos de todas las bolillas del Juego.
    listTicketWinnersFirstPrize: Array<LotteryTicket> = [];

    //Lista de boletos ganadores (2do Premio) - Aciertos de "n-1" del total de bolillas del Juego
    listTicketWinnersSecondPrize: Array<LotteryTicket> = [];

    // Lista de boletos ganadores (3er Premio) - Aciertos de "n-2" del total de bolillas del Juego
    listTicketWinnersThirdPrize: Array<LotteryTicket> = [];

    constructor(initialData: RaffleMainGameInitialData) {
        this.amountFirstPrize = initialData.amountFirstPrizeMainGame;
        this.amountSecondPrize = initialData.amountSecondPrizeMainGame;
        this.amountThirdPrize = initialData.amountThirdPrizeMainGame;
        this.playersTickets = initialData.playersTickets;
        this.mainGame = new MainGame(
            initialData.ballValueIni,
            initialData.ballValueEnd,
            initialData.numberBalls,
            initialData.priceGame
        );
    }

    /**
     * Método para generar bolillas del Juego
     */
    generateBallsGame() {
        this.mainGame.generateBalls();
        console.log(`Bolillas Juego Principal: ${this.mainGame.getPreviewBall()}`);
    }

    /**
     * Método para contar aciertos
     */
    countHits() {
        const mainGameBalls: Array<number | string> = this.mainGame.getBallsValue();
        this.playersTickets.forEach((playerTicket, keyTicket) => {
            const playerMainGameBalls: Array<number | string> = [];
            playerTicket.listGames[0].balls.forEach(ball => {
                playerMainGameBalls.push(ball.value);
            });
            mainGameBalls.forEach((value, key) => {
                if (value === playerMainGameBalls[key]) {
                    this.playersTickets[keyTicket].hits++;
                }
            })
        });
    }

    /**
     * Método para encontrar ganadores del Juego
     */
    findWinners() {
        this.countHits();
        const totalBallsGame: number = this.mainGame.maxBalls;
        this.playersTickets.forEach(playerTicket => {
            if (playerTicket.hits === totalBallsGame) {
                this.listTicketWinnersFirstPrize.push(playerTicket);
            }
            if (playerTicket.hits === totalBallsGame - 1) {
                this.listTicketWinnersSecondPrize.push(playerTicket);
            }
            if (playerTicket.hits === totalBallsGame - 2) {
                this.listTicketWinnersThirdPrize.push(playerTicket);
            }
        });
    }

    /**
     * Método para mostrar resultados
     */
    showResult() {
        printLine();
        console.log("Ganadores Juego Principal");
        this.showWinnerFirstPrize();
        this.showWinnerSecondPrize();
        this.showWinnerThirdPrize();
    }

    /**
     * Método para mostrar ganadores del primer premio
     */
    showWinnerFirstPrize() {
        console.log(`Ganadores del Primer Premio`);
        if (this.listTicketWinnersFirstPrize.length == 0) {
            console.log(`No tuvimos ganadores con ${this.mainGame.maxBalls} aciertos`);
        } else if (this.listTicketWinnersFirstPrize.length == 1) {
            console.log(`Tuvimos un ganador con ${this.mainGame.maxBalls}`);
            console.log(`Jugador: ${this.listTicketWinnersFirstPrize[0].player.name}`);
            console.log(`Premio: ${this.amountFirstPrize}`);
        } else {
            console.log(`Tuvimos ${this.listTicketWinnersFirstPrize.length} ganadores con ${this.mainGame.maxBalls} aciertos`);
            const prize = this.amountFirstPrize / this.listTicketWinnersFirstPrize.length;
            this.listTicketWinnersFirstPrize.forEach(ticketPlayer => {
                console.log(`Jugador: ${ticketPlayer.player.name}`);
                console.log(`Premio: ${prize}`);
            });
        }
    }

    /**
     * Método para mostrar ganadores del segundo juego
     */
    showWinnerSecondPrize() {
        console.log(`Ganadores del Segundo Premio`);
        if (this.listTicketWinnersSecondPrize.length == 0) {
            console.log(`No tuvimos ganadores con ${this.mainGame.maxBalls - 1} aciertos`);
        } else {
            console.log(`Tuvimos ${this.listTicketWinnersSecondPrize.length} ganadores con ${this.mainGame.maxBalls - 1} aciertos`);
            this.listTicketWinnersSecondPrize.forEach(ticketPlayer => {
                console.log(`Jugador: ${ticketPlayer.player.name}`);
                console.log(`Premio: ${this.amountSecondPrize}`);
            });
        }
    }

    /**
     * Método para mostrar ganadores del tercer premio
     */
    showWinnerThirdPrize() {
        console.log(`Ganadores del Tercer Premio`);
        if (this.listTicketWinnersThirdPrize.length == 0) {
            console.log(`No tuvimos ganadores con ${this.mainGame.maxBalls - 2} aciertos`);
        } else {
            console.log(`Tuvimos ${this.listTicketWinnersThirdPrize.length} ganadores con ${this.mainGame.maxBalls - 2} aciertos`);
            this.listTicketWinnersThirdPrize.forEach(ticketPlayer => {
                console.log(`Jugador: ${ticketPlayer.player.name}`);
                console.log(`Premio: ${this.amountThirdPrize}`);
            });
        }
    }
}