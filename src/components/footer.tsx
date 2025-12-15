import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <Logo />
          <p className="text-sm text-muted-foreground">Play. Explore. Learn in 3D.</p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#" className="hover:text-primary">Terms</Link>
          <Link href="#" className="hover:text-primary">Privacy</Link>
          <Link href="#" className="hover:text-primary">Contact</Link>
        </div>
      </div>
       <div className="bg-muted/50">
        <div className="container mx-auto flex h-14 max-w-7xl items-center justify-center px-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NeuroKids 3D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
