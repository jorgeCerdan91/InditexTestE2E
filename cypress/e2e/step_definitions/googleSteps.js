import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";
const googlePage=require("../../page/GooglePage")
const wikipediaPage = require("../../page/WikipediaPage")

 Given("I as user enter to google", () => {
   googlePage.visitAndAceptConditions();
   
 });

 When("I search for the word automatizacion", () => {

   googlePage.doSearchSelectWikipedia();
 });

//   When("Buscar el Link de la Wikipedia resultante", () => {
//    googlePage.clickLinkWikipedia();
   
//  });


