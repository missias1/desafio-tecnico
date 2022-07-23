const sinon = require('sinon');
const {expect} = require('chai');
const controllerInvestimentos = require('../../src/controllers/controllerInvestimentos');
const serviceInvestimentos = require('../../src/services/serviceInvestimentos');
const mocks = require('../mocks');

describe('CONTROLLER - Adiciona ativos na carteira do cliente',()=>{
  const req = {};
  const res = {}

  before(()=>{
    req.body = mocks.BUY_ASSET
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceInvestimentos, 'increaseAssetInWallet').resolves(mocks.BUY_ASSET);
  });

  after(()=> {
    serviceInvestimentos.increaseAssetInWallet.restore();
  })
    
    it('É retornado um status 201', async ()=> {
      await controllerInvestimentos.increaseAssetInWallet(req, res);

      expect(res.status.calledWith(201)).to.be.true;
    });
    it('É retornado um objeto', async ()=> {
      await controllerInvestimentos.increaseAssetInWallet(req, res);

      expect(res.json.calledWith(mocks.BUY_ASSET)).to.be.true;
    });

});

describe('CONTROLLER - Reduz ativos na carteira do cliente',()=>{
  const req = {};
  const res = {}

  before(()=>{
    req.body = mocks.SELL_ASSET;
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceInvestimentos, 'decreaseAssetFromWallet').resolves(mocks.SELL_ASSET);
  });

  after(()=> {
    serviceInvestimentos.decreaseAssetFromWallet.restore();
  })
    
    it('É retornado um status 201', async ()=> {
      await controllerInvestimentos.decreaseAssetFromWallet(req, res);

      expect(res.status.calledWith(201)).to.be.true;
    });
    it('É retornado um objeto', async ()=> {
      await controllerInvestimentos.decreaseAssetFromWallet(req, res);

      expect(res.json.calledWith(mocks.SELL_ASSET)).to.be.true;
    });

});