const modelInvestimentos = require('../models/modelInvestimentos');
const modelAtivos = require('../models/modelAtivos');
const modelConta = require('../models/modelConta');
const createErrorObj = require('../utils/createErrorObj');

const increaseAssetInWallet = async (quantity, clientId, assetId)=> {
  //verifica se o ativo existe na carteira, adicionando-o em caso negativo
  const arrAssets = await modelAtivos.getAssetsFromOneClientById(clientId);
  const hasAssetInWallet = arrAssets.some((obj)=> obj.assetId === assetId);
  if(!hasAssetInWallet) await modelInvestimentos.createAssetInWallet(assetId, clientId, quantity);

  //verifica a quantidade de ativos disponpiveis, antes de registrar a compra
  const [asset] = await modelAtivos.getAssetById(assetId);
  const { quantityAvailable, price } = asset;
  if(quantity > quantityAvailable) throw createErrorObj(400, "This quantity is not available!");

  //adiciona mais ativos ao já existente na carteira e diminui a quantidade de ativos disponíveis na corretora
  const [addAsset] = await modelInvestimentos.increaseAssetInWallet(quantity, clientId, assetId);
  if(addAsset.affectedRows !== 0){
    await modelAtivos.decreaseAssetsAvailable(quantity, assetId);
    //remove do saldo do cliente a quantidade gasta para comprar os ativos
    const totalPurchase = quantity * price;
    console.log(totalPurchase);
    await modelConta.decreaseCashFromWallet(totalPurchase, clientId)
  }

  //verifica se não foi adicionado com sucesso
  if(addAsset.affectedRows === 0) throw createErrorObj(400, "Purchase failed! Verify the asset's id");
};

const decreaseAssetFromWallet = async (quantity, clientId, assetId)=> {
  //procura pelo ativo que está sendo vendido para acessar sua quantidade na carteira e preço
  const arrAssets = await modelAtivos.getAssetsFromOneClientById(clientId);
  const { quantityAsset, price } = arrAssets.find((obj)=> obj.assetId = assetId);

  //verifica se a quantidade a ser vendida é maior que a disponível na carteira
  if(quantity > quantityAsset) throw createErrorObj(400, `You have ${quantityAsset} assets and you can not sale more assets than you have!`)
  
  //Diminui a quantidade daquele ativo na carteira, aumentando o número disponível daquele ativo na corretora e aumentando o saldo do cliente de acordo com o valor da venda
  const [decreaseAsset] = await modelInvestimentos.decreaseAssetFromWallet(quantity, clientId, assetId);
  if(decreaseAsset.affectedRows !== 0){
    await modelAtivos.increaseAssetsAvailable(quantity, assetId);
    const totalSale = quantity * price;
    await modelConta.increaseCashInWallet(totalSale, clientId);
  }

  //verifica se a venda não ocorreu
  if(decreaseAsset.affectedRows === 0) throw createErrorObj(400, "Sale failed! Verify the asset's id");
};

module.exports = {
  increaseAssetInWallet,
  decreaseAssetFromWallet,
}