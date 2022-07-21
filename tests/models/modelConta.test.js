const sinon = require('sinon');
const {expect} = require('chai');
const connection = require('../../src/database/connection');
const modelConta = require('../../src/database/models/modelConta')
const mocks = require('./mocks');

describe('Aumenta a quantidade de cash na carteira do cliente',()=>{

  beforeEach(()=>{
    sinon.stub(connection, 'execute').resolves([[],[]]);
  })
  afterEach(()=>{
    connection.execute.restore();
  })

    it('Verifica se retorna um array', async ()=> {
      const result = await modelConta.increaseCashInWallet(100, 1);
      expect(result).to.be.an('array');
    })

  });
  
describe('Diminui a quantidade de cash na carteira do cliente',()=>{

  beforeEach(()=>{
    sinon.stub(connection, 'execute').resolves([[],[]]);
  })
  afterEach(()=>{
    connection.execute.restore();
  })

    it('Verifica se retorna um array', async ()=> {
      const result = await modelConta.decreaseCashFromWallet(100, 1);
      expect(result).to.be.an('array');
    })

});
  
describe('Lista informações da conta do cliente',()=>{

  beforeEach(()=>{
    sinon.stub(connection, 'execute').resolves([mocks.WALLET_INFO]);
  })
  afterEach(()=>{
    connection.execute.restore();
  })

    it('Verifica se retorna um objeto', async ()=> {
      const result = await modelConta.getWalletInfoById(1);
      expect(result).to.be.an('object');
    });
    it('Verifica se retorna as chaves esperadas', async ()=> {
      const result = await modelConta.getWalletInfoById(1);
      expect(result).to.include.all.keys('clientId', 'balance');
    })

});