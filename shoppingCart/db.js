const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    database: 'cartdb',
    username: 'myuser',
    password: 'mypass'
})

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: {
        type: Sequelize.STRING
    },

    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

db.sync()
    .then(() => console.log("DataBase synced"))
    .catch((err) => console.log("Error in creating database"));

exports = module.exports = {
    User,
    Product
}
