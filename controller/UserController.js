const jwt = require('jsonwebtoken');
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
    const { email, code, captcha, sid } = ctx.request.body;
    const value = await getValue(sid);

    if (captcha !== value) {
      ctx.body = {
        code: 400,
        message: '请输入正确的验证码',
      };
      return;
    }

    // const data = await User.findOne({ id: 1 });
    // ctx.body = {
    //   code: 200,
    //   entry: data,
    // };
  },

  // user login
  async login(ctx, next) {
    const { username, password, captcha, sid } = ctx.request.body;

    // 验证图形验证码
    const value = await getValue(sid);
    if (captcha !== value) {
      ctx.body = {
        code: 400,
        message: '请输入正确的验证码',
      };
      return;
    }
    // 验证用户是否存在
    const user = await User.findOne({ username });
    if (!user) {
      ctx.body = {
        code: 400,
        message: '用户不存在请重新输入用户名',
      };
      return;
    }
    // 验证密码是否正确
    if (Number(user.password) !== Number(password)) {
      ctx.body = {
        code: 400,
        message: '用户名或者密码错误',
      };
      return;
    }
    
    const token = jwt.sign({ foo: 'bar' }, JWT_SECRET, { expiresIn: '15d' });

    // await User.create({
    //   id: 0000001,
    //   name: '熊猫',
    //   age: 18,
    //   avatar: 'https://wx2.sinaimg.cn/large/006pIwwKly1gimk7ltf74j305k05kaa1.jpg',
    // });

    // ctx.body = {
    //   code: 200,
    //   entry: {
    //     token: 'mall-token123456',
    //   },
    // };
  },
};

module.exports = UserController;
