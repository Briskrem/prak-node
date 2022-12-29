const express = require('express');
const Job = require('../models/job');
const ExpressError = require('../expressError');

const routes = express.Router();

// routes.get('/', (req, res) => {
//     const {company} = req.query;
//     res.send(`routes works ${company}`)
// })

// routes.get('/type/:name', (req, res) => {
//     const { name } = req.params;
//     res.send(`params works ${name}`)
// })

// routes.post('/', (req, res) => {
//     const { power } = req.body;
//     res.json({result: {power}})
// })

routes.get('/', async (req, res) => {
    let q = req.query
    const result = await Job.findAll(q);
    res.json({result})
})

routes.get('/prak', (req, res, next) => {
    const { p } = req.query;
    if(p.length < 5){
        // res.status(403).res.json({message: 'err1'});
        // throw 'err2';
        // throw Error('err3')
        // throw new ExpressError('err4', 403)
        // throw new ExpressError('err5', 403)
        let result = Job.prak(p)
    }
})

module.exports = routes;