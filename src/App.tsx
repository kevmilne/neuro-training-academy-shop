
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CourseCyberThreatIntelligence from "./pages/CourseCyberThreatIntelligence";
import CourseMainframeOffensiveSecurity from "./pages/CourseMainframeOffensiveSecurity";
import CourseInfrastructurePenTesting from "./pages/CourseInfrastructurePenTesting";
import CourseRedTeaming from "./pages/CourseRedTeaming";
import CourseICSTesting from "./pages/CourseICSTestin";
import Instructors from "./pages/Instructors";
import Mission from "./pages/Mission";
import FAQ from "./pages/FAQ";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CourseBooking from "./pages/CourseBooking";
import Training from "./pages/Training";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/training" element={<Training />} />
          <Route path="/courses/cyber-threat-intelligence" element={<CourseCyberThreatIntelligence />} />
          <Route path="/courses/mainframe-offensive-security" element={<CourseMainframeOffensiveSecurity />} />
          <Route path="/courses/infrastructure-pen-testing" element={<CourseInfrastructurePenTesting />} />
          <Route path="/courses/red-teaming" element={<CourseRedTeaming />} />
          <Route path="/courses/ics-testing" element={<CourseICSTesting />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/book-now" element={<CourseBooking />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
