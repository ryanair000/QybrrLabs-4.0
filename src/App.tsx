import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ServiceDetail from "./pages/ServiceDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AdminRoute from "@/components/auth/AdminRoute";
import PostsList from "@/pages/Admin/PostsList";
import PostEditor from "@/pages/Admin/PostEditor";
import BlogPost from "./pages/BlogPost";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import Services from "./pages/Services";
import OnboardingProvider from "@/components/onboarding/OnboardingProvider";
import { AuthProvider } from "@/hooks/useAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <OnboardingProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<ProtectedRoute><Portfolio /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/admin/posts" element={<AdminRoute><PostsList /></AdminRoute>} />
            <Route path="/admin/posts/new" element={<AdminRoute><PostEditor /></AdminRoute>} />
            <Route path="/admin/posts/:id" element={<AdminRoute><PostEditor /></AdminRoute>} />
                        <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </OnboardingProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
