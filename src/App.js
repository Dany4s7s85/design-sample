import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from "react-router-dom";
import Nav from "./NavBar.js"
import Buttons from "./Button/Buttons.js"
import Dropdown from "./Dropdowns/dropdowns";
import Animation from "./animation/Animation";

function App() {
  return (
    <div>
    <Nav />
      <Switch>
        <Route exact path="/" component={Buttons}/>
        <Route path="/dropdown" component={Dropdown}/>
        <Route path="/animation" component={Animation}/>
      </Switch>
    </div>
  );
}

export default App;
