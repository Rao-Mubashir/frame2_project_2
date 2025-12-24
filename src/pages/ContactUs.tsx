import { Navbar } from '../components/Navbar';
import { ContactHero } from '../components/ContactHero';
import { ContactForm } from '../components/ContactForm';
import { ContactMap } from '../components/ContactMap';
import { Footer } from '../components/Footer';

export default function ContactUs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <Footer />
    </div>
  );
}
