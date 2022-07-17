const res = require('express/lib/response');
const modelAtivos = require('../models/modelAtivos');

const getAllAssets = async ()=> {

};

const getAssetsFromOneClientById = async (clientId)=> {
  console.log('entrei no serviceAtivo')
  const [clientAssets] = await modelAtivos.getAssetsFromOneClientById(clientId);

  return clientAssets;
};

const getAssetById = async ()=> {

};

module.exports = {
  getAllAssets,
  getAssetsFromOneClientById,
  getAssetById,
}