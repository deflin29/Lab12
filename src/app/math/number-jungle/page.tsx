'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const animals = ['🐒', '🦁', '🐯', '🐘', '🐍', '🦓', '🦒'];

export default function NumberJunglePage() {
  const [currentAnimal, setCurrentAnimal] = useState('');
  const [count, setCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameState, setGameState] = useState<'playing' | 'answered'>('playing');

  const generateNewQuestion = () => {
    const animal = animals[Math.floor(Math.random() * animals.length)];
    const number = Math.floor(Math.random() * 9) + 1; // 1 to 9
    setCurrentAnimal(animal);
    setCount(number);
    setUserAnswer('');
    setFeedback(null);
    setIsCorrect(null);
    setGameState('playing');
  };

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const handleCheckAnswer = () => {
    const answer = parseInt(userAnswer, 10);
    if (isNaN(answer)) {
      setFeedback('Please enter a number!');
      setIsCorrect(false);
      return;
    }

    if (answer === count) {
      setFeedback('Correct! Well done!');
      setIsCorrect(true);
    } else {
      setFeedback(`Not quite! The correct answer was ${count}.`);
      setIsCorrect(false);
    }
    setGameState('answered');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && gameState === 'playing') {
      handleCheckAnswer();
    }
  };

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

        <Card className="bg-card/50 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Count the Animals!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center text-4xl sm:text-6xl py-8 my-4 bg-muted/50 rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={count + currentAnimal}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4"
                >
                  {Array.from({ length: count }).map((_, i) => (
                    <span key={i}>{currentAnimal}</span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="grid gap-4">
                <Label htmlFor="answer" className="text-center text-lg">
                  How many animals do you see?
                </Label>
                <Input
                  id="answer"
                  type="number"
                  placeholder="Enter the number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={gameState === 'answered'}
                  className="text-center text-lg h-12"
                />

                {gameState === 'playing' ? (
                  <Button onClick={handleCheckAnswer} className="h-11">
                    Check Answer
                  </Button>
                ) : (
                  <Button onClick={generateNewQuestion} className="h-11">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Next Question
                  </Button>
                )}
              </div>

              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 text-center font-semibold p-3 rounded-md ${
                      isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {feedback}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
