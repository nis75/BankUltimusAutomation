class FastPath{
    searchFastPath="#txtMenuSearch";
     
    getFastPath(fastPathName)
    {
        cy.get(this.searchFastPath).type(fastPathName)
    }
    clickSubmit()
    {
        cy.get(this.searchFastPath).click()
    }
}
export default FastPath;