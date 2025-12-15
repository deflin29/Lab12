import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("font-headline font-bold text-2xl", className)}>
      <span className="text-primary">Neuro</span>
      <span>Kids</span>
      <span className="text-accent"> 3D</span>
    </div>
  );
}
