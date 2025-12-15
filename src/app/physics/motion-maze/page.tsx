import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MotionMazePage() {
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
            🚀 Motion Maze 🚀
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Launch projectiles and navigate mazes using the laws of motion.
          </p>
        </div>

        <Card className="text-center py-20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Navigate the Challenge!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground max-w-md mx-auto">
             Get ready to solve complex puzzles. The Motion Maze is being designed to test your understanding of trajectory, acceleration, and velocity.
            </p>
            <Button className="mt-8">Enter the Maze</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
