import { StaffCard } from './StaffCard';
import { StaffMemberType } from '../../../data/homeData';
import { ChevronRight } from 'lucide-react';

interface StaffProps {
  members: StaffMemberType[];
}

export function Staff({ members }: StaffProps) {
  return (
    <section className="py-16 bg-white" aria-labelledby="staff-heading">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 id="staff-heading" className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          The passionate professionals behind the microphones and cameras…
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {members.map(m => <StaffCard key={m.id} {...m} />)}
        </div>

        <div className="mt-10">
          <a href="/about/team" className="inline-flex items-center text-red-600 font-medium hover:text-red-700">
            View Full Team <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
