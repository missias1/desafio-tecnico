const serviceInvestimentos = require('../services/serviceInvestimentos');

const addAssetInWallet = async (req, res)=> {
  const { quantity, clientId, assetId } = req.body;
  const { client_id: clientToken } = req.user;
  
  await serviceInvestimentos.addAssetInWallet(quantity, clientId, assetId, clientToken);
  res.status(201).json({ message: `Sucess purchase of ${quantity} assets!` });
};


const removeAssetFromWallet = async (req, res)=> {
  const { quantity, clientId, assetId } = req.body;

  await serviceInvestimentos.removeAssetFromWallet(quantity, clientId, assetId);
  res.status(200).json({ message: `Sucess sale of ${quantity} assets!`});
};

module.exports = {
  addAssetInWallet,
  removeAssetFromWallet,
}