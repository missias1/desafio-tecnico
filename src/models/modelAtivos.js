const connection = require('../database/connection');

const getAllAssets = async ()=> {
  const [assets] = connection.execute(
    `SELECT asset_id, name_asset, price FROM DesafioTecnico.assets;`
  )
};

const getAssetsFromOneClientById = async (clientId)=> {
  const [clientAssets] = await connection.execute(
    `SELECT t1.client_id AS clientId, t2.asset_id, t3.price,
    t2.quantity_asset FROM DesafioTecnico.clients AS t1
    INNER JOIN DesafioTecnico.assets_clients AS t2
    INNER JOIN DesafioTecnico.assets AS t3
    WHERE t3.asset_id = t2.asset_id AND t2.client_id =  t1.client_id AND t1.client_id = ?;`, [clientId]
  )
  return clientAssets;
};

const getAssetById = async ()=> {

};

module.exports = {
  getAllAssets,
  getAssetsFromOneClientById,
  getAssetById,
}