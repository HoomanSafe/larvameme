import { ScrollAnimation } from './ScrollAnimation';
import redLarva from '@/assets/reds.png';
import yellowLarva from '@/assets/yellow11.png';

const characters = [
  {
    name: "RED",
    emoji: "😤",
    image: redLarva,
    color: "bg-larva-red",
    textColor: "text-primary-foreground",
    traits: ["Short king energy", "Permanently angry", "Thinks he's the boss", "Causes 90% of problems"],
    quote: "I'M NOT MAD, I'M JUST DISAPPOINTED... AND MAD.",
    animation: "animate-wiggle",
    glow: "shadow-glow-red",
  },
  {
    name: "YELLOW",
    emoji: "🥴",
    image: yellowLarva,
    color: "bg-larva-yellow",
    textColor: "text-secondary-foreground",
    traits: ["Tall and clueless", "Zero thoughts", "Pure vibes only", "Somehow survives everything"],
    quote: "wait... what are we doing again?",
    animation: "animate-float",
    glow: "shadow-glow-yellow",
  },
];

export const CharactersSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-30">🐛</div>
      <div className="absolute bottom-20 right-10 text-6xl animate-float-delayed opacity-30">🪱</div>
      <div className="absolute top-1/2 left-1/4 text-4xl animate-wiggle opacity-20">💥</div>
      <div className="absolute top-1/3 right-1/4 text-4xl animate-bounce-slow opacity-20">⚡</div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <span className="inline-block bg-larva-red text-primary-foreground font-bangers text-lg px-4 py-2 rounded-full shadow-cartoon mb-4">
              MEET THE BUGS 🐛
            </span>
            <h2 className="font-bangers text-4xl md:text-6xl lg:text-7xl text-foreground">
              The <span className="text-larva-red">Chaotic</span> Duo
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {characters.map((char, index) => (
            <ScrollAnimation 
              key={char.name} 
              animation={index === 0 ? "slide-left" : "slide-right"}
              delay={index * 200}
            >
              <div className={`relative group ${char.color} rounded-3xl p-8 border-4 border-foreground shadow-cartoon-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-cartoon transition-all duration-300`}>
                {/* Character image */}
                <div className="flex justify-center mb-6">
                  <div className={`relative ${char.glow} rounded-full`}>
                    <img 
                      src={char.image} 
                      alt={char.name}
                      className={`w-48 h-48 object-contain ${char.animation}`}
                    />
                  </div>
                </div>

                {/* Name badge */}
                <div className="text-center mb-6">
                  <h3 className={`font-bangers text-5xl ${char.textColor} mb-2`}>
                    {char.name} {char.emoji}
                  </h3>
                </div>

                {/* Traits */}
                <ul className="space-y-2 mb-6">
                  {char.traits.map((trait, i) => (
                    <li 
                      key={i}
                      className={`flex items-center gap-2 font-comic text-lg ${char.textColor}`}
                    >
                      <span className="text-xl">•</span>
                      {trait}
                    </li>
                  ))}
                </ul>

                {/* Quote */}
                <div className="bg-background/20 rounded-xl p-4 border-2 border-foreground/20">
                  <p className={`font-comic italic text-center ${char.textColor}`}>
                    "{char.quote}"
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
