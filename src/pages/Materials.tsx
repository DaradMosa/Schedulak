
/**
 * Materials Page - Course materials and documents repository
 * 
 * This page provides:
 * - Searchable list of course documents
 * - Timetable downloads
 * - Material filtering by type and course
 * - Material upload functionality
 */
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockMaterials } from "@/components/materials/MaterialsData";
import { Material } from "@/types/materials";
import MaterialSearch from "@/components/materials/MaterialSearch";
import DocumentList from "@/components/materials/DocumentList";
import TimetableCards from "@/components/materials/TimetableCards";
import ImportantNote from "@/components/materials/ImportantNote";

/**
 * Materials Page Component
 * 
 * This page allows users to:
 * 1. Search through course materials
 * 2. View documents and timetables in different tabs
 * 3. Filter materials based on search criteria
 * 
 * @returns {JSX.Element} Materials page component
 */
const Materials = () => {
  // State for materials and search functionality
  const [materials, setMaterials] = useState<Material[]>(mockMaterials);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter materials based on search term (title, course, or type)
  const filteredMaterials = materials.filter(
    (material) =>
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Separate timetables from other documents for different views
  const timetables = filteredMaterials.filter(
    (material) => material.type === "timetable"
  );

  const documents = filteredMaterials.filter(
    (material) => material.type !== "timetable"
  );

  return (
    <div className="space-y-6">
      {/* Page header with title and description */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Materials</h1>
        <p className="text-muted-foreground">
          Access course materials, documents, and timetables.
        </p>
      </div>

      {/* Search bar and action buttons */}
      <MaterialSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Tabs for different material types */}
      <Tabs defaultValue="documents" className="space-y-4">
        <TabsList>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="timetables">Timetables</TabsTrigger>
        </TabsList>
        
        {/* Documents tab content */}
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Course Documents</CardTitle>
              <CardDescription>
                Access syllabi, lecture notes, and other course materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentList documents={documents} />
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Timetables tab content */}
        <TabsContent value="timetables">
          <Card>
            <CardHeader>
              <CardTitle>Timetables</CardTitle>
              <CardDescription>
                Access course schedules by department and semester
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ImportantNote />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <TimetableCards timetables={timetables} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Materials;
