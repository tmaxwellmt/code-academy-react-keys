var React = require('react');
var ReactDOM = require('react-dom');

var myList = (
	<ul>
    <li>List 1</li>
    <li>List 2</li>
    <li>List 3</li>
  </ul>
	)


ReactDOM.render(myList,  //only updates DOM elements that have been changed
  document.getElementById('app')
 );
 //call ReactDOM.render()  //  first argument, pass in the variable myList
 // second argument, select an HTML element with an id of app


var React = require('react');
var ReactDOM = require('react-dom');

// Declare a variable:
var goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';
// varible img.
var gooseImg = (
  <img src={goose}/>);

// Access your variable
// from inside of a JSX expression:
ReactDOM.render(<h1>{gooseImg,}</h1>,
  document.getElementById('app'));


var React = require('react');
var ReactDOM = require('react-dom');

function makeDoggy (e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

var kitty = (
	<img onClick={makeDoggy}
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('app'));

// onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
// onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
// onMouseMove onMouseOut onMouseOver onMouseUp
