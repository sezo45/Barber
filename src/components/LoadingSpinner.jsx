import { GiRazor } from 'react-icons/gi';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 gap-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-base-300" />
        <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <GiRazor className="text-primary text-xl" />
        </div>
      </div>
      <div className="font-accent text-xl tracking-widest text-primary">FIVE STAR</div>
      <div className="font-body text-sm text-base-content/40">جاري التحميل...</div>
    </div>
  );
}
