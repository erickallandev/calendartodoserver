import { DataTypes } from "sequelize";
import db_sequelize from "../instances/pg.js";

const Todo = db_sequelize.define('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    timestart: {
        type: DataTypes.TIME,
        allowNull: false
    },
    timeend: {
        type: DataTypes.TIME,
        allowNull: false
    }
},
    {
        tableName: 'Todos',
        timestamps: false
    }
);

const init = async () => {
    await Todo.sync();
};

init();

export default Todo