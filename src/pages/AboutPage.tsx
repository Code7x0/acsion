import { AboutHero } from '../components/about/AboutHero';
import { AboutPhilosophy } from '../components/about/AboutPhilosophy';
import { AboutStory } from '../components/about/AboutStory';
import { AboutFoundation } from '../components/about/AboutFoundation';
import { AboutFounder } from '../components/about/AboutFounder';
import { AboutLookingAhead } from '../components/about/AboutLookingAhead';
import { AboutCta } from '../components/about/AboutCta';

export function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutPhilosophy />
      <AboutStory />
      <AboutFoundation />
      <AboutFounder />
      <AboutLookingAhead />
      <AboutCta />
    </div>
  );
}
