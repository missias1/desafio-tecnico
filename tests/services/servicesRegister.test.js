const sinon = require('sinon');
const { expect } = require('chai');
const modelRegister = require('../../src/database/models/modelRegister');
const modelLogin = require('../../src/database/models/modelLogin');
const serviceRegister = require('../../src/services/serviceRegister');
const mocks = require('../mocks');


describe.only('SERVICE - Cria conta de novo cliente ',()=>{

  describe('Conta é criada com sucesso', ()=> {
    beforeEach(()=>{
      sinon.stub(modelLogin, 'findClientByEmail').resolves(undefined);
      sinon.stub(modelRegister, 'addClient').resolves([mocks.AFFECTED_ROWS]);
    })
  
    afterEach(()=>{
      modelLogin.findClientByEmail.restore();
      modelRegister.addClient.restore();
    })
    
    it('Verifica que o banco de dados é alterado', async ()=> {
      const { name, email, password, telephone } = mocks.NEW_USER;
      const result = await serviceRegister.addClient(name, email, password, telephone);
      expect(result).to.be.a('number');
      expect(result).to.be.equal(1);
    })

  });

  describe('Conta não é criada com sucesso', ()=> {
    beforeEach(()=>{
      sinon.stub(modelLogin, 'findClientByEmail').resolves(mocks.EMAIL_EXIST);
      sinon.stub(modelRegister, 'addClient').resolves([mocks.AFFECTED_ROWS]);
    })
  
    afterEach(()=>{
      modelLogin.findClientByEmail.restore();
      modelRegister.addClient.restore();
    })
    
    it('Verifica que é lançado um erro', async ()=> {
      try{
        const { name, email, password, telephone } = mocks.NEW_USER;
        await serviceRegister.addClient(name, email, password, telephone);
      } catch (error){
        expect(error).to.be.Throw;
      }
    });
    it('Verifica se contém as chaves status e message', async ()=> {
      try{
        const { name, email, password, telephone } = mocks.NEW_USER;
        await serviceRegister.addClient(name, email, password, telephone);
      } catch (error){
        expect(error).to.be.Throw;
        expect(error).to.include.all.keys("status", "message");
        expect(error.message).to.be.equal('Email already exist!')
      }
    })

  });

})