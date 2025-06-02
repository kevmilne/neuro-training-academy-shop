
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Download, Upload, FileJson, AlertTriangle } from "lucide-react";

interface CourseData {
  id: string;
  name: string;
  date: string;
  eventbriteLink: string;
  description: string;
  sections: string[];
}

interface ImportExportProps {
  courses: CourseData[];
  setCourses: (courses: CourseData[]) => void;
  setUnsavedChanges: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const ImportExport = ({ courses, setCourses, setUnsavedChanges }: ImportExportProps) => {
  const [isImporting, setIsImporting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const exportCourses = () => {
    try {
      const dataStr = JSON.stringify(courses, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `courses-export-${new Date().toISOString().split('T')[0]}.json`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(url);
      
      toast.success("Courses exported successfully");
    } catch (error) {
      console.error("Export error:", error);
      toast.error("Failed to export courses");
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/json') {
      toast.error("Please select a valid JSON file");
      return;
    }

    setIsImporting(true);

    try {
      const text = await file.text();
      const importedCourses = JSON.parse(text);

      // Validate the imported data structure
      if (!Array.isArray(importedCourses)) {
        throw new Error("Invalid file format: Expected an array of courses");
      }

      // Validate each course object
      for (const course of importedCourses) {
        if (!course.id || !course.name || !course.description || !Array.isArray(course.sections)) {
          throw new Error("Invalid course data format");
        }
      }

      // Update the courses
      setCourses(importedCourses);
      
      // Save to localStorage immediately
      localStorage.setItem("adminCourses", JSON.stringify(importedCourses));
      
      // Clear unsaved changes since we just saved
      setUnsavedChanges(new Set());
      
      toast.success(`Successfully imported ${importedCourses.length} courses`);
      
    } catch (error) {
      console.error("Import error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to import courses");
    } finally {
      setIsImporting(false);
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <FileJson className="mr-2 h-5 w-5" />
          Import / Export Course Data
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-2">Export Courses</h4>
              <p className="text-sm text-gray-600 mb-3">
                Download all course data as a JSON file for backup or transfer to production.
              </p>
              <Button 
                onClick={exportCourses}
                className="bg-green-600 hover:bg-green-700 text-white"
                disabled={courses.length === 0}
              >
                <Download className="mr-2 h-4 w-4" />
                Export ({courses.length} courses)
              </Button>
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-2">Import Courses</h4>
              <p className="text-sm text-gray-600 mb-3">
                Upload a JSON file to replace all current course data.
              </p>
              <div className="space-y-2">
                <Button 
                  onClick={handleImportClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isImporting}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {isImporting ? "Importing..." : "Import Courses"}
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-orange-800 font-medium">Important:</p>
                <p className="text-orange-700">
                  Importing will replace ALL current course data. Make sure to export your current data first if you want to keep it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImportExport;
