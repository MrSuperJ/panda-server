const router = require('@koa/router')();
const HomeController = require('../../controller/HomeController');

router.prefix('/home');

router.get('/banner', HomeController.getBanner);
router.get('/category', HomeController.getCategory);
router.get('/session', HomeController.getSession);
router.post('/list', HomeController.getList);

module.exports = router;
