import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { Principal } from './Principal/Principal';
import { Hospital } from './Hospital/Hospital';
import { Veterinaria } from './Veterinaria/Veterinaria';
export function App() {
  return (
      <Router>
          <div className="App" >

              <Routes>

                <Route exact path="/" element={<Principal />}/>
                <Route exact path="/Hospital" element={<Hospital />}/>
                <Route exact path="/Veterinaria" element={<Veterinaria />}/>
</Routes>

            </div>
      </Router>
  );
}