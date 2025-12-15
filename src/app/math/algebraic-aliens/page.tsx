import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AlgebraicAliensPage() {
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
            👽 Algebraic Aliens 👽
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Uncover the secrets of variables by communicating with
            extraterrestrials.
          </p>
        </div>

        <Card className="text-center py-20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Prepare for First Contact!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground max-w-md mx-auto">
              The aliens are preparing their messages! This world will soon be
              active with missions to help you understand variables, solve
              equations, and think like a true mathematician.
            </p>
            <Button className="mt-8">Make Contact</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
