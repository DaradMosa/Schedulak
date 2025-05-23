
/**
 * TimetableCards Component - Grid display of course timetables
 * 
 * This component:
 * - Renders timetables as visual cards with icons
 * - Groups timetables by course or department
 * - Provides download functionality
 * - Shows empty state when no timetables match criteria
 */
import { Folder, Download, FileText } from "lucide-react";
import { Material } from "@/types/materials";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * TimetableCards Component Props
 * @property {Material[]} timetables - Array of timetable materials to display
 */
interface TimetableCardsProps {
  timetables: Material[];
}

/**
 * TimetableCards Component - Displays timetables in a grid of cards
 * 
 * This component:
 * 1. Renders timetables as visual cards with icons
 * 2. Shows timetable info (title, course, date)
 * 3. Provides download buttons for each timetable
 * 4. Shows an empty state when no timetables are found
 * 
 * @param {TimetableCardsProps} props - Component props
 * @returns {JSX.Element} Grid of timetable cards or empty state
 */
const TimetableCards = ({ timetables }: TimetableCardsProps) => {
  // If no timetables match the search criteria, show empty state
  if (timetables.length === 0) {
    return (
      <Card className="col-span-full">
        <CardContent className="flex flex-col items-center justify-center py-10">
          <div className="text-center">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="font-semibold text-lg">No timetables found</h3>
            <p className="text-muted-foreground">
              No timetables match your search criteria.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Render cards for each timetable
  return (
    <>
      {timetables.map((timetable) => (
        <Card key={timetable.id} className="overflow-hidden">
          {/* Card icon area */}
          <div className="bg-muted p-4 flex items-center justify-center">
            <div className="h-24 w-24 flex items-center justify-center bg-primary/10 rounded-full">
              <Folder className="h-10 w-10 text-primary" />
            </div>
          </div>
          
          {/* Card header with timetable info */}
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{timetable.title}</CardTitle>
            <CardDescription>
              {timetable.course} • {timetable.uploadedDate}
            </CardDescription>
          </CardHeader>
          
          {/* Card footer with download button */}
          <CardFooter className="pt-2">
            <Button className="w-full" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download ({timetable.size})
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default TimetableCards;
