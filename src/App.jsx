import React from "react";
import Login from './Login.jsx'
import useLocalStorage from "./hooks/useLocalStorage.js";
import Dashboard from "./Dashboard.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [id, setId] = useLocalStorage('id')

  return (
    
  id ? <Dashboard id={id} /> : <Login onIdSubmit={setId}></Login>
    
  )
}






// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";