import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentListApp from "./pages/students/App.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute component={<StudentListApp />} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
