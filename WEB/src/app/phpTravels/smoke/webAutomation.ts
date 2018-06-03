import { Selector } from 'testcafe'
// import { landingPage } from "..\pageObjects";

fixture `Getting Started`
    .page `https://www.phptravels.net/`;

    test('Enter ', async t => {
        await t
            .typeText('#select2-search', 'New York')
            .click('#btn btn-lg btn-block btn-danger pfb0 loader')
    
            // Use the assertion to check if the actual header text is equal to the expected one
            // .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
    });