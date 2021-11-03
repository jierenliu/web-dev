import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import {default as Practice2} from "./components/a6/Practice"
import {default as HomeScreen2} from "./components/a6/Build/HomeScreen/HomeScreen"
import {default as ExploreScreen2} from "./components/a6/Build/ExploreScreen";
import {default as HelloWorld2} from "./components/a6/HelloWorld";
function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path={["/a7", "/a7/practice", "/"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path="/a7/twitter">
                  <Build/>
              </Route>
              <Route path="/a6/hello" exact={true}>
                  <HelloWorld2/>
              </Route>
              <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                  <Practice2/>
              </Route>
              <Route path="/a6/twitter/explore">
                  <ExploreScreen2/>
              </Route>
              <Route path="/a6/twitter/home">
                  <HomeScreen2/>
              </Route>
          </div>
      </BrowserRouter>

  );
}

export default App;
