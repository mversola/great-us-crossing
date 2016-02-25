# Great US Crossing 2016

This is based off [boiler-room](https://github.com/everydayhero/boiler-room). Go check it out for more info :).

## Get started

```
 $ git clone git@github.com:everydayhero/great-us-crossing.git
 $ cd great-us-crossing
 $ npm i
 $ npm run dev
```

The site will be visible at: http://localhost:8080

## Scripts

* `npm run dev`: Builds the app in development mode into `./.dev`, watches changes and rebuilds, serves `./.dev` at http://localhost:8080.
* `npm test`: Runs all test files matching `**/__tests__/*-test.js` using mocha.
* `npm run deploy:staging` builds the app in staging mode into `./dist` and deploys the contents of that directory to github pages.
