import express from 'express';
import { connectToDatabase } from './db.js';

const app = express();
const PORT = 4000;

app.use(express.json());

connectToDatabase();

app.get('/game', (req, res) => {
    res.send("/game")
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
