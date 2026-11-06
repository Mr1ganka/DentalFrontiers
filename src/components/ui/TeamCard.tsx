import Image from "next/image";
import { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex w-[280px] shrink-0 flex-col gap-4 sm:w-[320px]">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[var(--radius)]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-medium">{member.name}</h3>
        <p className="mb-2 text-sm text-[var(--color-primary)] opacity-80">{member.designation}</p>
        <p className="text-sm text-muted-foreground">{member.description}</p>
      </div>
    </div>
  );
}
