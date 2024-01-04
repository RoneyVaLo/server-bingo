import mongoose from 'mongoose';
import 'dotenv/config';


const MONGO_URI = process.env.DB_CONNECTION_STRING;

export async function connectToDatabase() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('>>> Conexión exitosa a la base de datos');
    } catch (err) {
        console.error('!! Error al conectar a la base de datos:', err);
    }
}
