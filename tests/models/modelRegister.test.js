const sinon = require('sinon');
const {expect} = require('chai');
const mocks = require('../mocks');
const modelRegister = require('../../src/database/models/modelRegister')


describe.only('MODEL - Realiza cadastro de novo cliente',()=>{

  beforeEach(()=>{
    sinon.stub(connection, 'execute').resolves([[], []]);
  })

  afterEach(()=>{
    connection.execute.restore();
  })

  describe('Cliente é cadastrado com sucesso', ()=> {
    
    it('Verifica se retorna um array', async ()=> {
      const result = await modelRegister.addClient(mocks.NEW_USER)
      expect(result).to.be.an('array');
    })

  });

})