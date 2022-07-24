const sinon = require('sinon');
const {expect} = require('chai');
const connection = require('../../src/database/connection');
const modelLogin = require('../../src/database/models/modelLogin');
const mocks = require('../mocks');

describe('MODEL - Procura pelo cliente no banco de dados',()=>{

  describe('Cliente é encontrado com sucesso, email e senha corretos.', ()=> {

    beforeEach(()=>{
      sinon.stub(connection, 'execute').resolves([mocks.USER_INFO]);
    });
    afterEach(()=>{
      connection.execute.restore();
    });

    const { email, password } = mocks.USER_INFO
    it('Verifica se retorna um objeto', async ()=> {
      const user = await modelLogin.findClient(email, password);
      expect(user).to.be.an('object');
    })
    it('Verifica se retorna as chaves esperadas', async ()=> {
      const user = await modelLogin.findClient(email, password);
      expect(user).to.include.all.keys('email', 'clientId');
    })

  });

  describe('Cliente não é encontrado', ()=> {

    beforeEach(()=>{
      sinon.stub(connection, 'execute').resolves([undefined]);
    });
    afterEach(()=>{
      connection.execute.restore();
    });

    const data = {
      email:"desconhecido@gmail.com",
      password:"123456"
    }

    it('Verifica se retorna undefined', async ()=> {
      const user = await modelLogin.findClient(data.email, data.password);
      expect(user).to.be.undefined;
    });

  });

});

describe('MODEL - Procura pelo cliente no banco de dados por meio do id',()=>{

  describe('Cliente é encontrado com sucesso', ()=> {

    beforeEach(()=>{
      sinon.stub(connection, 'execute').resolves([mocks.USER_INFO]);
    });
    afterEach(()=>{
      connection.execute.restore();
    });

    const { clientId } = mocks.USER_INFO
    it('Verifica se retorna um objeto', async ()=> {
      const user = await modelLogin.findClientById(clientId);
      expect(user).to.be.an('object');
    })
    it('Verifica se retorna as chaves esperadas', async ()=> {
      const user = await modelLogin.findClient(clientId);
      expect(user).to.include.all.keys('email', 'clientId');
    })

  });

  describe('Cliente não é encontrado', ()=> {

    beforeEach(()=>{
      sinon.stub(connection, 'execute').resolves([undefined]);
    });
    afterEach(()=>{
      connection.execute.restore();
    });

    const clientId = 100;

    it('Retorna undefined', async ()=> {
      const user = await modelLogin.findClientById(clientId)
    });

  });

});

describe.only('MODEL - Procura pelo cliente no banco de dados por meio do email',()=>{

  describe('Cliente é encontrado com sucesso', ()=> {

    beforeEach(()=>{
      sinon.stub(connection, 'execute').resolves([mocks.USER_INFO.email]);
    });
    afterEach(()=>{
      connection.execute.restore();
    });

    const { clientId } = mocks.USER_INFO
    it('Verifica se retorna uma string', async ()=> {
      const user = await modelLogin.findClientByEmail(clientId);
      expect(user).to.be.an('string');
    })
  });

  describe('Cliente não é encontrado pelo email', ()=> {

    beforeEach(()=>{
      sinon.stub(connection, 'execute').resolves([[undefined]]);
    });
    afterEach(()=>{
      connection.execute.restore();
    });

    it('Retorna undefined', async ()=> {
      const user = await modelLogin.findClientByEmail(mocks.USER_INFO.email);
      expect(user).to.be.an('undefined');
    });

  });

});