import { ProjectDashboard } from "@pages/admin/project/projectDashboard/ProjectDashboard";
import { ServiceDashboard } from "@pages/admin/service/serviceDashboard/ServiceDashboard";
import { ReviewDashboard } from "@pages/admin/review/reviewDashboard/ReviewDashboard";
import { ProjectUpdate } from "@pages/admin/project/projectUpdate/ProjectUpdate";
import { ServiceUpdate } from "@pages/admin/service/serviceUpdate/ServiceUpdate";
import { ReviewUpdate } from "@pages/admin/review/reviewUpdate/ReviewUpdate";
import { ProjectView } from "@pages/admin/project/projectView/ProjectView";
import { ProjectNew } from "@pages/admin/project/projectNew/ProjectNew";
import { ServiceNew } from "@pages/admin/service/serviceNew/ServiceNew";
import { ReviewNew } from "@pages/admin/review/reviewNew/ReviewNew";
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
            <Route path="/services" element={<ServiceDashboard />} />
            <Route path="/service/new" element={<ServiceNew />} />
            <Route path="/service/:id/update" element={<ServiceUpdate />} />
            <Route path="/reviews" element={<ReviewDashboard />} />
            <Route path="/review/new" element={<ReviewNew />} />
            <Route path="/review/:id/update" element={<ReviewUpdate />} />
        </Routes>
    );
}
