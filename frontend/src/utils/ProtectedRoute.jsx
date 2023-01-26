import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Admin } from "../pages/admin/Admin";
export function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        setIsAuthenticated(true);
    } else {
        navigate("/login");
    }
    }, [navigate]);

    return (
        <Routes>
            <Route path="/" element={<Admin />} />
        </Routes>
    );
}
