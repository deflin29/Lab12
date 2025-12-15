import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const mathWorlds = [
  { name: 'Number Jungle', description: 'Master counting and basic operations in a wild adventure.', emoji: '🌴' },
  { name: 'Geometry City', description: 'Build and explore a city made of 3D shapes.', emoji: '🏙️' },
  { name: 'Fraction Island', description: 'Solve puzzles by dividing treasures and crossing fraction bridges.', emoji: '🏝️' },
  { name: 'Algebraic Aliens', description: 'Uncover the secrets of variables by communicating with extraterrestrials.', emoji: '👽' },
];

export default function MathPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
        <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary">Math World</h1>
            <p className="text-lg text-muted-foreground mt-2">Get ready for a mathematical adventure!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {mathWorlds.map((world) => (
                <Card key={world.name} className="bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-4 text-2xl font-headline">
                            <span className="text-4xl">{world.emoji}</span>
                            {world.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{world.description}</p>
                         <Button variant="outline" className="w-full mt-6" disabled>
                            Coming Soon
                         </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
