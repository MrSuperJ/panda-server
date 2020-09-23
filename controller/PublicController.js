const svgCaptcha = require('svg-captcha');

const PublicController = {
  async getCaptcha(ctx) {
    const captcha = svgCaptcha.create({
      width: 100,
      height: 30,
      fontSize: 38,
      color: false,
    });
    ctx.body = {
      code: 200,
      entry: captcha.data,
    };
  },
};

module.exports = PublicController;
