const connection = require('../connection');

const findClient = async (email, password)=> {
  const [client] = await connection.execute(
  `SELECT client_id, name, email, balance FROM heroku_3a2342a6c76f266.clients WHERE email=? AND password=?;`, [email, password]
  );
  return client;
};

const findClientById = async (id)=> {
  const [client] = await connection.execute(
  `SELECT client_id, name, email, balance FROM heroku_3a2342a6c76f266.clients WHERE client_id=?;`, [id]
  );
  return client;
};

const findClientByEmail = async (email)=> {
  const client = await connection.execute(
    `SELECT email FROM heroku_3a2342a6c76f266.clients WHERE email = ?;`, [email])
  return client;
}

module.exports = {
  findClient,
  findClientById,
  findClientByEmail,
};