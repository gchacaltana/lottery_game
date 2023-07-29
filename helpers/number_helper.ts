/**
 * Función para devolver un número aleatorio dentro de un rango de números
 * @param min 
 * @param max 
 * @returns 
 */
export const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * max) + min;
}