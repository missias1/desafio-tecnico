const connection = require('../database/connection');

const addCashInWallet = async (value, clientId)=> connection.execute(
  `UPDATE DesafioTecnico.clients
    SET balance = balance + ?
    WHERE client_id= ?;`, [value, clientId]
);

const removeCashFromWallet = async (value, clientId)=> connection.execute(
  `UPDATE DesafioTecnico.clients
    SET balance = balance - ?
    WHERE client_id= ?;`, [value, clientId]
);

const getWalletInfoById = async (clientId)=> {
  const [client] = await connection.execute(
  `SELECT client_id AS clientId, balance FROM DesafioTecnico.clients WHERE client_id=?;`, [clientId]
  );
  return client;
}

module.exports = {
  addCashInWallet,
  removeCashFromWallet,
  getWalletInfoById,
}