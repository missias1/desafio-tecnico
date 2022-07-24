const serviceInvestimentos = require('../services/serviceInvestimentos');

const increaseAssetInWallet = async (req, res) => {
  const { quantity, clientId, assetId } = req.body;

  await serviceInvestimentos.increaseAssetInWallet(quantity, clientId, assetId);
  res.status(201).json({ quantity, clientId, assetId });
};

const decreaseAssetFromWallet = async (req, res) => {
  const { quantity, clientId, assetId } = req.body;

  await serviceInvestimentos.decreaseAssetFromWallet(quantity, clientId, assetId);
  res.status(201).json({ quantity, clientId, assetId });
};

module.exports = {
  increaseAssetInWallet,
  decreaseAssetFromWallet,
};