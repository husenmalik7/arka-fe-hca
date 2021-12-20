// rules

// this site can be accessed by engineer or company
// engineer email data may same with company (you need add login as in web)

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import TestPage from "./pages/TestPage";
import Register from "./pages/Register";
import Profile from "./pages/Profile"; //for engineer profile
import ProfileCompany from "./pages/ProfileCompany";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/company/profile" component={ProfileCompany} />
            <Route path="/main" component={TestPage} />
            <Route path="/home" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
