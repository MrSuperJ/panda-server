const { MAIL_USER, MAIL_PASS } = require('./index');
const nodemailer = require('nodemailer');

async function mailInit(data) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 587,
    secure: false,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"认证邮件" <ewallxiong@qq.com>',
    to: 'ewallxiong@qq.com',
    subject: 'PandaMall商城验证码',
    text: 'Hello world?',
    html: `
    <div style="border: 1px solid #dcdcdc;color: #676767;width: 600px; margin: 0 auto; padding-bottom: 50px;position: relative;">
        <h3 style="margin: 0; height: 60px; background: #393d49; line-height: 60px; color: #58a36f; font-size: 18px;padding-left: 10px;">PandaMall—欢迎来到熊猫商城</h3>
        <div style="padding: 25px">
            <p>您好，${data.user}，重置链接有效时间30分钟，请在${data.expire}之前${data.code ? '重置您的密码' : '修改您的邮箱为：' + data.username}：</p>
            <a href="${data.url}" style="padding: 10px 20px; color: #fff; background: #009e94; display: inline-block;margin: 15px 0;">${data.code ? '立即重置密码' : '确认设置邮箱'}</a>
            <p style="padding: 5px; background: #f2f2f2;">如果该邮件不是由你本人操作，请勿进行激活！否则你的邮箱将会被他人绑定。</p>
        </div>
        <div style="background: #fafafa; color: #b4b4b4;text-align: center; line-height: 45px; height: 45px; position: absolute; left: 0; bottom: 0;width: 100%;">系统邮件，请勿直接回复</div>
    </div>
    `,
  });
}
module.exports = mailInit;
