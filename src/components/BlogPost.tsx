import { useParams, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: "premier-sports-facilities-bradford",
    title: "Why Frame 2 Complex is Bradford's Premier Sports Destination",
    excerpt: "Discover what makes Frame 2 Complex the ultimate sports and recreation hub in Bradford, featuring championship-quality facilities and world-class amenities.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb21wbGV4JTIwYnJhZGZvcmR8ZW58MXx8fHwxNzY2NDM0NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Facilities",
    date: "Dec 28, 2025",
    readTime: "6 min read",
    author: "Frame 2 Complex Team",
    content: `
      <h2>World-Class Facilities in the Heart of Bradford</h2>
      <p>Frame 2 Complex stands as Bradford's premier sports and recreation destination, offering an unparalleled experience for athletes, fitness enthusiasts, and sports lovers of all levels.</p>

      <h3>Championship-Quality Sports Facilities</h3>
      <p>Our football grounds feature pristine turf surfaces that meet professional standards, while our cricket wickets provide the perfect setting for both casual matches and competitive play. The snooker tables are maintained to championship quality, and our boxing rings offer professional-grade equipment for serious training.</p>

      <h3>State-of-the-Art Gaming Arena</h3>
      <p>Step into the future of gaming with our cutting-edge esports arena. High-performance gaming stations, competitive tournaments, and a vibrant community await in our state-of-the-art facility equipped with ultra-fast internet and professional-grade equipment.</p>

      <h3>Premium Amenities</h3>
      <p>From luxurious changing rooms with powerful hairdryers and straighteners to our spa facilities and comfortable accommodation rooms, every detail is designed to enhance your experience.</p>

      <h3>Expert Coaching and Community</h3>
      <p>Our team of expert coaches and staff are dedicated to helping you achieve your goals, whether you're training for competition or simply enjoying recreational sports. Join our vibrant community and be part of Bradford's sports revolution.</p>
    `
  },
  {
    id: 2,
    slug: "fitness-journey-success-stories",
    title: "Real Success Stories: Member Fitness Journeys at Frame 2 Complex",
    excerpt: "Inspiring stories from our members who transformed their lives through our comprehensive fitness programs, expert coaching, and supportive community.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3VjY2VzcyUyMHN0b3JpZXN8ZW58MXx8fHwxNzY2NDM0NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Success Stories",
    date: "Dec 25, 2025",
    readTime: "8 min read",
    author: "Sarah Mitchell",
    content: `
      <h2>Transforming Lives Through Sports and Fitness</h2>
      <p>At Frame 2 Complex, we're not just about facilities – we're about transformation. Here are inspiring stories from members who achieved their fitness goals with our support.</p>

      <h3>Sarah's Boxing Journey</h3>
      <p>Sarah joined us six months ago looking to build confidence and get fit. Under the guidance of our expert boxing coaches, she not only transformed her physique but discovered a passion for the sport. "Frame 2 Complex gave me the tools and confidence to pursue my dreams," she says.</p>

      <h3>Michael's Football Comeback</h3>
      <p>After years away from sports, Michael returned to football at our championship-quality grounds. Our coaching staff helped him rebuild his skills and confidence. Today, he captains a local team and credits Frame 2 Complex with giving him his love for the game back.</p>

      <h3>Emma's Wellness Transformation</h3>
      <p>Emma's journey began with our yoga classes and expanded to include swimming in our outdoor heated pool and strength training in our fully equipped gym. "The supportive community and expert guidance made all the difference," she shares.</p>

      <h3>Community Support</h3>
      <p>What makes these success stories possible is our commitment to each member. From personalized training programs to nutritional guidance and mental wellness support, we provide comprehensive care for your fitness journey.</p>
    `
  },
  {
    id: 3,
    slug: "sports-nutrition-guide",
    title: "The Ultimate Guide to Sports Nutrition for Peak Performance",
    excerpt: "Learn how proper nutrition can enhance your athletic performance, whether you're training for competition or maintaining an active lifestyle.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBudXRyaXRpb258ZW58MXx8fHwxNzY2NDM0NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Nutrition",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    author: "Dr. James Wilson",
    content: `
      <h2>Fueling Your Body for Optimal Performance</h2>
      <p>Proper nutrition is the foundation of athletic success. Whether you're a competitive athlete or enjoy recreational sports, understanding sports nutrition can significantly enhance your performance and recovery.</p>

      <h3>Pre-Workout Fuel</h3>
      <p>Consume a balanced meal 2-3 hours before exercise containing complex carbohydrates, lean protein, and healthy fats. For shorter sessions, a small snack with carbs and protein 30-60 minutes before can provide the energy boost you need.</p>

      <h3>During Exercise</h3>
      <p>For sessions longer than 90 minutes, consider sports drinks or gels to maintain energy levels. Stay hydrated throughout your workout, and consider electrolyte replacement for intense or long-duration activities.</p>

      <h3>Post-Workout Recovery</h3>
      <p>The 30-60 minutes after exercise is your "anabolic window" – the optimal time to consume protein and carbohydrates to aid muscle recovery and replenish glycogen stores. Aim for a 3:1 or 4:1 ratio of carbs to protein.</p>

      <h3>Hydration Strategies</h3>
      <p>Proper hydration is crucial for performance. Drink water throughout the day and during exercise. For intense workouts, consider electrolyte supplements to replace what you lose through sweat.</p>

      <h3>Individualized Nutrition</h3>
      <p>Remember that nutrition needs vary based on your sport, intensity, duration, and individual metabolism. Our nutrition experts can help create a personalized plan tailored to your goals and activities.</p>
    `
  },
  {
    id: 4,
    slug: "esports-gaming-revolution",
    title: "The Esports Revolution: Gaming as a Professional Sport",
    excerpt: "Explore how gaming has evolved into a professional sport and how Frame 2 Complex supports the next generation of esports athletes.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nfGVufDF8fHx8MTc2NjQzNDU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Esports",
    date: "Dec 15, 2025",
    readTime: "9 min read",
    author: "Alex Chen",
    content: `
      <h2>Gaming: The New Frontier of Professional Sports</h2>
      <p>Esports has emerged as a global phenomenon, with professional gamers competing for millions in prize money and millions of fans worldwide. At Frame 2 Complex, we're proud to support this exciting evolution of sports entertainment.</p>

      <h3>The Rise of Competitive Gaming</h3>
      <p>What started as casual gaming in basements has become a billion-dollar industry. Games like League of Legends, Dota 2, and Counter-Strike feature professional teams, dedicated training facilities, and global tournaments that rival traditional sports events.</p>

      <h3>Professional Gaming Facilities</h3>
      <p>Our esports arena features high-performance gaming stations with top-tier equipment, ultra-fast internet connections, and professional-grade peripherals. Whether you're training for competition or enjoying casual gaming, our facilities provide the perfect environment.</p>

      <h3>Community and Competition</h3>
      <p>Join our vibrant gaming community for tournaments, leagues, and social events. We host regular competitions and provide coaching for aspiring professional gamers. Our facilities also serve as a hub for gaming education and skill development.</p>

      <h3>The Future of Esports</h3>
      <p>As esports continues to grow, Frame 2 Complex remains committed to supporting the next generation of gaming athletes. We provide the training grounds, community, and resources needed to turn gaming passion into professional success.</p>
    `
  },
  {
    id: 5,
    slug: "mental-wellness-athletes",
    title: "Mental Wellness: The Hidden Key to Athletic Success",
    excerpt: "Discover how mental training and wellness practices can enhance athletic performance and help you achieve your goals at Frame 2 Complex.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfG1lbnRhbCUyMHdlbGxuZXNzJTIwYXRobGV0ZXxlbnwxfHx8fDE3NjY0MzQ1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Wellness",
    date: "Dec 10, 2025",
    readTime: "6 min read",
    author: "Dr. Lisa Thompson",
    content: `
      <h2>The Mind-Body Connection in Sports</h2>
      <p>Athletic performance isn't just about physical strength and technique – mental wellness plays a crucial role in achieving peak performance and maintaining long-term success.</p>

      <h3>Mindfulness and Focus</h3>
      <p>Our yoga and meditation classes help athletes develop mental clarity, focus, and stress management skills. These practices translate directly to improved performance in all sports, from precision in snooker to strategy in team sports.</p>

      <h3>Building Mental Resilience</h3>
      <p>Through coaching and wellness programs, we help athletes develop the mental toughness needed to overcome challenges, handle pressure, and maintain motivation. Mental training is as important as physical training for serious athletes.</p>

      <h3>Recovery and Rest</h3>
      <p>Proper recovery includes mental rest as well as physical recovery. Our spa facilities and relaxation areas provide spaces for mental rejuvenation, helping you return to training refreshed and focused.</p>

      <h3>Holistic Athlete Development</h3>
      <p>At Frame 2 Complex, we believe in developing the whole athlete – body, mind, and spirit. Our comprehensive wellness programs support mental health and provide tools for long-term athletic success.</p>
    `
  },
  {
    id: 6,
    slug: "youth-sports-development",
    title: "Investing in the Future: Youth Sports Development at Frame 2 Complex",
    excerpt: "How we're nurturing the next generation of athletes through comprehensive youth programs, coaching, and community engagement.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHNwb3J0cyUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjQzNDU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Youth",
    date: "Dec 5, 2025",
    readTime: "7 min read",
    author: "Coach David Patel",
    content: `
      <h2>Building Tomorrow's Champions Today</h2>
      <p>At Frame 2 Complex, we're committed to developing young athletes and fostering a love for sports that will last a lifetime. Our youth programs combine fun, skill development, and character building.</p>

      <h3>Comprehensive Youth Programs</h3>
      <p>From grassroots football and cricket coaching to introduction to boxing and gaming, our youth programs cater to all interests and skill levels. We believe every child deserves the opportunity to discover their athletic potential.</p>

      <h3>Expert Coaching and Development</h3>
      <p>Our qualified coaches specialize in youth development, using age-appropriate training methods that build skills, confidence, and a love for sports. We focus on fundamental movement skills, sportsmanship, and personal growth.</p>

      <h3>Safe and Supportive Environment</h3>
      <p>All our youth programs prioritize safety, inclusivity, and fun. Our facilities are designed with young athletes in mind, and our staff are trained in child protection and development principles.</p>

      <h3>Community Impact</h3>
      <p>By investing in youth sports development, we're not just creating better athletes – we're building stronger communities. Our programs teach valuable life skills like teamwork, discipline, and perseverance that benefit young people both on and off the field.</p>
    `
  }
];

export function BlogPost() {
  const { blogId } = useParams();
  const post = blogPosts.find(post => post.slug === blogId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-purple-600 hover:text-purple-800 underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden pt-16 md:pt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-8 h-full flex items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center gap-4 mb-4 mt-6">
              <span className="px-4 py-2 bg-purple-900 text-white text-sm uppercase tracking-wider rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#F5F1E8] py-16 mt-16 md:mt-0">
        <div className="max-w-4xl mx-auto px-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-purple-900">{post.author}</p>
                <p className="text-sm text-purple-900/60">Author</p>
              </div>
            </div>

            {/* Blog Content */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Text Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-purple-900 prose-p:text-gray-700 prose-strong:text-purple-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Side Image */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative w-full max-w-md"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-900 text-white rounded-full hover:bg-purple-950 transition-all hover:scale-105 transform shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}