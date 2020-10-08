const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/index');

/**
 * 简单生成4位数验证码
 * @returns {Number}
 */
function genMailCode() {
  let num = '';
  for (var i = 0; i < 4; i++) {
    num += Math.floor(Math.random() * 10);
  }
  return num;
}

/**
 * 将时间戳转化为自定义的时间格式
 * 例：formatTime('D日h:m')  formatTime('Y-M-D h:m:s')
 * @param {Number} number 传入的时间戳
 * @param {format} format 要转化为怎样的格式
 * @returns {String}
 */
function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : `0${n}`;
}
function formatTime(number, format) {
  const formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  const returnArr = [];
  const d = new Date(number);
  returnArr.push(d.getFullYear());
  returnArr.push(formatNumber(d.getMonth() + 1));
  returnArr.push(formatNumber(d.getDate()));
  returnArr.push(formatNumber(d.getHours()));
  returnArr.push(formatNumber(d.getMinutes()));
  returnArr.push(formatNumber(d.getSeconds()));
  for (let i = 0; i <= returnArr.length; i++) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

/**
 * 获取JWT鉴权中的payload
 * @returns {Number}
 */
function getJwtPayload(token) {
  return jwt.verify(token.split(' ')[1], JWT_SECRET);
}

module.exports = {
  genMailCode,
  formatTime,
  getJwtPayload,
};
