// external imports
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// internal imports
const booksRoute = require('./routes/booksRoute');

const app = express();
dotenv.config();

// middleware for parsing req body
app.use(express.json());

// middleware for handling CORS policy
// Option 1
app.use(cors());
// Option 2
// app.use(
//     cors({
//         origin: 'http://localhost:5555',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (req, res) => res.status(234).send('WELCOME'));

app.use('/books', booksRoute);

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connected to DB');
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`);
        });
    })
    .catch((error) => console.log(error));
