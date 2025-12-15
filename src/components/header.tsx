'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Rocket, Atom, Calculator, UserCircle, Shield } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


const navLinks = [
  { href: '/math', label: 'Math World', icon: Calculator },
  { href: '/physics', label: 'Physics Lab', icon: Atom },
  { href: '/astronomy', label: 'Astronomy Galaxy', icon: Rocket },
];

export function Header() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
             <Link
                href="/dashboard"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
                )}
              >
                Parent Dashboard
              </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center gap-2">
             <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <Link href="/signup">Sign Up</Link>
            </Button>
           </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-4 py-6">
                  {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-2 p-2 rounded-md text-lg font-medium hover:bg-accent hover:text-accent-foreground">
                       <link.icon className="h-5 w-5" />
                       {link.label}
                    </Link>
                  ))}
                   <Link href="/dashboard" className="flex items-center gap-2 p-2 rounded-md text-lg font-medium hover:bg-accent hover:text-accent-foreground">
                       <Shield className="h-5 w-5" />
                       Parent Dashboard
                    </Link>
                </div>
                <div className="mt-auto flex flex-col gap-2">
                    <Button variant="outline" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
