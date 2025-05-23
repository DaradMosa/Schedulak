
/**
 * Layout Component - Main application structure wrapper
 * 
 * This component provides:
 * - Consistent layout for all protected pages
 * - Top navigation bar
 * - Side navigation panel
 * - Decorative background elements
 * - Content container with styling
 */
import { ReactNode } from "react";
import Navbar from "./Navbar";
import SideNavigation from "./SideNavigation";

/**
 * Layout Component Props
 * @property {ReactNode} children - Child components to render within the layout
 */
interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout Component - Main layout structure for the application
 * 
 * This component:
 * 1. Creates the overall page structure
 * 2. Adds decorative background elements (colorful blobs)
 * 3. Places the Navbar at the top
 * 4. Renders the SideNavigation on the left (hidden on mobile)
 * 5. Centers the main content with styling
 * 
 * @param {LayoutProps} props - Component props
 * @returns {JSX.Element} Layout component with children
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Decorative background elements - colorful blobs with animation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      
      {/* Top navigation bar */}
      <Navbar />
      
      {/* Main content area with sidebar */}
      <div className="flex flex-1 z-10">
        {/* Side navigation - hidden on mobile screens */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-white/30 backdrop-blur-md">
          <SideNavigation />
        </aside>
        
        {/* Main content area with glass effect styling */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
