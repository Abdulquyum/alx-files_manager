const { MongoClient } = require('mongodb');

const client = new MongoClient('<database>://<host>:<port>');

class DBClient {
  constructor () {

    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || '27017';
    this.database = process.env.DB_DATABASE || 'files_manager';

    async function isAlive() {
      // if connection to MonoDB is sucessful
      await client.connect();
      if (client.topology.isConnected() === true)
        return true;
      return false;
    }

    async function nbUsers() {
      //number of documents in te collection users
      const users_col = this.client.db.collection('users');
      return await users_col.countDocuments();
    }

    async function nbFiles() {
      //number of documents in collection files
      const files_col = this.client.db.collection('files');
      return await files_col.countDocuments();
    }
  }  
}

const dbClient = new DBClient();

module.exports = dbClient;