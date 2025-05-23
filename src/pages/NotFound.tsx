
/**
 * NotFound Page - 404 error page
 * 
 * This page appears when:
 * - User navigates to a non-existent URL
 * - A resource is not available
 * - Provides navigation back to valid areas
 */
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

/**
 * NotFound Component - 404 page when routes don't match
 * 
 * This component:
 * 1. Displays a user-friendly 404 error page
 * 2. Logs the attempted route to the console for debugging
 * 3. Provides a button to navigate back to the home page
 * 4. Uses decorative styling with gradient backgrounds
 * 
 * @returns {JSX.Element} 404 page component
 */
const NotFound = () => {
  // Get the current location to log the attempted URL
  const location = useLocation();

  // Log 404 errors to console for debugging
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white/60 backdrop-blur-md p-12 rounded-xl shadow-xl max-w-md w-full text-center">
        {/* Warning icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
        </div>
        
        {/* Error message */}
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-gray-700 mb-8">Oops! We couldn't find the page you're looking for.</p>
        
        {/* Return home button */}
        <Link to="/">
          <Button className="w-full py-6 text-lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
