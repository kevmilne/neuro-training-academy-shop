
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Calendar, LogOut, BookOpen, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseManagement from "@/components/admin/CourseManagement";
import FAQManagement from "@/components/admin/FAQManagement";

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
          <CourseManagement
            courses={courses}
            setCourses={setCourses}
            unsavedChanges={unsavedChanges}
            setUnsavedChanges={setUnsavedChanges}
          />
        )}

        {/* FAQs Tab */}
        {activeTab === 'faqs' && (
          <FAQManagement
            faqs={faqs}
            setFaqs={setFaqs}
          />
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
