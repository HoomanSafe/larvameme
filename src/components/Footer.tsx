import redLarva from '@/assets/larvalogo.png';

export const Footer = () => {
  return (
    <footer className="py-12 border-t-4 border-foreground/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={redLarva} 
              alt="LARVA" 
              className="w-16 h-16 object-contain animate-wiggle"
            />
            <span className="font-bangers text-4xl gradient-text-chaos">$LARVA</span>
          </div>

          {/* Tagline */}
          <p className="font-comic text-lg text-muted-foreground mb-6 max-w-md">
            Two bugs. Zero brains. One blockchain. 
            <br />
            This is the way. 🐛
          </p>

          {/* Disclaimer */}
          <div className="bg-muted/50 rounded-xl px-6 py-4 mb-6 max-w-2xl">
            <p className="font-comic text-sm text-muted-foreground">
              ⚠️ This meme coin is not affiliated with, endorsed by, or associated with LARVA by TUBA Entertainment or any official representatives of the LARVA brand. <br></br>It is purely a fan token and a community experiment. Please do your own research before participating. Meme coins are highly speculative and volatile assets with no intrinsic value.
$LARVA is a meme token with no expectation of financial return.<br></br> This is not financial advice. Always DYOR. We're literally just cartoon bugs.
              
            </p>
          </div>

          {/* Copyright */}
          <p className="font-comic text-muted-foreground">
            © {new Date().getFullYear()} $LARVA on RobinHood. All chaos reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
