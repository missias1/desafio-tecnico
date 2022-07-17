const serviceConta = require('../services/serviceConta');

const addCashInWallet = async (req, res)=> {
  console.log('entrei no controller conta')
  const { value, clientId } = req.body;

  const { error, sucess } = await serviceConta.addCashInWallet(value, clientId);
  if(error) return res.status(error.code).json(error.message);

  res.status(sucess.code).json(sucess.message);
};

const removeCashFromWallet = async (req, res)=> {

};

const getWalletInfoById = async (req, res)=> {

};

module.exports = {
  addCashInWallet,
  removeCashFromWallet,
  getWalletInfoById,
}