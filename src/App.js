import Head from "./Head";
import Stopwatch from "./Stopwatch";
import StopwatchesList from "./StopwatchesList";
import Subscription from "./Subscription";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./About";




function App() {
  return (
    <Router>
      <div className="App">
        <header>All Timers</header>
        <main className="main">
          <NavBar/>
          <div>
            <Switch>
              <Route exact path="/">
                <StopwatchesList/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
            </Switch>
          </div>
        </main>

        <footer>
          <p>Author: Tongtong Zhang<br></br>
          <a href="tongtong.zhang12@gmail.com">tongtong.zhang12@gmail.com</a>
          <br></br>
          &#169;2021</p>
          
        </footer>
      </div>
    </Router>
  );
}

export default App;
