import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const physicsTopics = [
  { name: 'Gravity Lab', description: 'Adjust gravity and see how objects float, fall, and orbit.', emoji: '🌍' },
  { name: 'Motion Maze', description: 'Launch projectiles and navigate mazes using the laws of motion.', emoji: '🚀' },
  { name: 'Energy Workshop', description: 'Build circuits and power machines with different energy sources.', emoji: '⚡' },
  { name: 'Forces Playground', description: 'Experiment with push, pull, and friction in a fun sandbox.', emoji: '💪' },
];

export default function PhysicsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
        </Button>
        <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary">Physics Lab</h1>
            <p className="text-lg text-muted-foreground mt-2">Experiment, build, and learn by doing!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {physicsTopics.map((topic) => (
                <Card key={topic.name} className="bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-4 text-2xl font-headline">
                            <span className="text-4xl">{topic.emoji}</span>
                            {topic.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{topic.description}</p>
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
