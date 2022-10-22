import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './routes/api.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert {type: 'json'};

dotenv.config()
const server = express();
server.use(express.json());
server.use(cors());

const PORT = process.env.PORT || 3001;

server.use(router);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})