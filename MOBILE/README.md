# README for MOBILE automation using `appium`

### MOBILE

QA challange - reference URL for `.apk` file : https://apkpure.com/fitbit/com.fitbit.FitbitMobile/download
 
- Created an automated smoke test suite using `appium` as per below ACs :

> AC1. User is able to login

## Steps to RUN this test

Before you run -> download / install : 
- `node` and `npm`
- newman : ```npm install -g newman```

### Running on CLI : 

```newman run collection-API.json -e environment.json -d testData.csv```

- Test Collection file - `collection-API.json` 
- Environment file - `environment.json`
- Test Data file: `testData.csv`

> Note : For above `run` a quick report will be displayed, just after test finishes.

### Running on CLI to get `colorful HTML Report`:

```newman run -e environment.json --reporters html --reporter-html-template templates/colorfulReportTemplate.hbs --reporter-html-export Test-Report.html collection-API.json -d testData.csv```

> Result : `Test-Report.html` will be your result file stored in the directory you are running above command in CLI

## EXTRA POINTS achieved:

1. Go to https://github.com/awslabs/aws-device-farm-sample-app-for-ios and run the below feature files
- https://github.com/awslabs/aws-device-farm-sample-app-for-ios/blob/master/features/login_page.feature
- https://github.com/awslabs/aws-device-farm-sample-app-for-ios/blob/master/features/home_page.feature

2. Run Services automation regression in a CI tool like circle-ci, shippable, AWS codebuild

3. Deploy a Selenium grid with Docker and run phptravels smoke test in Chrome and Firefox

4. Provide performance test for https://qa-challenges-lightbulb.atlassian.io services

5. Run lighthouse performance test for http://phptravels.com/demo/ homepage and 3 other pages you think are relevant

6. Fire off SoapUI tests by sending the SoapUI project file to a docker container. 

## NOTE

Things Kept in Mind while completing this assignment:

- Forked the project to my own bitbucket repository.
- Created my feature branch ```feature/MillanKaul-QloyalCodeTest```
- Once you are complete push code to the feature branch only.
Tried to use best practices and best of my knowledge to write the code as per my experience and day to day development work.

Things to share : I recently learnt `newman` and am enjoying it, good to see it spreacing and getting accepted. Definitely this assignwmet was a real test for me to judge self on multiple dimensions of  