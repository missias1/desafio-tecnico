const modelConta = require('../models/modelConta');

const addCashInWallet = async (value, clientId)=> {
  const [addCash] = await modelConta.addCashInWallet(value, clientId);
  
  if(addCash.affectedRows === 0) return { error: { message: "Deposit failed!", code: 404 } }

  return { sucess: { message: "Sucess deposit!", code: 201 } }
};

const removeCashFromWallet = async (value, clientId)=> {
  console.log('entrei no serviceconta')
  const [removeCash] = await modelConta.removeCashFromWallet(value, clientId);
  if(removeCash.affectedRows === 0) return { error: { message: "Withdraw failed!", code: 404 } }

  return { sucess: { message: "Sucess withdraw!", code: 201 } }
};

const getWalletInfoById = async ()=> {

};

module.exports = {
  addCashInWallet,
  removeCashFromWallet,
  getWalletInfoById,
}