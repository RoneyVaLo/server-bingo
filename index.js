import express from 'express';

const app = express();
const PORT = 4000;

app.use(express.json());


app.get('/game', (req, res) => {
    res.send("/game")
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
