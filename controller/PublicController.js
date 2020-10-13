const svgCaptcha = require('svg-captcha');
const mailInit = require('../config/mail');
const { setValue, getValue } = require('../config/redis');
const { genMailCode, formatTime } = require('../utils');

const PublicController = {
  // 图形验证码
  async getCaptcha(ctx) {
    const { sid } = ctx.request.query;

    const captcha = svgCaptcha.create({
      width: 100,
      height: 30,
      fontSize: 38,
      color: false,
    });

    setValue(sid, captcha.text, 10 * 60);

    ctx.body = {
      code: 200,
      entry: captcha.data,
    };
  },

  // 邮箱验证码
  async sendMail(ctx) {
    const { email } = ctx.request.body;
    // 是否发送邮箱验证码
    const value = await getValue(email);
    if (value) {
      ctx.body = {
        code: 400,
        message: '邮箱验证码24小时之内有效，请勿重复发送',
      };
      return;
    }
    // 发送并存储邮箱验证码
    const expire = formatTime(+new Date() + 60 * 60 * 24, 'Y-M-D h:m:s');
    const code = genMailCode();
    try {
      await mailInit({
        email,
        expire,
        code,
      });
      setValue(email, code, 60 * 60 * 24);
      ctx.body = {
        code: 200,
        entry: '邮箱验证码已经发送成功',
      };
    } catch (err) {
      ctx.body = {
        code: 400,
        entry: {
          reason: `原因为：${err}`,
        },
        message: '邮箱验证码发送失败',
      };
    }
  },
};

module.exports = PublicController;
