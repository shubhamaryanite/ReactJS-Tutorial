//used props
//

function Person(props)
{
  return(
    <div className="person">
      <h1>INFO</h1>
      <h2>{props.name}</h2>
      <h3>Age : {props.age} </h3>
    </div>
  );
}

//instead of writing several time used var properties to do the same work
//so that we don't need to call function multiple times
var app=(
  <div>
    <Person name="Max Paye" age="29"/>
    <Person name="Shubham Kumar Singh" age="21"/>
    <Person name="Saket Singh" age="18"/>
  </div>
);

ReactDOM.render(app,
               document.querySelector('#app'));
