const modelInvestimentos = require('../models/modelInvestimentos');

const addAssetInWallet = async (quantity, clientId, assetId)=> {
  //fazer validação de que a quantidade de asset disponivel é maior que a compra

  const [addAsset] = await modelInvestimentos.addAssetInWallet(quantity, clientId, assetId);

  if(addAsset.affectedRows === 0) return {error: {message: "Purchase failed", code: 404}}
  //verificar codigo
  return {sucess: { message: "Sucess purchase!", code: 201}}
};

const removeAssetFromWallet = async ()=> {

};

module.exports = {
  addAssetInWallet,
  removeAssetFromWallet,
}