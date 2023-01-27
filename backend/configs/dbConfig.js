module.exports = {
    development: {
        database: process.env.LOCAL_DB_DATABASE,
        username: process.env.LOCAL_DB_USERNAME,
        password: process.env.LOCAL_DB_PASSWORD,
        host: process.env.LOCAL_DB_HOST,
        dialect: process.env.LOCAL_DB_DIALECT,
        // logging: console.log, // Default, displays the first parameter of the log function call
        logging: false, // Disables logging
        port: process.env.LOCAL_DB_PORT,
        pool: {
            max: 5, // 최대 유지 connection 수
            min: 0, // 최소 유지 connection 수
            acquire: 30000, // connection 획득을 위한 대기 시간
            idle: 10000, // 응답 대기 시간
        },
        timezone: '+09:00', // For reading on Workbench
    },
    production: {
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
        port: process.env.DB_PORT,
        pool: {
            max: 30,
            min: 5,
            acquire: 60000,
            idle: 20000,
        },
        timezone: '+09:00',
    },
}