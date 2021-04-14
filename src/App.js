import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import Login from "./Login";
import {useState} from 'react';
function App() {

var [user,setuser ]=useState()
var [loginstatus,setloginstatus ]=useState(false)
function LoginDone(data)  {
  setuser(data)
  setloginstatus(true)
}
  return (
   <div className="app">
     <Navbar loginstatus={loginstatus} user={user}/>
     {/* <SignUp /> */}
     <Login informlogin={LoginDone} />
     <Home />
   </div>
  );
}

export default App;
