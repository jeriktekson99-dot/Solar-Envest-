import { 
  BatteryCharging, 
  Zap, 
  Sparkles, 
  Activity, 
  ArrowRight, 
  ChevronRight,
  type LucideIcon 
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
  onExploreMore?: () => void;
}

interface HomeServiceCard {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
}

const FEATURED_HOME_SERVICES: HomeServiceCard[] = [
  {
    id: 'battery-backup-installation',
    title: 'Battery Backup Installation',
    shortDescription: 'Reliable lithium battery storage systems providing automatic seamless backup power during brownouts and blackouts.',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Solareign technician with LiFePO4 battery backup energy storage system',
    icon: BatteryCharging,
  },
  {
    id: 'ups-inverter-upgrades',
    title: 'Whole-Home UPS/Inverter Upgrades',
    shortDescription: 'Modern hybrid inverters delivering clean pure-sine electricity and automated switchover for heavy appliances.',
    image: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern whole-home smart hybrid inverter and UPS power board installation',
    icon: Zap,
  },
  {
    id: 'panel-cleaning-inspection',
    title: 'Panel Cleaning & Inspection',
    shortDescription: 'Gentle spot-free deionized washing, connector inspection, and hot-spot testing to restore peak solar power output.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Professional solar panel cleaning and thermal inspection by Solareign',
    icon: Sparkles,
  },
  {
    id: 'performance-monitoring-setup',
    title: 'Performance Monitoring Setup',
    shortDescription: 'Smart telemetry meters and cloud-connected mobile tracking streaming live solar production and consumption stats.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Solar real-time performance monitoring dashboard and IoT mobile telemetry',
    icon: Activity,
  },
];

export default function Services({ onSelectService, onExploreMore }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Offered Services Layout on About Page */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase text-[#4A86C6]">
              <span className="w-2.5 h-2.5 bg-[#4A86C6] shrink-0 inline-block" aria-hidden="true" />
              <span>OUR CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-[#0F172A]">Pure Solar Power. </span>
              <br className="hidden sm:inline" />
              <span className="text-[#4A86C6]">One Team, Every Stage.</span>
            </h2>
          </div>

          {onExploreMore && (
            <div className="flex items-center md:justify-end shrink-0">
              <button
                type="button"
                id="home-explore-services-btn"
                onClick={(e) => { e.preventDefault(); }}
                aria-disabled="true"
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-400 cursor-default py-1"
              >
                <span className="underline underline-offset-4 decoration-2">Explore More</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          )}
        </div>

        {/* 1x4 Responsive Grid matching About Page Card Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_HOME_SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col h-full"
              >
                {/* Corner Shine 1: Top-Left (Theme Color - Solar Sky Blue #4A86C6) */}
                <div
                  className={`absolute -top-1.5 -left-1.5 w-20 h-20 rounded-full blur-md pointer-events-none transition-colors duration-500 ${
                    isEven
                      ? 'bg-[#4A86C6]/25 group-hover:bg-[#4A86C6]/40'
                      : 'bg-[#0A8A4B]/25 group-hover:bg-[#0A8A4B]/40'
                  }`}
                />

                {/* Corner Shine 2: Top-Right (Theme Color - Growth Green #0A8A4B) */}
                <div
                  className={`absolute -top-1.5 -right-1.5 w-20 h-20 rounded-full blur-md pointer-events-none transition-colors duration-500 ${
                    isEven
                      ? 'bg-[#0A8A4B]/25 group-hover:bg-[#0A8A4B]/40'
                      : 'bg-[#4A86C6]/25 group-hover:bg-[#4A86C6]/40'
                  }`}
                />

                {/* Outline Container: Gradient highlighting Top-Left and Top-Right corners with theme colors */}
                <div
                  id={`home-service-card-${index + 1}`}
                  className={`relative w-full h-full p-[2.5px] rounded-2xl ${
                    isEven
                      ? 'bg-gradient-to-r from-[#4A86C6] via-slate-200 to-[#0A8A4B]'
                      : 'bg-gradient-to-r from-[#0A8A4B] via-slate-200 to-[#4A86C6]'
                  } shadow-md group-hover:shadow-xl transition-all duration-300 flex flex-col`}
                >
                  {/* Inner Card Container */}
                  <div className="relative w-full h-full flex flex-col justify-between rounded-[13.5px] bg-[#F8FAFC] hover:bg-white overflow-hidden text-left flex-1">
                    {/* Top Image Container */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Overlapping Floating Icon Badge */}
                    <div className="relative -mt-6 ml-5 z-10 w-12 h-12 rounded-xl bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-[#4A86C6] group-hover:bg-[#4A86C6] group-hover:text-white group-hover:border-[#FBB017] transition-colors duration-300">
                      <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>

                    {/* Card Body & Text Content */}
                    <div className="p-5 pt-3 flex-grow flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#4A86C6] transition-colors leading-snug min-h-[3rem] line-clamp-2">
                          {service.title}
                        </h3>
                        {/* Short Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5 line-clamp-3">
                          {service.shortDescription}
                        </p>
                      </div>

                      {/* Bottom Action: View Specifications */}
                      <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => onSelectService(service.title)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8A4B] hover:text-[#4A86C6] hover:underline cursor-pointer"
                        >
                          <span>View Specifications</span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#0A8A4B]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
