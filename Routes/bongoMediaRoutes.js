const { postMedia, getJazzMovie, getSingleMedia, delAllMovie, getDabbingMedia, getPopularMedia, banglaNatok } = require('../Controller/bongoMediaController');

const bongoMediaRoutes = require('express').Router();

//Post Media 
bongoMediaRoutes.post('/postMedia', postMedia)

//Get Jazz Movie
bongoMediaRoutes.get('/getJazzMedia', getJazzMovie)

//Get Jazz Movie
bongoMediaRoutes.get('/getDabbingMedia', getDabbingMedia)

//Get Popular Movie
bongoMediaRoutes.get('/getPopularMedia', getPopularMedia)

//Get Bangla Natok
bongoMediaRoutes.get('/banglaNatok', banglaNatok)


//Get Single Id
bongoMediaRoutes.get('/getSingleMedia/:mediaID', getSingleMedia)


// delete all movie content 
bongoMediaRoutes.delete('/delAllMovie', delAllMovie)

module.exports = bongoMediaRoutes;
