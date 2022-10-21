import { DataTypes } from "sequelize";
import db_sequelize from "../instances/pg";

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
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    timestart: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timeend: {
        type: DataTypes.STRING,
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