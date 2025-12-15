import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BarChart, Clock, Shield } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="bg-secondary/40 min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                 <div className="flex justify-between items-center mb-8">
                    <div className="text-left">
                        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary">Parent Dashboard</h1>
                        <p className="text-lg text-muted-foreground mt-1">Track your child's learning journey.</p>
                    </div>
                     <Button variant="ghost" asChild>
                        <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
                    </Button>
                </div>
            
                <Card className="text-center py-20">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Dashboard Coming Soon!</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            This is where you'll be able to see your child's progress, time spent on subjects, and achievements.
                        </p>
                        <div className="flex justify-center gap-8 mt-8 text-muted-foreground">
                            <div className="flex flex-col items-center gap-2">
                                <BarChart className="h-8 w-8" />
                                <span>Performance</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Clock className="h-8 w-8" />
                                <span>Time Spent</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Shield className="h-8 w-8" />
                                <span>Achievements</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
