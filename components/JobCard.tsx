import Link from "next/link";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";

type JobCardProps = {
  id: string;
  title: string;
  location: string;
  type: string;
  shortDescription: string;
  slug: string;
};

export function JobCard({ title, location, type, shortDescription, slug }: JobCardProps) {
  return (
    <Link href={`/career/${slug}`}>
      <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-cyan-500/30 bg-orbit-card p-6 transition hover:border-cyan-400/60 hover:bg-orbit-card/80 hover:shadow-glow-cyan">
        <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 transition group-hover:opacity-100" />

        <div className="mb-4">
          <h3 className="text-xl font-bold text-cyan-300 transition group-hover:text-cyan-200">{title}</h3>
          <p className="mt-1 text-sm text-gray-400">{shortDescription}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-cyan-400" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-cyan-400" />
            <span>{type}</span>
          </div>
        </div>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:translate-x-1">
          View Details
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}

