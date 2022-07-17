const Importer = require('mysql-import');
require('dotenv').config();

const restoreDb = async ()=> {
    const importer = new Importer({
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
    });

    await importer.import('./DesafioTecnico.sql');

    await importer.disconnect();
}

module.exports = restoreDb;

if (!module.parent) {
  restoreDb();
}