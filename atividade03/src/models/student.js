import Sequelize from 'sequelize'
import connection from "../config/db_connection";

const Student = connection.define('students', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    course: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ira: {
        type: Sequelize.DOUBLE,
        allowNull: false
        field: 'updatedAt'
    }
})

export default Student