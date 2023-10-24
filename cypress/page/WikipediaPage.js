class WikipediaPage {
    elements = {
        tltleWikipediaXpath:()=>  cy.xpath("//h3[contains(.,'Automatización - Wikipedia')]"),
        paragraphYearXpath:()=>  cy.xpath("//p[contains(.,'1771')]")

    };

    verifyYearProcess(){
        this.elements.paragraphYearXpath().should("include.text"," 1785, convirtiéndose en el primer proceso industrial completamente automatizado");
    }

    takeScreenshot(){
        this.elements.paragraphYearXpath().screenshot();
    }

  
}

module.exports = new WikipediaPage();