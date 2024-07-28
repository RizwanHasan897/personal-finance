import express from 'express';
import cors from 'cors';

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
    console.log('called');
    res.send({ result: 'hello' });
});

app.get('/quit', (req, res) => {
    console.log('called quit');
    res.send({ result: 'goodbye' });
});

app.listen(API_PORT, () => console.log(`Server running on port ${API_PORT}`));
