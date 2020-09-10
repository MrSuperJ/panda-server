const inquirer = require('inquirer');
const shell = require('shelljs');

const promptList = [
  {
    type: 'input',
    message: '请输入数据库地址:',
    name: 'db_hostname',
    default: '101.37.16.204',
  },
  {
    type: 'input',
    message: '请输入数据库名:',
    name: 'db_name',
    default: 'test',
  },
  {
    type: 'input',
    message: '请输入数据库端口号:',
    name: 'db_port',
    default: '27017',
  },
  {
    type: 'input',
    message: '请输入数据库用户名:',
    name: 'db_username',
    default: 'test',
  },
  {
    type: 'input',
    message: '请输入数据库密码:',
    name: 'db_password',
    default: '123456',
  },
];

inquirer.prompt(promptList).then((answers) => {
  shell.exec(
    `cross-env DB_NAME=${answers.db_name} DB_PORT=${answers.db_port} DB_HOSTNAME=${answers.db_hostname} DB_USERNAME=${answers.db_username} DB_PASSWORD=${answers.db_password} npm run start`
  );
});
