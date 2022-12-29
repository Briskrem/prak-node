const express = require('express');
const ExpressError = require('./expressError');
const jobRoutes = require('./routes/jobs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/jobs', jobRoutes);

app.get('/', (req, res) => {
    res.send('initial up')
})
app.use((req, res, next)=>{
    next(new ExpressError('not found', 404))
})

app.use((error, req, res, next) => {
    res.status(error.status).json({err: {message: error.message, status: error.status}})
})

app.listen(3003, () => {
    console.log('yea its server running')
})