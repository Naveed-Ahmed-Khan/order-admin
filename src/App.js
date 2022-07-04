import { Navigate, Route, Routes } from "react-router-dom";
import AddItem from "./pages/AddItem";
import AllGalleries from "./pages/AllGalleries";
import Business from "./pages/Business";
import BusinessDashboard from "./pages/BusinessDashboard";
import BusinessHome from "./pages/BusinessHome";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      {/* Login  */}
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<Dashboard />}>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/business" element={<Business />} />
        <Route path="/items" element={<Items />} />
      </Route>
      <Route path="/dashboard" element={<BusinessDashboard />}>
        <Route path="/dashboard/home" element={<BusinessHome />} />
        <Route path="/dashboard/items" element={<AllGalleries />} />
        <Route path="/dashboard/add-item" element={<AddItem />} />
      </Route>
    </Routes>
  );
}

export default App;
