import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function FractionIslandPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/math">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Math World
          </Link>
        </Button>
        <div className="text-center mb-12">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary">
            🏝️ Fraction Island 🏝️
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Solve puzzles by dividing treasures and crossing fraction bridges.
          </p>
        </div>

        <Card className="text-center py-20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Discover Hidden Treasures!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground max-w-md mx-auto">
              Fraction Island is still a hidden gem. Soon, you'll be able to
              explore its mysteries, solve fraction puzzles, and find pirate
              gold. Prepare for an exciting journey into the world of parts and
              wholes!
            </p>
            <Button className="mt-8">Explore the Island</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
