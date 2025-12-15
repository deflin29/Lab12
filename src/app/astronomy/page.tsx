import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const astronomyFeatures = [
  { name: '3D Solar System', description: 'Zoom, rotate, and learn about every planet in our solar system.', emoji: '🪐' },
  { name: 'Planet Missions', description: 'Embark on missions to Mars, Jupiter, and beyond as a space explorer.', emoji: '🧑‍🚀' },
  { name: 'Constellation Puzzles', description: 'Connect the stars and discover the stories behind the constellations.', emoji: '✨' },
  { name: 'Day & Night Simulator', description: 'See how Earth\'s rotation creates day, night, and seasons.', emoji: '🌞' },
];

export default function AstronomyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
        <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary">Astronomy Galaxy</h1>
            <p className="text-lg text-muted-foreground mt-2">Become a space explorer and travel the cosmos!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {astronomyFeatures.map((feature) => (
                <Card key={feature.name} className="bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-4 text-2xl font-headline">
                             <span className="text-4xl">{feature.emoji}</span>
                            {feature.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
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
