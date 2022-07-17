const connection = require('../database/connection');

const findClient = async (email, password)=> {
  const [client] = await connection.execute(
  `SELECT * FROM DesafioTecnico.clients WHERE email=? AND password=?;`, [email, password]
  );
  return client;
}

module.exports = {
  findClient,
}