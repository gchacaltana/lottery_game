import { BoliSuerteGame } from "../entities/BoliSuerteGame";
import { BoliYapaGame } from "../entities/BoliYapaGame";
import { MainGame } from "../entities/MainGame";
import { AppConfig } from "../config/AppConfig";

/**
 * Función para crear las instancia de cada juego según las parametrizaciones de negocio
 */
export const createGames = (): [MainGame, BoliYapaGame, BoliSuerteGame] => {
    const BALL_BOLI_SUERTE_INI = AppConfig.BALL_VALUE_INI * AppConfig.BALLS;
    const BALL_BOLI_SUERTE_END = AppConfig.BALL_VALUE_END * AppConfig.BALLS;
    const mainGame = new MainGame(AppConfig.BALL_VALUE_INI, AppConfig.BALL_VALUE_END, AppConfig.BALLS, AppConfig.PRICE_MAIN_GAME);
    const boliYapaGame = new BoliYapaGame(AppConfig.BALL_VALUE_INI, AppConfig.BALL_VALUE_END, AppConfig.PRICE_BOLI_YAPA);
    const boliSuerteGame = new BoliSuerteGame(BALL_BOLI_SUERTE_INI, BALL_BOLI_SUERTE_END, AppConfig.PRICE_BOLI_SUERTE);
    return [mainGame, boliYapaGame, boliSuerteGame];
}