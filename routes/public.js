const router = require('@koa/router')();
const PublicController = require('../controller/PublicController');

router.prefix('/public');

router.get('/captcha', PublicController.getCaptcha);

module.exports = router;
