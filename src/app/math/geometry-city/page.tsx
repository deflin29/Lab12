import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function GeometryCityPage() {
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
            🏙️ Geometry City 🏙️
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Build and explore a city made of 3D shapes.
          </p>
        </div>

        <Card className="text-center py-20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Grab Your Blueprints!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground max-w-md mx-auto">
              Geometry City is currently being built. Get ready to design
              buildings with cubes, spheres, and pyramids. Learn about shapes,
              area, and volume in a fun, interactive way!
            </p>
            <Button className="mt-8">Start Building</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
