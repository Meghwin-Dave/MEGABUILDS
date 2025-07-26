import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Projects from "@/pages/projects";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";
import DjangoPerformanceArticle from "@/pages/blog/django-performance";
import ReactStateManagementArticle from "@/pages/blog/react-state-management";
import ChatGPTDashboardsArticle from "@/pages/blog/chatgpt-dashboards";
import ZeroDowntimeDockerArticle from "@/pages/blog/zero-downtime-docker";
import CodeReviewsQualityArticle from "@/pages/blog/code-reviews-quality";
import RestfulApiVersioningArticle from "@/pages/blog/restful-api-versioning";

function Router() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/django-performance" component={DjangoPerformanceArticle} />
        <Route path="/blog/react-state-management" component={ReactStateManagementArticle} />
        <Route path="/blog/chatgpt-dashboards" component={ChatGPTDashboardsArticle} />
        <Route path="/blog/zero-downtime-docker" component={ZeroDowntimeDockerArticle} />
        <Route path="/blog/code-reviews-quality" component={CodeReviewsQualityArticle} />
        <Route path="/blog/restful-api-versioning" component={RestfulApiVersioningArticle} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}
