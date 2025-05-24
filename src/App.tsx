
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import Community from "./pages/Community";
import Materials from "./pages/Materials";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CourseScraper from "./pages/CourseScraper";
import LandingPage from "./pages/LandingPage";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <BrowserRouter basename="/Schedulak">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            
            {/* Protected routes wrapped in Layout component */}
            <Route path="/community" element={<Layout><Community /></Layout>} />
            <Route path="/course-scraper" element={<Layout><CourseScraper /></Layout>} />
            <Route path="/materials" element={<Layout><Materials /></Layout>} />
            <Route path="/profile" element={<Layout><Profile /></Layout>} />
            
            {/* Admin routes with AdminLayout (no sidebar) */}
            <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
            
            {/* Fallback route for 404 errors */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
