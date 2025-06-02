import { Route, Routes, Navigate } from "react-router-dom";
import { DashboardPageComponent } from "../../domains/dashboard";

/**
 * This module is responsible for the routing of the application.
 * @returns {JSX.Element}
 * @author Roger Mestanza
 */
export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<DashboardPageComponent />} >
                <Route index element={<DashboardPageComponent />} />
                <Route path="dashboard" element={<DashboardPageComponent />} />
            </Route>
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/signup" element={<h1>Register</h1>} />

            {/* Fall back */}
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}