class GooglePage {
    elements = {
        btnAcceptConditionsXpath:()=>cy.xpath("//button//*[text()[contains(.,'Aceptar todo')]]"),
        inputMakeAnEntry:()=>cy.xpath("//textarea[@name='q']"),
        tltleWikipediaXpath:()=>  cy.xpath("//h3[contains(.,'Automatización - Wikipedia')]"),
        paragraphYearXpath:()=>  cy.xpath("//p[contains(.,'1771')]"),
        loadImages:()=>   cy.get('img')

    };

    visitAndAceptConditions(){
        cy.visit("/");
        this.elements.btnAcceptConditionsXpath().click();
     
    }

    doSearchSelectWikipedia(){
        cy.wait(500) //Espera debido a que el componente tarda hasta con las asserts
        this.elements.loadImages().should("be.visible")
         this.elements.inputMakeAnEntry().clear().type("Automatizacion{enter}")
         this.elements.tltleWikipediaXpath().click();
    }



}

module.exports = new GooglePage();