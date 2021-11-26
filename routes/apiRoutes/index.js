const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notesRoutes');
//const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');

router.use(notesRoutes);
//router.use(zookeeperRoutes);

module.exports = router;
