import { Navbar } from '../components/Navbar';
import { AboutHero } from '../components/AboutHero';
import { AboutPurpose } from '../components/AboutPurpose';
import { AboutStats } from '../components/AboutStats';
import { AboutWhoWeAre } from '../components/AboutWhoWeAre';
import { AboutFacilities } from '../components/AboutFacilities';
import { AboutTeam } from '../components/AboutTeam';
import { AboutBuilding } from '../components/AboutBuilding';
import { AboutEurope } from '../components/AboutEurope';
import { AboutValues } from '../components/AboutValues';
import { Footer } from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutPurpose />
      <AboutStats />
      <AboutWhoWeAre />
      <AboutFacilities />
      <AboutTeam />
      <AboutBuilding />
      <AboutEurope />
      <AboutValues />
      <Footer />
    </div>
  );
}
