import { Game } from "../entities/Game";
import { LotteryTicket } from "../entities/LotteryTicket";
import { Player } from "../entities/Player";
import { createGames } from "./game_helper";

/**
 * Función para crear boletos de lotería con bolillas aleatorias.
 * @param name 
 * @returns 
 */
export const createRandomLotteryTicket = (name: string): LotteryTicket => {
    // Creamos al Jugador
    const player = new Player(`Jugador ${name}`);
    const [mainGamePlayer, boliYapaGamePlayer] = createGames();

    // Creamos la partida del jugador.
    let listGamesPlayer: Array<Game> = [];

    mainGamePlayer.generateBalls();
    listGamesPlayer.push(mainGamePlayer);

    boliYapaGamePlayer.generateBalls();
    listGamesPlayer.push(boliYapaGamePlayer);

    // Creamos boleto de lotería del jugador
    const lotteryTicket = new LotteryTicket(player, listGamesPlayer);
    return lotteryTicket;
}