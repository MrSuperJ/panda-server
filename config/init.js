const inquirer = require('inquirer');
const shell = require('shelljs');

const promptList = [
  {
    type: 'input',
    message: '请输入数据库地址，如"mongodb://<username>:<password>@<address>:<port>/<database>"',
    name: 'DB_URL',
  },
  {
    type: 'input',
    message: '请输入邮箱配置名，如"username@mail.com"',
    name: 'MAIL_USER',
  },
  {
    type: 'input',
    message: '请输入邮箱配置密码:如"123456"',
    name: 'MAIL_PASS',
  },
];

inquirer.prompt(promptList).then((answers) => {
  shell.exec(`cross-env DB_URL=${answers.DB_URL} MAIL_USER=${answers.MAIL_USER} MAIL_PASS=${answers.MAIL_PASS} npm run start`);
});
