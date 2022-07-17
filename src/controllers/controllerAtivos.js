const serviceAtivos = require('../models/modelAtivos');

const getAllAssets = async (req, res)=> {

};

const getAssetsFromOneClientById = async (req, res)=> {
  const { clientId } = req.params;

  const clientAsset = await serviceAtivos.getAssetsFromOneClientById(clientId);

  res.status(200).json(clientAsset);
};

const getAssetById = async (req, res)=> {

};

module.exports = {
  getAllAssets,
  getAssetsFromOneClientById,
  getAssetById,
}