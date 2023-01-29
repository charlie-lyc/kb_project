module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        kakaoId: {
            type: DataTypes.BIGINT, // >>>>>> !!! <<<<<<
        },
        googleId: {
            type: DataTypes.STRING, // >>>>>> !!! <<<<<<
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false, // allowNull defaults to true
        },
        provider: {
            type: DataTypes.STRING,
            defaultValue: 'local', // ex) 'kakao', 'google'
        },
        isJoined: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            // defaultValue: DataTypes.NOW,    // Available only when using 'sequelize'
            defaultValue: sequelize.fn('NOW'), // Available when using 'sequelize' or 'SQL'
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn('NOW'),
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