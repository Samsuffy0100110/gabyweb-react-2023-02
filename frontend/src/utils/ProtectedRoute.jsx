import { ProjectDashboard } from "@pages/admin/projectDashboard/ProjectDashboard";
import { ProjectUpdate } from "@pages/admin/projectUpdate/ProjectUpdate";
import { ProjectView } from "@pages/admin/projectView/ProjectView";
import { ProjectNew } from "@pages/admin/projectNew/ProjectNew";
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
            <Route path="/projects" element={<ProjectDashboard />} />
            <Route path="/project/new" element={<ProjectNew />} />
            <Route path="/project/:id/update" element={<ProjectUpdate />} />
            <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
    );
}
