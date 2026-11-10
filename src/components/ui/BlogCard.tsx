import Image from "next/image";
import { Blog } from "@/data/blogs";
import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={blog.url}
      className="group flex w-[320px] sm:w-[360px] shrink-0 flex-col overflow-hidden rounded-[var(--radius)] border border-[#003399]/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <Image
          src={getAssetPath(blog.image)}
          alt={blog.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)] opacity-80 mb-2">
            <Calendar className="h-3 w-3" />
            <span>{blog.date}</span>
          </div>
          <h3 className="font-heading text-lg font-bold leading-snug text-neutral-900 transition-colors group-hover:text-[var(--color-primary)] mb-2">
            {blog.title}
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {blog.description}
          </p>
        </div>

        <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] border-t border-black/5 pt-3">
          <span>Read Full Article</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
