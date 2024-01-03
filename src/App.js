import "./App.css";
import styled from "styled-components";
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I love bo and i love him cause he is the best in every way shape and
          form lol
        </p>
        <button className="square">I Love Bo</button>
        <button className="square">Patrick is vey quail</button>
        <img src={coolymccoolface} alt="Patrick Dowd" />
        <button style={buttonStyles}> New Button </button>
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
