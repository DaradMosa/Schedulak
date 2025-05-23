/**
 * Dashboard Page - Main home page after login
 * 
 * This page displays:
 * - Overview of student activity
 * - Recent announcements
 * - Upcoming deadlines
 * - Quick access to courses
 */
import CourseCard from "@/components/CourseCard";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to Computer Science",
      description: "Learn the fundamentals of computer science and programming.",
      instructor: "Dr. Smith",
      startDate: "2024-09-05",
      endDate: "2024-12-15",
      progress: 60,
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      description: "Explore advanced data structures and algorithm design.",
      instructor: "Prof. Johnson",
      startDate: "2024-09-05",
      endDate: "2024-12-15",
      progress: 30,
    },
    {
      id: 3,
      title: "Web Development with React",
      description: "Build modern web applications using React and JavaScript.",
      instructor: "Mr. Williams",
      startDate: "2024-09-05",
      endDate: "2024-12-15",
      progress: 80,
    },
  ]);

  useEffect(() => {
    // Simulate fetching courses from an API
    setTimeout(() => {
      setCourses([
        {
          id: 1,
          title: "Introduction to Computer Science",
          description: "Learn the fundamentals of computer science and programming.",
          instructor: "Dr. Smith",
          startDate: "2024-09-05",
          endDate: "2024-12-15",
          progress: 60,
        },
        {
          id: 2,
          title: "Data Structures and Algorithms",
          description: "Explore advanced data structures and algorithm design.",
          instructor: "Prof. Johnson",
          startDate: "2024-09-05",
          endDate: "2024-12-15",
          progress: 30,
        },
        {
          id: 3,
          title: "Web Development with React",
          description: "Build modern web applications using React and JavaScript.",
          instructor: "Mr. Williams",
          startDate: "2024-09-05",
          endDate: "2024-12-15",
          progress: 80,
        },
        {
          id: 4,
          title: "Mobile App Development with React Native",
          description: "Create cross-platform mobile apps using React Native.",
          instructor: "Mrs. Davis",
          startDate: "2024-09-05",
          endDate: "2024-12-15",
          progress: 15,
        },
      ]);
    }, 500);
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Dashboard;
