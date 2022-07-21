const connection = require('../connection');

const increaseAssetInWallet = async (quantity, clientId, assetId)=> connection.execute(
  `UPDATE DesafioTecnico.assets_clients 
    SET quantity_asset = quantity_asset + ?
    WHERE client_id= ? AND asset_id = ?`, [quantity, clientId, assetId]
);

const decreaseAssetFromWallet = async (quantity, clientId, assetId)=> connection.execute(
  `UPDATE DesafioTecnico.assets_clients 
    SET quantity_asset = quantity_asset - ?
    WHERE client_id= ? AND asset_id = ?`, [quantity, clientId, assetId]
);

const createAssetInWallet = async (assetId, clientId, quantity)=> connection.execute(
  `INSERT INTO DesafioTecnico.assets_clients (asset_id, client_id, quantity_asset)
  VALUES (?, ?, ?)`, [assetId, clientId, quantity]
);


module.exports = {
  increaseAssetInWallet,
  decreaseAssetFromWallet,
  createAssetInWallet,
}