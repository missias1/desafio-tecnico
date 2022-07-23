const sinon = require('sinon');
const {expect} = require('chai');
const controllerLogin = require('../../src/controllers/controllerLogin');
const serviceLogin = require('../../src/services/serviceLogin');
const mocks = require('../mocks');

describe.only('CONTROLLER - Permite o cliente fazer o login',()=>{
  const req = {};
  const res = {}

  before(()=>{
    req.body = mocks.LOGIN
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceLogin, 'findClient').resolves(mocks.TOKEN);
  });

  after(()=> {
    serviceLogin.findClient.restore();
  })
    
    it('É retornado um status 201', async ()=> {
      await controllerLogin.findClient(req, res);

      expect(res.status.calledWith(201)).to.be.true;
    });
    it('É retornado um objeto', async ()=> {
      await controllerLogin.findClient(req, res);

      expect(res.json.calledWith(mocks.TOKEN)).to.be.true;
    });

});