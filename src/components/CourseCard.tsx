
/**
 * CourseCard Component - Displays information about a course
 * 
 * This component:
 * - Renders details about a specific course
 * - Shows progress information
 * - Displays instructor name and course dates
 * - Contains action buttons for course interaction
 */
import { Calendar, Clock, User } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

// Define the Course type for proper typing
interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  startDate: string;
  endDate: string;
  progress: number;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {/* Course metadata */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-muted-foreground">Instructor:</span>
            <span className="ml-1 font-medium">{course.instructor}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-muted-foreground">Duration:</span>
            <span className="ml-1 font-medium">
              {formatDate(course.startDate)} - {formatDate(course.endDate)}
            </span>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Course Progress</span>
            <span className="text-sm font-medium">{course.progress}%</span>
          </div>
          <Progress value={course.progress} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <Clock className="mr-2 h-4 w-4" />
          View Details
        </Button>
        <Button size="sm">
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
