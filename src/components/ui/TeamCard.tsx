import Image from "next/image";
import { TeamMember } from "@/data/team";
import { getAssetPath } from "@/lib/assets";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex h-[500px] w-[280px] shrink-0 flex-col overflow-hidden rounded-[var(--radius)] border border-[#003399]/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:h-[520px] sm:w-[320px]">
      <div className="relative h-[300px] w-full shrink-0 overflow-hidden bg-muted sm:h-[320px]">
        <Image
          src={getAssetPath(member.image)}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 280px, 320px"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="mb-2 flex min-h-[26px] items-center">
            <span className="inline-block max-w-full truncate rounded-full bg-[var(--color-secondary)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary)]">
              {member.designation}
            </span>
          </div>
          <h3 className="truncate font-heading text-lg font-bold text-neutral-900 transition-colors group-hover:text-[var(--color-primary)]">
            {member.name}
          </h3>
          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
}
