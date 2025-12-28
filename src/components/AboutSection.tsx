import { ScrollAnimation } from './ScrollAnimation';
import { Bug, Brain, Map, Sparkles, Skull, Flame } from 'lucide-react';

const memePoints = [
  { icon: Map, text: "No roadmap", subtext: "We're lost and loving it", color: "text-larva-red" },
  { icon: Brain, text: "No utility", subtext: "Just vibes and chaos", color: "text-larva-yellow" },
  { icon: Skull, text: "No brains", subtext: "Literally two worms", color: "text-larva-purple" },
  { icon: Flame, text: "Maximum chaos", subtext: "This is financial comedy", color: "text-larva-orange" },
  { icon: Sparkles, text: "Pure meme energy", subtext: "Certified degen material", color: "text-larva-green" },
  { icon: Bug, text: "Bug-pilled", subtext: "Embrace the larva life", color: "text-larva-red" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-larva-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-larva-yellow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-block bg-larva-yellow text-secondary-foreground font-bangers text-lg px-4 py-2 rounded-full shadow-cartoon mb-4">
              THE LORE 📜
            </span>
            <h2 className="font-bangers text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              What is <span className="gradient-text-chaos">$LARVA</span>?
            </h2>
            <p className="font-comic text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Two cartoon larvae discovered crypto, ate too many leaves, and accidentally 
              launched a meme coin. Now they're on Solana causing havoc. This is not 
              financial advice — it's a comedy sketch that somehow ended up on the blockchain.
            </p>
          </div>
        </ScrollAnimation>

        {/* Meme points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memePoints.map((point, index) => (
            <ScrollAnimation 
              key={index} 
              animation="scale-in" 
              delay={index * 100}
            >
              <div className="group bg-card border-4 border-foreground rounded-2xl p-6 shadow-cartoon hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-muted rounded-xl ${point.color} group-hover:animate-wiggle`}>
                    <point.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bangers text-2xl text-foreground mb-1">
                      {point.text}
                    </h3>
                    <p className="font-comic text-muted-foreground">
                      {point.subtext}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Fun disclaimer */}
        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="mt-16 text-center">
            <div className="inline-block bg-muted border-4 border-dashed border-foreground/30 rounded-2xl p-6 max-w-2xl">
              <p className="font-comic text-muted-foreground text-lg">
                ⚠️ <strong>Disclaimer:</strong> This meme coin is not affiliated with, endorsed by, or associated with LARVA by TUBA Entertainment or any official representatives of the LARVA brand. <br></br>It is purely a fan token and a community experiment. Please do your own research before participating. Meme coins are highly speculative and volatile assets with no intrinsic value.
$LARVA is a meme token with no expectation of financial return.<br></br> This is not financial advice. Always DYOR. We're literally just cartoon bugs.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
