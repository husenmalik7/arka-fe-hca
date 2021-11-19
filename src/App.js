// rules

// this site can be accessed by engineer or company
// engineer email data may same with company (you need add login as in web)

import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import Login from "./pages/Login";
import TestPage from "./pages/TestPage";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/main"></Link>
          <Redirect exact from="/" to="/login" />
        </nav>
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/main" component={TestPage} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
