/* eslint-disable mocha/max-top-level-suites */
/* eslint-disable mocha/no-identical-title */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable no-unused-expressions */
/* eslint-disable mocha/no-mocha-arrows */
const sinon = require('sinon');
const { expect } = require('chai');
const controllerConta = require('../../src/controllers/controllerConta');
const serviceConta = require('../../src/services/serviceConta');
const mocks = require('../mocks');

describe('CONTROLLER - Realiza depósito na conta do cliente', () => {
  const req = {};
  const res = {};

  before(() => {
    req.body = mocks.DEPOSIT_INFO;
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceConta, 'increaseCashInWallet').resolves(mocks.DEPOSIT_INFO);
  });

  after(() => {
    serviceConta.increaseCashInWallet.restore();
  });
    it('É retornado um status 201', async () => {
      await controllerConta.increaseCashInWallet(req, res);

      expect(res.status.calledWith(201)).to.be.true;
    });
    it('É retornado um objeto', async () => {
      await controllerConta.increaseCashInWallet(req, res);

      expect(res.json.calledWith(mocks.DEPOSIT_INFO)).to.be.true;
    });
});

describe('CONTROLLER - Realiza saque na conta do cliente', () => {
  const req = {};
  const res = {};

  before(() => {
    req.body = mocks.WITHDRAW_INFO;
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceConta, 'decreaseCashFromWallet').resolves(mocks.WITHDRAW_INFO);
  });

  after(() => {
    serviceConta.decreaseCashFromWallet.restore();
  });
    it('É retornado um status 201', async () => {
      await controllerConta.decreaseCashFromWallet(req, res);

      expect(res.status.calledWith(201)).to.be.true;
    });
    it('É retornado um objeto', async () => {
      await controllerConta.decreaseCashFromWallet(req, res);

      expect(res.json.calledWith(mocks.WITHDRAW_INFO)).to.be.true;
    });
});

describe('CONTROLLER - Lista saldo na conta do cliente pelo Id', () => {
  const req = {};
  const res = {};

  before(() => {
    req.params = { id: 1 };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceConta, 'getWalletInfoById').resolves(mocks.WALLET_INFO);
  });

  after(() => {
    serviceConta.getWalletInfoById.restore();
  });
    it('É retornado um status 200', async () => {
      await controllerConta.getWalletInfoById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });
    it('É retornado um objeto', async () => {
      await controllerConta.getWalletInfoById(req, res);

      expect(res.json.calledWith(mocks.WALLET_INFO)).to.be.true;
    });
});

describe('CONTROLLER - Realiza saque na conta do cliente', () => {
  const req = {};
  const res = {};

  before(() => {
    req.body = mocks.WITHDRAW_INFO;
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceConta, 'decreaseCashFromWallet').resolves(mocks.WITHDRAW_INFO);
  });

  after(() => {
    serviceConta.decreaseCashFromWallet.restore();
  });
    it('É retornado um status 201', async () => {
      await controllerConta.decreaseCashFromWallet(req, res);

      expect(res.status.calledWith(201)).to.be.true;
    });
    it('É retornado um objeto', async () => {
      await controllerConta.decreaseCashFromWallet(req, res);

      expect(res.json.calledWith(mocks.WITHDRAW_INFO)).to.be.true;
    });
});

describe('CONTROLLER - Deleta conta do cliente', () => {
  const req = {};
  const res = {};

  before(() => {
    req.params = { id: 1 };
    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();
    sinon.stub(serviceConta, 'deleteClient').resolves();
  });

  after(() => {
    serviceConta.deleteClient.restore();
  });
    it('É retornado um status 204', async () => {
      await controllerConta.deleteClient(req, res);

      expect(res.status.calledWith(204)).to.be.true;
    });
    it('É retornado um objeto', async () => {
      await controllerConta.deleteClient(req, res);

      expect(res.end.calledWith()).to.be.true;
    });
});

describe('CONTROLLER - Atualiza dado do cliente', () => {
  const req = {};
  const res = {};

  before(() => {
    req.body = mocks.UPDATE_INFO;
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceConta, 'updateInfoClient').resolves();
  });

  after(() => {
    serviceConta.updateInfoClient.restore();
  });
    it('É retornado um status 200', async () => {
      await controllerConta.updateInfoClient(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });
    it('É retornado um objeto', async () => {
      await controllerConta.updateInfoClient(req, res);

      expect(res.json.calledWith(mocks.UPDATE_INFO)).to.be.true;
    });
});