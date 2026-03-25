import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
    const { isAuthenticated, userRole, loading } = useAuth();

    if (loading) return null;

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/home" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
