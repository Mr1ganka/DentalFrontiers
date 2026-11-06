export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

export const services: Service[] = [
  {
    id: "preventative",
    title: "Preventative Care",
    description: "Routine checkups, cleanings, and oral health screenings to maintain a beautiful, healthy smile.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Enhance your natural smile with professional whitening, veneers, and aesthetic bonding.",
    image: "https://images.unsplash.com/photo-1598256989800-fea5ce5146ce?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "restorative",
    title: "Restorative Treatments",
    description: "High-quality crowns, bridges, and implants designed to look and function like natural teeth.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "orthodontics",
    title: "Clear Orthodontics",
    description: "Discreet and comfortable clear aligner therapy for an elegantly straight smile.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop",
  }
];
