import rpmgBanner from "../../../assets/logos/banner_tagline.webp";
import { Play, Radio } from 'lucide-react';

interface HeroProps {
  onSelectTab(tab: 'all' | 'AM' | 'FM' | 'TV'): void;
}

export function Hero({ onSelectTab }: HeroProps) {
  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center "
      // style={{ backgroundImage: `url(${rpmgBanner})` }}
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-white opacity-70" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 py-16">
      <img
        src={rpmgBanner}
        alt="Radyo Pilipino Media Group"
        width={1000}
        height={400}
        loading="eager"
        decoding="async"
        className="w-full max-w-lg md:max-w-xl mx-auto mb-6"
      />

        <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-black mb-6">
          Ang Radyo ng Pilipino.
        </h1>
        <p className="text-xl text-black mb-10">
          Broadcasting the voice of the Philippines since 1980
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {(['AM','FM','TV'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectTab(cat)}
              className={`flex items-center font-bold py-3 px-8 rounded-full transition-colors
                ${cat==='AM'? 'bg-green-600 hover:bg-green-700' 
                  : cat==='FM'? 'bg-yellow-500 hover:bg-yellow-600' 
                  : 'bg-red-600 hover:bg-red-700'} text-white`}
            >
              {cat==='TV' ? <Play size={20} /> : <Radio size={20} />}
              <span className="ml-2">{cat} Stations</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
