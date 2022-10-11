import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserScreen from "./Components/UserScreen";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserScreen />} />
      </Routes>
    </Router>
  );
}

export default App;

// https://jobless-nerd.onrender.com/api/users/login
