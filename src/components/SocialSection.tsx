import { ScrollAnimation } from './ScrollAnimation';
import { Twitter, Send, MessageCircle } from 'lucide-react';

const socialLinks = [
  { 
    name: "X (Twitter)", 
    icon: Twitter, 
    href: "https://x.com/LarvaonRH", 
    color: "bg-foreground text-background hover:bg-larva-red hover:text-primary-foreground",
    emoji: "🐦"
  }/*,
  { 
    name: "Telegram", 
    icon: Send, 
    href: "https://t.me/Larvamemechannel", 
    color: "bg-[#0088cc] text-primary-foreground hover:bg-[#006da3]",
    emoji: "✈️"
  }*/,
];

export const SocialSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {["🐛", "🪱", "💥", "⚡", "🔥", "💎", "🚀", "🌙"].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <span className="inline-block bg-larva-orange text-secondary-foreground font-bangers text-lg px-4 py-2 rounded-full shadow-cartoon mb-4">
              JOIN THE SWARM 🐛
            </span>
            <h2 className="font-bangers text-4xl md:text-6xl lg:text-7xl text-foreground mb-4">
              Follow the <span className="gradient-text-chaos">Chaos</span>
            </h2>
            <p className="font-comic text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of degens watching two cartoon larvae 
              fumble their way through the crypto world. It's comedy gold. 
            </p>
          </div>
        </ScrollAnimation>

        {/* Social buttons */}
        <ScrollAnimation animation="scale-in" delay={200}>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                className={`group flex items-center gap-4 font-bangers text-2xl px-10 py-5 rounded-2xl shadow-cartoon-lg border-4 border-foreground hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 ${social.color}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <social.icon className="w-8 h-8 group-hover:animate-wiggle" />
                {social.name}
                <span className="text-2xl group-hover:animate-bounce">{social.emoji}</span>
              </a>
            ))}
          </div>
        </ScrollAnimation>

        {/* Community callout */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card border-4 border-dashed border-foreground/30 rounded-2xl p-8">
              <MessageCircle className="w-16 h-16 text-larva-yellow mx-auto mb-4 animate-bounce-slow" />
              <h3 className="font-bangers text-3xl text-foreground mb-4">
                Got Memes? 🎨
              </h3>
              <p className="font-comic text-lg text-muted-foreground">
                Share your best $LARVA memes in our community channels. 
                The funnier, the better. We're literally powered by comedy.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
