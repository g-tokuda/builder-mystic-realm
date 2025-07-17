import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-1 pt-16 md:pt-20">{children}</main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/collections"
            element={
              <Layout>
                <PlaceholderPage title="Collections" />
              </Layout>
            }
          />
          <Route
            path="/collections/:category"
            element={
              <Layout>
                <PlaceholderPage title="Category" />
              </Layout>
            }
          />
          <Route
            path="/lookbook"
            element={
              <Layout>
                <PlaceholderPage title="Lookbook" />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <PlaceholderPage title="About" />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <PlaceholderPage title="Contact" />
              </Layout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
