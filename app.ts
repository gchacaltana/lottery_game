import { LotteryTicket } from "./entities/LotteryTicket";
import { RaffleMainGame } from "./entities/RaffleMainGame";
import { RaffleBoliYapaGame } from "./entities/RaffleBoliYapaGame";
import { RaffleBoliSuerteGame } from "./entities/RaffleBoliSuerteGame";
import { AppConfig } from "./config/AppConfig";
import { createRandomLotteryTicket } from "./helpers/lottery_ticket_helper";
import { RaffleMainGameInitialData } from "./types/RaffleMainGameInitialData";
import { RaffleBoliYapaGameInitialData } from "./types/RaffleBoliYapaGameInitialData";
import { RaffleBoliSuerteGameInitialData } from "./types/RaffleBoliSuerteInitialData";

class Application {
    // Boletos de Lotería de los Jugadores
    private playersTickets: Array<LotteryTicket> = [];
    main() {
        this.playersTickets = this.getRandomPlayerTickets(AppConfig.PLAYERS)
        const raffleMainGame: RaffleMainGame = this.createRaffleMainGame(this.playersTickets);
        const raffleBoliYapaGame: RaffleBoliYapaGame = this.createRaffleBoliYapaGame(raffleMainGame);
        const raffleBoliSuerteGame: RaffleBoliSuerteGame = this.createRaffleBoliSuerteGame(raffleMainGame);
        this.showWinners(raffleMainGame, raffleBoliYapaGame, raffleBoliSuerteGame);
    }

    /**
     * Método para generar aleatoriamente boletos de lotería
     * @param numberPlayers Número de jugadores
     * @returns 
     */
    getRandomPlayerTickets(numberPlayers: number) {
        const playersTickets: Array<LotteryTicket> = []
        let k: number = 1;
        while (k <= numberPlayers) {
            const lotteryTicket = createRandomLotteryTicket(k.toString());
            playersTickets.push(lotteryTicket);
            lotteryTicket.showInfo();
            k++;
        }
        return playersTickets;
    }

    /**
     * Método para crear el sorteo del Juego Principal
     * @param playersTickets 
     * @returns 
     */
    createRaffleMainGame(playersTickets: Array<LotteryTicket>): RaffleMainGame {
        const raffleMainGameInitialData: RaffleMainGameInitialData = {
            playersTickets: playersTickets,
            ballValueIni: AppConfig.BALL_VALUE_INI,
            ballValueEnd: AppConfig.BALL_VALUE_END,
            numberBalls: AppConfig.BALLS,
            priceGame: AppConfig.PRICE_MAIN_GAME,
            amountFirstPrizeMainGame: AppConfig.AMOUNT_FIRST_PRIZE_MAIN_GAME,
            amountSecondPrizeMainGame: AppConfig.AMOUNT_SECOND_PRIZE_MAIN_GAME,
            amountThirdPrizeMainGame: AppConfig.AMOUNT_THIRD_PRIZE_MAIN_GAME
        }
        const raffleMainGame = new RaffleMainGame(raffleMainGameInitialData);
        raffleMainGame.generateBallsGame();
        return raffleMainGame;
    }

    /**
     * Método para crear el sorteo del Juego Boli Yapa
     * @param raffleMainGame 
     * @returns 
     */
    createRaffleBoliYapaGame(raffleMainGame: RaffleMainGame): RaffleBoliYapaGame {
        const raffleBoliYapaInitialData: RaffleBoliYapaGameInitialData = {
            raffleMainGame: raffleMainGame,
            percentagePrizeBoliYapa: AppConfig.PERCENTAGE_PRIZE_BOLI_YAPA_GAME,
            ballValueIni: AppConfig.BALL_VALUE_INI,
            ballValueEnd: AppConfig.BALL_VALUE_END,
            priceGame: AppConfig.PRICE_BOLI_YAPA
        }
        const raffleBoliYapaGame = new RaffleBoliYapaGame(raffleBoliYapaInitialData);
        raffleBoliYapaGame.generateBallsGame();
        return raffleBoliYapaGame;
    }

    /**
     * Método para crear el sorteo del Juego Boli Suerte
     * @param raffleMainGame 
     * @returns 
     */
    createRaffleBoliSuerteGame(raffleMainGame: RaffleMainGame): RaffleBoliSuerteGame {
        const raffleBoliSuerteInitialData: RaffleBoliSuerteGameInitialData = {
            raffleMainGame: raffleMainGame,
            amountPrize: AppConfig.AMOUNT_PRIZE_BOLI_SUERTE,
            ballValueIni: AppConfig.BALL_VALUE_INI * AppConfig.BALLS,
            ballValueEnd: AppConfig.BALL_VALUE_END * AppConfig.BALLS,
            priceGame: AppConfig.PRICE_BOLI_SUERTE
        }
        const raffleBoliSuerteGame = new RaffleBoliSuerteGame(raffleBoliSuerteInitialData);
        raffleBoliSuerteGame.generateBallsGame();
        return raffleBoliSuerteGame;
    }

    /**
     * Método para imprimir el resultado de los sorteos.
     * @param raffleMainGame 
     * @param raffleBoliYapaGame 
     * @param raffleBoliSuerteGame 
     */
    showWinners(raffleMainGame: RaffleMainGame, raffleBoliYapaGame: RaffleBoliYapaGame, raffleBoliSuerteGame: RaffleBoliSuerteGame) {
        raffleMainGame.findWinners();
        raffleMainGame.showResult();
        raffleBoliYapaGame.findWinners();
        raffleBoliYapaGame.showResult();
        raffleBoliSuerteGame.findWinners();
        raffleBoliSuerteGame.showResult();
    }
}
new Application().main();