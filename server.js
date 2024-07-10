import express from 'express';
import cors from 'cors';
import dbOperations from './dbfiles/dbOperations.js';

// import dbOperations from './dbfiles/dbOperations.js'
// const dbOperations = require('./dbfiles/dbOperations')

// const API_PORT = process.env.PORT || 5000;
// const app = express();

// app.use(cors());

// app.get('/api', (req, res) => {
//     console.log('called');
//     res.send({ result: 'hello' });
// });

// app.get('/quit', (req, res) => {
//     console.log('called quit');
//     res.send({ result: 'goodbye' });
// });

dbOperations.getMonth().then(res => {
    console.log(res);
})

// app.listen(API_PORT, () => console.log(`Server running on port ${API_PORT}`));
