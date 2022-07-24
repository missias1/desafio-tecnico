const serviceConta = require('../services/serviceConta');

const increaseCashInWallet = async (req, res)=> {
  const { value, clientId } = req.body;

  await serviceConta.increaseCashInWallet(value, clientId);
  return res.status(201).json({ clientId, value });
};

const decreaseCashFromWallet = async (req, res)=> {
  const { value, clientId } = req.body;

  await serviceConta.decreaseCashFromWallet(value, clientId);
  return res.status(201).json({ clientId, value });
};

const getWalletInfoById = async (req, res)=> {
  const { clientId } = req.params;
  
  const walletInfo = await serviceConta.getWalletInfoById(clientId);
  return res.status(200).json(walletInfo);
};

const deleteClient = async (req, res) => {
  const { clientId } = req.params;
  await serviceConta.deleteClient(clientId);

  return res.status(204).end();
};

const updateInfoClient = async (req, res)=> {
  const { clientId, telephone } = req.body;
  await serviceConta.updateInfoClient(clientId, telephone);

  return res.status(200).json({ clientId, telephone })
}


module.exports = {
  increaseCashInWallet,
  decreaseCashFromWallet,
  getWalletInfoById,
  deleteClient,
  updateInfoClient,
}