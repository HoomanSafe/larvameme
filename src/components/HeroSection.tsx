import redLarva from '@/assets/red1.png';
import yellowLarva from '@/assets/yellow1.png';
import heroBg from '@/assets/hero-bg.png';
import { ScrollAnimation } from './ScrollAnimation';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-larva-yellow opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo Text */}
          <ScrollAnimation animation="scale-in">
            <h1 className="font-bangers text-7xl md:text-9xl lg:text-[12rem] gradient-text-chaos mb-4 tracking-wider drop-shadow-[0_0_30px_rgba(255,200,0,0.5)]">
              LARVA
            </h1>
          </ScrollAnimation>

          {/* Mascots */}
          <div className="flex items-end justify-center gap-4 md:gap-8 mb-8 -mt-8">
            <ScrollAnimation animation="slide-left" delay={200}>
              <div className="relative">
                <img 
                  src={redLarva} 
                  alt="Red - The Angry Larva" 
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain animate-wiggle drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-larva-red text-primary-foreground font-bangers text-sm md:text-base px-3 py-1 rounded-full shadow-cartoon whitespace-nowrap">
                  RED 😤
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right" delay={400}>
              <div className="relative">
                <img 
                  src={yellowLarva} 
                  alt="Yellow - The Clueless Larva" 
                  className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-contain animate-float drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-larva-yellow text-secondary-foreground font-bangers text-sm md:text-base px-3 py-1 rounded-full shadow-cartoon whitespace-nowrap">
                  YELLOW 🥴
                </span>
              </div>
            </ScrollAnimation>
          </div>

          {/* Tagline */}
          <ScrollAnimation animation="fade-up" delay={600}>
            <h2 className="font-bangers text-3xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Two Bugs. Zero Brains. Infinite Vibes.
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={800}>
            <p className="font-comic text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              A cartoon-level accident on Solana. 🐛💥
            </p>
          </ScrollAnimation>

          {/* CTA Buttons */}
          <ScrollAnimation animation="scale-in" delay={1000}>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#buy" 
                className="group relative font-bangers text-xl md:text-2xl px-8 py-4 bg-larva-red text-primary-foreground rounded-2xl shadow-cartoon-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
              >
                BUY $LARVA
                <span className="absolute -top-2 -right-2 text-2xl group-hover:animate-bounce">🚀</span>
              </a>
              <a 
                href="#about" 
                className="font-bangers text-xl md:text-2xl px-8 py-4 bg-larva-yellow text-secondary-foreground rounded-2xl shadow-cartoon-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
              >
                LEARN MORE 📖
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-4 border-foreground rounded-full flex justify-center">
          <div className="w-2 h-2 bg-larva-yellow rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
