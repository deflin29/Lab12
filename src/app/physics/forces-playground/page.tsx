import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ForcesPlaygroundPage() {
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
            💪 Forces Playground 💪
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Experiment with push, pull, and friction in a fun sandbox.
          </p>
        </div>

        <Card className="text-center py-20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Become a Force of Nature!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground max-w-md mx-auto">
             This interactive sandbox is under development. Prepare to experiment with friction, magnetism, and the fundamental forces that shape our universe.
            </p>
            <Button className="mt-8">Enter the Sandbox</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
