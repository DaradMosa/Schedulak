
import { MessageSquare, Menu, User, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import Logo from "./Logo";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 sm:max-w-md">
              <SideNavigation />
            </SheetContent>
          </Sheet>
          
          <Logo />
        </div>

        {/* <nav className="hidden md:flex items-center gap-6">
          <Link to="/community" className={`text-sm font-medium transition-colors ${location.pathname === "/community" ? "text-brand-600" : "hover:text-brand-500"}`}>
            Dashboard
          </Link>
          <Link to="/course-scraper" className={`text-sm font-medium transition-colors ${location.pathname === "/course-scraper" ? "text-brand-600" : "hover:text-brand-500"}`}>
            Course Scraper
          </Link>
          <Link to="/materials" className={`text-sm font-medium transition-colors ${location.pathname === "/materials" ? "text-brand-600" : "hover:text-brand-500"}`}>
            Materials
          </Link>
          <Link to="/profile" className={`text-sm font-medium transition-colors ${location.pathname === "/profile" ? "text-brand-600" : "hover:text-brand-500"}`}>
            Profile
          </Link>
        </nav> */}

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <MessageSquare className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                <span className="sr-only">Community Alerts</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    Profile
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button variant="default" size="sm" className="gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700" onClick={() => navigate("/login")}>
              <LogIn className="h-4 w-4" />
              Log In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
