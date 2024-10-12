import "./App.css";
import { Component } from "react";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name='Ayo' />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
