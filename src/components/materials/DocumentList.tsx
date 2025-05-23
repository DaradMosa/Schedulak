
/**
 * DocumentList Component - Tabular display of document materials
 * 
 * This component:
 * - Renders course documents in a sortable table
 * - Shows document metadata (title, course, type, date, size)
 * - Provides download actions for each document
 * - Displays empty state when no documents match criteria
 */
import { FileText, Download } from "lucide-react";
import { Material } from "@/types/materials";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * DocumentList Component Props
 * @property {Material[]} documents - Array of document materials to display
 */
interface DocumentListProps {
  documents: Material[];
}

/**
 * DocumentList Component - Displays documents in a tabular format
 * 
 * This component:
 * 1. Renders a table of document materials
 * 2. Shows document info (title, course, type, date, size)
 * 3. Provides a download button for each document
 * 4. Displays a message when no documents are found
 * 
 * @param {DocumentListProps} props - Component props
 * @returns {JSX.Element} Table of documents
 */
const DocumentList = ({ documents }: DocumentListProps) => {
  return (
    <Table>
      {/* Table header with column labels */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40%]">Title</TableHead>
          <TableHead>Course</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Size</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      
      {/* Table body with document rows or empty state */}
      <TableBody>
        {documents.length > 0 ? (
          // Map through documents and create a row for each
          documents.map((material) => (
            <TableRow key={material.id}>
              {/* Document title with icon */}
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  {material.title}
                </div>
              </TableCell>
              
              {/* Course name */}
              <TableCell>{material.course}</TableCell>
              
              {/* Document type in a badge */}
              <TableCell>
                <Badge variant="outline">
                  {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
                </Badge>
              </TableCell>
              
              {/* Upload date */}
              <TableCell>{material.uploadedDate}</TableCell>
              
              {/* File size */}
              <TableCell>{material.size}</TableCell>
              
              {/* Download button */}
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          // Empty state when no documents are found
          <TableRow>
            <TableCell colSpan={6} className="h-24 text-center">
              No documents found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DocumentList;
