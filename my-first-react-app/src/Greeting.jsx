function List(props) {

    if (!props.animals) {
        // Without the animals property. This is often the case when 
        // you are fetching from an API, since it might take some time 
        // to actually retrieve the data, it is good practice to show 
        // an indicator for that.
        return <div>Loading...</div>;
    }
    
    if (props.animals.length === 0) {
        return <div>There are no animals in the list!</div>;
    }

    return (
      <ul>
        {props.animals.map((animal) => {
            // If the result of the startsWith function is true, then it 
            // returns the second operand, which is the <li> element, and 
            // renders it. Otherwise, if the condition is false it just gets ignored.
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    );
  }


function Greeting(){

    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <div>
        <h1>Animals: </h1>
        <List animals={animals} />
        </div>
    );
}

export default Greeting;