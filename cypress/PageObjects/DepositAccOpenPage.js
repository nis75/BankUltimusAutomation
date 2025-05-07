


class DemandDepositAccOpen{
txtProduct='#ctl00_contPlcHdrMasterHolder_LstxtAccNoPrdId';
txtCustomerId="#ctl00_contPlcHdrMasterHolder_LstxtCustId";
txtPurpose='#ctl00_contPlcHdrMasterHolder_LstxtAccOpeningPrp';
ddlMailAddress='#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType';
//cy.get('selector').dblclick();
 //cy.wait(4000)

    setProduct(product)
    {
        cy.get(this.txtProduct).type(product).click()
    }
    setCustomer(customer)
    {
        cy.get(this.txtCustomerId).type(customer).should('be.visible').click()
    }
    setPurpose(purpose)
    {
        cy.get(this.txtPurpose).type(purpose)
    }
    // setMailAddress(mailAddress)
    // {
    //     cy.get(this.ddlMailAddress).click()
    //     cy.get(this.ddlMailAddress).select(mailAddress)
    // }
}
export default DemandDepositAccOpen;