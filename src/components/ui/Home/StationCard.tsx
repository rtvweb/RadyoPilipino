import { Play } from 'lucide-react';
import { StationType } from '../../../data/homeData';

export function StationCard({ name, frequency, category, location, image }: StationType) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gray-200 relative">
        <img
          src={image || "/api/placeholder/400/320"}
          alt={name}
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-0 left-0 bg-red-600 text-white px-3 py-1">
          {category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{frequency}</p>
        <p className="text-gray-500 text-sm">{location}</p>
        <button className="mt-4 flex items-center text-red-600 font-medium">
          Listen Live <Play size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}