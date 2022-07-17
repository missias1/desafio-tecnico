const modelConta = require('../models/modelConta');

const addCashInWallet = async (value, clientId)=> {
  const [addCash] = await modelConta.addCashInWallet(value, clientId);
  
  if(addCash.affectedRows === 0) return {error: {message: "Deposit failed!", code: 404}}

  return {sucess: { message: "Sucess deposit!", code: 201}}
};

const removeCashFromWallet = async ()=> {

};

const getWalletInfoById = async ()=> {

};

module.exports = {
  addCashInWallet,
  removeCashFromWallet,
  getWalletInfoById,
}