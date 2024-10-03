const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {

    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || '27017';
    this.database = process.env.DB_DATABASE || 'files_manager';

    this.client = new MongoClient(`mongodb://${this.host}:${this.port}`, { useUnifiedTopology: true });
    this.client.connect();
  }

  async isAlive() {
    try {
      await this.client.db(this.database).command({ ping: 1 });
      return true;
    } catch (error) {
      return false;
    }
  }

  async nbUsers() {
    const users_col = this.client.db(this.database).collection('users');
    return await users_col.countDocuments();
  }

  async nbFiles() {
    const files_col = this.client.db(this.database).collection('files');
    return await files_col.countDocuments();
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
