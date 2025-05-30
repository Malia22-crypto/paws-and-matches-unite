
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdoptPage from "./pages/AdoptPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import RehomePage from "./pages/RehomePage";
import RehomeProcessPage from "./pages/RehomeProcessPage";
import LostFoundPage from "./pages/LostFoundPage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/pet/:id" element={<PetDetailsPage />} />
          <Route path="/rehome" element={<RehomePage />} />
          <Route path="/rehome/start" element={<RehomeProcessPage />} />
          <Route path="/lost-found" element={<LostFoundPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/rehome" element={<AdminPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
