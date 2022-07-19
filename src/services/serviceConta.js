const modelConta = require('../models/modelConta');
const createErrorObj = require('../utils/createErrorObj')

const addCashInWallet = async (value, clientId)=> {
  const [addCash] = await modelConta.addCashInWallet(value, clientId);
  
  if(addCash.affectedRows === 0) throw createErrorObj(400, "Deposit failed");
};

const removeCashFromWallet = async (value, clientId)=> {
  const [removeCash] = await modelConta.removeCashFromWallet(value, clientId);

  if(removeCash.affectedRows === 0) throw createErrorObj(400, "Withdraw failed!");
};

const getWalletInfoById = async (clientId)=> {
  const [walletInfo] = await modelConta.getWalletInfoById(clientId);
  if(!walletInfo) throw createErrorObj(400, "User doesn't exist!");

  return walletInfo;
};

module.exports = {
  addCashInWallet,
  removeCashFromWallet,
  getWalletInfoById,
}