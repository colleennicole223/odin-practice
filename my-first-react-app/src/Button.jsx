

function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
    const[backgroundColor, setBackgroundColor] = useState("pink");

    const onButtonClick = color => () => {
      setBackgroundColor(color);
    }

    const buttonStyle = {
      color: color,
      fontSize: fontSize + "px"
    };
  
    return (
      <button onClick={handleClick} style={buttonStyle}>
        {text}
      </button>
    );
  }
  
  export default function App() {
    const handleButtonClick = (url) => {
      window.location.href = url;
    };
  
    return (
      <div>
        <Button handleClick={() => handleButtonClick('www.theodinproject.com')} />
      </div>
    );
  }
  