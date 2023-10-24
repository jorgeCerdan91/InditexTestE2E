import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";
const wikipediaPage=require("../../page/WikipediaPage")

Then("I verify the first date for automatizacion", () => {
   wikipediaPage.verifyYearProcess();
   
 });

 
 Then("I take a screenshot of the first automation page", () => {
     wikipediaPage.takeScreenshot();
    
   });
 

