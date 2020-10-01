const router = require('@koa/router')();
const PublicController = require('../../controller/PublicController');

router.prefix('/public');

router.get('/captcha', PublicController.getCaptcha);
router.post('/mail', PublicController.sendMail);

module.exports = router;
