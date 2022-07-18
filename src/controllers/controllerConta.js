const serviceConta = require('../services/serviceConta');

const addCashInWallet = async (req, res)=> {
  const { value, clientId } = req.body;

  const addCash = await serviceConta.addCashInWallet(value, clientId);
  res.status(200).json(addCash);
};

const removeCashFromWallet = async (req, res)=> {
  const { value, clientId } = req.body;

  const removeCash = await serviceConta.removeCashFromWallet(value, clientId);
  res.status(200).json(removeCash);
};

const getWalletInfoById = async (req, res)=> {
  const { clientId } = req.params;
  
  const walletInfo = await serviceConta.getWalletInfoById(clientId);
  res.status(200).json(walletInfo);
};

module.exports = {
  addCashInWallet,
  removeCashFromWallet,
  getWalletInfoById,
}