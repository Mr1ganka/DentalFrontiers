export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: "dr-xyz",
    name: "Dr. XYZ",
    designation: "Consultant Periodontist & Implantologist",
    description: "With over 12 years of clinical excellence, Dr. XYZ specializes in laser gum therapy, bone preservation, and computer-guided dental implants.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "dr-abc",
    name: "Dr. ABC",
    designation: "Consultant Orthodontist",
    description: "Expert in digital clear aligner therapy, lingual braces, and complex malocclusion corrections for adults and adolescents.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "dr-pqr",
    name: "Dr. PQR",
    designation: "Microscopic Endodontist",
    description: "Specializes in single-visit painless root canal therapy utilizing high-power surgical magnification microscopes.",
    image: "https://images.unsplash.com/photo-1537368910025-7028a4ce25a5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "dr-mno",
    name: "Dr. MNO",
    designation: "Pediatric Dental Specialist",
    description: "Dedicated to fear-free, gentle dental beginnings for young children, toddlers, and adolescents with preventive protocols.",
    image: "https://images.unsplash.com/photo-1594824813571-638f02634470?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "dr-jkl",
    name: "Dr. JKL",
    designation: "Oral & Maxillofacial Surgeon",
    description: "Expertise in complex impacted wisdom teeth extractions, bone regeneration, and trauma reconstruction.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "dr-efg",
    name: "Dr. EFG",
    designation: "Aesthetic & Restorative Dentist",
    description: "Specializes in cosmetic smile makeovers, biomimetic composite bonding, and minimal-prep ceramic restorations.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127c09e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "dr-rst",
    name: "Dr. RST",
    designation: "Prosthodontist & Oral Rehabilitation Specialist",
    description: "Specializes in full-mouth rehabilitations, bespoke zirconia restorations, and digital occlusal design.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "dr-uvw",
    name: "Dr. UVW",
    designation: "Preventive & General Dentistry Specialist",
    description: "Focuses on early diagnostic screenings, comprehensive preventive oral healthcare, and patient wellness.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  }
];
