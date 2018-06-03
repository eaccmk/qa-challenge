# README for API automation using `newman` and performance using `k6`

QA challange - reference URL : https://qa-challenges-lightbulb.atlassian.io

## REST API 

### API - Automation
 
- Created a CLI automated test suit for API automation using `newman` as per below ACs :

`Endpoint : https://qa-challenges-lightbulb.atlassian.io/api/allmethods`

> AC1. I want to turn on and off my light

## Steps to RUN this Automation test

Before you run -> download / install: 
- `node` and `npm`
- newman : ```npm install -g newman```

### Running on CLI : 

```newman run collection-API.json -e environment.json -d testData.csv```

- Test Collection file - `collection-API.json` 
- Environment file - `environment.json`
- Test Data file: `testData.csv`

> Note : For above `run` a quick report will be displayed, just after test finishes, my report example [here](.\automation\RESULT-API-automation.JPG) 

### Running on CLI to get `colorful HTML Report`:

```newman run -e environment.json --reporters html --reporter-html-template templates/colorfulReportTemplate.hbs --reporter-html-export Test-Report.html collection-API.json -d testData.csv```

> Result : `Test-Report.html` will be your result file stored in the directory you are running above command in CLI, my sample report example is [here](.\automation\Test-Report.html) 

## Steps to RUN this Performance test
Before you run -> download / install: 
> Ref ```https://k6.readme.io/docs/installation#section-other-platforms```

- postman-to-k6 : ```npm install -g postman-to-k6```
- Convert your API (`.json`) file to k6 format (`.js`) file ```postman-to-k6 collection-API.json -o k6-lightbulb.js```
- Run the performance test: ```k6 run --vus 10 --duration 30s k6-lightbulb.js```

Note: Above command will run your API for 10 Virtual users for 30 seconds

> you will have to tweek few variables in `k6-lightbulb.js` file before you can run it

## NOTE

Things Kept in Mind while completing this assignment:

- Forked the project to my own bitbucket repository.
- Created new feature branch ```feature/MillanKaul-QloyalCodeTest```
- Once you are complete push code to the feature branch only.

Things to share : I recently learnt `newman` and really enjoyed it implementing it here. Definitely this assignwmet was a challanging test and I tried my best to do as much as possible.

Additionally with a shift left mindset, I searched and implemented `k6` load testing tool to test API's specially during development phase, sounds quiet usefull..

For me thsi test was overall a ALL-round skills assesment test and I enjoyed amd learnt many things.

Thank you | Millan Kaul

My Github Account [@eaccmk](https://github.com/eaccmk)
