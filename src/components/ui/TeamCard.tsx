import Image from "next/image";
import { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex w-[280px] shrink-0 flex-col overflow-hidden rounded-[var(--radius)] border border-[#003399]/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:w-[320px]">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 280px, 320px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <span className="inline-block rounded-full bg-[var(--color-secondary)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary)] mb-2">
            {member.designation}
          </span>
          <h3 className="font-heading text-lg font-bold text-neutral-900 group-hover:text-[var(--color-primary)] transition-colors">
            {member.name}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
}
