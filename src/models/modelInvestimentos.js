const connection = require('../database/connection');

const addAssetInWallet = async (quantity, clientId, assetId)=> connection.execute(
  `UPDATE DesafioTecnico.assets_clients 
    SET quantity_asset = quantity_asset + ?
    WHERE client_id= ? AND asset_id = ?`, [quantity, clientId, assetId]
);

const removeAssetFromWallet = async ()=> {

};

module.exports = {
  addAssetInWallet,
  removeAssetFromWallet,
}