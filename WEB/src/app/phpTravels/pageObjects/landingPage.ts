import { Selector } from 'testcafe';
// import * as waits from '../utilities/waits';

class pageObjClass {
flightsTab = Selector('#body-section > section > div.cell > div > div.col-md-12 > ul > li:nth-child(2) > a > span.hidden-xs');
flightSource = Selector('#s2id_location_from > a > span.select2-chosen');
}

export = pageObjClass;

// ToDo - Hotel 
// ToDo - Tours
// Reporting
