import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function GravityLabPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/physics">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Physics Lab
          </Link>
        </Button>
        <div className="text-center mb-12">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary">
            🌍 Gravity Lab 🌍
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Adjust gravity and see how objects float, fall, and orbit.
          </p>
        </div>

        <Card className="text-center py-20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Defy Gravity!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground max-w-md mx-auto">
              The Gravity Lab is under construction. Soon you'll be able to experiment with planetary forces, launch objects into orbit, and see physics in action.
            </p>
            <Button className="mt-8">Start Simulation</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
