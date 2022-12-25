import Navigation from "./routers/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import "./App.css";
import Left from "./components/left/Left";
import Right from "./components/right/Right";
import Mid from "./components/mid/Mid";
import SideBar from "./routers/SideBar";

function App() {
  return (
    <>
      <div className="App">
        <Row>
          <Navigation />
          <Right />
          <Mid />

          <Left />
        </Row>
      </div>
    </>
  );
}

export default App;
