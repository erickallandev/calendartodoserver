import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db_sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        },
    },
});

db_sequelize
    .authenticate()
    .then( () => console.log("A connection was successfully established"))
    .catch((err) => console.error("Connection error!", err));

    export default db_sequelize