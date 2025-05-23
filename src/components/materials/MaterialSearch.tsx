
/**
 * MaterialSearch Component - Search interface for course materials
 * 
 * This component provides:
 * - Text search input with icon
 * - Filter button for advanced filtering
 * - Upload button for adding new materials
 * - Responsive design for all screen sizes
 */
import { Search, Filter, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/**
 * MaterialSearch Component Props
 * @property {string} searchTerm - Current search term
 * @property {function} setSearchTerm - Function to update the search term
 */
interface MaterialSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

/**
 * MaterialSearch Component - Search bar and action buttons for materials
 * 
 * This component:
 * 1. Provides a search input with icon
 * 2. Handles search term state updates
 * 3. Includes filter and upload buttons
 * 4. Is responsive for different screen sizes
 * 
 * @param {MaterialSearchProps} props - Component props
 * @returns {JSX.Element} Search and actions UI
 */
const MaterialSearch = ({ searchTerm, setSearchTerm }: MaterialSearchProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      {/* Search input with icon */}
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search materials..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8 max-w-sm"
        />
      </div>
      
      {/* Action buttons */}
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload
        </Button>
      </div>
    </div>
  );
};

export default MaterialSearch;
