const sinon = require('sinon');
const {expect} = require('chai');
const controllerRegister = require('../../src/controllers/controllerRegister');
const serviceRegister = require('../../src/services/serviceRegister');
const mocks = require('../mocks');

describe('CONTROLLER - Realiza cadastro de novo cliente',()=>{
  const req = {};
  const res = {}

  before(()=>{
    req.body = mocks.NEW_USER;
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceRegister, 'addClient').resolves(mocks.TOKEN);
  });

  after(()=> {
    serviceRegister.addClient.restore();
  })
    
    it('É retornado um status 201', async ()=> {
      await controllerRegister.addClient(req, res);

      expect(res.status.calledWith(201)).to.be.true;
    });
    it('É retornado um objeto', async ()=> {
      await controllerRegister.addClient(req, res);

      expect(res.json.calledWith({ message: mocks.SUCESS_CREATED })).to.be.true;
    });

});