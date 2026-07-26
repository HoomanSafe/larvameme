import { useState } from 'react';
import { ScrollAnimation } from './ScrollAnimation';
import { Copy, Check, ExternalLink } from 'lucide-react';

const CONTRACT_ADDRESS = "LARVA...xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

export const BlockchainSection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="buy" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <span className="inline-block bg-larva-purple text-accent-foreground font-bangers text-lg px-4 py-2 rounded-full shadow-cartoon mb-4">
              ON-CHAIN 🔗
            </span>
            <h2 className="font-bangers text-4xl md:text-6xl lg:text-7xl text-foreground mb-4">
              Built on <span className="text-larva-purple">RobinHood</span>
            </h2>
            <p className="font-comic text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast, cheap, and chaotic — just like our two braincell-sharing larvae.
              $LARVA lives on the RobinHood blockchain. ⚡
            </p>
          </div>
        </ScrollAnimation>

        {/* Contract Address Card */}
        <ScrollAnimation animation="scale-in" delay={200}>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-card border-4 border-foreground rounded-2xl p-6 md:p-8 shadow-cartoon-lg">
              <p className="font-bangers text-xl text-muted-foreground mb-4 text-center">
                Contract Address
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <code className="flex-1 bg-muted rounded-xl px-4 py-3 font-mono text-sm md:text-base text-foreground break-all text-center sm:text-left">
                  {CONTRACT_ADDRESS}
                </code>
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center gap-2 font-bangers text-lg px-6 py-3 rounded-xl shadow-cartoon transition-all duration-200 ${
                    copied 
                      ? 'bg-larva-green text-foreground' 
                      : 'bg-larva-yellow text-secondary-foreground hover:translate-x-1 hover:translate-y-1 hover:shadow-none'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      COPIED!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      COPY
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Exchange buttons */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              className="group flex items-center gap-3 font-bangers text-xl px-8 py-4 bg-larva-red text-primary-foreground rounded-2xl shadow-cartoon-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              BUY ON RAYDIUM
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            <a 
              href="#" 
              className="group flex items-center gap-3 font-bangers text-xl px-8 py-4 bg-muted text-foreground border-4 border-foreground rounded-2xl shadow-cartoon-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              VIEW ON DEXSCREENER
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </ScrollAnimation>

        {/* Stats (placeholder) 
        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {[
              { label: "Holders", value: "???", emoji: "🐛" },
              { label: "Market Cap", value: "$???", emoji: "💰" },
              { label: "Liquidity", value: "BURNED", emoji: "🔥" },
              { label: "Tax", value: "0%", emoji: "✨" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-card border-4 border-foreground rounded-2xl p-4 text-center shadow-cartoon hover:animate-wiggle"
              >
                <span className="text-3xl mb-2 block">{stat.emoji}</span>
                <p className="font-bangers text-2xl md:text-3xl text-foreground">{stat.value}</p>
                <p className="font-comic text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>*/}
      </div>
    </section>
  );
};
