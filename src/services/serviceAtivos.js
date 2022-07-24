const modelAtivos = require('../database/models/modelAtivos');
const createErrorObj = require('../utils/createErrorObj');

const getAllAssets = async () => {
  // recupera todos os ativos
  const assets = await modelAtivos.getAllAssets();
  return assets;
};

const getAssetById = async (assetId) => {
  // recupera o ativo pelo id
  const [asset] = await modelAtivos.getAssetById(assetId);

  // verifica se não foi encontrado
  if (!asset) throw createErrorObj(404, 'This asset does not exist!');
  return asset;
};

const getAssetsFromOneClientById = async (clientId) => {
  // recupera os ativos que determinado cliente possui
  const clientAssets = await modelAtivos.getAssetsFromOneClientById(clientId);

  // verifica se não foi recuperado
  if (clientAssets.length === 0) throw createErrorObj(404, 'User not found');
  return clientAssets;
};

module.exports = {
  getAssetById,
  getAllAssets,
  getAssetsFromOneClientById,
};