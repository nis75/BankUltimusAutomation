import Login from "../PageObjects/LoginPage.js"  
import FastPath from "../PageObjects/ManuPage.js" 
import DemandDepositAccOpen from "../PageObjects/DepositAccOpenPage.js" 

describe('Bank Ultimus', () => {
 //using pom fixtures
 it('login test',function(){
  cy.visit('http://192.168.10.199/BankUltimusSPARK/')  

  //cy.fixture('loginData').then((data)=>{    
  
    const ln = new Login();
    const fp = new FastPath();
    const dd = new DemandDepositAccOpen();


    
    ln.setUserName('belayet1059')
    ln.setPassword('1')
    ln.clickSubmit();
    //ln.verifyLogin();
    fp.getFastPath('2001{enter}') 
    dd.setProduct('111{enter}')   
   //cy.wait(4000) 
    dd.setCustomer('000000093')   
    //cy.wait(4000)   
    //dd.setPurpose('testing')
    //dd.setMailAddress('Permanent Address')


  //}) 




})

})
