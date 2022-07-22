const sinon = require('sinon');
const {expect} = require('chai');
const serviceAtivos = require('../../src/services/serviceAtivos');
const mock = require('../mocks');

describe('SERVICE - Retorna todas as ações da corretora',()=>{

  beforeEach(()=>{
    sinon.stub(serviceAtivos, 'getAllAssets').resolves(mock.ARRAY_ASSETS);
  });
  afterEach(()=>{
    serviceAtivos.getAllAssets.restore();
  });
    
  it('Verifica se é um array', async ()=> {
    const assets = await serviceAtivos.getAllAssets();
    expect(assets).to.be.an('array').that.is.not.empty;
  });

  it('Verifica se o array não está vazio', async ()=> {
    const assets = await serviceAtivos.getAllAssets();
    expect(assets).is.not.empty;
  });

  it('Verifica se na primeira posição do array contém um objeto', async ()=> {
    const assets = await serviceAtivos.getAllAssets();
    expect(assets[0]).to.be.a('object');
  });

  it('Verifica se o objeto contem as chaves esperadas ', async ()=> {
    const assets = await serviceAtivos.getAllAssets();
    expect(assets[0]).to.include.all.keys('assetId', 'nameAsset', 'price');
  });

});

describe('SERVICE - Lista um ativo pelo seu id',()=>{
  
  describe('Id do ativo existe no banco de dados', ()=> {
    beforeEach(()=> {
      sinon.stub(serviceAtivos, 'getAssetById').resolves(mock.ASSET);
    })
    afterEach(()=>{
      serviceAtivos.getAssetById.restore();
    });

    it('Verifica se retorna um objeto', async ()=> {
      const asset = await serviceAtivos.getAssetById(mock.ASSET.assetId);
      expect(asset).to.be.an('object');
    });
    it('Verifica se o objeto retorna as chaves esperadas', async ()=> {
      const asset = await serviceAtivos.getAssetById(mock.ASSET.assetId);
      expect(asset).to.include.all.keys('assetId', 'nameAsset', 'price');
    });
    it('Verifica se não é lançado erro', async ()=> {
      const asset = await serviceAtivos.getAssetById(mock.ASSET.assetId);
      expect(asset).to.not.throw;
    });
  });

  describe('Id do ativo não existe no banco de dados', ()=> {
    beforeEach(()=> {
      sinon.stub(serviceAtivos, 'getAssetById').throws;
    })
    afterEach(()=>{
      serviceAtivos.getAssetById.restore();
    });

    const assetId = 100;
    it('Verifica se um erro é lançado', async ()=> {
      const asset = await serviceAtivos.getAssetById(assetId);
      expect(asset).to.throw;
    });
  })

});
////////////////////////////
describe('SERVICE - Lista as ações de um determinado cliente',()=>{
  
  describe('Id do cliente existe no banco de dados', ()=>{
    beforeEach(()=> {
      sinon.stub(serviceAtivos, 'getAssetsFromOneClientById').resolves(mock.ASSETS_FROM_CLIENT);
    });
    afterEach(()=>{
      serviceAtivos.getAssetsFromOneClientById.restore();
    });

    it('Verifica se retorna um array', async ()=> {
      const assetsFromClient = await serviceAtivos.getAssetsFromOneClientById(mock.USER_INFO.clientId);
      expect(assetsFromClient).to.be.an('array');
    });
    it('Verifica se o objeto retorna as chaves esperadas', async ()=> {
      const assetsFromClient = await serviceAtivos.getAssetsFromOneClientById(mock.USER_INFO.clientId);
      expect(assetsFromClient[0]).to.include.all.keys('clientId', 'assetId', 'price', "quantityAsset");
    });
  })

  describe('Id do cliente não existe no banco de dados', ()=> {
    beforeEach(()=> {
      sinon.stub(serviceAtivos, 'getAssetsFromOneClientById').throws;
    });
    afterEach(()=>{
      serviceAtivos.getAssetsFromOneClientById.restore();
    });

    it('Verifica se é lançado um erro', async ()=> {
      const assetsFromClient = await serviceAtivos.getAssetsFromOneClientById(mock.USER_INFO.clientId);
      expect(assetsFromClient).to.throw;
    });
  });

});


// describe('Retorna todas as ações da corretora',()=>{

//   beforeEach(()=>{
//     sinon.stub(connection, 'execute').resolves(allProducts);
//   });
//   afterEach(()=>{
//     connection.execute.restore();
//   });

//   describe('SUCESSO', ()=> {
    
//     it('', async ()=> {

//     })
  
//     it('', async ()=> {
  
//     })

//   });

//   describe('FALHA', ()=> {
    
//     it('', async ()=> {

//     })
  
//     it('', async ()=> {
  
//     })

//   })

// })