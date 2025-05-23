
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Clock, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const coursesData = [
  {
    id: 1,
    title: "Mathematics 101",
    description: "Fundamentals of Algebra and Calculus",
    instructor: "Dr. Jane Smith",
    credits: 3,
    schedule: "Mon, Wed, Fri 10:00 AM - 11:30 AM",
    students: 32,
    progress: 68,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Computer Science 202",
    description: "Algorithms and Data Structures",
    instructor: "Prof. John Doe",
    credits: 4,
    schedule: "Tue, Thu 1:00 PM - 3:00 PM",
    students: 28,
    progress: 52,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Literature 105",
    description: "Introduction to Modern Literature",
    instructor: "Dr. Emily Brown",
    credits: 3,
    schedule: "Mon, Wed 2:00 PM - 3:30 PM",
    students: 45,
    progress: 78,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Physics 201",
    description: "Mechanics and Thermodynamics",
    instructor: "Dr. Robert Wilson",
    credits: 4,
    schedule: "Tue, Thu 10:00 AM - 12:00 PM",
    students: 30,
    progress: 45,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "History 103",
    description: "World History: 1900 to Present",
    instructor: "Prof. Sarah Johnson",
    credits: 3,
    schedule: "Fri 1:00 PM - 4:00 PM",
    students: 50,
    progress: 89,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Psychology 101",
    description: "Introduction to Psychology",
    instructor: "Dr. Michael Davis",
    credits: 3,
    schedule: "Mon, Wed 11:00 AM - 12:30 PM",
    students: 60,
    progress: 0,
    status: "Not Started",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
  },
];

const Courses = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <p className="text-muted-foreground">
          Browse and manage your current and upcoming courses.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button>Register for New Courses</Button>
        <Button variant="outline">View Schedule</Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((course) => (
          <Card key={course.id} className="course-card overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{course.title}</CardTitle>
                <Badge variant={course.status === "In Progress" ? "default" : "secondary"}>
                  {course.status}
                </Badge>
              </div>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Instructor</p>
                  <p className="text-sm text-muted-foreground">{course.instructor}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{course.credits} credits</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{course.students} students</span>
                  </div>
                </div>
                {course.progress > 0 && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">Details</Button>
              <Button size="sm">Go to Course</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
