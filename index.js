import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './db.js';
import gameRoutes from './src/routes/gameRoutes.js';

const app = express();
const PORT = 4000;

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);

app.use(express.json());

connectToDatabase();

app.use("/api", gameRoutes);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
