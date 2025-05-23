import { AlertCircle } from "lucide-react";

/**
 * ImportantNote Component - Warning/notice banner for timetables
 * 
 * This component:
 * - Displays a visually distinct alert box
 * - Warns users about potential timetable changes
 * - Provides important contextual information
 * - Uses amber coloring for caution indication
 * 
 * @returns {JSX.Element} Alert note component
 */
const ImportantNote = () => {
  return (
    <div className="mb-6 rounded-md border border-amber-200 bg-amber-50 p-4">
      <div className="flex items-start gap-3">
        {/* Alert icon */}
        <AlertCircle className="mt-0.5 h-5 w-5 text-amber-700" />
        
        {/* Alert content */}
        <div>
          <h3 className="font-medium text-amber-800">Important Note</h3>
          <p className="text-sm text-amber-700">
            Please check for updates regularly as timetables may change throughout the semester.
            The latest versions will always be available here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportantNote;
