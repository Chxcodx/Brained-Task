const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("task", "root", "root123",{
    dialect: "mysql",
    host: "localhost",
    port: "3306"
});

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
  });
module.exports = db;