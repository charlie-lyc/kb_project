module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        kakaoId: {
            type: DataTypes.BIGINT, // >>>>>> !!! <<<<<<
        },
        googleId: {
            type: DataTypes.STRING, // >>>>>> !!! <<<<<<
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'local', // ex) 'kakao', 'google'
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false, // allowNull defaults to true
        },
        isJoined: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            // defaultValue: DataTypes.NOW,    // Available only when using 'sequelize'
            defaultValue: sequelize.fn('NOW'), // Available when using 'sequelize' or 'SQL'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('NOW'),
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        timestamps: true, // Automatically 'createdAt' and 'updatedAt' fields are added to model, using the data type 'DataTypes.DATE'. And these are managed automatically.
        // createdAt: true, // Default by 'timestamps: true'
        // updatedAt: true, // Default by 'timestamps: true'

        // paranoid: true, // Automatically 'deletedAt' field is added to model. And paranoid table performs a soft-deletion of records, instead of a hard-deletion.
        // deletedAt: true, // Default by 'paranoid: true'
        
        // tableName: 'Users', // By default, table name is automatically plural model name.
    })
}