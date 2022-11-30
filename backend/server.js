const express = require('express')
const cors = require('cors')
require('dotenv').config()


/** Connect to MongoDB **/
// const connectDB = require('./config/db')
// connectDB()
/**************************************/

const app = express()

/**
 * Enable All CORS Request
 */
app.use(cors())

/** Use Body-Parser to Get Data from Request Body **/
app.use(express.json()) // for Parsing 'application/json'
app.use(express.urlencoded({ extended: false })) // for Parsing 'application/x-www-form-urlencoded'
/***************************************************/


/* Goals */
// app.get('/api/goals', (req, res) => {
//     // res.send('Get all goals')
//     //////////////////////////////////////////////////
//     // res.status(200).send('Get all goals')
//     //////////////////////////////////////////////////
//     res.status(200).json({ message: 'Get all goals' })
// })
/////////////////////////////////////////////////////////
// const goalsRouter = require('./routers/goalsRouter')
// app.use('/api/goals', goalsRouter)
/////////////////////////////////////////////////////////
// app.use('/api/goals', require('./routers/goalsRouter'))

/* Users */
// const usersRouter = require('./routers/usersRouter')
// app.use('/api/users', usersRouter)
/////////////////////////////////////////////////////////
// app.use('/api/users', require('./routers/usersRouter'))


/***************************************************************/
/* SERVE FRONTEND */
const path = require('path')
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => res.send('Set NODE_ENV to production!'))
}
/***************************************************************/

/** Error Handling **/
app.use(require('./middleware/errorHandler'))
/***************************************************************/

app.listen(process.env.PORT, () => {
    /* For Development */
    // console.log(`Server started on port ${process.env.PORT}`)
})