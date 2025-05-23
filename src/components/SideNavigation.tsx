
import { Link, useLocation } from "react-router-dom";
import { Home, MessageSquare, FileText, Search, User } from "lucide-react";

const SideNavigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col h-full p-4 gap-4">
      <nav className="flex flex-col gap-2">
        <Link
          to="/community"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
            isActive("/community") 
              ? "bg-white/50 shadow-sm" 
              : "hover:bg-white/50"
          }`}
        >
          <div className={`p-2 rounded-lg transition-colors ${
            isActive("/community") 
              ? "bg-pink-200 text-pink-700" 
              : "bg-pink-100 text-pink-700 group-hover:bg-pink-200"
          }`}>
            <MessageSquare className="h-5 w-5" />
          </div>
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link
          to="/course-scraper"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
            isActive("/course-scraper") 
              ? "bg-white/50 shadow-sm" 
              : "hover:bg-white/50"
          }`}
        >
          <div className={`p-2 rounded-lg transition-colors ${
            isActive("/course-scraper") 
              ? "bg-purple-200 text-purple-700" 
              : "bg-purple-100 text-purple-700 group-hover:bg-purple-200"
          }`}>
            <Search className="h-5 w-5" />
          </div>
          <span className="font-medium">Course Scraper</span>
        </Link>
        <Link
          to="/materials"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
            isActive("/materials") 
              ? "bg-white/50 shadow-sm" 
              : "hover:bg-white/50"
          }`}
        >
          <div className={`p-2 rounded-lg transition-colors ${
            isActive("/materials") 
              ? "bg-amber-200 text-amber-700" 
              : "bg-amber-100 text-amber-700 group-hover:bg-amber-200"
          }`}>
            <FileText className="h-5 w-5" />
          </div>
          <span className="font-medium">Materials</span>
        </Link>
        <Link
          to="/profile"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
            isActive("/profile") 
              ? "bg-white/50 shadow-sm" 
              : "hover:bg-white/50"
          }`}
        >
          <div className={`p-2 rounded-lg transition-colors ${
            isActive("/profile") 
              ? "bg-blue-200 text-blue-700" 
              : "bg-blue-100 text-blue-700 group-hover:bg-blue-200"
          }`}>
            <User className="h-5 w-5" />
          </div>
          <span className="font-medium">My Profile</span>
        </Link>
      </nav>
    </div>
  );
};

export default SideNavigation;
