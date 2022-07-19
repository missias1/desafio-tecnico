const serviceInvestimentos = require('../services/serviceInvestimentos');

const increaseAssetInWallet = async (req, res)=> {
  const { quantity, clientId, assetId } = req.body;

  await serviceInvestimentos.increaseAssetInWallet(quantity, clientId, assetId);
  res.status(201).json({ message: `Success purchase of asset ${assetId}! You bought ${quantity} assets!` });
};


const decreaseAssetFromWallet = async (req, res)=> {
  const { quantity, clientId, assetId } = req.body;

  await serviceInvestimentos.decreaseAssetFromWallet(quantity, clientId, assetId);
  res.status(200).json({ message: `Success sale of asset ${assetId}! You sold ${quantity} assets!`});
};

module.exports = {
  increaseAssetInWallet,
  decreaseAssetFromWallet,
}