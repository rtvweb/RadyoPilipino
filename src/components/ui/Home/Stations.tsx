import { StationCard } from './StationCard';
import { StationType } from '../../../data/homeData';
import { ChevronRight } from 'lucide-react';

interface StationsProps {
  stations: StationType[];
  activeTab: 'all' | 'AM' | 'FM' | 'TV';
  onTabChange(tab: 'all' | 'AM' | 'FM' | 'TV'): void;
}

export function Stations({ stations, activeTab, onTabChange }: StationsProps) {
  const filtered = activeTab === 'all'
    ? stations
    : stations.filter(s => s.category === activeTab);

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="stations-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 id="stations-heading" className="text-3xl font-bold">Our Stations</h2>
          <div className="flex gap-2">
            {(['all','AM','FM','TV'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(s => <StationCard key={s.id} {...s} />)}
        </div>

        <div className="text-center mt-10">
          <a href="/stations" className="inline-flex items-center text-red-600 font-medium hover:text-red-700">
            View All Stations <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
