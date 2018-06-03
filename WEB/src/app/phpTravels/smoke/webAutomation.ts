import { Selector } from 'testcafe';
import pageObjClass = require("../pageObjects/landingPage");

let poc = new pageObjClass();

fixture `WEB Automation`
    .page `https://www.phptravels.net/`;
   

    test('Book a FLIGHT', async t => {
        await t
            .click(poc.flightsTab)
            .wait(3000) // without wait it was failing on my machine (slow internet)

            // Introducing Assertions here 
            .expect(poc.flightSource.exists).ok()
            .expect(poc.flightSource).ok();
    });