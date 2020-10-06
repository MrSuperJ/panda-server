const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { JWT_SECRET } = require('../config/index');
const { getValue } = require('../config/redis');

const UserController = {
  // get user info
  async getUserInfo(ctx, next) {
    const data = await User.findOne({ id: 1 });
    ctx.body = {
      code: 200,
      entry: data,
    };
  },

  // registration
  async registry(ctx, next) {
    const { email, password, code, captcha, sid } = ctx.request.body;
    // 邮箱已经被注册
    const user = await User.findOne({ username: email });
    if (user && user.username) {
      ctx.body = {
        code: 400,
        message: '邮箱已经注册，可通过邮箱找回密码',
      };
      return;
    }
    // 验证图形验证码
    const value = await getValue(sid);
    if (!value) {
      ctx.body = {
        code: 400,
        message: '图形验证码已过期，请点击图片刷新',
      };
      return;
    }
    if (captcha.toLowerCase() !== value.toLowerCase()) {
      ctx.body = {
        code: 400,
        message: '请输入正确的图形验证码',
      };
      return;
    }
    // 验证邮箱验证码
    // 注册写入数据库
    await User.create({
      username: email,
      password: bcrypt.hashSync(password, 3),
    });
    ctx.body = {
      code: 200,
      entry: {
        status: true,
        message: '注册成功',
      },
    };
  },

  // user login
  async login(ctx, next) {
    const { username, password, captcha, sid } = ctx.request.body;
    // 验证图形验证码
    const value = await getValue(sid);
    if (!value) {
      ctx.body = {
        code: 400,
        message: '图形验证码已过期，请点击图片刷新',
      };
      return;
    }
    if (captcha.toLowerCase() !== value.toLowerCase()) {
      ctx.body = {
        code: 400,
        message: '请输入正确的验证码',
      };
      return;
    }
    // 验证用户是否存在
    const user = await User.findOne({ username });
    if (!user.username) {
      ctx.body = {
        code: 400,
        message: '用户不存在请重新输入用户名',
      };
      return;
    }
    // 验证密码是否正确
    if (!bcrypt.compareSync(password, user.password)) {
      ctx.body = {
        code: 400,
        message: '用户名或者密码错误',
      };
      return;
    }

    // 登录成功
    const token = jwt.sign({ foo: 'bar' }, JWT_SECRET, { expiresIn: '15d' });
    ctx.body = {
      code: 200,
      entry: {
        token,
      },
    };
  },
};

module.exports = UserController;
