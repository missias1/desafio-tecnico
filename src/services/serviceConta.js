const modelConta = require('../database/models/modelConta');
const modelAtivos = require('../database/models/modelAtivos');
const createErrorObj = require('../utils/createErrorObj');

const increaseCashInWallet = async (value, clientId) => {
  // adiciona o valor na conta do cliente
  const [addCash] = await modelConta.increaseCashInWallet(value, clientId);
  
  // vericia se o depósito não aconteceu
  if (addCash.affectedRows === 0) throw createErrorObj(400, 'Deposit failed');
  return addCash.affectedRows;
};

const decreaseCashFromWallet = async (value, clientId) => {
  // Acessa saldo do cliente
  const [walletInfo] = await modelConta.getWalletInfoById(clientId);
  const { balance } = walletInfo;

  // verifica se o valor do saque é maior que o disponível em conta
  if (value > balance) throw createErrorObj(400, 'You do not have this value in your account!');

  // realiza o saque da conta
  const [removeCash] = await modelConta.decreaseCashFromWallet(value, clientId);

  // verifica se o saque não ocorreu
  if (removeCash.affectedRows === 0) throw createErrorObj(400, 'Withdraw failed!');
  return removeCash.affectedRows;
};

const getWalletInfoById = async (clientId) => {
  // acessa informação da conta pelo id
  const [walletInfo] = await modelConta.getWalletInfoById(clientId);

  // verifica se não recuperou corretamente
  if (!walletInfo) throw createErrorObj(400, 'User doesn\'t exist!');

  return walletInfo;
};

const deleteClient = async (clientId) => {
  const [walletInfo] = await modelConta.getWalletInfoById(clientId);
  const assetsInfo = await modelAtivos.getAssetsFromOneClientById(clientId);

  if (walletInfo.balance > 0 || assetsInfo.length !== 0) {
    throw createErrorObj(400, 'You have assets or cash in your account and can not delete');
  }

  const [result] = await modelConta.deleteClient(clientId);

  return result.affectedRows;
};

const updateInfoClient = async (clientId, telephone) => {
  const [result] = await modelConta.updateInfoClient(clientId, telephone);

  return result.affectedRows;
};

module.exports = {
  increaseCashInWallet,
  decreaseCashFromWallet,
  getWalletInfoById,
  deleteClient,
  updateInfoClient,
};