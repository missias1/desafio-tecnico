const serviceConta = require('../services/serviceConta');

const addCashInWallet = async (req, res)=> {
  const { value, clientId } = req.body;

  await serviceConta.addCashInWallet(value, clientId);
  res.status(200).json({ message: `Sucess deposit of R$${value}!`});
};

const removeCashFromWallet = async (req, res)=> {
  const { value, clientId } = req.body;

  await serviceConta.removeCashFromWallet(value, clientId);
  res.status(200).json({ message: `Sucess withdraw of R$${value}!`});
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