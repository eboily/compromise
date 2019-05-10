var assert = require('assert');
var chalk = require('chalk');

console.log(chalk.green('\n==sanity-test builds=='));
//sanity-test the builds
var libs = [
  require('../../builds/compromise.js'),
  require('../../builds/compromise.min.js'),
  require('../../builds/compromise.es6.min.js')
];
libs.forEach((nlp, i) => {
  console.log(chalk.green('  - - #' + i));
  var r = nlp('John and Joe walked to the store');
  assert(r.people().data().length === 2);
  assert(r.verbs().data().length === 1);
  
  var rr = nlp('Morin Gontran');
  assert(rr.people().data().length === 1);
  assert(rr.people().data()[0].firstName === "gontran");
  assert(rr.people().data()[0].lastName === "morin");
  assert(rr.people().data()[0].genderGuess === "Male");

  var rrr = nlp('Boily Micheline');
  assert(rrr.people().data().length === 1);
  assert(rrr.people().data()[0].firstName === "micheline");
  assert(rrr.people().data()[0].lastName === "boily");
  assert(rrr.people().data()[0].genderGuess === "Female");

});
console.log(chalk.green('\n  👍'));
