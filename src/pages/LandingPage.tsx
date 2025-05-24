import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calendar, CheckCircle, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

/**
 * Landing Page - Public-facing homepage
 * 
 * This page serves as:
 * - Main entry point for visitors
 * - Overview of the platform features
 * - Access point to login/signup
 * - Information about the academic portal
 */
const LandingPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      
      <div className="relative z-10 bg-gradient-to-b from-white/70 via-white/50 to-white/30 backdrop-blur-sm">
        {/* Navigation */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Logo size="lg" />
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline" className="border-brand-400 text-brand-600 hover:bg-brand-50">Log in</Button>
              </Link>
              <Link to="/login">
                <Button className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 shadow-md hover:shadow-lg transition-all">Get Started</Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Logo size="lg" showText={false} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">
              Maximize Your <span className="text-primary">Academic Success</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 animate-fade-in">
              Plan your courses, manage tasks, and collaborate with classmates.
              The all-in-one platform to organize your academic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/login">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 shadow-md hover:shadow-lg transition-all">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/course-scraper">
                <Button size="lg" variant="outline" className="gap-2 border-brand-400 text-brand-600 hover:bg-brand-50">
                  Try Course Scheduler
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white/50 rounded-3xl -z-10"></div>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">
            Everything You Need For Academic Success
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:translate-y-[-5px]">
              <Calendar className="h-10 w-10 text-brand-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-700">Smart Scheduling</h3>
              <p className="text-muted-foreground">
                Generate optimized course schedules that fit your availability and preferences.
              </p>
            </div>
            {/* <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:translate-y-[-5px] animation-delay-2000">
              <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-green-700">Task Management</h3>
              <p className="text-muted-foreground">
                Stay on top of assignments, readings, and exams with smart task tracking.
              </p>
            </div> */}
            <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:translate-y-[-5px] animation-delay-4000">
              <Users className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Study Groups</h3>
              <p className="text-muted-foreground">
                Connect with classmates, share notes, and organize study sessions.
              </p>
            </div>
            {/* <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:translate-y-[-5px]">
              <BookOpen className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-700">Course Materials</h3>
              <p className="text-muted-foreground">
                Access and organize all your course materials in one central location.
              </p>
            </div> */}
            <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:translate-y-[-5px] animation-delay-2000">
              <Clock className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Time Analytics</h3>
              <p className="text-muted-foreground">
                Visualize how you spend your time and optimize your study habits.
              </p>
            </div>
            {/* <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:translate-y-[-5px] animation-delay-4000">
              <ArrowRight className="h-10 w-10 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-pink-700">And More</h3>
              <p className="text-muted-foreground">
                Discover all the features designed to help you succeed academically.
              </p>
            </div> */}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 my-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-100/50 to-blue-100/50 rounded-3xl -z-10 backdrop-blur-sm"></div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Logo size="lg" showText={false} />
            </div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">Ready to transform your academic experience?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students who are already using Schedulak to excel in their studies.
            </p>
            <Link to="/login">
              <Button size="lg" className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 shadow-lg hover:shadow-xl transition-all px-8 py-6">Get Started Today</Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 border-t border-gray-100 bg-white/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Logo size="sm" />
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-500 transition-colors">About</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-500 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-500 transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-500 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
