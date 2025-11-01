import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SellerDashboard from "./pages/SellerDashboard";
import SellerActivity from "./pages/SellerActivity";
import SellerServices from "./pages/SellerServices";
import SellerRewards from "./pages/SellerRewards";
import SellerHelp from "./pages/SellerHelp";
import SellerCollectors from "./pages/SellerCollectors";
import SellerProfile from "./pages/SellerProfile";
import Logout from "./pages/Logout";
import CollectorDashboard from "./pages/CollectorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/seller/dashboard"
            element={
              <ProtectedRoute allowedRole={["seller", "seller&collector"]}>
                <SellerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller/activity"
            element={
              <ProtectedRoute allowedRole={["seller", "seller&collector"]}>
                <SellerActivity />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller/services"
            element={
              <ProtectedRoute allowedRole={["seller", "seller&collector"]}>
                <SellerServices />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller/collectors"
            element={
              <ProtectedRoute allowedRole={["seller", "seller&collector"]}>
                <SellerCollectors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller/rewards"
            element={
              <ProtectedRoute allowedRole={["seller", "seller&collector"]}>
                <SellerRewards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller/profile"
            element={
              <ProtectedRoute allowedRole={["seller", "seller&collector"]}>
                <SellerProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/collector/dashboard"
            element={
              <ProtectedRoute allowedRole={["collector", "seller&collector"]}>
                <CollectorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRole={"admin"}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller/help"
            element={
              <ProtectedRoute allowedRole={["seller", "seller&collector"]}>
                <SellerHelp />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/seller/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
