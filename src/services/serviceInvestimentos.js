const modelInvestimentos = require('../models/modelInvestimentos');
const createErrorObj = require('../utils/createErrorObj');

const addAssetInWallet = async (quantity, clientId, assetId)=> {
  //fazer validação de que a quantidade de asset disponivel é maior que a compra

  const [addAsset] = await modelInvestimentos.addAssetInWallet(quantity, clientId, assetId);

  if(addAsset.affectedRows === 0) throw createErrorObj(400, "Purchase failed!")
  // return addAsset; é boa prática deixar sem retorno?
};

const removeAssetFromWallet = async (quantity, clientId, assetId)=> {
  const [removeAsset] = await modelInvestimentos.removeAssetFromWallet(quantity, clientId, assetId);

  if(removeAsset.affectedRows === 0) throw createErrorObj(400, "Sale failed!");
};

module.exports = {
  addAssetInWallet,
  removeAssetFromWallet,
}