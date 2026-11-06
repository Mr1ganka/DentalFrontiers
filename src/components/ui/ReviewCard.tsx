import { Review } from "@/data/reviews";
import { Star } from "lucide-react";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex w-[300px] shrink-0 flex-col gap-4 rounded-[var(--radius)] bg-[var(--color-secondary)] p-6 sm:w-[350px]">
      <div className="flex gap-1 text-[var(--color-primary)]">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="flex-1 text-sm italic opacity-90">"{review.text}"</p>
      <p className="font-medium">— {review.name}</p>
    </div>
  );
}
