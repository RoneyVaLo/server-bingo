import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const generateRandomId = () => {
    return uuidv4();
};

const gameSchema = new mongoose.Schema({
    _id: { type: String, default: generateRandomId },
    codeToJoin: { type: String, unique: true },
    isActive: { type: Boolean, default: true },
    isFinished: { type: Boolean, default: false }
});

const Game = mongoose.model('Game', gameSchema);

export default Game;