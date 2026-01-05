import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import MenuHero from './components/MenuHero';
import MenuExperienceInteractive from './components/MenuExperienceInteractive';
import CulturalStory from './components/CulturalStory';

export const metadata: Metadata = {
  title: 'Menu Experience - Kathmandu Tapas DC',
  description: 'Explore our curated collection of Nepalese-inspired tapas, signature cocktails, and fusion creations. Interactive menu with dietary filters, ingredient stories, and wine pairings.',
};

export default function MenuExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <MenuHero />
        <MenuExperienceInteractive />
        <CulturalStory />
      </main>
    </div>
  );
}