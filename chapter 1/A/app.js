function Person(props)
{
  return(
    <div className="person">
      <h1>INFO</h1>
      <p>Sri Vastava</p>
      <p>Age : 21 </p>
    </div>
  );
}

ReactDOM.render(<Person na/>,
               document.querySelector('#p1'));
