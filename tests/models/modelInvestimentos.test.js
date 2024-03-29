/* eslint-disable mocha/max-top-level-suites */
/* eslint-disable mocha/no-mocha-arrows */
const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../src/database/connection');
const modelInvestimentos = require('../../src/database/models/modelInvestimentos');

describe('MODEL - Aumenta a quantidade de ativos na carteira do cliente', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves([[], []]);
  });
  afterEach(() => {
    connection.execute.restore();
  });

    it('Verifica se retorna um array', async () => {
      const result = await modelInvestimentos.increaseAssetInWallet(20, 1, 1);
      expect(result).to.be.an('array');
    });
});

describe('MODEL - Diminui a quantidade de ativos na carteira do cliente', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves([[], []]);
  });
  afterEach(() => {
    connection.execute.restore();
  });

    it('Verifica se retorna um array', async () => {
      const result = await modelInvestimentos.decreaseAssetFromWallet(10, 1, 1);
      expect(result).to.be.an('array');
    });
});

describe('MODEL - Cria ativo na carteira do cliente', () => {
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves([[], []]);
  });
  afterEach(() => {
    connection.execute.restore();
  });

    it('Verifica se retorna um array', async () => {
      const result = await modelInvestimentos.createAssetInWallet(1, 1, 30);
      expect(result).to.be.an('array');
    });
});