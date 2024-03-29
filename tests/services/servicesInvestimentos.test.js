// const sinon = require('sinon');
// const {expect} = require('chai');
// const serviceInvestimentos = require('../../src/services/serviceInvestimentos');
// const modelAtivos = require('../../src/database/models/modelAtivos');
// const modelInvestimentos = require('../../src/database/models/modelInvestimentos');
// const modelConta = require('../../src/database/models/modelConta');

// describe('SERVICE - Ativos são adicionados com sucesso na carteira',()=>{

//   const { clientId, value } = mocks.DEPOSIT_INFO;
//   describe('Saque é realizado com sucesso', ()=> {

//     beforeEach(()=>{
//       sinon.stub(modelAtivos, 'getAssetsFromOneClientById').resolves([mocks.WALLET_INFO]);
//       sinon.stub(modelInvestimentos, 'createAssetInWallet').resolves([mocks.AFFECTED_ROWS]);
//     });
//     afterEach(()=>{
//       modelConta.getWalletInfoById.restore();
//       modelConta.decreaseCashFromWallet.restore();
//     });
  
//     it('Verifica que o banco de dados é alterado', async ()=> {
//       const result = await serviceConta.decreaseCashFromWallet(clientId, mocks.SHORT_VALUE)
//         expect(result).to.be.equal(1);
//     })

//   });
// //////////////////////////////////////////////////////////////////////////
//     describe('Saque não é realizado com sucesso', ()=> {
    
//       describe('Quando o valor do saque é maior que o saldo em conta', ()=> {

//         beforeEach(()=>{
//           sinon.stub(modelConta, 'getWalletInfoById').resolves([mocks.WALLET_INFO]);
//           sinon.stub(modelConta, 'decreaseCashFromWallet').resolves([mocks.NOT_AFFECTED_ROWS]);
//         });
//         afterEach(()=>{
//           modelConta.getWalletInfoById.restore();
//           modelConta.decreaseCashFromWallet.restore();
//         });

//         it('Verifica que é lançado um erro', async ()=> {
//           try{
//             await serviceConta.decreaseCashFromWallet(mocks.BIG_VALUE, clientId);
//           } catch (error){
//             expect(error).to.Throw;
//           }
//         });
//         it('Verifica se possui as chaves de status e message', async ()=> {
//           try{
//             await serviceConta.decreaseCashFromWallet(mocks.BIG_VALUE, clientId);
//           } catch (error){
//             expect(error).to.include.all.keys("status", "message");
//             expect(error.status).to.be.a('number')
//             expect(error.message).to.be.an('string')
//           }
//         });
//       });

//     describe('Quando o banco não é alterado', ()=> {

//       beforeEach(()=>{
//         sinon.stub(modelConta, 'getWalletInfoById').resolves([mocks.WALLET_INFO]);
//         sinon.stub(modelConta, 'decreaseCashFromWallet').resolves([mocks.NOT_AFFECTED_ROWS]);
//       });
//       afterEach(()=>{
//         modelConta.getWalletInfoById.restore();
//         modelConta.decreaseCashFromWallet.restore();
//       });

//       it('Verifica que é lançado um erro ', async ()=> {
//         try{
//           await serviceConta.decreaseCashFromWallet(mocks.SHORT_VALUE, clientId)
//         } catch (error){
//           expect(error).to.include.all.keys("status", "message")
//         }
//       });

//       it('Verifica se possui as chaves de status e message', async ()=> {
//         try{
//           await serviceConta.decreaseCashFromWallet(mocks.BIG_VALUE, clientId);
//         } catch (error){
//           expect(error).to.include.all.keys("status", "message");
//           expect(error.status).to.be.a('number')
//           expect(error.message).to.be.an('string')
//         }
//       });
//     })

//   });
// });