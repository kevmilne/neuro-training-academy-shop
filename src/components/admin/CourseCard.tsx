
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Plus, Trash2, Save } from "lucide-react";

interface CourseData {
  id: string;
  name: string;
  date: string;
  eventbriteLink: string;
  description: string;
  sections: string[];
}

interface CourseCardProps {
  course: CourseData;
  unsavedChanges: Set<string>;
  onCourseChange: (courseId: string, field: string, value: string | string[]) => void;
  onSaveCourse: (courseId: string) => void;
  onDeleteCourse: (courseId: string) => void;
  onAddSection: (courseId: string) => void;
  onUpdateSection: (courseId: string, sectionIndex: number, value: string) => void;
  onRemoveSection: (courseId: string, sectionIndex: number) => void;
}

const CourseCard = ({
  course,
  unsavedChanges,
  onCourseChange,
  onSaveCourse,
  onDeleteCourse,
  onAddSection,
  onUpdateSection,
  onRemoveSection
}: CourseCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl text-gray-900">
          Course Details
          {unsavedChanges.has(course.id) && (
            <span className="ml-2 text-sm text-orange-600 font-normal">
              (Unsaved changes)
            </span>
          )}
        </CardTitle>
        <div className="flex gap-2">
          <Button 
            onClick={() => onSaveCourse(course.id)}
            className="bg-green-600 hover:bg-green-700 text-white flex items-center"
            disabled={!unsavedChanges.has(course.id)}
          >
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button 
            onClick={() => onDeleteCourse(course.id)}
            variant="outline"
            size="sm"
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Title
            </label>
            <Input
              value={course.name}
              onChange={(e) => onCourseChange(course.id, "name", e.target.value)}
              placeholder="Enter course title"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Date
            </label>
            <Input
              type="date"
              value={course.date}
              onChange={(e) => onCourseChange(course.id, "date", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Description
          </label>
          <Textarea
            value={course.description}
            onChange={(e) => onCourseChange(course.id, "description", e.target.value)}
            placeholder="Enter course description"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Eventbrite Link
          </label>
          <div className="flex space-x-2">
            <Input
              type="url"
              value={course.eventbriteLink}
              onChange={(e) => onCourseChange(course.id, "eventbriteLink", e.target.value)}
              placeholder="https://www.eventbrite.com/e/..."
              className="flex-1"
            />
            <a
              href={course.eventbriteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700 transition-colors"
            >
              Book your Space on Event Bright!
            </a>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Course Sections
            </label>
            <Button 
              onClick={() => onAddSection(course.id)}
              size="sm"
              variant="outline"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Section
            </Button>
          </div>
          {course.sections.map((section, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <Input
                value={section}
                onChange={(e) => onUpdateSection(course.id, index, e.target.value)}
                placeholder={`Section ${index + 1}`}
                className="flex-1"
              />
              <Button 
                onClick={() => onRemoveSection(course.id, index)}
                size="sm"
                variant="outline"
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
