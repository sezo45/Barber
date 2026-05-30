import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a1a1a',
              color: '#f5f5f0',
              border: '1px solid rgba(212,160,23,0.3)',
              borderRadius: '12px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              padding: '14px 18px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            },
            success: {
              iconTheme: { primary: '#d4a017', secondary: '#0d0d0d' },
            },
            error: {
              iconTheme: { primary: '#ef4444', secondary: '#0d0d0d' },
            },
          }}
        />
        <Suspense fallback={<LoadingSpinner />}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
