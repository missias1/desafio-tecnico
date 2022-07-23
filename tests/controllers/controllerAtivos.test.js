const sinon = require('sinon');
const {expect} = require('chai');
const mocks = require('../mocks');
const controllerAtivos = require('../../src/controllers/controllerAtivos');
const serviceAtivos = require('../../src/services/serviceAtivos');


describe('CONTROLLER - Lista todos os ativos ',()=>{
  const req = {};
  const res = {}

  before(()=>{
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceAtivos, 'getAllAssets').resolves(mocks.ARRAY_ASSETS);
  });

  after(()=> {
    serviceAtivos.getAllAssets.restore();
  })
    
    it('É retornado um status 200', async ()=> {
      await controllerAtivos.getAllAssets(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });
    it('É retornado um array de objetos', async ()=> {
      await controllerAtivos.getAllAssets(req, res);

      expect(res.json.calledWith(mocks.ARRAY_ASSETS)).to.be.true;
    });

});

describe('CONTROLLER - Lista determinado ativo pelo seu id',()=>{
  const req = {};
  const res = {}

  before(()=>{
    req.params = {id: 1}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceAtivos, 'getAssetById').resolves(mocks.ASSET);
  });

  after(()=> {
    serviceAtivos.getAssetById.restore();
  })
    
    it('É retornado um status 200', async ()=> {
      await controllerAtivos.getAssetById(req, res);


      expect(res.status.calledWith(200)).to.be.true;
    });
    it('É retornado um objeto', async ()=> {
      await controllerAtivos.getAssetById(req, res);

      expect(res.json.calledWith(mocks.ASSET)).to.be.true;
    });

});

describe('CONTROLLER - Lista ativos de um determinado cliente pelo o id',()=>{
  const req = {};
  const res = {}

  before(()=>{
    req.params = {id: 1}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceAtivos, 'getAssetsFromOneClientById').resolves(mocks.ASSETS_FROM_CLIENT);
  });

  after(()=> {
    serviceAtivos.getAssetsFromOneClientById.restore();
  })
    
    it('É retornado um status 200', async ()=> {
      await controllerAtivos.getAssetsFromOneClientById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });
    it('É retornado um array de objetos', async ()=> {
      await controllerAtivos.getAssetsFromOneClientById(req, res);

      expect(res.json.calledWith(mocks.ASSETS_FROM_CLIENT)).to.be.true;
    });

});