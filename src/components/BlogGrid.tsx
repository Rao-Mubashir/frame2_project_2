import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const blogPosts = [
  {
    id: 1,
    title: "5 Morning Yoga Poses to Start Your Day",
    excerpt: "Discover how these simple yoga poses can energize your morning and set a positive tone for the entire day.",
    image: "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd2VsbG5lc3MlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2NjQzNDU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Wellness",
    date: "Dec 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Nutrition Tips for Peak Performance",
    excerpt: "Learn what to eat before and after your workout to maximize your results and maintain optimal energy levels.",
    image: "https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZm9vZHxlbnwxfHx8fDE3NjYzODgyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Nutrition",
    date: "Dec 10, 2024",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Building Strength: A Beginner's Guide",
    excerpt: "Everything you need to know to start your strength training journey with confidence and proper technique.",
    image: "https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc2NjM4NjkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Fitness",
    date: "Dec 5, 2024",
    readTime: "6 min read"
  }
];

export function BlogGrid() {
  return (
    <section className="py-24 px-8 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-purple-900 uppercase tracking-wider mb-4">Latest Stories</p>
            <h2 className="text-5xl md:text-6xl text-purple-900 mb-6">Our Blog</h2>
            <p className="text-xl text-purple-900/70 max-w-2xl mx-auto">
              Expert advice, wellness tips, and inspiring stories from our community
            </p>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-purple-900 text-white text-sm uppercase tracking-wider rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-purple-900/60">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl text-purple-900 mb-3 group-hover:text-purple-900/80 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-purple-900/70 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-purple-900 font-semibold group-hover:gap-4 transition-all"
                >
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
