import express from 'express';
import bookRoute from './routes/bookRoute.js';
import authRoute from './routes/authRoute.js';
import connectDB from './config/db.js';
import cors from 'cors';

const app = express();
const port = 3000;

const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/v1/books', bookRoute)
app.use('/api/v1/auth', authRoute)

try {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}`);
    });

} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}