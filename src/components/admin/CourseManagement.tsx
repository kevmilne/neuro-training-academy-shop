
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, Trash2, Save } from "lucide-react";
import CourseCard from "./CourseCard";

interface CourseData {
  id: string;
  name: string;
  date: string;
  eventbriteLink: string;
  description: string;
  sections: string[];
}

interface CourseManagementProps {
  courses: CourseData[];
  setCourses: (courses: CourseData[]) => void;
  unsavedChanges: Set<string>;
  setUnsavedChanges: (changes: Set<string>) => void;
}

const CourseManagement = ({ courses, setCourses, unsavedChanges, setUnsavedChanges }: CourseManagementProps) => {
  const handleCourseChange = (courseId: string, field: string, value: string | string[]) => {
    const updatedCourses = courses.map(course => 
      course.id === courseId ? { ...course, [field]: value } : course
    );
    setCourses(updatedCourses);
    
    // Mark this course as having unsaved changes
    setUnsavedChanges(prev => new Set(prev).add(courseId));
  };

  const saveCourse = (courseId: string) => {
    localStorage.setItem("adminCourses", JSON.stringify(courses));
    
    // Remove from unsaved changes
    setUnsavedChanges(prev => {
      const newSet = new Set(prev);
      newSet.delete(courseId);
      return newSet;
    });
    
    toast.success("Course saved successfully");
  };

  const addNewCourse = () => {
    const newCourse: CourseData = {
      id: Date.now().toString(),
      name: "New Course",
      date: "",
      eventbriteLink: "",
      description: "",
      sections: [""]
    };
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    
    // Mark as having unsaved changes
    setUnsavedChanges(prev => new Set(prev).add(newCourse.id));
    
    toast.success("New course added");
  };

  const deleteCourse = (courseId: string) => {
    const updatedCourses = courses.filter(course => course.id !== courseId);
    setCourses(updatedCourses);
    localStorage.setItem("adminCourses", JSON.stringify(updatedCourses));
    
    // Remove from unsaved changes if it was there
    setUnsavedChanges(prev => {
      const newSet = new Set(prev);
      newSet.delete(courseId);
      return newSet;
    });
    
    toast.success("Course deleted");
  };

  const addCourseSection = (courseId: string) => {
    const updatedCourses = courses.map(course => 
      course.id === courseId 
        ? { ...course, sections: [...course.sections, ""] }
        : course
    );
    setCourses(updatedCourses);
    setUnsavedChanges(prev => new Set(prev).add(courseId));
  };

  const updateCourseSection = (courseId: string, sectionIndex: number, value: string) => {
    const updatedCourses = courses.map(course => 
      course.id === courseId 
        ? { 
            ...course, 
            sections: course.sections.map((section, index) => 
              index === sectionIndex ? value : section
            )
          }
        : course
    );
    setCourses(updatedCourses);
    setUnsavedChanges(prev => new Set(prev).add(courseId));
  };

  const removeCourseSection = (courseId: string, sectionIndex: number) => {
    const updatedCourses = courses.map(course => 
      course.id === courseId 
        ? { 
            ...course, 
            sections: course.sections.filter((_, index) => index !== sectionIndex)
          }
        : course
    );
    setCourses(updatedCourses);
    setUnsavedChanges(prev => new Set(prev).add(courseId));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Course Management</h2>
        <Button onClick={addNewCourse} className="flex items-center bg-red-400 hover:bg-red-500">
          <Plus className="mr-2 h-4 w-4" />
          Add Course
        </Button>
      </div>

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          unsavedChanges={unsavedChanges}
          onCourseChange={handleCourseChange}
          onSaveCourse={saveCourse}
          onDeleteCourse={deleteCourse}
          onAddSection={addCourseSection}
          onUpdateSection={updateCourseSection}
          onRemoveSection={removeCourseSection}
        />
      ))}
    </div>
  );
};

export default CourseManagement;
