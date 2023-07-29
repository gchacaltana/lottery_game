import { getRandomLetter } from "../helpers/string_helper";
import { BallInterface } from "../interfaces/BallInterface";

export class BallCharacter implements BallInterface {
    execute(): string {
        return getRandomLetter();
    }
}