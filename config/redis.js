const redis = require('redis');
const { REDIS_CONFIG } = require('./index');
const { promisify } = require('util');

const client = redis.createClient({
  host: REDIS_CONFIG.host,
  port: REDIS_CONFIG.port,
  password: REDIS_CONFIG.password,
  detect_buffers: true,
  retry_strategy(options) {
    if (options.error && options.error.code === 'ECONNREFUSED') {
      // End reconnecting on a specific error and flush all commands with
      // a individual error
      return new Error('The server refused the connection');
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // End reconnecting after a specific timeout and flush all commands
      // with a individual error
      return new Error('Retry time exhausted');
    }
    if (options.attempt > 10) {
      // End reconnecting with built in error
      return undefined;
    }
    // reconnect after
    return Math.min(options.attempt * 100, 3000);
  },
});

const getAsync = promisify(client.get).bind(client);

client.on('error', function (error) {
  console.error(error);
});

const setValue = (key, value, time) => {
  if (value == null || value === '') {
    return;
  }
  if (time) client.set(key, value, 'EX', time);
  else client.set(key, value, redis.print);
};

const getValue = (key) => {
  return getAsync(key);
};

module.exports = {
  setValue,
  getValue,
};
