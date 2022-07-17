const serviceInvestimentos = require('../services/serviceInvestimentos');

const addAssetInWallet = async (req, res)=> {
  const { quantity, clientId, assetId } = req.body;

  const { error, sucess } = await serviceInvestimentos.addAssetInWallet(quantity, clientId, assetId)
  if(error) return res.status(error.code).json(error.message);

  res.status(sucess.code).json(sucess.message);
};


const removeAssetFromWallet = async (req, res)=> {
  const { quantity, clientId, assetId } = req.body;

  const { error, sucess } = await serviceInvestimentos.removeAssetFromWallet(quantity, clientId, assetId);
  if(error) return res.status(error.code).json(error.message);

  res.status(sucess.code).json(sucess.message);
};

module.exports = {
  addAssetInWallet,
  removeAssetFromWallet,
}