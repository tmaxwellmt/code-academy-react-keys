var React = require('react');
var ReactDOM = require('react-dom'); //ReactDOM is the name of a JavaScript library,
//contains React-specific methods relating to the DOM

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person, i){
  // return statement goes here:
  return <li>key={'person_'+i}</li>;
});

// render jsx expression
ReactDOM.render(
  <ul>{peopleLIs}</ul>,
  document.getElementById('app')
);
//ReactDOM.render - method //  <ul></ul> - method argument
