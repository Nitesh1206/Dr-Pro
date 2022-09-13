import React,{createContext, useContext, useReducer} from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Ourteam from './pages/Ourteam';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Patient from './pages/Patient';
import DoctorDetails from './pages/DoctorDetails';
import Header from './Header';
import Footer from './Footer';
import {PatientContext} from './context/PatientContext'
import {AuthContext} from './context/AuthContext'
import LoginPopup from "./pages/LoginPopup";
import UpdatePage from "./pages/UpdatePage";
import { ToggleContext } from "./context/ToggleContext";

function App() {

// const UserContext = useContext();
// const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Router>
       <AuthContext>
      <PatientContext>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about"  component={About} />
          <Route exact path="/contact"  component={Contact} />
          <Route exact path="/ourteam"  component={Ourteam} />
          <Route exact path="/signup"  component={Signup} />
          <Route exact path="/login"  component={Login} />
          <Route exact path="/patient"  component={Patient} />
          <Route exact path="/doctordetails/:id"  component={DoctorDetails} />
          <Route exact path="/loginpopup" component={LoginPopup} />
          <Route exact path="/updatepage" component={UpdatePage} />
        </Switch>
        </PatientContext>
        </AuthContext>
      <Footer />
    </Router>    
  );
}

export default App;
