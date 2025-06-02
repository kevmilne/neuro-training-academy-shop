
import { Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CourseBooking = () => {
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
            Ready to advance your cybersecurity skills? Book your training course through Eventbrite.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Available Training Courses
            </h2>
            <p className="text-gray-600 mb-8">
              Browse and book our expert-led cybersecurity training programs on Eventbrite.
            </p>
            
            <a
              href="https://www.eventbrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-4 h-auto">
                <span>Book on Eventbrite</span>
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <p className="text-sm text-gray-500 mt-4">
              You'll be redirected to Eventbrite to complete your booking
            </p>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Have questions about our courses or need assistance with booking?
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
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseBooking;
