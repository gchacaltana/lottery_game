# Lottery Game

Aplicación que simula la ejecución de juegos de lotería.

## Configuración

```ts
AppConfig {
    PLAYERS = 20,
    BALL_VALUE_INI = 1,
    BALL_VALUE_END = 5,
    BALLS = 5,
    PRICE_MAIN_GAME = 3.5,
    PRICE_BOLI_YAPA = 2.0,
    PRICE_BOLI_SUERTE = 1.5,
    AMOUNT_FIRST_PRIZE_MAIN_GAME = 1000000,
    AMOUNT_SECOND_PRIZE_MAIN_GAME = 30000,
    AMOUNT_THIRD_PRIZE_MAIN_GAME = 10000,
    PERCENTAGE_PRIZE_BOLI_YAPA_GAME = 25,
    AMOUNT_PRIZE_BOLI_SUERTE = 10000,
    REPEAT_LINE = 30
}
```

## Ejecución

```bash
#npm start
ts-node app.ts
```