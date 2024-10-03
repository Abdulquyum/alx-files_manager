const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

class AppController {
  // GET /status
  static getStatus(req, res) {
    const redisAlive = redisClient.isAlive();
    const dbAlive = dbClient.isAlive();

    // Respond with the status of Redis and DB
    res.status(200).send({ redis: redisAlive, db: dbAlive });
  }

  // GET /stats
  static async getStats(req, res) {
    try {
      const usersCount = await dbClient.nbUsers();
      const filesCount = await dbClient.nbFiles();

      res.status(200).send({ users: usersCount, files: filesCount });
    } catch (err) {
      res.status(500).send({ error: 'Failed to retrieve statistics' });
    }
  }
}

module.exports = AppController;
