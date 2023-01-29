require('colors')
const passport = require('passport')
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const path = require('path')

/***************************************************************/
/** CONFIGURATION **/

// Environmental variable
require('dotenv').config()

// Passport
require('./configs/googlePassport')(passport)
require('./configs/kakaoPassport')(passport)

/***************************************************************/
/** CONNECT TO DATABASE **/
const db = require('./models')

// Test the database connection
if (process.env.NODE_ENV === 'development') {
    db.sequelize.authenticate()
        .then(() => console.log('DB connection has been established successfully.'.blue))
        .catch(err => console.error(`Unable to connect to the database: ${err}`.orange))
}

//Synchronize models
db.sequelize.sync({ alter: true }) // { alter: true } or { force: true }
    .then(() => {
        console.log('All models were synchronized. All tables have been created if not existed.'.green)  // <<<<<<<<<
    }).catch(err => {
        console.error(`Unable to synchronize models: ${err}`.red)  // <<<<<<<<<
    })

/***************************************************************/
/** INITIALIZE APPLICATION AND MIDDLEWARE **/
const app = express()

// Enable all cors request
app.use(cors())

// Use body-parser to get from request body
app.use(express.json()) // 'application/json'
app.use(express.urlencoded({ extended: false })) // 'application/x-www-form-urlencoded'

// Sessions for login with passport
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        // path: '/',             // Default
        // httpOnly: true,        // Default
        maxAge: 60 * 60000,    // 60 minute
        // >>>>>>>>>>>>>> Set HTTPS <<<<<<<<<<<<<<
        // sameSite: 'None',      // Allow crose-site request(Need secure), default to 'Lax', 
        // secure: true,          // Default to false
        // >>>>>>>>>>>>>> Set HTTPS <<<<<<<<<<<<<<
    },
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

/***************************************************************/
/** SERVE BACKEND **/

// Health check for ELB(ALB) on AWS
app.get('/api', (req, res) => {
    res.status(200).send('Welcome to KB Project!')
})

// Routers and controllers
app.use('/api/auth', require('./routers/authRouter'))
app.use('/api/post', require('./routers/postRouter'))
app.use('/api/survey', require('./routers/surveyRouter'))

/***************************************************************/
/** SERVE FRONTEND **/
app.use(express.static(path.join(__dirname, '../frontend/build')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
})

/***************************************************************/
// Error handling
app.use(require('./middleware/errorHandler'))

// Start server
if (process.env.NODE_ENV === 'development') {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}.`.green) // <<<<<<<<<
    })
} else {
    app.listen(process.env.PORT)
}

/***************************************************************/