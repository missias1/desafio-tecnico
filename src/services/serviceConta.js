const modelConta = require('../models/modelConta');
const createErrorObj = require('../utils/createErrorObj')

const increaseCashInWallet = async (value, clientId)=> {
  const [addCash] = await modelConta.increaseCashInWallet(value, clientId);
  
  if(addCash.affectedRows === 0) throw createErrorObj(400, "Deposit failed");
};

const decreaseCashFromWallet = async (value, clientId)=> {
  //Acessa saldo do cliente
  const [walletInfo] = await modelConta.getWalletInfoById(clientId);
  const { balance } = walletInfo;

  //verifica se o valor do saque é maior que o disponível em conta
  if(value > balance) throw createErrorObj(400, "You do not have this value in your account!")

  //realiza o saque da conta
  const [removeCash] = await modelConta.decreaseCashFromWallet(value, clientId);

  //verifica se o saque não ocorreu
  if(removeCash.affectedRows === 0) throw createErrorObj(400, "Withdraw failed!");
};

const getWalletInfoById = async (clientId)=> {
  const [walletInfo] = await modelConta.getWalletInfoById(clientId);
  if(!walletInfo) throw createErrorObj(400, "User doesn't exist!");

  return walletInfo;
};

module.exports = {
  increaseCashInWallet,
  decreaseCashFromWallet,
  getWalletInfoById,
}