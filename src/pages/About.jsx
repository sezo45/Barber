import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import ScrollReveal from '../components/ScrollReveal';
// import img from'.src/assets/Images/Elgbaly.jpg'
const barbers = [
  {
    name: 'محمد الجبالي',
    role: 'حلاق ماستر ومؤسس الصالون',
    experience: '٧+',
    specialty: 'فيد وتشكيل اللحية',
    bio: 'محمد هو الرؤية وراء فايف ستار. بأكثر من ٧ سنوات من الإتقان، حوّل الحلاقة إلى فن حقيقي. أسلوبه المتميز في الفيد الدقيق وتشكيل اللحية أكسبه قاعدة عملاء وفية في المنيا. تدرب محمد على يد أمهر الحلاقين في مصر ويجلب ذلك المعيار الرفيع لكل عميل يجلس على كرسيه.',
    skills: ['سكين فيد', 'تشكيل اللحية', 'حلاقة كلاسيك', 'صبغ الشعر'],
    image: 'src/assets/Images/Elgbaly.jpg',
  },
  {
    name: 'عمرو ابو عاصم',
    role: 'حلاق أول ومؤسس مشارك',
    experience: '٥+',
    specialty: 'الأنماط العصرية والتكستشر',
    bio: 'عمرو هو القوة الإبداعية في فايف ستار بشغفه بالأنماط العصرية وقصات التكستشر. قدرته على قراءة شخصية العميل وترجمتها لقصة مثالية لا مثيل لها. متخصص في التقنيات المعاصرة، يواكب عمرو أحدث الترندات ويقدم نتائج تستحق المجلات في كل مرة.',
    skills: ['تكستشر كروب', 'بومباد', 'فرنش كروب', 'استشارة الستايل'],
    image: 'src/assets/Images/Amr.jpg',
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      <section className="relative py-20 sm:py-28 bg-base-200 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">فريقنا</span>
            <div className="h-px w-10 bg-primary" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-body font-black text-5xl sm:text-6xl text-base-content mb-6">
            تعرّف على <span className="gold-gradient">الأساتذة</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base-content/60 text-lg leading-relaxed max-w-2xl mx-auto">
            حلاقان شغوفان برؤية مشتركة — تقديم أرقى تجربة حلاقة في المنيا، قصة مثالية في كل مرة.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {barbers.map((barber, i) => (
              <ScrollReveal key={barber.name} direction={i % 2 === 0 ? 'right' : 'left'}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                  <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative inline-block w-full">
                      <div className="absolute -inset-4 rounded-3xl bg-primary/10 -z-10" />
                      <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl
                        aspect-[4/5] max-w-sm mx-auto lg:max-w-full">
                        <img src={barber.image} alt={barber.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-5 -left-2 sm:left-4 bg-primary rounded-2xl px-5 py-4 shadow-xl">
                        <div className="font-accent text-3xl text-base-100">{barber.experience}</div>
                        <div className="font-body text-xs text-base-100/80">سنة خبرة</div>
                      </div>
                      <div className="absolute top-4 -right-2 sm:-right-4 bg-base-100 border border-base-300
                        rounded-xl px-4 py-3 shadow-lg">
                        <div className="font-body text-xs font-semibold text-primary uppercase tracking-wider">التخصص</div>
                        <div className="font-body font-bold text-sm text-base-content">{barber.specialty}</div>
                      </div>
                    </div>
                  </div>

                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-px w-10 bg-primary" />
                      <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">{barber.role}</span>
                    </div>
                    <h2 className="font-body font-black text-4xl sm:text-5xl text-base-content mb-6">
                      {barber.name}
                    </h2>
                    <p className="font-body text-base-content/65 leading-relaxed text-base mb-8">{barber.bio}</p>

                    <div className="mb-8">
                      <h3 className="font-body font-bold text-base-content text-sm mb-4 uppercase tracking-widest">
                        مهاراته المميزة
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {barber.skills.map(skill => (
                          <span key={skill}
                            className="bg-primary/10 text-primary border border-primary/20
                              font-body text-sm px-4 py-1.5 rounded-full font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a href="https://wa.me/201008489828" target="_blank" rel="noreferrer"
                        className="btn btn-primary font-body font-semibold rounded-full px-6 gap-2">
                        <FaWhatsapp className="text-base" />
                        احجز مع {barber.name.split(' ')[0]}
                      </a>
                      <a href="#" className="btn btn-circle btn-outline btn-primary">
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">مكاننا</span>
              <div className="h-px w-10 bg-primary" />
            </div>
            <h2 className="font-body font-black text-4xl sm:text-5xl text-base-content">
              <span className="gold-gradient">الصالون</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=500&fit=crop',
              'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=500&fit=crop',
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden border border-base-300 h-48 sm:h-64">
                  <img src={img} alt="الصالون" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[['٥٠٠+', 'عميل سعيد'], ['5★', 'تقييم'], ['١٢+', 'نمط قصة'], ['٥+', 'سنوات']].map(([num, label]) => (
              <ScrollReveal key={label}>
                <div>
                  <div className="font-accent text-4xl sm:text-5xl text-base-100 mb-1">{num}</div>
                  <div className="font-body text-base-100/70 text-sm">{label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
