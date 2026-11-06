export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: "dr-smith",
    name: "Dr. Eleanor Smith",
    designation: "Lead Dentist & Founder",
    description: "With over 15 years of experience, Dr. Smith specializes in cosmetic and restorative dentistry, focusing on patient comfort.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop", // generic placeholder
  },
  {
    id: "dr-chen",
    name: "Dr. Michael Chen",
    designation: "Orthodontist",
    description: "Dr. Chen is passionate about helping patients achieve perfectly aligned smiles through modern orthodontic solutions.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    designation: "Dental Hygienist",
    description: "Sarah brings a gentle touch and comprehensive knowledge of preventative care to ensure optimal oral hygiene.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127c09e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "david-miller",
    name: "David Miller",
    designation: "Patient Coordinator",
    description: "David ensures every patient experiences a seamless, welcoming journey from the moment they enter our clinic.",
    image: "https://images.unsplash.com/photo-1537368910025-7028a4ce25a5?q=80&w=400&auto=format&fit=crop",
  }
];
