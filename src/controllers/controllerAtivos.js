const serviceAtivos = require('../models/modelAtivos');

const getAllAssets = async (_req, res)=> {
  const assets = await serviceAtivos.getAllAssets();
  res.status(200).json(assets);
};

const getAssetById = async (req, res)=> {
  const { assetId } = req.params;

  const asset = await serviceAtivos.getAssetById(assetId);
  res.status(200).json(asset);
};

const getAssetsFromOneClientById = async (req, res)=> {
  const { clientId } = req.params;

  const clientAsset = await serviceAtivos.getAssetsFromOneClientById(clientId);
  res.status(200).json(clientAsset);
};


module.exports = {
  getAllAssets,
  getAssetsFromOneClientById,
  getAssetById,
}