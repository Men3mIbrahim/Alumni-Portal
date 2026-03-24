import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {

  if (!localStorage.getItem("userToken")) {
    return <Navigate to="/login" />;
  }

  return children;
}