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

const getWalletInfoById = async ()=> {

};

module.exports = {
  addCashInWallet,
  removeCashFromWallet,
  getWalletInfoById,
}