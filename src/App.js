import "./App.css";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Home from "./Components/Homepage/Home";




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      
      <Router>
        
        
        <Routes>
        
         
          <Route
          
          
            path="/"
            element={
              userstate && userstate._id ? (
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
          
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route 
          path="/Home"
          ></Route>
          
          
          
          {/* <Route path="/signup" element={<Register />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
