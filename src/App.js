import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}    
  }

  render() {
    return (
<React.Fragment>
        <Router>
            <Switch>    
            <Route exact path="/" component={Dashboard} />
              <Route path='*' exact={true} component={Notfound} />
            </Switch>
            </Router>     
</React.Fragment>   
    );
  }




}

export default App;