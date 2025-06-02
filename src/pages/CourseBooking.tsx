
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Users, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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

const CourseBooking = () => {
  const [courses, setCourses] = useState<CourseData[]>([]);

  useEffect(() => {
    // Load courses from localStorage (where admin stores them)
    const savedCourses = localStorage.getItem("adminCourses");
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return "Date TBD";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-red-500 hover:text-red-600 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-red-400">Training Course</span>
          </h1>
          <p className="text-xl text-gray-600">
            Choose from our expert-led cybersecurity training programs and secure your spot today.
          </p>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Courses Available</h3>
              <p className="text-gray-600 mb-4">
                No training courses are currently scheduled. Please check back soon or contact us for more information.
              </p>
              <Link to="/#contact">
                <Button className="bg-red-500 hover:bg-red-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="transition-all duration-300 hover:shadow-lg border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 mb-2">
                    {course.name}
                  </CardTitle>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{formatDate(course.date)}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {course.description}
                  </p>
                  
                  {course.sections && course.sections.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Course Sections:</h4>
                      <ul className="space-y-1">
                        {course.sections.filter(section => section.trim()).map((section, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                            {section}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-gray-100">
                    {course.eventbriteLink ? (
                      <a
                        href={course.eventbriteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center">
                          <span>Book on Eventbrite</span>
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    ) : (
                      <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed">
                        Booking Link Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-4">
            Not sure which course is right for you? Our team can help you select the perfect training program based on your experience level and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/#contact">
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                Contact Our Team
              </Button>
            </Link>
            <a href="mailto:kev.milne@offensivesec.org">
              <Button className="bg-red-500 hover:bg-red-600">
                Email Us Directly
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseBooking;
