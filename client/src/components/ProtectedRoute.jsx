import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" />;
  if (allowedRole) {
    const allowed = Array.isArray(allowedRole) ? allowedRole : [allowedRole];
    if (!allowed.includes(role)) return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
