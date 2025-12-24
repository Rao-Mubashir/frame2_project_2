import { Navbar } from '../components/Navbar';
import { BlogHero } from '../components/BlogHero';
import { BlogGrid } from '../components/BlogGrid';
import { Footer } from '../components/Footer';

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </div>
  );
}
