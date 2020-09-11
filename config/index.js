const DB_USERNAME = process.env.DB_USERNAME || 'test';
const DB_PASSWORD = process.env.DB_PASSWORD || '123456';
const DB_HOSTNAME = process.env.DB_HOSTNAME || '101.37.16.204';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_NAME = process.env.DB_NAME || 'test';

const DB_URL = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`;

module.exports = {
  DB_URL,
};
