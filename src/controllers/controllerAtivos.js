const serviceAtivos = require('../services/serviceAtivos');

const getAllAssets = async (_req, res)=> {
  const assets = await serviceAtivos.getAllAssets();
  res.status(200).json(assets);
};

const getAssetById = async (req, res)=> {
  const { id } = req.params;

  const asset = await serviceAtivos.getAssetById(id);
  res.status(200).json(asset);
};

const getAssetsFromOneClientById = async (req, res)=> {
  const { clientId } = req.params;

  const clientAsset = await serviceAtivos.getAssetsFromOneClientById(clientId);
  console.log(clientAsset);
  res.status(200).json(clientAsset);
};


module.exports = {
  getAllAssets,
  getAssetsFromOneClientById,
  getAssetById,
}