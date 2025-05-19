import { Route, Routes, Navigate} from "react-router";

/**
 * This module is responsible for the routing of the application.
 * @returns {JSX.Element}
 * @author Roger Mestanza
 */
export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/signup" element={<h1>Register</h1>} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}