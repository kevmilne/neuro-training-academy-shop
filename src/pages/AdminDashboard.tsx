import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Calendar, LogOut, Plus, Trash2, BookOpen, HelpCircle, Save } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CourseData {
  id: string;
  name: string;
  date: string;
  eventbriteLink: string;
  description: string;
  sections: string[];
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'courses' | 'faqs'>('courses');
  const [courses, setCourses] = useState<CourseData[]>([
    {
      id: "1",
      name: "Cyber Threat Intelligence",
      date: "2024-07-15",
      eventbriteLink: "https://www.eventbrite.com/e/cyber-threat-intelligence-course-tickets-123456789",
      description: "Advanced threat intelligence gathering and analysis techniques",
      sections: ["Intelligence Fundamentals", "Data Collection", "Analysis Techniques", "Reporting"]
    },
    {
      id: "2", 
      name: "Mainframe Offensive Security",
      date: "2024-08-20",
      eventbriteLink: "https://www.eventbrite.com/e/mainframe-offensive-security-course-tickets-123456790",
      description: "Security testing methodologies for mainframe environments",
      sections: ["Mainframe Architecture", "Attack Vectors", "Exploitation", "Defense Strategies"]
    }
  ]);

  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: "1",
      question: "What cybersecurity training courses do you offer?",
      answer: "We offer comprehensive training in Cyber Threat Intelligence, Mainframe Offensive Security, Infrastructure Penetration Testing, Red Teaming, and ICS/SCADA Testing."
    }
  ]);

  // Track unsaved changes
  const [unsavedChanges, setUnsavedChanges] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin");
    }

    // Load data from localStorage
    const savedCourses = localStorage.getItem("adminCourses");
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }

    const savedFaqs = localStorage.getItem("faqData");
    if (savedFaqs) {
      setFaqs(JSON.parse(savedFaqs));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    toast.success("Logged out successfully");
    navigate("/");
  };

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

  const addNewFaq = () => {
    const newFaq: FAQItem = {
      id: Date.now().toString(),
      question: "New Question",
      answer: "New Answer"
    };
    const updatedFaqs = [...faqs, newFaq];
    setFaqs(updatedFaqs);
    localStorage.setItem("faqData", JSON.stringify(updatedFaqs));
    toast.success("New FAQ added");
  };

  const updateFaq = (faqId: string, field: 'question' | 'answer', value: string) => {
    const updatedFaqs = faqs.map(faq => 
      faq.id === faqId ? { ...faq, [field]: value } : faq
    );
    setFaqs(updatedFaqs);
    localStorage.setItem("faqData", JSON.stringify(updatedFaqs));
    toast.success("FAQ updated successfully");
  };

  const deleteFaq = (faqId: string) => {
    const updatedFaqs = faqs.filter(faq => faq.id !== faqId);
    setFaqs(updatedFaqs);
    localStorage.setItem("faqData", JSON.stringify(updatedFaqs));
    toast.success("FAQ deleted");
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
            <p className="text-gray-600 mt-2">Manage courses, dates, links, and FAQs</p>
          </div>
          
          <Button onClick={handleLogout} variant="outline" className="flex items-center">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          <Button 
            onClick={() => setActiveTab('courses')}
            variant={activeTab === 'courses' ? 'default' : 'outline'}
            className="flex items-center"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Courses
          </Button>
          <Button 
            onClick={() => setActiveTab('faqs')}
            variant={activeTab === 'faqs' ? 'default' : 'outline'}
            className="flex items-center"
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            FAQs
          </Button>
        </div>

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Course Management</h2>
              <Button onClick={addNewCourse} className="flex items-center bg-red-400 hover:bg-red-500">
                <Plus className="mr-2 h-4 w-4" />
                Add Course
              </Button>
            </div>

            {courses.map((course) => (
              <Card key={course.id}>
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
                      onClick={() => saveCourse(course.id)}
                      className="bg-green-600 hover:bg-green-700 text-white flex items-center"
                      disabled={!unsavedChanges.has(course.id)}
                    >
                      <Save className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                    <Button 
                      onClick={() => deleteCourse(course.id)}
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
                        onChange={(e) => handleCourseChange(course.id, "name", e.target.value)}
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
                        onChange={(e) => handleCourseChange(course.id, "date", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Description
                    </label>
                    <Textarea
                      value={course.description}
                      onChange={(e) => handleCourseChange(course.id, "description", e.target.value)}
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
                        onChange={(e) => handleCourseChange(course.id, "eventbriteLink", e.target.value)}
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
                        onClick={() => addCourseSection(course.id)}
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
                          onChange={(e) => updateCourseSection(course.id, index, e.target.value)}
                          placeholder={`Section ${index + 1}`}
                          className="flex-1"
                        />
                        <Button 
                          onClick={() => removeCourseSection(course.id, index)}
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
            ))}
          </div>
        )}

        {/* FAQs Tab */}
        {activeTab === 'faqs' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">FAQ Management</h2>
              <Button onClick={addNewFaq} className="flex items-center bg-red-400 hover:bg-red-500">
                <Plus className="mr-2 h-4 w-4" />
                Add FAQ
              </Button>
            </div>

            {faqs.map((faq) => (
              <Card key={faq.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl text-gray-900">FAQ Item</CardTitle>
                  <Button 
                    onClick={() => deleteFaq(faq.id)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question
                    </label>
                    <Input
                      value={faq.question}
                      onChange={(e) => updateFaq(faq.id, "question", e.target.value)}
                      placeholder="Enter FAQ question"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Answer
                    </label>
                    <Textarea
                      value={faq.answer}
                      onChange={(e) => updateFaq(faq.id, "answer", e.target.value)}
                      placeholder="Enter FAQ answer"
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
