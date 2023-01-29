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
db.Post = require('./postModel')(sequelize, DataTypes)
// console.log(db.Post === sequelize.models.Post) // true <<<<<<<<<
db.Survey = require('./surveyModel')(sequelize, DataTypes)
// console.log(db.Survey === sequelize.models.Survey) // true <<<<<<<<<

db.User.hasMany(db.Post, { foreignKey: { allowNull: false } })
db.Post.belongsTo(db.User)
db.User.hasOne(db.Survey, { foreignKey: { allowNull: false } })
db.Survey.belongsTo(db.User)


module.exports = db