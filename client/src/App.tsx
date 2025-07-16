import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Menus from "./pages/Menus";
import { useEffect } from "react";
import Drinks from "./pages/Drinks";
import News from "./pages/News";
import Contact from "./pages/Contact";

// CONTEXT
import { GlobalProvider } from "./contexts/global.context";

// HELMET
import { HelmetProvider } from "react-helmet-async";

// AXIOS
import axios from "axios";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes

function TrackVisits() {
  const { pathname } = useLocation();
  const API_URL = import.meta.env.VITE_API_URL;
  const RESTAURANT_ID = import.meta.env.VITE_RESTAURANT_ID;

  useEffect(() => {
    if (!RESTAURANT_ID) return;

    const now = Date.now();
    const last = parseInt(localStorage.getItem("lastVisitSession") || "0", 10);

    // si pas de session existante ou session expirée → log et réinitialise le timer
    if (!last || now - last > SESSION_TIMEOUT) {
      localStorage.setItem("lastVisitSession", String(now));
      axios
        .post(`${API_URL}/restaurants/${RESTAURANT_ID}/visits`)
        .catch((e) => console.error("log visite :", e));
    }
  }, [pathname, API_URL, RESTAURANT_ID]);

  return null;
}
const App = () => {
  return (
    <GlobalProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <TrackVisits />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/menus" element={<Menus />} />
                <Route path="/drinks" element={<Drinks />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </GlobalProvider>
  );
};

export default App;
