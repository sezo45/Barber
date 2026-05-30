import { Link } from 'react-router-dom';
import { GiRazor } from 'react-icons/gi';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiClock } from 'react-icons/hi';

const navLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'من نحن', path: '/about' },
  { name: 'تواصل معنا', path: '/contact' },
];

const socials = [
  { icon: <FaInstagram />, href: '#', label: 'انستجرام' },
  { icon: <FaFacebook />, href: '#', label: 'فيسبوك' },
  { icon: <FaTiktok />, href: '#', label: 'تيك توك' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/201008489828', label: 'واتساب' },
];

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-primary/10 mt-auto">
      <div className="flex items-center gap-4 px-4 sm:px-8 pt-10 max-w-7xl mx-auto">
        <div className="h-px flex-1 bg-primary/20" />
        <GiRazor className="text-primary text-2xl opacity-60" />
        <div className="h-px flex-1 bg-primary/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <GiRazor className="text-base-100 text-lg" />
              </div>
              <span className="font-accent text-2xl tracking-widest text-primary">FIVE STAR</span>
            </div>
            <p className="text-base-content/60 font-body text-sm leading-relaxed mb-5">
              تجربة حلاقة فاخرة حيث كل قصة تحكي قصة. مصنوعة بدقة وشغف واعتزاز.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-base-300 flex items-center justify-center
                    text-base-content/60 hover:text-primary hover:border-primary transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-body font-bold text-base-content mb-4 text-sm tracking-widest uppercase">التنقل</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-base-content/60 hover:text-primary font-body text-sm transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-primary font-body text-sm font-semibold hover:text-accent transition-colors duration-200">
                  احجز موعدك ←
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-body font-bold text-base-content mb-4 text-sm tracking-widest uppercase">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-base-content/60 font-body text-sm">
                <HiLocationMarker className="text-primary mt-0.5 shrink-0" />
                المنيا، مصر
              </li>
              <li className="flex items-center gap-2 text-base-content/60 font-body text-sm">
                <HiPhone className="text-primary shrink-0" />
                <a href="tel:+201008489828" className="hover:text-primary transition-colors">٠١٠٠٨٤٨٩٨٢٨</a>
              </li>
              <li className="flex items-start gap-2 text-base-content/60 font-body text-sm">
                <HiClock className="text-primary mt-0.5 shrink-0" />
                <div>
                  <div>السبت – الخميس: ٢:٠٠م – ١٢ص</div>
                  {/* <div>الجمعة: ٢م – ١٢ص</div> */}
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-body font-bold text-base-content mb-4 text-sm tracking-widest uppercase">أوقات العمل</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-1.5 border-b border-base-300">
                <span className="text-base-content/60 font-body text-sm">السبت – الخميس</span>
                <span className="text-primary font-body text-sm font-medium">٢:٠٠م – ١٢ص</span>
              </div>
              {/* <div className="flex justify-between items-center py-1.5">
                <span className="text-base-content/60 font-body text-sm">الجمعة</span>
                <span className="text-primary font-body text-sm font-medium">٢م – ١٢ص</span>
              </div> */}
              <div className="pt-2">
                {/* <span className="inline-flex items-center gap-1.5 text-xs font-body font-medium
                  bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  مفتوح الآن
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row
          items-center justify-between gap-3 text-center">
          <p className="text-base-content/40 font-body text-xs">
            © {new Date().getFullYear()} فايف ستار صالون حلاقة. جميع الحقوق محفوظة.
          </p>
          <div className="text-base-content/40 font-body text-xs">
            <span>تصميم وتطوير </span>
            <span className="text-primary font-semibold">إسلام وائل</span>
            <span className="mx-2 opacity-40">·</span>
            <a href="https://wa.me/201008489828" className="hover:text-primary transition-colors duration-200">
              تحتاج موقع مثله؟ تواصل مع المطور
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
