import { motion } from 'framer-motion';

export default function HaircutCard({ cut, index }) {
  return (
    <motion.div
      className="card bg-base-200 overflow-hidden card-premium border border-base-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}>
      <figure className="relative overflow-hidden h-52 sm:h-56">
        <img src={cut.image} alt={cut.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-200/80 via-transparent to-transparent" />
        {cut.tag && (
          <span className="absolute top-3 left-3 bg-primary text-base-100 text-[10px] font-body
            font-semibold px-2.5 py-1 rounded-full tracking-wider shadow-lg">
            {cut.tag}
          </span>
        )}
      </figure>
      <div className="card-body p-5">
        <h3 className="font-body font-bold text-lg text-base-content">{cut.name}</h3>
        <p className="text-base-content/60 font-body text-sm leading-relaxed">{cut.description}</p>
        <div className="mt-2 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-primary text-xs">★</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
