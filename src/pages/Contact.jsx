import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa';
import { HiPhone, HiLocationMarker, HiClock, HiUser, HiCalendar } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';

const workingHours = [
  { day: 'السبت',    hours: '٢:٠٠ م – ١٢:٠٠ ص', open: true },
  { day: 'الأحد',    hours: '٢:٠٠ م – ١٢:٠٠ ص', open: true },
  { day: 'الاثنين',  hours: '٢:٠٠ م – ١٢:٠٠ ص', open: true },
  { day: 'الثلاثاء', hours: '٢:٠٠ م – ١٢:٠٠ ص', open: true },
  { day: 'الأربعاء', hours: '٢:٠٠ م – ١٢:٠٠ ص', open: true },
  { day: 'الخميس',  hours: '٢:٠٠ م – ١٢:٠٠ ص', open: true },
  { day: 'الجمعة',  hours: '٢:٠٠ م – ١٢:٠٠ ص',  open: true, special: true },
];

const dayNames = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const today = dayNames[new Date().getDay()];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', time: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name.trim()) {
      toast.error('من فضلك أدخل اسمك ✍️');
      return;
    }
    if (!form.phone.trim()) {
      toast.error('رقم الهاتف مطلوب 📱');
      return;
    }
    if (!form.time.trim()) {
      toast.error('من فضلك اختر الوقت المناسب 🕐');
      return;
    }

    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);

    const msg = encodeURIComponent(
      `✂️ *طلب حجز موعد — فايف ستار*\n\n` +
      `👤 *الاسم:* ${form.name}\n` +
      `📱 *الهاتف:* ${form.phone}\n` +
      `🕐 *الوقت المفضل:* ${form.time}\n\n` +
      `_أُرسل عبر نموذج الحجز في موقع فايف ستار_`
    );

    window.open(`https://wa.me/201008489828?text=${msg}`, '_blank');

    toast.success('تم حجز موعدك بنجاح ✂️\nشكرًا! في انتظارك في فايف ستار 💈', { duration: 5000 });
    setForm({ name: '', phone: '', time: '' });
  };

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      <section className="relative py-20 sm:py-24 bg-base-200 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">احجز موعدك</span>
            <div className="h-px w-10 bg-primary" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-body font-black text-5xl sm:text-6xl text-base-content mb-4">
            خلينا <span className="gold-gradient">نحجزلك</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base-content/60 text-lg">
            املأ النموذج وهنتواصل معك عبر واتساب لتأكيد الموعد.
          </motion.p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="bg-base-200 rounded-3xl p-8 sm:p-10 border border-base-300">
                  <div className="mb-8">
                    <h2 className="font-body font-black text-2xl sm:text-3xl text-base-content mb-2">
                      احجز موعدك
                    </h2>
                    <p className="font-body text-base-content/60 text-sm">
                      سيتم تحويلك إلى واتساب بعد الإرسال
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="font-body text-sm font-semibold text-base-content/70 mb-2 flex items-center gap-2">
                        <HiUser className="text-primary" />
                        الاسم الكامل
                      </label>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                        className="input input-bordered w-full bg-base-100 font-body text-sm
                          focus:border-primary focus:outline-none rounded-xl border-base-300" />
                    </div>

                    <div>
                      <label className="font-body text-sm font-semibold text-base-content/70 mb-2 flex items-center gap-2">
                        <HiPhone className="text-primary" />
                        رقم الهاتف
                      </label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="مثال: ٠١٠١٢٣٤٥٦٧٨"
                        className="input input-bordered w-full bg-base-100 font-body text-sm
                          focus:border-primary focus:outline-none rounded-xl border-base-300" />
                    </div>

                    <div>
                      <label className="font-body text-sm font-semibold text-base-content/70 mb-2 flex items-center gap-2">
                        <HiCalendar className="text-primary" />
                        الوقت المفضل
                      </label>
                      <select name="time" value={form.time} onChange={handleChange}
                        className="select select-bordered w-full bg-base-100 font-body text-sm
                          focus:border-primary focus:outline-none rounded-xl border-base-300">
                        <option value="" disabled>اختر الوقت المناسب</option>
                        <optgroup label="الصباح">
                          <option>١٠:٠٠ صباحًا</option>
                          <option>١١:٠٠ صباحًا</option>
                          <option>١٢:٠٠ ظهرًا</option>
                        </optgroup>
                        <optgroup label="بعد الظهر">
                          <option>١:٠٠ مساءً</option>
                          <option>٢:٠٠ مساءً</option>
                          <option>٣:٠٠ مساءً</option>
                          <option>٤:٠٠ مساءً</option>
                          <option>٥:٠٠ مساءً</option>
                        </optgroup>
                        <optgroup label="المساء">
                          <option>٦:٠٠ مساءً</option>
                          <option>٧:٠٠ مساءً</option>
                          <option>٨:٠٠ مساءً</option>
                          <option>٩:٠٠ مساءً</option>
                          <option>١٠:٠٠ مساءً</option>
                          <option>١١:٠٠ مساءً</option>
                        </optgroup>
                      </select>
                    </div>

                    <button onClick={handleSubmit} disabled={loading}
                      className="btn btn-primary w-full rounded-xl font-body font-bold gap-2 text-base shadow-lg shadow-primary/20 mt-2">
                      {loading ? <span className="loading loading-spinner loading-sm" /> : <FaWhatsapp className="text-xl" />}
                      {loading ? 'جارٍ المعالجة...' : 'احجز عبر واتساب'}
                    </button>

                    <p className="text-center font-body text-xs text-base-content/40 mt-2">
                      سيتم تحويلك إلى واتساب لتأكيد الحجز
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <ScrollReveal direction="left">
                <div className="bg-base-200 rounded-3xl p-7 border border-base-300">
                  <h3 className="font-body font-bold text-lg text-base-content mb-5">معلومات التواصل</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <HiLocationMarker className="text-primary" />
                      </div>
                      <div>
                        <div className="font-body text-xs text-base-content/50 uppercase tracking-widest mb-0.5">الموقع</div>
                        <div className="font-body text-sm text-base-content font-medium">المنيا، مصر</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <HiPhone className="text-primary" />
                      </div>
                      <div>
                        <div className="font-body text-xs text-base-content/50 uppercase tracking-widest mb-0.5">الهاتف</div>
                        <a href="tel:+201008489828" className="font-body text-sm text-primary font-semibold">
                          ٠١٠٠٨٤٨٩٨٢٨
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <FaWhatsapp className="text-primary" />
                      </div>
                      <div>
                        <div className="font-body text-xs text-base-content/50 uppercase tracking-widest mb-0.5">واتساب</div>
                        <a href="https://wa.me/201008489828" target="_blank" rel="noreferrer"
                          className="font-body text-sm text-primary font-semibold">
                          راسلنا الآن
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.1}>
                <div className="bg-base-200 rounded-3xl p-7 border border-base-300">
                  <div className="flex items-center gap-2 mb-5">
                    <HiClock className="text-primary text-lg" />
                    <h3 className="font-body font-bold text-lg text-base-content">أوقات العمل</h3>
                  </div>
                  <div className="space-y-1">
                    {workingHours.map(item => (
                      <div key={item.day}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-xl
                          `}>
                        <div className="flex items-center gap-2">
                          <span  />
                          <span >
                            {item.day}
                            {item.day === today && <span className="mr-1 text-[10px] opacity-70"></span>}
                          </span>
                        </div>
                        <span className={`font-body text-xs font-semibold
                          `}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">ابحث عنا</span>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h2 className="font-body font-black text-3xl sm:text-4xl text-base-content">
              <span className="gold-gradient">موقعنا</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden border border-primary/20 shadow-2xl" style={{ height: '400px' }}>
              <iframe title="موقع فايف ستار" width="100%" height="100%"
                style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55082.27745095001!2d30.713989!3d28.107305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a62a4ed3ce745%3A0xb16ac5ba2a06e47f!2sMinya%2C%20Minya%20Governorate%2C%20Egypt!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg">
              </iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
