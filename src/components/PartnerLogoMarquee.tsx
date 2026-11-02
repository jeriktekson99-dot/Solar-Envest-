interface PartnerLogo {
  id: string;
  name: string;
  logoUrl: string;
}

const TIER1_PARTNERS: PartnerLogo[] = [
  {
    id: 'aiko',
    name: 'Aiko Solar',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-22-ac2ee473-6225-483d-b4b2-1732bb628edd.png',
  },
  {
    id: 'deye',
    name: 'Deye Inverters',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-22-575159c6-bdc7-4301-a93d-4dc10e25bf08.png',
  },
  {
    id: 'jasolar',
    name: 'JA Solar',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-22-86fe9054-faf7-4103-9396-ea37acfc0fec.png',
  },
  {
    id: 'jinko',
    name: 'JinkoSolar',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-22-672d3f10-a5f5-4c85-a2fd-1f23be773c46.png',
  },
  {
    id: 'solis',
    name: 'Solis Inverters',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-22-255c1462-d6ea-441a-bfca-6aa052e2ba4a.png',
  },
  {
    id: 'trina',
    name: 'Trina Solar',
    logoUrl: 'https://cdn.phototourl.com/member/2026-10-22-8ae579f6-5316-4b6b-802d-9ebe8629cf0e.png',
  },
];

interface PartnerLogoMarqueeProps {
  className?: string;
  title?: string;
}

export default function PartnerLogoMarquee({
  className = '',
  title = 'TOP INDUSTRY PARTNERS',
}: PartnerLogoMarqueeProps) {
  // Repeating 4 times with -50% translateX guarantees a mathematically seamless infinite loop on any screen width
  const marqueeItems = [
    ...TIER1_PARTNERS,
    ...TIER1_PARTNERS,
    ...TIER1_PARTNERS,
    ...TIER1_PARTNERS,
  ];

  return (
    <section
      id="top-industry-partners-marquee-section"
      className={`w-full bg-[#F4F5F7] border-y border-slate-200/80 py-9 sm:py-12 relative overflow-hidden select-none ${className}`}
      aria-label={title}
    >
      {/* Eyebrow Header: TOP INDUSTRY PARTNERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-9">
        <h2 className="text-[12px] sm:text-[13px] font-bold tracking-[0.26em] text-slate-500 uppercase">
          {title}
        </h2>
      </div>

      {/* Marquee Track: Unboxed raw symbols directly on light gray with 50% increased size */}
      <div className="group-marquee relative w-full overflow-hidden">
        {/* Soft edge gradient fade vignettes matching the light gray background */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#F4F5F7] via-[#F4F5F7]/80 to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#F4F5F7] via-[#F4F5F7]/80 to-transparent z-10 pointer-events-none"
        />

        {/* Continuously Animated Infinite Marquee (paused on hover) */}
        <div className="animate-marquee-scroll flex items-center py-2">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              id={`partner-symbol-${partner.id}-${index}`}
              className="mx-8 sm:mx-12 md:mx-16 shrink-0 flex items-center justify-center transition-transform duration-200 hover:scale-105 cursor-pointer"
              title={partner.name}
            >
              {/* Raw unboxed logo with 50% increased dimensions */}
              <img
                src={partner.logoUrl}
                alt={partner.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="h-[58px] sm:h-[72px] md:h-[84px] w-auto max-w-[270px] sm:max-w-[340px] md:max-w-[390px] object-contain drop-shadow-none filter select-none transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
