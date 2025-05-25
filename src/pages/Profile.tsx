
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap, Clock, CheckCircle } from "lucide-react";

const Profile = () => {
  // Mock user data
  const user = {
    name: "Mosa",
    id: "0222634",
    major: "Business Information Techonolgy",
    totalCredits: 132,
    completedCredits: 99,
    remainingCredits: 33,
  };

  const courses = [
    { name: "Introduction to Programming", credits: 3, completed: true, grade: "A" },
    { name: "Data Structures", credits: 3, completed: true, grade: "B+" },
    { name: "Algorithms", credits: 3, completed: true, grade: "A-" },
    { name: "Database Systems", credits: 3, completed: false, grade: null },
    { name: "Software Engineering", credits: 3, completed: false, grade: null },
    { name: "Computer Networks", credits: 3, completed: false, grade: null },
    { name: "Machine Learning", credits: 3, completed: false, grade: null },
    { name: "Capstone Project", credits: 6, completed: false, grade: null },
  ];

  const completedCourses = courses.filter(course => course.completed);
  const remainingCourses = courses.filter(course => !course.completed);
  const progressPercentage = (user.completedCredits / user.totalCredits) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <User className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold">My Profile</h1>
      </div>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Full Name</p>
            <p className="font-medium">{user.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Student ID</p>
            <p className="font-medium">{user.id}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Major</p>
            <p className="font-medium">{user.major}</p>
          </div>
        </CardContent>
      </Card>

      {/* Academic Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Academic Progress
          </CardTitle>
          <CardDescription>
            Track your progress towards graduation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{user.completedCredits}</div>
              <p className="text-sm text-muted-foreground">Credits Completed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{user.remainingCredits}</div>
              <p className="text-sm text-muted-foreground">Credits Remaining</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{user.totalCredits}</div>
              <p className="text-sm text-muted-foreground">Total Credits Required</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="w-full" />
          </div>
        </CardContent>
      </Card>

      {/* Completed Courses */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Completed Courses ({completedCourses.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {completedCourses.map((course, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-green-50">
                <div>
                  <h3 className="font-medium">{course.name}</h3>
                  <p className="text-sm text-muted-foreground">{course.credits} credits</p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {course.grade}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Remaining Courses */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-600" />
            Remaining Courses ({remainingCourses.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {remainingCourses.map((course, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h3 className="font-medium">{course.name}</h3>
                  <p className="text-sm text-muted-foreground">{course.credits} credits</p>
                </div>
                <Badge variant="outline">
                  Pending
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
