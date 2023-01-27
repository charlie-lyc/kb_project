const { Sequelize, DataTypes } = require('sequelize')
const dbConfig = require('../configs/dbConfig')[process.env.NODE_ENV]


const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
    port: dbConfig.port,
    pool: dbConfig.pool,
    timezone: dbConfig.timezone,
})

const db = {}
db.sequelize = sequelize
db.User = require('./userModel')(sequelize, DataTypes)
// console.log(db.User === sequelize.models.User) // true <<<<<<<<<

// db.Notice = require('./noticeModel')(sequelize, DataTypes)
// console.log(db.Notice === sequelize.models.Notice) // true
// db.Request = require('./requestModel')(sequelize, DataTypes)
// console.log(db.Request === sequelize.models.Request) // true


// db.User.hasMany(db.Notice, { foreignKey: { allowNull: false } })
// db.Notice.belongsTo(db.User)
// db.User.hasMany(db.Request, { foreignKey: { allowNull: false } })
// db.Request.belongsTo(db.User)

module.exports = db