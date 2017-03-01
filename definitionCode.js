
var p1 = <p id="large">foo</p>;


// variable equal to , JSX <p></p> element
// id attribute of "large"

//nested JSX expression being saved as a variable
var theGoogle = (
  <a href="https://www.google.net">
    <h1>
      Click me I am Gooooooooooogle
    </h1>
  </a>
);

// render a jsx expression
ReactDOM.render(<h1>Hello world</h1>,
  document.getElementById('app'));

//<h1>Render me!</h1> to be appended to <span id="container"></span>
  document.getElementById
