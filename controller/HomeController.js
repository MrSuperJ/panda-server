const MktBanner = require('../models/MktBanner');
const MktCategory = require('../models/MktCategory');
const MktSession = require('../models/MktSession');
const MktList = require('../models/MktList');

const HomeController = {
  async getBanner(ctx, next) {
    const data = await MktBanner.find({});
    ctx.body = {
      code: 200,
      entry: data,
    };
  },

  async getCategory(ctx, next) {
    const data = await MktCategory.find({});
    ctx.body = {
      code: 200,
      entry: data,
    };
  },

  async getSession(ctx, next) {
    const data = await MktSession.find({});
    ctx.body = {
      code: 200,
      entry: data,
    };
  },

  async getList(ctx, next) {
    const { pageSize, pageNo } = ctx.request.body;
    const data = await MktList.find({})
      .limit(pageSize)
      .skip(pageSize * (pageNo - 1));

    ctx.body = {
      code: 200,
      entry: data,
    };
  },
};

module.exports = HomeController;
