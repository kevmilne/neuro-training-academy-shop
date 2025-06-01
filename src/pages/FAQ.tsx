
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: "1",
      question: "What cybersecurity training courses do you offer?",
      answer: "We offer comprehensive training in Cyber Threat Intelligence, Mainframe Offensive Security, Infrastructure Penetration Testing, Red Teaming, and ICS/SCADA Testing. Each course is designed by industry experts with real-world experience."
    },
    {
      id: "2",
      question: "How long are the training courses?",
      answer: "Our courses typically range from 3-5 days depending on the subject matter. Each course includes hands-on labs, practical exercises, and comprehensive course materials."
    },
    {
      id: "3",
      question: "What are the prerequisites for your courses?",
      answer: "Prerequisites vary by course. Generally, we recommend basic networking knowledge and familiarity with cybersecurity concepts. Specific requirements are listed on each course page."
    },
    {
      id: "4",
      question: "Do you provide certification upon completion?",
      answer: "Yes, all participants receive a certificate of completion from OffensiveSec.org upon successfully finishing their chosen course."
    },
    {
      id: "5",
      question: "Can I get a refund if I need to cancel?",
      answer: "Please refer to our cancellation policy on Eventbrite. Generally, refunds are available up to 7 days before the course start date."
    }
  ]);

  useEffect(() => {
    // Load FAQs from localStorage if available
    const savedFaqs = localStorage.getItem("faqData");
    if (savedFaqs) {
      setFaqs(JSON.parse(savedFaqs));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our cybersecurity training courses and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <Card key={faq.id}>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see your question answered here?
          </p>
          <a 
            href="mailto:kev.milne@offensivesec.org" 
            className="bg-red-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-500 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
