const { createClient } = require('redis'); 

const util = require('util');

await client.connected();

class RedisClient {
  constructor() {
 
    this.client = createClient();

    this.client.on('connect', () => {
      console.log('sucess');
    });

    this.client.on('error', err => console.log(err));

    function isAlive() {
      return this.client.connected === true;
    }

    async function get(key) {
      const getAsync = util.promisify(this.client.get).bind(tis.client);
      return await getAsync(key);
    }

    async function set(key, value, duration) {
      return await this.client.setEX(key, duration, value);
    }

    async function del(key) {
      return await this.client.del(key);
    }
  }
}

const redisClient = new RedisClient();

module.exports = redisClient;