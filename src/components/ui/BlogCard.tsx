import Image from "next/image";
import { Blog } from "@/data/blogs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={blog.url} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="flex flex-col gap-4">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[var(--radius)]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <p className="mb-2 text-sm text-[var(--color-primary)] opacity-80">{blog.date}</p>
          <h3 className="mb-2 text-xl font-medium transition-colors group-hover:text-[var(--color-primary)]">
            {blog.title}
          </h3>
          <p className="mb-4 text-muted-foreground line-clamp-2">{blog.description}</p>
          <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]">
            Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
