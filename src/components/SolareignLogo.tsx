export const SOLAREIGN_LOGO_URL = 'https://cdn.corenexis.com/f/axoHqzWo.png';

interface SolareignLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function SolareignLogo({ className = '', variant = 'dark' }: SolareignLogoProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Company Official Logo Mark */}
      <div className="relative h-10 sm:h-11 flex-shrink-0 flex items-center justify-center">
        <img
          src={SOLAREIGN_LOGO_URL}
          alt="SolarEnVest Logo"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="h-10 sm:h-11 w-auto max-h-11 object-contain pointer-events-none select-none transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight font-extrabold text-xl leading-none">
          <span className={isDark ? 'text-[#4A86C6]' : 'text-white'}>Solar</span>
          <span className="text-[#0A8A4B]">En</span>
          <span className="text-[#FBB017]">Vest</span>
        </div>
        <span
          className={`text-[9px] font-bold tracking-widest uppercase mt-0.5 ${
            isDark ? 'text-slate-600' : 'text-slate-300'
          }`}
        >
          Solar Energy &amp; Investment Solutions
        </span>
      </div>
    </div>
  );
}
