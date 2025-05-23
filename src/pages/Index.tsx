
/**
 * Index Page - Entry point redirect
 * 
 * This page:
 * - Serves as the application root route
 * - Redirects users to the Dashboard
 * - Acts as a router entry point
 */
import React from "react";
import { Navigate } from "react-router-dom";

const Index = () => {
  return <Navigate to="/dashboard" replace />;
};

export default Index;
