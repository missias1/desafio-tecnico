const modelConta = require('../models/modelConta');

const addCashInWallet = async (value, clientId)=> {
  const [addCash] = await modelConta.addCashInWallet(value, clientId);
  
  if(addCash.affectedRows === 0) throw { message: "Deposit failed!", status: 404 };

  return addCash;
};

const removeCashFromWallet = async (value, clientId)=> {
  console.log('entrei no serviceconta')
  const [removeCash] = await modelConta.removeCashFromWallet(value, clientId);
  if(removeCash.affectedRows === 0) return { error: { message: "Withdraw failed!", code: 404 } }

  return { sucess: { message: "Sucess withdraw!", code: 201 } }
};

const getWalletInfoById = async (clientId)=> {
  const [getClient] = await modelConta.getWalletInfoById(clientId);
  if(!getClient) return { error: { message: "User doesn't exist!", code: 404 } }

  return { sucess: { message: getClient, code: 200 } }
};

module.exports = {
  addCashInWallet,
  removeCashFromWallet,
  getWalletInfoById,
}