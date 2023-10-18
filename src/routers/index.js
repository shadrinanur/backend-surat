const router = require('express').Router();
const routesmasuk = require('./smasuk');
const routeskeluar = require('./skeluar')

router.use('/smasuk', routesmasuk);
router.use('/skeluar', routeskeluar);

module.exports = router;