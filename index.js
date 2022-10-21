import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config()
const server = express();
server.use(express.json());
server.use(cors());

const PORT = process.env.PORT || 3001;

server.get('/ping', (req, res) => {
    res.json('pong')
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})