import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NumberJunglePage() {
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
            🌴 Number Jungle 🌴
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Master counting and basic operations in a wild adventure.
          </p>
        </div>

        <Card className="text-center py-20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Let the Adventure Begin!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground max-w-md mx-auto">
              The Number Jungle is under construction. Exciting games and
              challenges are coming soon to help you master counting, addition,
              subtraction, and more!
            </p>
            <Button className="mt-8">Start First Quest</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
