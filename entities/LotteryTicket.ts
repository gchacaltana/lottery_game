import { printLine } from "../helpers/string_helper";
import { Game } from "./Game";
import { MainGame } from "./MainGame";
import { Player } from "./Player";

export class LotteryTicket {
    public player: Player;
    public listGames: Array<Game>;
    public hits: number = 0;
    public price: number = 0;
    constructor(player: Player, listGames: Array<Game>) {
        this.player = player;
        this.listGames = listGames;
    }

    showInfo() {
        console.log(`Nombre Jugador: ${this.player.name}`);
        this.listGames.forEach(game => {
            console.log(`Bolillas ${game.name}: ${game.getPreviewBall()}`);
            if (game instanceof MainGame) {
                console.log(`Suma Bolillas: ${game.sumBalls}`);
            }
        });
        printLine()
    }
}