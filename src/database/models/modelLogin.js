const connection = require('../connection');

const findClient = async (email, password)=> {
  const [client] = await connection.execute(
  `SELECT client_id, name, email, balance FROM DesafioTecnico.clients WHERE email=? AND password=?;`, [email, password]
  );
  return client;
};

const findClientById = async (id)=> {
  const [client] = await connection.execute(
  `SELECT client_id, name, email, balance FROM DesafioTecnico.clients WHERE client_id=?;`, [id]
  );
  return client;
};

module.exports = {
  findClient,
  findClientById,
};