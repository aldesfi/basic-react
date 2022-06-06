import './App.css';
import RuteAplikasi from "./Rute";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

const baseName = `/`;

  return (
    <Router basename={baseName}>
      <RuteAplikasi />
    </Router>
  );

}

export default App;
