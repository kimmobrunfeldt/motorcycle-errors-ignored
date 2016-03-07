var Cycle = require('@motorcycle/core');
var most = require('most');
var makeHTTPDriver = require('@motorcycle/http').makeHTTPDriver;
var dom = require('@motorcycle/dom');
var makeDOMDriver = dom.makeDOMDriver;
var p = dom.p;

// This doesn't help
var BPromise = require('bluebird');
window.Promise = BPromise;
global.Promise = BPromise;
BPromise.config({
  warnings: false,
  longStackTraces: true
});

function main(sources) {
  var body$ = sources.HTTP
    .flatMap(x => x)
    .map(res => res)
    .tap(res => {
      console.log(res)
      // This error is not logged anywhere
      // It is caught somewhere in the most chain?
      throw new Error('test')
    })
    .startWith({});

  var request = {url: 'http://jsonplaceholder.typicode.com/posts/1'};
  return {
    DOM: body$.map(body => p(['body:', body])),
    HTTP: most.of(request).tap(a => console.log('Request url', a.url))
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('.main-container'),
  HTTP: makeHTTPDriver()
}, {
  onError: err => {
    throw err;
  }
});
