const modelAtivos = require('../models/modelAtivos');

const getAllAssets = async ()=> {
  const assets = await modelAtivos.getAllAssets();
  return assets;
};

const getAssetsFromOneClientById = async (clientId)=> {
  console.log('entrei no serviceAtivo')
  const [clientAssets] = await modelAtivos.getAssetsFromOneClientById(clientId);

  return clientAssets;
};

//Refatorar depois que endpoint for corrigido
// const getAssetById = async (assetId)=> {
//   const asset = await modelAtivos.getAssetById(assetId);
//   return asset
// };

module.exports = {
  getAllAssets,
  getAssetsFromOneClientById,
  getAssetById,
}