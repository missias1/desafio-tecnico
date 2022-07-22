const sinon = require('sinon');
const {expect} = require('chai');
const serviceConta = require('../../src/services/serviceConta');
const mocks = require('../mocks')


// describe('Aumenta a quantidade de cash na carteira do cliente',()=>{

//   beforeEach(()=>{
//     sinon.stub(serviceConta, 'increaseCashInWallet').resolves([mocks.AFFECTED_ROWS]);
//   });
//   afterEach(()=>{
//     serviceConta.increaseCashInWallet.restore();
//   });

//   const { clientId, value } = mocks.DEPOSIT_INFO;
//   describe('Depósito é realizado com sucesso', ()=> {
    
//     it('Verifica que o depósito é feito com sucesso', async ()=> {
//       const result = await serviceConta.increaseCashInWallet(value, clientId);
//       expect(result).to.empty;
//     })
  
//     it('', async ()=> {
  
//     })

//   });

  // describe('FALHA', ()=> {
    
  //   it('', async ()=> {

  //   })
  
  //   it('', async ()=> {
  
  //   })

  // })

// })