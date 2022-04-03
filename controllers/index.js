const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');


// this is the endpoints for our api routes bundled up
// putting the /api prefix here, so we dont have to use it in our api routes
router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;