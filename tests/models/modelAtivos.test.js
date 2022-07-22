const sinon = require('sinon');
const {expect} = require('chai');
const connection = require('../../src/database/connection');
const modelAtivos = require('../../src/database/models/modelAtivos');
const mocks = require('../mocks')


describe('Retorna todas as ações da corretora ',()=>{

  beforeEach(()=>{
    sinon.stub(connection, 'execute').resolves([mocks.ARRAY_ASSETS]);
  });

  afterEach(()=> {
    connection.execute.restore()
  })
    
    it('Verifica se é um array', async ()=> {
      const assets = await modelAtivos.getAllAssets();
      expect(assets).to.be.an('array').that.is.not.empty;
    });
  
    it('Verifica se o array não está vazio', async ()=> {
      const assets = await modelAtivos.getAllAssets();
      expect(assets).is.not.empty;
    });

    it('Verifica se na primeira posição do array contém um objeto', async ()=> {
      const assets = await modelAtivos.getAllAssets();
      expect(assets[0]).to.be.a('object');
    });

    it('Verifica se o objeto contem as chaves esperadas ', async ()=> {
      const assets = await modelAtivos.getAllAssets();
      expect(assets[0]).to.include.all.keys('assetId', 'nameAsset', 'price');
    });

});

describe('Diminui a quantidade de ativos disponíveis na corretora',()=>{

  beforeEach(()=> {
    sinon.stub(connection, 'execute').resolves([[],[]]);
  })

  afterEach(()=>{
    connection.execute.restore();
  })
    
    it('Verifica se retorna um array', async ()=> {
      const result = await modelAtivos.decreaseAssetsAvailable(10, 1)
      expect(result).to.be.an('array');
    });
});

describe('Aumenta a quantidade de ativos disponíveis na corretora',()=>{

  beforeEach(()=> {
    sinon.stub(connection, 'execute').resolves([[],[]]);
  })

  afterEach(()=>{
    connection.execute.restore();
  })
    
    it('Verifica se retorna um array', async ()=> {
      const result = await modelAtivos.increaseAssetsAvailable(10, 1);
      expect(result).to.be.an('array')
    });
});

describe('Lista um ativo pelo seu id',()=>{

  beforeEach(()=> {
    sinon.stub(connection, 'execute').resolves([[mocks.ASSET]]);
  })

  afterEach(()=>{
    connection.execute.restore();
  })
    
    it('Verifica se retorna um objeto', async ()=> {
      const [result] = await modelAtivos.getAssetById(1);
      expect(result).to.be.an('object');
    });
    it('Verifica se o objeto retorna as chaves esperadas', async ()=> {
      const [result] = await modelAtivos.getAssetById(1);
      expect(result).to.include.all.keys('assetId', 'nameAsset', 'price');
    });
});


describe('Lista as ações de um determinado cliente',()=>{

  beforeEach(()=> {
    sinon.stub(connection, 'execute').resolves([[mocks.ASSETS_FROM_CLIENT]]);
  })

  afterEach(()=>{
    connection.execute.restore();
  })
    
    it('Verifica se retorna um array', async ()=> {
      const [result] = await modelAtivos.getAssetsFromOneClientById(1);
      expect(result).to.be.an('array');
    });
    it('Verifica se o objeto retorna as chaves esperadas', async ()=> {
      const [result] = await modelAtivos.getAssetsFromOneClientById(1);
      expect(result[0]).to.include.all.keys('clientId', 'assetId', 'price', "quantityAsset");
    });
});






























































































































































// describe('FUNÇÃO 1 ',()=>{

//   beforeEach(()=>{

//     sinon.stub(connection, 'execute').resolves(allProducts);
//   })

//   afterEach(()=>{
//     connection.execute.restore();
//   })

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