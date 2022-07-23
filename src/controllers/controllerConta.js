const serviceConta = require('../services/serviceConta');

const increaseCashInWallet = async (req, res)=> {
  const { value, clientId } = req.body;

  await serviceConta.increaseCashInWallet(value, clientId);
  res.status(201).json({ clientId, value });
};

const decreaseCashFromWallet = async (req, res)=> {
  const { value, clientId } = req.body;

  await serviceConta.decreaseCashFromWallet(value, clientId);
  res.status(201).json({ clientId, value });
};

const getWalletInfoById = async (req, res)=> {
  const { clientId } = req.params;
  
  const walletInfo = await serviceConta.getWalletInfoById(clientId);
  res.status(200).json(walletInfo);
};

module.exports = {
  increaseCashInWallet,
  decreaseCashFromWallet,
  getWalletInfoById,
}