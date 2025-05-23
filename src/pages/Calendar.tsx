
import { useEffect, useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format, startOfToday, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import { Bell, Calendar as CalendarIcon, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Mathematics 101 Lecture",
    date: "2025-04-12T10:00:00",
    endTime: "2025-04-12T11:30:00",
    type: "lecture",
  },
  {
    id: 2,
    title: "Computer Science 202 Lab",
    date: "2025-04-12T13:00:00",
    endTime: "2025-04-12T15:00:00",
    type: "lab",
  },
  {
    id: 3,
    title: "Physics 201 Study Group",
    date: "2025-04-13T10:00:00",
    endTime: "2025-04-13T12:00:00",
    type: "study",
  },
  {
    id: 4,
    title: "Literature 105 Essay Due",
    date: "2025-04-14T23:59:00",
    endTime: "2025-04-14T23:59:00",
    type: "deadline",
  },
  {
    id: 5,
    title: "Mathematics 101 Lecture",
    date: "2025-04-14T10:00:00",
    endTime: "2025-04-14T11:30:00",
    type: "lecture",
  },
  {
    id: 6,
    title: "History 103 Lecture",
    date: "2025-04-15T13:00:00",
    endTime: "2025-04-15T16:00:00",
    type: "lecture",
  },
  {
    id: 7,
    title: "Computer Science 202 Lecture",
    date: "2025-04-16T13:00:00",
    endTime: "2025-04-16T15:00:00",
    type: "lecture",
  },
  {
    id: 8,
    title: "Physics 201 Midterm Exam",
    date: "2025-04-17T10:00:00",
    endTime: "2025-04-17T12:00:00",
    type: "exam",
  },
];

const Calendar = () => {
  const [date, setDate] = useState<Date>(startOfToday());
  const [selectedDateEvents, setSelectedDateEvents] = useState<typeof events>([]);

  useEffect(() => {
    const selectedEvents = events.filter((event) => {
      const eventDate = parseISO(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
    setSelectedDateEvents(selectedEvents);
  }, [date]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">
          Manage your schedule and view upcoming events.
        </p>
      </div>

      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="schedule">Weekly Schedule</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Date Selection</CardTitle>
                <CardDescription>
                  Choose a date to view events
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => newDate && setDate(newDate)}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Events for {format(date, "MMMM d, yyyy")}</CardTitle>
                <CardDescription>
                  {selectedDateEvents.length} events scheduled
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDateEvents.map((event) => (
                      <div
                        key={event.id}
                        className="flex items-start justify-between rounded-lg border p-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className={`h-3 w-3 rounded-full ${
                              event.type === "lecture" ? "bg-blue-500" :
                              event.type === "lab" ? "bg-green-500" :
                              event.type === "study" ? "bg-yellow-500" :
                              event.type === "deadline" ? "bg-red-500" :
                              event.type === "exam" ? "bg-purple-500" : "bg-gray-500"
                            }`}></span>
                            <p className="font-medium">{event.title}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>
                              {format(parseISO(event.date), "h:mm a")} - {format(parseISO(event.endTime), "h:mm a")}
                            </span>
                          </div>
                        </div>
                        <Button variant="outline" size="icon">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-[200px] items-center justify-center rounded-md border border-dashed">
                    <div className="flex flex-col items-center gap-1 text-center">
                      <CalendarIcon className="h-10 w-10 text-muted-foreground" />
                      <h3 className="font-semibold">No events</h3>
                      <p className="text-sm text-muted-foreground">
                        No events scheduled for this date.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>
                Your regular weekly schedule
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-7 gap-4">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="text-center font-medium">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-4">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="min-h-[200px] rounded-md border p-2">
                      {day === "Mon" && (
                        <div className="space-y-2">
                          <div className="rounded bg-blue-100 p-1 text-xs">
                            <p className="font-medium">Math 101</p>
                            <p className="text-muted-foreground">10:00 - 11:30</p>
                          </div>
                          <div className="rounded bg-green-100 p-1 text-xs">
                            <p className="font-medium">Lit 105</p>
                            <p className="text-muted-foreground">14:00 - 15:30</p>
                          </div>
                        </div>
                      )}
                      {day === "Tue" && (
                        <div className="space-y-2">
                          <div className="rounded bg-blue-100 p-1 text-xs">
                            <p className="font-medium">CS 202</p>
                            <p className="text-muted-foreground">13:00 - 15:00</p>
                          </div>
                          <div className="rounded bg-purple-100 p-1 text-xs">
                            <p className="font-medium">Physics 201</p>
                            <p className="text-muted-foreground">10:00 - 12:00</p>
                          </div>
                        </div>
                      )}
                      {day === "Wed" && (
                        <div className="space-y-2">
                          <div className="rounded bg-blue-100 p-1 text-xs">
                            <p className="font-medium">Math 101</p>
                            <p className="text-muted-foreground">10:00 - 11:30</p>
                          </div>
                          <div className="rounded bg-green-100 p-1 text-xs">
                            <p className="font-medium">Lit 105</p>
                            <p className="text-muted-foreground">14:00 - 15:30</p>
                          </div>
                        </div>
                      )}
                      {day === "Thu" && (
                        <div className="space-y-2">
                          <div className="rounded bg-blue-100 p-1 text-xs">
                            <p className="font-medium">CS 202</p>
                            <p className="text-muted-foreground">13:00 - 15:00</p>
                          </div>
                          <div className="rounded bg-purple-100 p-1 text-xs">
                            <p className="font-medium">Physics 201</p>
                            <p className="text-muted-foreground">10:00 - 12:00</p>
                          </div>
                        </div>
                      )}
                      {day === "Fri" && (
                        <div className="space-y-2">
                          <div className="rounded bg-blue-100 p-1 text-xs">
                            <p className="font-medium">Math 101</p>
                            <p className="text-muted-foreground">10:00 - 11:30</p>
                          </div>
                          <div className="rounded bg-yellow-100 p-1 text-xs">
                            <p className="font-medium">History 103</p>
                            <p className="text-muted-foreground">13:00 - 16:00</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Calendar;
