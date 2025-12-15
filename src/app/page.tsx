'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Award, Calculator, Atom, Rocket, ShieldCheck, Star, Users } from 'lucide-react';
import Hero3DScene from '@/components/hero-3d-scene';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const promoCards = [
  {
    title: 'Learn Maths in Space',
    description: 'Explore numbers, shapes, and fractions in a galaxy of fun.',
    href: '/math',
    icon: Calculator,
    image_id: 'math-world',
  },
  {
    title: 'Physics with Superpowers',
    description: 'Experiment with gravity, motion, and energy in an interactive lab.',
    href: '/physics',
    icon: Atom,
    image_id: 'physics-lab',
  },
  {
    title: 'Explore the Universe',
    description: 'Journey through the solar system and discover constellations.',
    href: '/astronomy',
    icon: Rocket,
    image_id: 'astronomy-galaxy',
  },
];

const badges = [
  { name: 'Number Ninja', image_id: 'badge-1', icon: Award },
  { name: 'Physics Phanom', image_id: 'badge-2', icon: Award },
  { name: 'Galaxy Explorer', image_id: 'badge-3', icon: Award },
];

export default function Home() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center py-20">
        <Hero3DScene />
        <div className="relative z-10 container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Play. Explore. Learn in 3D.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              Welcome to NeuroKids 3D, a gamified universe where children learn Maths, Physics, and Astronomy through interactive worlds and visual simulations.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg transition-transform hover:scale-105">
                <Link href="#explore">Start Exploring <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105 bg-background/50 backdrop-blur-sm">
                <Link href="/dashboard">Parent Dashboard</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promo Cards Section */}
      <section id="explore" className="py-16 sm:py-24 bg-background/80">
        <div className="container mx-auto px-4">
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {promoCards.map((card) => {
              const image = getImage(card.image_id);
              return (
              <motion.div key={card.title} variants={itemVariants}>
                <Card className="h-full overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 bg-card/50 backdrop-blur-md border-border/50">
                   {image && (
                     <div className="relative h-48">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          data-ai-hint={image.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                     </div>
                   )}
                   <CardHeader className="relative -mt-16 z-10">
                     <div className="p-3 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full w-fit mb-3">
                      <card.icon className="h-8 w-8 text-primary" />
                     </div>
                    <CardTitle className="font-headline text-2xl text-card-foreground">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{card.description}</p>
                    <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent">
                      <Link href={card.href}>Launch World <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )})}
          </motion.div>
        </div>
      </section>
      
      {/* Daily Challenge & Rewards */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Daily Challenge */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-border/50"
            >
                <h2 className="font-headline text-3xl font-bold mb-4">Today's Daily Challenge</h2>
                <p className="text-muted-foreground mb-6">Master the multiplication table up to 12 to earn a special badge!</p>
                <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg">
                    <Star className="mr-2 h-5 w-5" /> Start Challenge
                </Button>
            </motion.div>

            {/* Rewards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="font-headline text-3xl font-bold mb-4">Earn Awesome Rewards</h2>
                <p className="text-muted-foreground mb-6">Collect badges and points for every challenge you complete and level you master.</p>
                <div className="flex space-x-4">
                    {badges.map((badge) => {
                      const image = getImage(badge.image_id);
                      return (
                      <div key={badge.name} className="flex flex-col items-center space-y-2 group">
                          {image && <Image src={image.imageUrl} alt={badge.name} width={80} height={80} className="rounded-full border-4 border-secondary group-hover:border-accent transition-all" data-ai-hint={image.imageHint} />}
                          <span className="text-xs text-muted-foreground group-hover:text-foreground">{badge.name}</span>
                      </div>
                    )})}
                </div>
            </motion.div>
        </div>
      </section>

      {/* Parent Trust Section */}
      <section className="py-16 sm:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {(() => {
              const image = getImage('parent-trust');
              return image && (
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                  data-ai-hint={image.imageHint}
                />
              )
            })()}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-headline text-3xl font-bold mb-4">A Safe Universe for Your Child</h2>
            <p className="text-muted-foreground mb-6">
              We prioritize your child's safety with a secure, ad-free environment. Monitor progress, set time limits, and rest easy.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Parent Dashboard</h3>
                  <p className="text-muted-foreground text-sm">Track learning, view achievements, and manage settings.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Child-Friendly Design</h3>
                  <p className="text-muted-foreground text-sm">No ads, no in-app purchases, no external links. Just learning.</p>
                </div>
              </li>
            </ul>
             <Button variant="outline" className="mt-8" asChild>
                <Link href="/dashboard">Learn More</Link>
             </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
