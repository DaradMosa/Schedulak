/**
 * Course Scraper Page - Find and register for courses
 * 
 * This tool allows students to:
 * - Search available courses by department or keyword
 * - View course details and prerequisites
 * - Check course schedules and availability
 * - Add courses to registration cart
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Calendar, Clock, BookOpen, Check, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ScrapedCourse {
  id: string;
  code: string;
  title: string;
  credits: number;
  instructor: string;
  schedule: string;
  availability: number;
  startTime: string;
  endTime: string;
}

interface ScheduleDay {
  day: string;
  slots: ScheduleSlot[];
}

interface ScheduleSlot {
  courseId: string;
  courseCode: string;
  courseTitle: string;
  startTime: string;
  endTime: string;
  instructor: string;
}

interface ScheduleOption {
  id: string;
  totalCredits: number;
  courseCodes: string[];
  days: ScheduleDay[];
}

const HOURS = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
];

const CourseScraper = () => {
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [results, setResults] = useState<ScrapedCourse[]>([]);
  const [scheduleOptions, setScheduleOptions] = useState<ScheduleOption[]>([]);
  
  // Time preferences
  const [startTime, setStartTime] = useState("8:00 AM");
  const [endTime, setEndTime] = useState("6:00 PM");
  const [selectedDays, setSelectedDays] = useState<string[]>(["Sunday", "Tuesday", "Thursday"]);
  const [creditTarget, setCreditTarget] = useState(15);

  const toggleDay = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day) 
        : [...prev, day]
    );
  };

  // Mock database of courses
  const mockCourseDatabase: ScrapedCourse[] = [
    {
      id: "cs101",
      code: "CS 101",
      title: "Introduction to Computer Science",
      credits: 3,
      instructor: "Dr. Alan Turing",
      schedule: "Sun, Tue 10:00 AM - 11:30 AM",
      availability: 15,
      startTime: "10:00 AM",
      endTime: "11:30 AM"
    },
    {
      id: "cs201",
      code: "CS 201",
      title: "Data Structures and Algorithms",
      credits: 4,
      instructor: "Prof. Ada Lovelace",
      schedule: "Mon, Wed 1:00 PM - 3:00 PM",
      availability: 8,
      startTime: "1:00 PM",
      endTime: "3:00 PM"
    },
    {
      id: "math241",
      code: "MATH 241",
      title: "Calculus III",
      credits: 4,
      instructor: "Dr. Katherine Johnson",
      schedule: "Sun, Tue, Thu 9:00 AM - 10:00 AM",
      availability: 23,
      startTime: "9:00 AM",
      endTime: "10:00 AM"
    },
    {
      id: "phys211",
      code: "PHYS 211",
      title: "General Physics I",
      credits: 4,
      instructor: "Prof. Richard Feynman",
      schedule: "Mon, Wed 10:00 AM - 12:00 PM",
      availability: 12,
      startTime: "10:00 AM",
      endTime: "12:00 PM"
    },
    {
      id: "eng102",
      code: "ENG 102",
      title: "Academic Writing and Research",
      credits: 3,
      instructor: "Dr. Emily Dickinson",
      schedule: "Wed 1:00 PM - 4:00 PM",
      availability: 20,
      startTime: "1:00 PM",
      endTime: "4:00 PM"
    },
    {
      id: "hist101",
      code: "HIST 101",
      title: "World History I",
      credits: 3,
      instructor: "Dr. Howard Zinn",
      schedule: "Sun, Thu 2:00 PM - 3:15 PM",
      availability: 18,
      startTime: "2:00 PM",
      endTime: "3:15 PM"
    },
    {
      id: "chem101",
      code: "CHEM 101",
      title: "General Chemistry",
      credits: 4,
      instructor: "Dr. Marie Curie",
      schedule: "Mon, Wed 3:30 PM - 5:00 PM",
      availability: 10,
      startTime: "3:30 PM",
      endTime: "5:00 PM"
    },
    {
      id: "psych101",
      code: "PSYCH 101",
      title: "Introduction to Psychology",
      credits: 3,
      instructor: "Dr. Carl Jung",
      schedule: "Tue, Thu 8:00 AM - 9:15 AM",
      availability: 25,
      startTime: "8:00 AM",
      endTime: "9:15 AM"
    },
    {
      id: "bio101",
      code: "BIO 101",
      title: "Introduction to Biology",
      credits: 4,
      instructor: "Dr. Jane Goodall",
      schedule: "Sun, Thu 11:00 AM - 12:30 PM",
      availability: 16,
      startTime: "11:00 AM",
      endTime: "12:30 PM"
    },
    {
      id: "art105",
      code: "ART 105",
      title: "Art History",
      credits: 3,
      instructor: "Prof. Leonardo da Vinci",
      schedule: "Mon 9:00 AM - 12:00 PM",
      availability: 22,
      startTime: "9:00 AM",
      endTime: "12:00 PM"
    },
    {
      id: "econ101",
      code: "ECON 101",
      title: "Principles of Economics",
      credits: 3,
      instructor: "Dr. Adam Smith",
      schedule: "Tue, Thu 1:00 PM - 2:15 PM",
      availability: 19,
      startTime: "1:00 PM",
      endTime: "2:15 PM"
    },
    {
      id: "phil201",
      code: "PHIL 201",
      title: "Ethics",
      credits: 3,
      instructor: "Dr. Aristotle",
      schedule: "Wed 10:00 AM - 1:00 PM",
      availability: 20,
      startTime: "10:00 AM",
      endTime: "1:00 PM"
    }
  ];

  // This function filters courses based on time and days
  const filterCoursesByTimeAndDays = () => {
    return mockCourseDatabase.filter(course => {
      // Filter by time
      const courseStartTime = new Date(`01/01/2023 ${course.startTime}`).getTime();
      const courseEndTime = new Date(`01/01/2023 ${course.endTime}`).getTime();
      const prefStartTime = new Date(`01/01/2023 ${startTime}`).getTime();
      const prefEndTime = new Date(`01/01/2023 ${endTime}`).getTime();
      
      const isWithinTimeRange = courseStartTime >= prefStartTime && courseEndTime <= prefEndTime;
      
      // Filter by selected days
      const dayMatches = selectedDays.some(day => {
        const shortDay = day.substring(0, 3);
        return course.schedule.includes(shortDay);
      });
      
      return isWithinTimeRange && dayMatches;
    });
  };

  // Find courses that match time and day requirements
  const findAvailableCourses = () => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const filteredResults = filterCoursesByTimeAndDays();
      setResults(filteredResults);
      setLoading(false);
      
      toast({
        title: "Available Courses Found",
        description: `Found ${filteredResults.length} courses matching your day and time preferences.`,
        duration: 3000
      });
    }, 1500);
  };

  // Generate multiple optimal schedule options
  const generateScheduleOptions = () => {
    if (selectedDays.length === 0) {
      toast({
        title: "No Days Selected",
        description: "Please select at least one day to generate schedules.",
        variant: "destructive",
        duration: 3000
      });
      return;
    }

    setGenerating(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const availableCourses = filterCoursesByTimeAndDays();
      
      if (availableCourses.length === 0) {
        toast({
          title: "No Courses Available",
          description: "No courses match your time and day preferences.",
          variant: "destructive",
          duration: 3000
        });
        setGenerating(false);
        return;
      }
      
      // Create multiple schedule options
      const options: ScheduleOption[] = [];
      
      // Helper function to check time conflicts
      const hasTimeConflict = (existingCourses: ScrapedCourse[], newCourse: ScrapedCourse): boolean => {
        for (const course of existingCourses) {
          // Check if they share any days
          const courseDays = course.schedule.split(",").map(d => d.trim().substring(0, 3));
          const newCourseDays = newCourse.schedule.split(",").map(d => d.trim().substring(0, 3));
          
          const sharedDays = courseDays.filter(day => newCourseDays.includes(day));
          
          if (sharedDays.length === 0) continue;
          
          // Check time overlap on shared days
          const courseStart = new Date(`01/01/2023 ${course.startTime}`).getTime();
          const courseEnd = new Date(`01/01/2023 ${course.endTime}`).getTime();
          const newCourseStart = new Date(`01/01/2023 ${newCourse.startTime}`).getTime();
          const newCourseEnd = new Date(`01/01/2023 ${newCourse.endTime}`).getTime();
          
          if (
            (newCourseStart >= courseStart && newCourseStart < courseEnd) ||
            (newCourseEnd > courseStart && newCourseEnd <= courseEnd) ||
            (newCourseStart <= courseStart && newCourseEnd >= courseEnd)
          ) {
            return true;
          }
        }
        return false;
      };
      
      // Generate 3 different schedule options
      for (let attempt = 0; attempt < 20 && options.length < 3; attempt++) {
        const selectedCourses: ScrapedCourse[] = [];
        let totalCredits = 0;
        
        // Randomly shuffle available courses
        const shuffledCourses = [...availableCourses].sort(() => Math.random() - 0.5);
        
        // Try to add courses until we reach credit target or can't add more
        for (const course of shuffledCourses) {
          if (
            totalCredits + course.credits <= creditTarget + 1 && // Allow 1 credit over target
            !hasTimeConflict(selectedCourses, course)
          ) {
            selectedCourses.push(course);
            totalCredits += course.credits;
          }
          
          // Break if we've reached our target credits
          if (totalCredits >= creditTarget) break;
        }
        
        // Only add this as an option if it's unique and has enough credits (at least creditTarget - 3)
        if (selectedCourses.length > 0 && totalCredits >= creditTarget - 3) {
          const courseCodes = selectedCourses.map(c => c.code);
          
          // Check if this option is unique
          const isUnique = !options.some(option => 
            JSON.stringify(option.courseCodes.sort()) === JSON.stringify(courseCodes.sort())
          );
          
          if (isUnique) {
            // Create days based on selected days
            const scheduleDays: ScheduleDay[] = selectedDays.map(day => ({ day, slots: [] }));
            
            // Add courses to schedule
            selectedCourses.forEach(course => {
              const matchingDays = selectedDays.filter(day => 
                course.schedule.includes(day.substring(0, 3))
              );
              
              matchingDays.forEach(day => {
                const dayIndex = selectedDays.indexOf(day);
                if (dayIndex !== -1) {
                  scheduleDays[dayIndex].slots.push({
                    courseId: course.id,
                    courseCode: course.code,
                    courseTitle: course.title,
                    startTime: course.startTime,
                    endTime: course.endTime,
                    instructor: course.instructor
                  });
                }
              });
            });
            
            // Sort slots by start time
            scheduleDays.forEach(day => {
              day.slots.sort((a, b) => {
                const timeA = new Date(`01/01/2023 ${a.startTime}`).getTime();
                const timeB = new Date(`01/01/2023 ${b.startTime}`).getTime();
                return timeA - timeB;
              });
            });
            
            options.push({
              id: `option-${options.length + 1}`,
              totalCredits,
              courseCodes,
              days: scheduleDays
            });
          }
        }
      }
      
      setScheduleOptions(options);
      setGenerating(false);
      
      if (options.length > 0) {
        toast({
          title: "Schedule Options Generated",
          description: `Created ${options.length} different schedule options based on your preferences.`,
          duration: 3000
        });
      } else {
        toast({
          title: "No Schedules Created",
          description: "Could not create valid schedules with your constraints. Try adjusting your preferences.",
          variant: "destructive",
          duration: 3000
        });
      }
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Course Scheduler</h1>
        <p className="text-muted-foreground">
          Specify your available days and times, and we'll suggest optimized course schedules for you.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Set Your Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label className="text-base mb-2 block">Select Available Days</Label>
              <div className="flex flex-wrap gap-2">
                {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"].map((day) => (
                  <Button
                    key={day}
                    variant={selectedDays.includes(day) ? "default" : "outline"}
                    className="flex items-center gap-1.5"
                    onClick={() => toggleDay(day)}
                  >
                    <Calendar className="h-4 w-4" />
                    {day}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base mb-2 block">Time Range</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div>
                      <Label htmlFor="start-time" className="text-sm">From</Label>
                      <select 
                        id="start-time"
                        className="w-full p-2 border rounded mt-1"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                      >
                        {HOURS.slice(0, -1).map(hour => (
                          <option key={hour} value={hour}>{hour}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="end-time" className="text-sm">To</Label>
                      <select 
                        id="end-time"
                        className="w-full p-2 border rounded mt-1"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                      >
                        {HOURS.slice(1).map(hour => (
                          <option key={hour} value={hour}>{hour}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="credit-target" className="text-sm">Target Credits</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input 
                      id="credit-target"
                      type="number" 
                      min={9} 
                      max={21} 
                      value={creditTarget}
                      onChange={(e) => setCreditTarget(parseInt(e.target.value) || 15)}
                      className="w-24"
                    />
                    <span className="text-sm text-muted-foreground">(9-21 recommended)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <Button 
                onClick={findAvailableCourses} 
                variant="outline" 
                disabled={loading || selectedDays.length === 0}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Finding Courses...
                  </>
                ) : (
                  <>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Find Available Courses
                  </>
                )}
              </Button>
              
              <Button 
                onClick={generateScheduleOptions} 
                disabled={generating || selectedDays.length === 0}
              >
                {generating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Options...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Generate Schedule Options
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Available Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Code</TableHead>
                  <TableHead className="w-[300px]">Title</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Credits</TableHead>
                  <TableHead>Availability</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.code}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.instructor}</TableCell>
                    <TableCell>{course.schedule}</TableCell>
                    <TableCell>{course.credits}</TableCell>
                    <TableCell>
                      <Badge variant={course.availability < 10 ? "destructive" : "default"}>
                        {course.availability} seats
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {scheduleOptions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Suggested Schedule Options</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={scheduleOptions[0].id}>
              <TabsList className="mb-4">
                {scheduleOptions.map((option, index) => (
                  <TabsTrigger key={option.id} value={option.id}>
                    Option {index + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {scheduleOptions.map((option) => (
                <TabsContent key={option.id} value={option.id} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {option.days.map((day, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="bg-muted p-2 font-medium">{day.day}</div>
                        <div className="p-2 space-y-2">
                          {day.slots.length === 0 ? (
                            <p className="text-sm text-muted-foreground py-2">No classes</p>
                          ) : (
                            day.slots.map((slot, idx) => (
                              <div key={idx} className="border rounded p-2 bg-card shadow-sm">
                                <div className="font-medium text-sm">{slot.courseCode}</div>
                                <div className="text-xs truncate" title={slot.courseTitle}>{slot.courseTitle}</div>
                                <div className="text-xs">{slot.startTime} - {slot.endTime}</div>
                                <div className="text-xs text-muted-foreground truncate" title={slot.instructor}>
                                  {slot.instructor}
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      Schedule Summary
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>Total Credits: {option.totalCredits}</li>
                      <li>Total Courses: {option.courseCodes.length}</li>
                      <li>Course Codes: {option.courseCodes.join(", ")}</li>
                      <li>Days with Classes: {option.days.filter(day => day.slots.length > 0).length}</li>
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <Button>
                      Register for This Schedule
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CourseScraper;
