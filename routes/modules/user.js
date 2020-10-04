const router = require('@koa/router')();
const UserController = require('../../controller/UserController');

router.prefix('/user');

router.get('/info', UserController.getUserInfo);
router.post('/registry', UserController.registry);
router.post('/login', UserController.login);

module.exports = router;
