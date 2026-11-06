export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  url: string;
}

export const blogs: Blog[] = [
  {
    id: "oral-health-routine",
    title: "Elevating Your Daily Oral Health Routine",
    description: "Discover simple yet effective techniques to maintain optimal dental hygiene from the comfort of your home.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
    date: "October 12, 2023",
    url: "https://example.com/blog/oral-health-routine",
  },
  {
    id: "benefits-clear-aligners",
    title: "The Aesthetic Benefits of Clear Aligners",
    description: "Why more adults are choosing discreet aligners to achieve the perfect, confident smile.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop",
    date: "November 5, 2023",
    url: "https://example.com/blog/clear-aligners",
  },
  {
    id: "holistic-dentistry",
    title: "Understanding Holistic Dental Care",
    description: "An approach that considers your overall well-being alongside your dental health for a balanced life.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=600&auto=format&fit=crop",
    date: "December 1, 2023",
    url: "https://example.com/blog/holistic-dentistry",
  }
];
