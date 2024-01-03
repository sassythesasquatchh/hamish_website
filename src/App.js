import "./App.css";
import coolymccoolface from "./patrick.jpg";

const buttonStyles = {
  padding: "10px 100px",
  borderRadius: "10px",
  backgroundColor: "red",
  color: "FF69B4",
  border: "none",
  cursor: "",
  fontSize: "32px",
  transition: "background-color 0.3s ease",
};

const patrickText =
  'Every single day, many, many people think they can claim that their brother is the "best brother in the world. These people, while undoubtably noble in their efforts, are all wrong. ';

function App() {
  function handleClick() {
    // Replace 'https://example.com' with the URL of the webpage you want to open
    window.location.href =
      "https://www.stuff.co.nz/national/education/90180367/hamilton-student-top-in-the-world-for-sciences";
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{patrickText}</p>
        <button className="square">I Love Bo</button>
        <button className="square">Patrick is vey quail</button>
        <img src={coolymccoolface} alt="Patrick Dowd" />
        <button style={buttonStyles} onClick={handleClick}>
          Proof
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
