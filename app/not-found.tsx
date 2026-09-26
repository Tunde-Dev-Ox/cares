import Link from "next/link";
import { HiArrowRight, HiHome } from "react-icons/hi2";
import { HeroPattern } from "@/app/components/hero-pattern";

export default function NotFound() {
  return (
    <main className="relative bg-[#0e2726] min-h-[75vh] flex items-center justify-center py-20 px-6 text-white text-center overflow-hidden">
      <HeroPattern />

      <div className="relative z-10 max-w-[600px] mx-auto space-y-6">
        <span className="mb-2 block w-12 h-1 bg-[#de232b] mx-auto" />
        
        <p className="text-7xl font-extrabold text-[#de232b] tracking-tighter leading-none">
          404
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Page Not Found
        </h1>

        <p className="text-[1rem] leading-[1.75] text-[#c5d7d1] max-w-[480px] mx-auto">
          The page or resource you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1e4544] px-7 py-3.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#123333] transition-colors"
          >
            <HiHome className="text-lg" /> Return to Homepage
          </Link>
          <Link
            href="/our-mandate"
            className="inline-flex items-center gap-2 border border-white/60 px-7 py-3.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white hover:bg-white hover:text-[#1e4544] transition-colors"
          >
            Explore Our Mandate <HiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
