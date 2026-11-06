export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: "rev-1",
    name: "Emily R.",
    text: "The most relaxing dental experience I've ever had. The clinic is beautiful and the staff are incredibly attentive.",
    rating: 5,
  },
  {
    id: "rev-2",
    name: "James T.",
    text: "Professional, transparent, and gentle. I couldn't be happier with my cosmetic procedure results.",
    rating: 5,
  },
  {
    id: "rev-3",
    name: "Sophia L.",
    text: "A truly modern clinic. The calming atmosphere completely removed my usual dental anxiety.",
    rating: 5,
  },
  {
    id: "rev-4",
    name: "Marcus W.",
    text: "Excellent service from start to finish. Highly recommend for anyone seeking premium dental care.",
    rating: 5,
  }
];
