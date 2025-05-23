
import { Material } from "@/types/materials";

/**
 * Mock Materials Data
 * 
 * This array contains sample material objects used for development and testing.
 * In a production application, this data would likely come from an API or database.
 * 
 * The mock data includes:
 * - Various course documents (syllabi, notes, manuals)
 * - Presentations (timelines)
 * - Timetables for different courses and departments
 * 
 * Each item contains all the properties defined in the Material interface.
 */
export const mockMaterials: Material[] = [
  {
    id: 1,
    title: "Mathematics Course Syllabus",
    type: "document",
    course: "Mathematics 101",
    uploadedDate: "2025-03-01",
    size: "245 KB",
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Mathematics Lecture Notes - Week 1",
    type: "document",
    course: "Mathematics 101",
    uploadedDate: "2025-03-05",
    size: "1.2 MB",
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Mathematics Lecture Notes - Week 2",
    type: "document",
    course: "Mathematics 101",
    uploadedDate: "2025-03-12",
    size: "1.5 MB",
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Physics Lab Manual",
    type: "document",
    course: "Physics 201",
    uploadedDate: "2025-03-02",
    size: "3.8 MB",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Computer Science Algorithm Examples",
    type: "document",
    course: "Computer Science 202",
    uploadedDate: "2025-03-08",
    size: "567 KB",
    downloadUrl: "#",
  },
  {
    id: 6,
    title: "Literature Reading List",
    type: "document",
    course: "Literature 105",
    uploadedDate: "2025-03-03",
    size: "124 KB",
    downloadUrl: "#",
  },
  {
    id: 7,
    title: "History Timeline Presentation",
    type: "presentation",
    course: "History 103",
    uploadedDate: "2025-03-10",
    size: "4.2 MB",
    downloadUrl: "#",
  },
  {
    id: 8,
    title: "Spring 2025 Course Schedule",
    type: "timetable",
    course: "All Courses",
    uploadedDate: "2025-02-15",
    size: "380 KB",
    downloadUrl: "#",
  },
  {
    id: 9,
    title: "Computer Science Department Timetable",
    type: "timetable",
    course: "Computer Science",
    uploadedDate: "2025-02-20",
    size: "275 KB",
    downloadUrl: "#",
  },
  {
    id: 10,
    title: "Engineering Courses Timetable",
    type: "timetable",
    course: "Engineering",
    uploadedDate: "2025-02-18",
    size: "310 KB",
    downloadUrl: "#",
  },
];
