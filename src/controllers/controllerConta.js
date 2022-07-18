const serviceConta = require('../services/serviceConta');

const addCashInWallet = async (req, res)=> {
  const { value, clientId } = req.body;

  const addCash = await serviceConta.addCashInWallet(value, clientId);
  res.status(200).json(addCash);
};

const removeCashFromWallet = async (req, res)=> {
  const { value, clientId } = req.body;

  const { error, sucess } = await serviceConta.removeCashFromWallet(value, clientId);
  if(error) return res.status(error.code).json(error.message);

  res.status(sucess.code).json(sucess.message);
};

const getWalletInfoById = async (req, res)=> {
  console.log('entrei no controller conta')
  const { clientId } = req.params;
  console.log(clientId)
  
  const { error, sucess } = await serviceConta.getWalletInfoById(clientId);
  if(error) return res.status(error.code).json(error.message);

  res.status(sucess.code).json(sucess.message);
};

module.exports = {
  addCashInWallet,
  removeCashFromWallet,
  getWalletInfoById,
}