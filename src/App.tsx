
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses/cyber-threat-intelligence" element={<CourseCyberThreatIntelligence />} />
          <Route path="/courses/mainframe-offensive-security" element={<CourseMainframeOffensiveSecurity />} />
          <Route path="/courses/infrastructure-pen-testing" element={<CourseInfrastructurePenTesting />} />
          <Route path="/courses/red-teaming" element={<CourseRedTeaming />} />
          <Route path="/courses/ics-testing" element={<CourseICSTesting />} />
          <Route path="/instructors" element={<Instructors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
