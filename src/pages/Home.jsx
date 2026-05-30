import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { GiRazor, GiScissors } from 'react-icons/gi';
import { FaWhatsapp } from 'react-icons/fa';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';
import HaircutCard from '../components/HaircutCard';
import { SkeletonGrid } from '../components/SkeletonCard';
import { haircutStyles, services, testimonials } from '../data/data';

const ITEMS_PER_PAGE = 6;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(haircutStyles.length / ITEMS_PER_PAGE);
  const paginated = haircutStyles.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">

      {/* ─── هيرو ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-base-100">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            <div className="flex flex-col justify-center pt-8 lg:pt-0">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-primary" />
                <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  صالون حلاقة فاخر · المنيا
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-body font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.15] text-shadow-gold mb-6">
                فن
                <span className="block gold-gradient"> الحلاقة </span>
                <span className="block">الاحترافية</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-base-content/60 text-lg leading-relaxed mb-8 max-w-md">
                اختبر دقة القص، الحلاقة الساخنة، وفن تشكيل اللحية في فايف ستار — حيث كل تفصيلة تُصنع بإتقان.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact"
                  className="btn btn-primary font-body font-semibold rounded-full px-8 gap-2 shadow-lg shadow-primary/20">
                  احجز موعدك
                  <FiArrowLeft className="text-base" />
                </Link>
                <Link to="/about"
                  className="btn btn-outline btn-primary font-body font-semibold rounded-full px-8">
                  حلاقونا
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-8 mt-12 pt-8 border-t border-base-300">
                {[['٥٠٠+', 'عميل سعيد'], ['5★', 'متوسط التقييم'], ['٥+', 'سنوات خبرة']].map(([n, l]) => (
                  <div key={l} className="flex flex-col">
                    <span className="font-accent text-2xl text-primary tracking-wide">{n}</span>
                    <span className="font-body text-xs text-base-content/50 mt-0.5">{l}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex justify-center items-center h-[540px]">
              <div className="relative z-10 w-72 h-[420px] rounded-3xl overflow-hidden shadow-2xl
                border border-primary/20 mr-16 mt-8">
                <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=800&fit=crop" alt="حلاق" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100/40 to-transparent" />
              </div>
              <div className="absolute right-0 top-0 w-52 h-64 rounded-2xl overflow-hidden shadow-xl border border-primary/10 z-20">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop&crop=face" alt="قصة شعر" className="w-full h-full object-cover" />
              </div>
              <div className="absolute left-0 bottom-12 z-30 bg-base-200 border border-primary/30
                rounded-2xl px-5 py-4 shadow-xl">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-primary text-sm">★</span>)}
                </div>
                <div className="font-body font-bold text-base-content text-sm">جودة فاخرة</div>
                <div className="font-body text-base-content/50 text-xs">في كل قصة</div>
              </div>
              <div className="absolute left-8 top-4 z-30 w-12 h-12 rounded-full bg-primary
                flex items-center justify-center shadow-lg shadow-primary/40">
                <GiRazor className="text-base-100 text-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── الخدمات ─── */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">ماذا نقدم</span>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h2 className="font-body font-black text-4xl sm:text-5xl text-base-content">
              <span className="gold-gradient">خدماتنا</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.name} delay={i * 0.1}>
                <div className="bg-base-100 rounded-2xl p-6 border border-base-300 card-premium text-center">
                  <div className="text-4xl mb-4">{svc.icon}</div>
                  <h3 className="font-body font-bold text-base-content mb-1">{svc.name}</h3>
                  <p className="text-primary font-body text-sm font-semibold mb-2">{svc.price}</p>
                  <p className="text-base-content/60 font-body text-sm">{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── أنماط القصات ─── */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">معرض القصات</span>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h2 className="font-body font-black text-4xl sm:text-5xl text-base-content mb-3">
              قصاتنا <span className="gold-gradient">المميزة</span>
            </h2>
            <p className="text-base-content/60 font-body text-base max-w-xl mx-auto">
              من الفيد الكلاسيك إلى الكروب العصري — اختر ستايلك ودع أساتذتنا يصنعون السحر.
            </p>
          </ScrollReveal>

          {loading ? <SkeletonGrid count={6} /> : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((cut, i) => <HaircutCard key={cut.id} cut={cut} index={i} />)}
              </div>
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-12">
                  <button onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 600, behavior: 'smooth' }); }}
                    disabled={page === 1}
                    className="btn btn-circle btn-outline btn-primary btn-sm disabled:opacity-30">
                    <HiChevronRight className="text-lg" />
                  </button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button key={i} onClick={() => { setPage(i + 1); window.scrollTo({ top: 600, behavior: 'smooth' }); }}
                      className={`btn btn-circle btn-sm font-body font-semibold
                        ${page === i + 1 ? 'btn-primary' : 'btn-outline btn-primary opacity-60'}`}>
                      {i + 1}
                    </button>
                  ))}
                  <button onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 600, behavior: 'smooth' }); }}
                    disabled={page === totalPages}
                    className="btn btn-circle btn-outline btn-primary btn-sm disabled:opacity-30">
                    <HiChevronLeft className="text-lg" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ─── الأسعار ─── */}
      <section className="py-20 bg-base-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">أسعار واضحة</span>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h2 className="font-body font-black text-4xl sm:text-5xl text-base-content">
              <span className="gold-gradient">الأسعار</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'قص أساسي', price: '٥٠', features: ['قص وتصفيف', 'غسيل', 'تجفيف'], popular: false },
              { name: 'الباقة الكاملة', price: '١٠٠', features: ['قص وتصفيف', 'تشكيل لحية', 'حلاقة ساخنة', 'غسيل الشعر', 'تصفيف'], popular: true },
              { name: 'لحية فقط', price: '٣٠', features: ['تشكيل اللحية', 'منشفة ساخنة', 'زيت اللحية'], popular: false },
            ].map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.12}>
                <div className={`rounded-2xl p-8 border relative overflow-hidden card-premium
                  ${plan.popular ? 'bg-primary border-primary shadow-xl shadow-primary/20' : 'bg-base-100 border-base-300'}`}>
                  {plan.popular && (
                    <div className="absolute top-4 left-4 bg-base-100 text-primary text-[10px] font-body
                      font-bold px-2.5 py-1 rounded-full tracking-widest">الأكثر طلبًا</div>
                  )}
                  <div className={`font-body font-bold mb-2 ${plan.popular ? 'text-base-100' : 'text-base-content'}`}>{plan.name}</div>
                  <div className="flex items-end gap-1 mb-6">
                    <span className={`font-accent text-5xl ${plan.popular ? 'text-base-100' : 'text-primary'}`}>{plan.price}</span>
                    <span className={`font-body text-sm mb-2 ${plan.popular ? 'text-base-100/70' : 'text-base-content/50'}`}>جنيه</span>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map(f => (
                      <li key={f} className={`flex items-center gap-2 font-body text-sm
                        ${plan.popular ? 'text-base-100/90' : 'text-base-content/70'}`}>
                        <span className={`text-xs ${plan.popular ? 'text-base-100' : 'text-primary'}`}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className={`btn w-full rounded-xl font-body font-semibold
                      ${plan.popular ? 'bg-base-100 text-primary border-0 hover:bg-base-200' : 'btn-outline btn-primary'}`}>
                    احجز الآن
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── لماذا نحن ─── */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="col-span-1 rounded-2xl overflow-hidden h-52 border border-primary/10">
                  <img src="https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=400&h=400&fit=crop" alt="حلاق" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-1 rounded-2xl overflow-hidden h-52 mt-8 border border-primary/10">
                  <img src="https://images.unsplash.com/photo-1635273051501-5c9da5e9b8bb?w=400&h=400&fit=crop" alt="قصة" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-2 rounded-2xl overflow-hidden h-44 border border-primary/10">
                  <img src="https://images.unsplash.com/photo-1533643048673-e73f8fca26ac?w=800&h=300&fit=crop" alt="الصالون" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary rounded-2xl px-5 py-4 shadow-xl z-10">
                  <div className="font-accent text-3xl text-base-100">5+</div>
                  <div className="font-body text-xs text-base-100/80">سنوات إتقان</div>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-10 bg-primary" />
                  <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">لماذا فايف ستار</span>
                </div>
                <h2 className="font-body font-black text-4xl sm:text-5xl text-base-content mb-6">
                  نضع <span className="gold-gradient">المعيار</span>
                </h2>
                <p className="font-body text-base-content/60 leading-relaxed mb-8">
                  في فايف ستار، نؤمن أن القصة الرائعة أكثر من مجرد شعر — إنها ثقة وهوية وفن في آنٍ واحد. حلاقونا يجلبون شغفهم ودقتهم لكل موعد.
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '💎', title: 'منتجات فاخرة', desc: 'أجود منتجات العناية فقط' },
                  { icon: '⚡', title: 'حلاقون محترفون', desc: 'مدربون وذوو خبرة عالية' },
                  { icon: '🕐', title: 'خدمة في الوقت', desc: 'نحترم وقتك دائمًا' },
                  { icon: '✨', title: 'إتقان في كل تفصيلة', desc: 'نصل للكمال في كل مرة' },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 0.1}>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-base-200 border border-base-300">
                      <div className="text-2xl shrink-0">{item.icon}</div>
                      <div>
                        <div className="font-body font-bold text-base-content text-sm mb-0.5">{item.title}</div>
                        <div className="font-body text-base-content/60 text-xs">{item.desc}</div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── آراء العملاء ─── */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">آراء العملاء</span>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h2 className="font-body font-black text-4xl sm:text-5xl text-base-content">
              ماذا <span className="gold-gradient">يقولون</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-base-100 rounded-2xl p-6 border border-base-300 card-premium h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => <span key={j} className="text-primary text-sm">★</span>)}
                  </div>
                  <p className="font-body text-base-content/70 text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-base-300">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="font-body text-base-100 text-xs font-bold">{t.avatar}</span>
                    </div>
                    <span className="font-body font-semibold text-sm text-base-content">{t.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── بانر CTA ─── */}
      <section className="py-20 bg-base-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden bg-primary p-10 md:p-16 text-center shadow-2xl shadow-primary/30">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
              <GiScissors className="text-base-100/20 text-[120px] absolute -left-4 -bottom-4 rotate-45" />
              <div className="relative z-10">
                <h2 className="font-body font-black text-4xl sm:text-5xl text-base-100 mb-4">
                  مستعد لقصتك القادمة؟
                </h2>
                <p className="font-body text-base-100/80 text-lg mb-8 max-w-md mx-auto">
                  احجز موعدك اليوم. ادخل بمظهر جيد، اخرج بمظهر رائع.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact"
                    className="btn bg-base-100 text-primary border-0 font-body font-bold rounded-full px-8 hover:bg-base-200 shadow-lg">
                    احجز عبر النموذج
                  </Link>
                  <a href="https://wa.me/201008489828" target="_blank" rel="noreferrer"
                    className="btn btn-outline border-base-100 text-base-100 hover:bg-base-100/10
                      font-body font-semibold rounded-full px-8 gap-2">
                    <FaWhatsapp className="text-lg" />
                    تواصل عبر واتساب
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
