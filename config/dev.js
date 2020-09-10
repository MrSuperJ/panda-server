// 需求：使用inquire要求用户输入数据库密码、账号 然后启动

const inquirer = require('inquirer');

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
  console.log('结果为:');
  console.log(answers);
});


