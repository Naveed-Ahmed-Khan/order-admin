import { Navigate, Route, Routes } from "react-router-dom";
import Business from "./pages/Business";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Login from "./pages/Login";
import New from "./pages/New";
import Signup from "./pages/Signup";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      {/* Login  */}
      {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<Dashboard />}>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/business" element={<Business />} />
        <Route path="/items" element={<Items />} />

        {/* <Route path="/approved-appointments" element={<Approved />} />
        <Route path="/admin" element={<UserDetails />} />
        <Route path="/chat" element={<ChatPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
