const modelInvestimentos = require('../models/modelInvestimentos');

const addAssetInWallet = async (quantity, clientId, assetId)=> {
  //fazer validação de que a quantidade de asset disponivel é maior que a compra

  const [addAsset] = await modelInvestimentos.addAssetInWallet(quantity, clientId, assetId);

  if(addAsset.affectedRows === 0) return {error: {message: "Purchase failed", code: 404}}
  // return addAsset; é boa prática deixar sem retorno?
};

const removeAssetFromWallet = async (quantity, clientId, assetId)=> {
  const [removeAsset] = await modelInvestimentos.removeAssetFromWallet(quantity, clientId, assetId);

  if(removeAsset.affectedRows === 0) return {error: {message: "Sale failed", code: 404}}

  return {sucess: { message: "Sucess sale!", code: 201}}
};

module.exports = {
  addAssetInWallet,
  removeAssetFromWallet,
}