const connection = require('../connection');


const getAllAssets = async ()=> {
  const [assets] = await connection.execute(
    `SELECT asset_id as assetId, name_asset as nameAsset, price FROM heroku_3a2342a6c76f266.assets;`
    )
    return assets;
};

const decreaseAssetsAvailable = async (quantity, assetId)=> connection.execute(
  `UPDATE heroku_3a2342a6c76f266.assets
    SET quantity_available = quantity_available - ?
    WHERE asset_id=?;`, [quantity, assetId]
);

const increaseAssetsAvailable = async (quantity, assetId)=> connection.execute(
  `UPDATE heroku_3a2342a6c76f266.assets
    SET quantity_available = quantity_available + ?
    WHERE asset_id=?;`, [quantity, assetId]
);
  
const getAssetById = async (id)=> {
    const [asset] = await connection.execute(
      `SELECT asset_id AS assetId, name_asset AS nameAsset, quantity_available AS quantityAvailable, price
      FROM heroku_3a2342a6c76f266.assets WHERE asset_id = ?;`, [id]
    );
    return asset;
};

const getAssetsFromOneClientById = async (clientId)=> {
  const [clientAssets] = await connection.execute(
    `SELECT t1.client_id AS clientId, t2.asset_id AS assetId, t3.price, t3.name_asset AS nameAsset,
    t2.quantity_asset AS quantityAsset FROM heroku_3a2342a6c76f266.clients AS t1
    INNER JOIN heroku_3a2342a6c76f266.assets_clients AS t2
    INNER JOIN heroku_3a2342a6c76f266.assets AS t3
    WHERE t3.asset_id = t2.asset_id AND t2.client_id =  t1.client_id AND t1.client_id = ?;`, [clientId]
  )
  return clientAssets;
};


module.exports = {
  getAssetById,
  getAllAssets,
  getAssetsFromOneClientById,
  decreaseAssetsAvailable,
  increaseAssetsAvailable,
}