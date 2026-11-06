import { blogs } from "@/data/blogs";
import { BlogCard } from "../ui/BlogCard";

export function Blogs() {
  return (
    <section id="blogs" className="section-padding bg-[var(--color-background)]">
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 font-heading text-4xl text-[var(--color-primary)] md:text-5xl">
            Journal
          </h2>
          <p className="text-lg text-muted-foreground">
            Insights, tips, and news on maintaining optimal oral health and enhancing your smile.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
