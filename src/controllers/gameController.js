//* ESTE CONTROLADOR SE ENCARGA DE VALIDAR Y CREAR LAS PARTIDAS

import Game from "../models/gameModel.js";


//? Esta función es para cuando los usuarios se unen a una partida, para validar que esté activa y exista
export const verifyGame = async (req, res) => {
    const codeToJoin = req.params.id;

    if (!codeToJoin) return res.status(404).json({ mensaje: 'ID de juego inválido...' });

    try {
        const game = await Game.findOne({ codeToJoin });
        if (game) {
            if (game.isActive) {
                res.json({ message: 'La partida está activa', game });
            }
        } else {
            res.status(404).json({ message: 'La partida no está activa o no existe' });
        };
    } catch (error) {
        console.error('Error al verificar partida:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    };
};


const generateRandomCode = async () => {
    let codeToJoin;

    // Bucle hasta que se genera un código único
    do {
        codeToJoin = Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111;
        const existingGame = await Game.findOne({ codeToJoin });
        if (!existingGame) {
            break;
        }
    } while (true);

    return codeToJoin;
};

//? Esta función es para cuando un usuario crea una partida nueva
export const createGame = async (req, res) => {

    const codeToJoin = await generateRandomCode();

    const newGame = new Game({
        codeToJoin
    });

    try {
        const game = await newGame.save();
        console.log(game)
        res.json({ message: 'Partida creada exitosamente', game });
    } catch (error) {
        console.error('Error al crear partida:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
