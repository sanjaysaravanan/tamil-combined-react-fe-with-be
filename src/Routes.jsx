import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentListApp from "./pages/students/App.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import TeacherList from "./pages/teachers/App.jsx";
import Home from "./pages/home/Home.jsx";
import VerifyAccount from "./pages/verify-account/VerifyAccount.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute component={<Home />} />} />
        <Route
          path="/students"
          element={<ProtectedRoute component={<StudentListApp />} />}
        />
        <Route
          path="/teachers"
          element={<ProtectedRoute component={<TeacherList />} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
