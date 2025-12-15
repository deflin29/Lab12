'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Play, Pause, RefreshCw } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const planets = {
  Earth: 9.8,
  Moon: 1.62,
  Mars: 3.72,
  Jupiter: 24.79,
  Zero: 0,
};

type Planet = keyof typeof planets;

export default function GravityLabPage() {
  const [gravity, setGravity] = useState(planets.Earth);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const animationFrameId = useRef<number>();
  const lastTime = useRef<number>();

  const objectHeight = 50; 
  const containerHeight = 300; 
  const groundPosition = containerHeight - objectHeight;

  useEffect(() => {
    if (isPlaying) {
      lastTime.current = performance.now();
      const animate = (time: number) => {
        if (!lastTime.current) {
          lastTime.current = time;
          animationFrameId.current = requestAnimationFrame(animate);
          return;
        }

        const deltaTime = (time - lastTime.current) / 1000; // in seconds
        
        let newVelocity = velocity + gravity * 10 * deltaTime; // gravity scaled for better visualization
        let newPosition = position + newVelocity * deltaTime * 100; // position scaled

        if (newPosition >= groundPosition) {
          newPosition = groundPosition;
          newVelocity = -newVelocity * 0.6; // bounce with some energy loss
        }
        
        if (Math.abs(newVelocity) < 0.1 && newPosition >= groundPosition - 1) {
            newVelocity = 0;
            newPosition = groundPosition;
            setIsPlaying(false);
        }

        setPosition(newPosition);
        setVelocity(newVelocity);
        lastTime.current = time;
        animationFrameId.current = requestAnimationFrame(animate);
      };
      animationFrameId.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isPlaying, gravity, position, velocity, groundPosition]);

  const resetSimulation = () => {
    setIsPlaying(false);
    setPosition(0);
    setVelocity(0);
  };
  
  const handleGravityChange = (value: number[]) => {
    setGravity(value[0]);
    resetSimulation();
  };

  const handlePlanetClick = (planetGravity: number) => {
    setGravity(planetGravity);
    resetSimulation();
  };

  const togglePlay = () => {
    if (position >= groundPosition) {
        resetSimulation();
        setTimeout(() => setIsPlaying(true), 50);
    } else {
        setIsPlaying(!isPlaying);
    }
  };

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
            🌍 Gravity Lab 🌍
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Adjust gravity and see how objects float, fall, and orbit.
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Gravity Simulator
            </CardTitle>
            <CardDescription className="text-center">
                Press play to drop the ball. Adjust the gravity to see what happens!
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 space-y-6">
                <div>
                    <Label htmlFor="gravity-slider" className="text-lg">Gravity: {gravity.toFixed(2)} m/s²</Label>
                    <Slider
                        id="gravity-slider"
                        min={0}
                        max={30}
                        step={0.1}
                        value={[gravity]}
                        onValueChange={handleGravityChange}
                        className="my-4"
                    />
                </div>
                 <div>
                    <Label className="text-lg mb-2 block">Or pick a preset:</Label>
                    <div className="grid grid-cols-2 gap-2">
                        {Object.keys(planets).map((planet) => (
                            <Button key={planet} variant={gravity === planets[planet as Planet] ? "default" : "outline"} onClick={() => handlePlanetClick(planets[planet as Planet])}>
                                {planet}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button onClick={togglePlay} className="w-full">
                        {isPlaying ? <Pause /> : <Play />}
                        <span className="ml-2">{isPlaying ? 'Pause' : (position > 0 ? 'Resume' : 'Play')}</span>
                    </Button>
                    <Button onClick={resetSimulation} variant="outline" className="w-full">
                        <RefreshCw />
                        <span className="ml-2">Reset</span>
                    </Button>
                </div>
            </div>
            <div className="md:col-span-2 h-[300px] bg-muted/50 rounded-lg flex items-start justify-center p-4 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50" />
                <motion.div
                    className="w-[50px] h-[50px] bg-gradient-to-br from-primary to-accent rounded-full shadow-lg"
                    animate={{ y: position }}
                    transition={{ type: 'spring', damping: 15, stiffness: 100, duration: 0.1 }}
                />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
