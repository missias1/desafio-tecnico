const serviceAtivos = require('../models/modelAtivos');

const getAllAssets = async (_req, res)=> {
  const assets = await serviceAtivos.getAllAssets();
  console.log(assets);
  res.status(200).json(assets);
};

const getAssetsFromOneClientById = async (req, res)=> {
  const { clientId } = req.params;

  const clientAsset = await serviceAtivos.getAssetsFromOneClientById(clientId);

  res.status(200).json(clientAsset);
};

// const getAssetById = async (req, res)=> {
//   console.log('entrei no controller ativo');
//   const { assetId } = req.params;

//   const result = await serviceAtivos.getAssetById(assetId);
//   console.log(result)

// };

module.exports = {
  getAllAssets,
  getAssetsFromOneClientById,
  // getAssetById,
}