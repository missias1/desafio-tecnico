const connection = require('../connection');

const increaseCashInWallet = async (value, clientId)=> connection.execute(
  `UPDATE heroku_3a2342a6c76f266.clients
    SET balance = balance + ?
    WHERE client_id= ?;`, [value, clientId]
);

const decreaseCashFromWallet = async (value, clientId)=> connection.execute(
  `UPDATE heroku_3a2342a6c76f266.clients
    SET balance = balance - ?
    WHERE client_id= ?;`, [value, clientId]
);

const getWalletInfoById = async (clientId)=> {
  const [client] = await connection.execute(
  `SELECT client_id AS clientId, balance FROM heroku_3a2342a6c76f266.clients WHERE client_id=?;`, [clientId]
  );
  return client;
}

const deleteClient = async (clientId)=> connection.execute(
  `DELETE FROM heroku_3a2342a6c76f266.clients WHERE client_id = ?;`, [clientId]
);

module.exports = {
  increaseCashInWallet,
  decreaseCashFromWallet,
  getWalletInfoById,
  deleteClient
}