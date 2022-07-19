const modelAtivos = require('../models/modelAtivos');
const createErrorObj = require('../utils/createErrorObj');


const getAllAssets = async ()=> {
  const assets = await modelAtivos.getAllAssets();
  return assets;
};

const getAssetById = async (assetId)=> {
  const asset = await modelAtivos.getAssetById(assetId);
  if(asset === undefined) throw createErrorObj(400, { message: "This asset does not exist!"})
  return asset;
};

const getAssetsFromOneClientById = async (clientId)=> {
  const [clientAssets] = await modelAtivos.getAssetsFromOneClientById(clientId);
  if(!clientAssets) throw createErrorObj(400, { message: "User not found"})
  return clientAssets;
};


module.exports = {
  getAssetById,
  getAllAssets,
  getAssetsFromOneClientById,
}