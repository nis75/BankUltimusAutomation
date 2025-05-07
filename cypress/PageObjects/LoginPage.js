class Login
{
    txtUserName='#UserId';
    txtPassword="#PasswordString";
    btnSubmit='#btnlogin';
    
    lblMsg='';
    setUserName(username)
    {
        cy.get(this.txtUserName).type(username)
    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }
    clickSubmit()
    {
        cy.get(this.btnSubmit).click()
    }
    verifyLogin()
    {
        cy.get(this.lblMsg).should('have.text','CITIZENS BANK PLC')
    }
}
export default Login;
