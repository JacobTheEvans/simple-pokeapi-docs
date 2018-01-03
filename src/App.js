import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import {Route, HashRouter, Switch} from "react-router-dom";

const domain = "localhost:9000/api/pokemon/";

const HomeFormatted= () => (<Home domain={domain}/>)
const DocumentationFormatted = () => (<Documentation domain={domain}/>)

const App = () => (
  <HashRouter>
    <Scroll>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomeFormatted}/>
        <Route exact path="/documentation" component={DocumentationFormatted} />
      </Switch>
      <Footer />
    </Scroll>
  </HashRouter>
)

export default App;
