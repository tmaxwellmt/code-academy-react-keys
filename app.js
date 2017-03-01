var React = require('react');
var ReactDOM = require('react-dom');

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person, i){
  // return statement goes here:
  return <li>key={'person_'+i}</li>;
});

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLIs}</ul>,
  document.getElementById('app')
);
