import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { GiRazor } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'من نحن', path: '/about' },
  { name: 'تواصل معنا', path: '/contact' },
];

export default function Navbar() {
  const { isDark, setIsDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur
      ${scrolled ? 'bg-base-100/80 border-b border-primary/20 shadow-lg shadow-black/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <GiRazor className="text-base-100 text-lg" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-accent text-2xl tracking-widest text-primary">FIVE STAR</span>
              <span className="text-[10px] tracking-[0.2em] text-base-content/50 uppercase font-body">صالون حلاقة فاخر</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path}
                className={`font-body font-medium text-sm transition-colors duration-200
                  ${location.pathname === link.path ? 'text-primary' : 'text-base-content/70 hover:text-primary'}`}>
                {link.name}
                {location.pathname === link.path && (
                  <motion.div layoutId="nav-underline" className="h-0.5 bg-primary mt-0.5 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-full border border-base-300 flex items-center justify-center
                text-base-content/70 hover:text-primary hover:border-primary transition-all duration-200"
              aria-label="تغيير المظهر">
              {isDark ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
            </button>
            <Link to="/contact"
              className="hidden md:flex btn btn-primary btn-sm font-body font-semibold tracking-wide rounded-full px-5">
              احجز الآن
            </Link>
            <button className="md:hidden w-9 h-9 rounded-full border border-base-300 flex items-center justify-center
                text-base-content hover:border-primary hover:text-primary transition-all duration-200"
              onClick={() => setMenuOpen(!menuOpen)} aria-label="القائمة">
              {menuOpen ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-base-100/95 nav-blur border-t border-base-300">
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.path} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}>
                  <Link to={link.path}
                    className={`block px-4 py-3 rounded-xl font-body font-medium transition-colors duration-200
                      ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-base-content/70 hover:text-primary hover:bg-base-200'}`}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.21 }} className="pt-2">
                <Link to="/contact" className="btn btn-primary w-full font-body font-semibold rounded-xl">
                  احجز موعدك
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
