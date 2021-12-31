// rules

// this site can be accessed by engineer or company
// engineer email data may same with company (you need add login as in web)

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import TestPage from "./pages/TestPage";
import Register from "./pages/Register";
import Profile from "./pages/Profile"; //for engineer profile
import ProfileCompany from "./pages/ProfileCompany";
import EditProfileCompany from "./pages/Edit/Company";
import EditProfileEngineer from "./pages/Edit/Engineer";
import EngineerList from "./pages/EngineerList";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectEngineer from "./pages/ProjectEngineer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile/:id" exact component={Profile} />
            <Route
              path="/profile/engineer/edit"
              exact
              component={EditProfileEngineer}
            />
            <Route path="/company/profile" exact component={ProfileCompany} />
            <Route
              path="/company/profile/engineer-list"
              exact
              component={EngineerList}
            />
            <Route
              path="/company/profile/engineer-list/project"
              component={Project}
            />

            <Route
              path="/profile/engineer/project"
              component={ProjectEngineer}
            />
            <Route
              path="/company/profile/edit"
              component={EditProfileCompany}
            />
            <Route path="/main" component={TestPage} />
            <Route path="/home" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
