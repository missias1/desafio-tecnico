/* eslint-disable no-unused-expressions */
/* eslint-disable mocha/no-mocha-arrows */
const sinon = require('sinon');
const { expect } = require('chai');
const modelLogin = require('../../src/database/models/modelLogin');
const mocks = require('../mocks');
const serviceLogin = require('../../src/services/serviceLogin');

describe('SERVICE - Procura pelo cliente que corresponde aos dados', () => {
  const password = 'password';

  describe('Email e senha estão corretos', () => {
    beforeEach(() => {
      sinon.stub(modelLogin, 'findClient').resolves([mocks.USER_INFO]);
    });
    afterEach(() => {
      modelLogin.findClient.restore();
    });
    
    it('Verifica se retorna um objeto', async () => {
      const client = await serviceLogin.findClient(mocks.USER_INFO.email, password);
      expect(client).to.be.an('object');
    });
    it('Verifica se retorna as chaves esperadas', async () => {
      const client = await serviceLogin.findClient(mocks.USER_INFO.email, password);
      expect(client).to.include.all.keys('token', 'clientId');
    });
  });

  describe('Dados são inválidos', () => {
    beforeEach(() => {
      sinon.stub(modelLogin, 'findClient').resolves([undefined]);
    });
    afterEach(() => {
      modelLogin.findClient.restore();
    });

    it('Verifica que lança um erro', async () => {
      try {
        await serviceLogin.findClient(mocks.USER_INFO.email, password);
      } catch (error) {
        expect(error).to.be.Throw;
      }
    });

    it('Verifica se contém as chaves status e message', async () => {
      try {
        await serviceLogin.findClient(mocks.USER_INFO.email, password);
      } catch (error) {
        expect(error).to.include.all.keys('status', 'message');
        expect(error.status).to.be.a('number');
        expect(error.message).to.be.an('string');
      }
    });
  });
});