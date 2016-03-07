# Demo

Install

* `git clone git@github.com:motorcyclejs/core.git`
* `cd core && npm link`
* `git clone git@github.com:kimmobrunfeldt/motorcycle-errors-ignored.git`
* `cd motorcycle-errors-ignored && npm install`
* Optionally use x branch of motorcycle/core

  In this repo's dir:
  * `npm link @motorcycle/core`

  In motorcycle core repo dir:
  * `git checkout x`
  * Run `npm run compile` in motorcycle's core directory
  
* `npm start` in this repo root


Next open http://localhost:8080 and you will discover that nothing is logged to console and error is not thrown
