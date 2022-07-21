import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { Principal } from './Principal/Principal';
export function App() {
  return (
      <Router>
          <div className="App" >

              <Routes>

                <Route exact path="/" element={<Principal />}/>
</Routes>

            </div>
      </Router>
  );
}