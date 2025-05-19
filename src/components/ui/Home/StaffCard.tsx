import { StaffMemberType } from '../../../data/homeData';

export function StaffCard({ name, position, image }: StaffMemberType) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
        <img
          src={image || "/api/placeholder/150/150"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
}
