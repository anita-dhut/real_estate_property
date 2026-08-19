import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Redevelopment from './pages/Redevelopment';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import PageTransition from './components/PageTransition';
import { ToastProvider } from './components/ToastProvider';
import FloatingCTA from './components/FloatingCTA';
import SEO from './components/SEO';

function App() {
  return (
    <ToastProvider>
      <div className="app-container">
        <PageLoader />
        <ScrollToTop />
        <Header />
        <FloatingCTA />
        <main>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetails />} />
              <Route path="/redevelopment" element={<Redevelopment />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
