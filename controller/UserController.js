const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = require('../config/index');

const UserController = {
  // get user info
  async getUserInfo(ctx, next) {
    const data = await User.findOne({ id: 1 });
    ctx.body = {
      code: 200,
      entry: data,
    };
  },

  // user login
  async login(ctx, next) {
    const { phonenum, password } = ctx.request.body;

    await User.create({
      id: 0000001,
      name: '熊猫',
      age: 18,
      avatar: 'https://wx2.sinaimg.cn/large/006pIwwKly1gimk7ltf74j305k05kaa1.jpg',
    });

    ctx.body = {
      code: 200,
      entry: {
        token: 'mall-token123456',
      },
    };

    const token = jwt.sign({ foo: 'bar' }, JWT_SECRET, { expiresIn: 60 * 60 });
  },
};

module.exports = UserController;
