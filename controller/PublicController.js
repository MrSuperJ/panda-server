const svgCaptcha = require('svg-captcha');
const mailInit = require('../config/mail');
const { setValue } = require('../config/redis');

const PublicController = {
  async getCaptcha(ctx) {
    const { sid } = ctx.request.query;

    const captcha = svgCaptcha.create({
      width: 100,
      height: 30,
      fontSize: 38,
      color: false,
    });

    setValue(sid, captcha.text);
   
    ctx.body = {
      code: 200,
      entry: captcha.data,
    };
  },

  async sendMail(ctx) {
    // const { num } = ctx.request.body;
    try {
      let result = await mailInit({
        user: 'test',
        expire: '23454:1234t',
        code: '',
        username: '123423',
        url: 'www.baidu.com',
      });
      ctx.body = {
        code: 200,
        entry: '邮箱验证码已经发送成功',
      };
    } catch (err) {
      ctx.body = {
        code: 200,
        entry: {
          msg: '邮箱验证码发送失败',
          reason: `原因为：${err}`,
        },
      };
    }
  },
};

module.exports = PublicController;
