const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const bugRouter = require('./src/routers').bugRoutes
const eventRouter = require('./src/routers').eventRoutes

const app = express()

app.use(morgan('dev'));
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())

// routers

// main application
// const apiRouter = express.Router()
// app.use('/api', apiRouter)

// dashboard
const adminRouter = express.Router();
app.use('/admin', adminRouter);
adminRouter.use('/events', eventRouter)
adminRouter.use('/bugs', bugRouter)




app.use((req,res,next)=>{
    const error = new Error("Page Not Found. Welcome to the beginning of nothingness..!!")
    error.status = 404;
    next(error)
});

app.use((err,req,res,next)=>{
    // console.error(err.stack)
    res.status(err.status || 500).send({
        error: {
            message: err.message || "Internal Server Error"
        }
    })
})

module.exports = app