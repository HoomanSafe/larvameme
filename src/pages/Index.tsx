import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CharactersSection } from '@/components/CharactersSection';
import { BlockchainSection } from '@/components/BlockchainSection';
import { SocialSection } from '@/components/SocialSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Meta info for SEO */}
      <title>$LARVA - Two Bugs, Zero Brains, Infinite Vibes | Solana Meme Coin</title>
      
      <HeroSection />
      <AboutSection />
      <CharactersSection />
      <BlockchainSection />
      <SocialSection />
      <Footer />
    </main>
  );
};

export default Index;
