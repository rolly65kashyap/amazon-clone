import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/checkout">
              <Header />
              <h1>I am a Checkout</h1>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
