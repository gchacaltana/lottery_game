import { AppConfig } from "../config/AppConfig"

export const printLine = (): void => {
    console.log("-".repeat(AppConfig.REPEAT_LINE));
}

/**
 * Función para retornar una letra de manera aleatoria
 * @returns 
 */
export const getRandomLetter = (): string => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}