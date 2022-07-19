const serviceInvestimentos = require('../services/serviceInvestimentos');

const addAssetInWallet = async (req, res)=> {
  const { quantity, clientId, assetId } = req.body;

  await serviceInvestimentos.addAssetInWallet(quantity, clientId, assetId);
  res.status(201).json({ message: `Sucess purchase of ${quantity} assets!` });
};


const removeAssetFromWallet = async (req, res)=> {
  const { quantity, clientId, assetId } = req.body;

  const removeAsset = await serviceInvestimentos.removeAssetFromWallet(quantity, clientId, assetId);
  res.status(200).json(removeAsset);
};

module.exports = {
  addAssetInWallet,
  removeAssetFromWallet,
}