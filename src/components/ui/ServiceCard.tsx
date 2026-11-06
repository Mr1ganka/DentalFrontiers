import Image from "next/image";
import { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col gap-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius)]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="mb-2 text-xl font-medium">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
      </div>
    </div>
  );
}
