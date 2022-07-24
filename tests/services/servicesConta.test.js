const sinon = require('sinon');
const {expect} = require('chai');
const serviceConta = require('../../src/services/serviceConta');
const mocks = require('../mocks')
const modelConta = require('../../src/database/models/modelConta');
const modelAtivos = require('../../src/database/models/modelAtivos');


describe('SERVICE - Aumenta a quantidade de cash na carteira do cliente',()=>{

  const { clientId, value } = mocks.DEPOSIT_INFO;
  describe('Depósito é realizado com sucesso', ()=> {

    beforeEach(()=>{
      sinon.stub(modelConta, 'increaseCashInWallet').resolves([mocks.AFFECTED_ROWS]);
    });
    afterEach(()=>{
      modelConta.increaseCashInWallet.restore();
    });
  
    it('Verifica que o banco de dados é alterado', async ()=> {
      const result = await serviceConta.increaseCashInWallet(clientId, value)
      expect(result).to.be.equal(1);
    })

  });

    describe('Depósito não é realizado com sucesso', ()=> {

      beforeEach(()=>{
        sinon.stub(modelConta, 'increaseCashInWallet').resolves([mocks.NOT_AFFECTED_ROWS]);
      });
      afterEach(()=>{
        modelConta.increaseCashInWallet.restore();
      });

    it('Verifica que é lançado um erro', async ()=> {
      try{
        await serviceConta.increaseCashInWallet(clientId, value);
      } catch (error){
        expect(error).to.be.Throw
      }
    });

    it('Verifica se contém as chaves status e message', async ()=> {
      try{
        await serviceConta.increaseCashInWallet(clientId, value);
      } catch (error){
        expect(error).to.include.all.keys("status", "message")
      }
    });

  });
});

describe('SERVICE - Diminui a quantidade de cash na carteira do cliente',()=>{

  const { clientId, value } = mocks.DEPOSIT_INFO;
  describe('Saque é realizado com sucesso', ()=> {

    beforeEach(()=>{
      sinon.stub(modelConta, 'getWalletInfoById').resolves([mocks.WALLET_INFO]);
      sinon.stub(modelConta, 'decreaseCashFromWallet').resolves([mocks.AFFECTED_ROWS]);
    });
    afterEach(()=>{
      modelConta.getWalletInfoById.restore();
      modelConta.decreaseCashFromWallet.restore();
    });
  
    it('Verifica que o banco de dados é alterado', async ()=> {
      const result = await serviceConta.decreaseCashFromWallet(clientId, mocks.SHORT_VALUE)
        expect(result).to.be.equal(1);
    })

  });

    describe('Saque não é realizado com sucesso', ()=> {
    
      describe('Quando o valor do saque é maior que o saldo em conta', ()=> {

        beforeEach(()=>{
          sinon.stub(modelConta, 'getWalletInfoById').resolves([mocks.WALLET_INFO]);
          sinon.stub(modelConta, 'decreaseCashFromWallet').resolves([mocks.NOT_AFFECTED_ROWS]);
        });
        afterEach(()=>{
          modelConta.getWalletInfoById.restore();
          modelConta.decreaseCashFromWallet.restore();
        });

        it('Verifica que é lançado um erro', async ()=> {
          try{
            await serviceConta.decreaseCashFromWallet(mocks.BIG_VALUE, clientId);
          } catch (error){
            expect(error).to.Throw;
          }
        });
        it('Verifica se possui as chaves de status e message', async ()=> {
          try{
            await serviceConta.decreaseCashFromWallet(mocks.BIG_VALUE, clientId);
          } catch (error){
            expect(error).to.include.all.keys("status", "message");
            expect(error.status).to.be.a('number')
            expect(error.message).to.be.an('string')
          }
        });
      });

    describe('Quando o banco não é alterado', ()=> {

      beforeEach(()=>{
        sinon.stub(modelConta, 'getWalletInfoById').resolves([mocks.WALLET_INFO]);
        sinon.stub(modelConta, 'decreaseCashFromWallet').resolves([mocks.NOT_AFFECTED_ROWS]);
      });
      afterEach(()=>{
        modelConta.getWalletInfoById.restore();
        modelConta.decreaseCashFromWallet.restore();
      });

      it('Verifica que é lançado um erro ', async ()=> {
        try{
          await serviceConta.decreaseCashFromWallet(mocks.SHORT_VALUE, clientId)
        } catch (error){
          expect(error).to.include.all.keys("status", "message")
        }
      });

      it('Verifica se possui as chaves de status e message', async ()=> {
        try{
          await serviceConta.decreaseCashFromWallet(mocks.BIG_VALUE, clientId);
        } catch (error){
          expect(error).to.include.all.keys("status", "message");
          expect(error.status).to.be.a('number')
          expect(error.message).to.be.an('string')
        }
      });
    })

  });
});

describe('SERVICE - Lista informação do saldo do cliente',()=>{

  const { clientId } = mocks.DEPOSIT_INFO;
  describe('Listagem é realizado com sucesso', ()=> {

    beforeEach(()=>{
      sinon.stub(modelConta, 'getWalletInfoById').resolves([mocks.WALLET_INFO]);
    });
    afterEach(()=>{
      modelConta.getWalletInfoById.restore();
    });
  
    it('Verifica que retona um objeto', async ()=> {
      const result = await serviceConta.getWalletInfoById(clientId)
      expect(result).to.be.an('object')
    })
    it('Verifica se possui as chaves esperadas', async ()=> {
      const result = await serviceConta.getWalletInfoById(clientId)
      expect(result).to.include.all.keys('clientId', 'balance')
    })

  });

    describe('Listagem não é realizado com sucesso', ()=> {

      beforeEach(()=>{
        sinon.stub(modelConta, 'getWalletInfoById').resolves([]);
      });
      afterEach(()=>{
        modelConta.getWalletInfoById.restore();
      });

    it('Verifica que é lançado um erro', async ()=> {
      try{
        await serviceConta.getWalletInfoById(clientId);
      } catch (error){
        expect(error).to.be.Throw
      }
    });

    it('Verifica se contém as chaves status e message', async ()=> {
      try{
        await serviceConta.getWalletInfoById(clientId);
      } catch (error){
        expect(error).to.include.all.keys("status", "message");
        expect(error.status).to.be.a('number');
        expect(error.message).to.be.an('string');
      }
    });

  });
});

describe.only('SERVICE - Deleta cliente do banco de dados',()=>{

  const { clientId } = mocks.DEPOSIT_INFO;
  describe('Cliente é deletado com sucesso', ()=> {

    beforeEach(()=>{
      sinon.stub(modelConta, 'getWalletInfoById').resolves([mocks.WALLET_INFO_EMPTY]);
      sinon.stub(modelAtivos, 'getAssetsFromOneClientById').resolves([]);
      sinon.stub(modelConta, 'deleteClient').resolves([mocks.AFFECTED_ROWS]);
    });
    afterEach(()=>{
      modelConta.getWalletInfoById.restore();
      modelAtivos.getAssetsFromOneClientById.restore();
      modelConta.deleteClient.restore();
    });
  
    it('Verifica que o banco de dados foi alterado', async ()=> {
      const result = await serviceConta.deleteClient(clientId);
      expect(result).to.be.equal(1)
    })

  });

    describe('Cliente não é deletado', ()=> {

      beforeEach(()=>{
        sinon.stub(modelConta, 'getWalletInfoById').resolves([mocks.WALLET_INFO]);
        sinon.stub(modelAtivos, 'getAssetsFromOneClientById').resolves([mocks.ASSETS_FROM_CLIENT]);
        sinon.stub(modelConta, 'deleteClient').resolves([mocks.NOT_AFFECTED_ROWS]);
      });
      afterEach(()=>{
        modelConta.getWalletInfoById.restore();
        modelAtivos.getAssetsFromOneClientById.restore();
        modelConta.deleteClient.restore();
      });

    it('Verifica que é lançado um erro', async ()=> {
      try{
        await serviceConta.deleteClient(clientId);
      } catch (error){
        expect(error).to.be.Throw
      }
    });

    it('Verifica se contém as chaves status e message', async ()=> {
      try{
        await serviceConta.deleteClient(clientId);
      } catch (error){
        expect(error).to.include.all.keys("status", "message");
        expect(error.status).to.be.a('number');
        expect(error.message).to.be.an('string');
      }
    });

  });
});
