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

const deleteClient = async (req, res) => {
  const { clientId } = req.params;
  await serviceConta.deleteClient(clientId);

  return res.status(204).json({ message: "Account deleted!" });
}

module.exports = {
  increaseCashInWallet,
  decreaseCashFromWallet,
  getWalletInfoById,
  deleteClient,
}