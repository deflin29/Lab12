import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function EnergyWorkshopPage() {
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
            ⚡ Energy Workshop ⚡
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Build circuits and power machines with different energy sources.
          </p>
        </div>

        <Card className="text-center py-20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Power Up Your Mind!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground max-w-md mx-auto">
              The Energy Workshop is being wired. Soon you'll be able to build circuits, explore solar power, and understand how energy transforms our world.
            </p>
            <Button className="mt-8">Start Building</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
