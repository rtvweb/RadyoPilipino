export interface StationType {
  id: number;
  name: string;
  frequency: string;
  category: 'AM' | 'FM' | 'TV';
  location: string;
  image?: string;
}

export interface StaffMemberType {
  id: number;
  name: string;
  position: string;
  image?: string;
}


// Sample data
export const stations: StationType[] = [
  { id: 1, name: "DZRP Manila", frequency: "738 kHz", category: "AM", location: "Manila" },
  { id: 2, name: "DWRP Vigan", frequency: "891 kHz", category: "AM", location: "Vigan City" },
  { id: 3, name: "99.5 RT", frequency: "99.5 MHz", category: "FM", location: "Metro Manila" },
  { id: 4, name: "103.9 Music FM", frequency: "103.9 MHz", category: "FM", location: "Cebu" },
  { id: 5, name: "RP TV1", frequency: "Channel 23", category: "TV", location: "National" },
  { id: 6, name: "RP TV2", frequency: "Channel 47", category: "TV", location: "National" },
];

export const staffMembers: StaffMemberType[] = [
  { id: 1, name: "Maria Santos", position: "Station Manager" },
  { id: 2, name: "Juan Dela Cruz", position: "Program Director" },
  { id: 3, name: "Ana Reyes", position: "News Director" },
  { id: 4, name: "Carlos Bautista", position: "Technical Director" },
];