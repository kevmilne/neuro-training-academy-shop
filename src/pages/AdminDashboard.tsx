
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Calendar, LogOut, Save } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CourseData {
  id: string;
  name: string;
  date: string;
  eventbriteLink: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<CourseData[]>([
    {
      id: "1",
      name: "Cyber Threat Intelligence",
      date: "2024-07-15",
      eventbriteLink: "https://www.eventbrite.com/e/cyber-threat-intelligence-course-tickets-123456789"
    },
    {
      id: "2", 
      name: "Mainframe Offensive Security",
      date: "2024-08-20",
      eventbriteLink: "https://www.eventbrite.com/e/mainframe-offensive-security-course-tickets-123456790"
    },
    {
      id: "3",
      name: "Infrastructure Pen Testing",
      date: "2024-09-10",
      eventbriteLink: "https://www.eventbrite.com/e/infrastructure-pen-testing-course-tickets-123456791"
    },
    {
      id: "4",
      name: "Red Teaming",
      date: "2024-10-05",
      eventbriteLink: "https://www.eventbrite.com/e/red-teaming-course-tickets-123456792"
    },
    {
      id: "5",
      name: "ICS Testing",
      date: "2024-11-12",
      eventbriteLink: "https://www.eventbrite.com/e/ics-testing-course-tickets-123456793"
    }
  ]);

  const form = useForm();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin");
    }

    // Load courses from localStorage if available
    const savedCourses = localStorage.getItem("adminCourses");
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleSaveCourse = (courseId: string, field: string, value: string) => {
    const updatedCourses = courses.map(course => 
      course.id === courseId ? { ...course, [field]: value } : course
    );
    setCourses(updatedCourses);
    localStorage.setItem("adminCourses", JSON.stringify(updatedCourses));
    toast.success("Course updated successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Calendar className="mr-3 h-8 w-8 text-red-400" />
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-2">Manage course dates and Eventbrite links</p>
          </div>
          
          <Button onClick={handleLogout} variant="outline" className="flex items-center">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid gap-6">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{course.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Date
                    </label>
                    <Input
                      type="date"
                      value={course.date}
                      onChange={(e) => handleSaveCourse(course.id, "date", e.target.value)}
                      className="w-full"
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
                        onChange={(e) => handleSaveCourse(course.id, "eventbriteLink", e.target.value)}
                        placeholder="https://www.eventbrite.com/e/..."
                        className="flex-1"
                      />
                      <a
                        href={course.eventbriteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
