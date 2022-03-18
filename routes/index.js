const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// this is the endpoints for our api routes bundled up
// putting the /api prefix here, so we dont have to use it in our api routes

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;