import "./App.css";
import Form from "./components/Form";
import { Route, Switch } from "react-router";
import Home from "./components/Home";

function App() {
  return (
    <Switch>
      <div>
        <Route exact path={["/form", "/form/:taskSlug/update"]}>
          <Form />
        </Route>
        <Route exact path={"/"}>
          <Home />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
