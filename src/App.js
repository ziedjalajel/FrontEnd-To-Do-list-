import "./App.css";
import Form from "./components/Form";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import finishedTask from "./components/FinishedTask";
// import { ThemeProvider } from "styled-components";
// import { GlobalStyle } from "./styles";

function App() {
  return (
    <Switch>
      <div className="home">
        <Route exact path={["/form", "/form/:taskSlug/update"]}>
          <Form />
        </Route>
        <Route to="/finished/:taskSlug">
          <finishedTask />
        </Route>
        <Route exact path={"/"}>
          <Home />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
