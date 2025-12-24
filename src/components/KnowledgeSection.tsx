import { motion } from 'motion/react';

// Blog articles data
const articles = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1590074121258-6b53b6adb8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwY2lyY3VpdCUyMGd5bXxlbnwxfHx8fDE3NjY0Mjk4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    categories: ["Fitness", "Wellness", "Workouts"],
    title: "Introducing the Intuitive Strength Circuit"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1756314355692-56276a5b7bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzcyUyMGV4ZXJjaXNlJTIwZnVufGVufDF8fHx8MTc2NjQyOTg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    categories: ["Wellness", "Fitness", "Gym Advice"],
    title: "That's entertainment: How to enjoy exercise"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1758599879906-91085de59ccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzJTIwZ29hbHN8ZW58MXx8fHwxNzY2NDI5ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    categories: ["Nutrition", "Wellness", "Gym Advice"],
    title: "11 wellness goals that could transform your life"
  }
];

export function KnowledgeSection() {
  return (
    <section className="bg-[#F5F1E8] py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <h2 className="text-gray-700 text-4xl lg:text-5xl leading-tight">
              Access expert fitness and wellness knowledge
            </h2>
          </motion.div>

          {/* Right Side - Article Cards */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]">
                    {/* Image */}
                    <div className="h-64 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Categories */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.categories.map((category, idx) => (
                          <span
                            key={idx}
                            className="text-gray-600 text-sm"
                          >
                            {category}
                            {idx < article.categories.length - 1 && (
                              <span className="ml-2 text-gray-400">•</span>
                            )}
                          </span>
                        ))}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-gray-800 text-xl leading-snug group-hover:text-purple-900 transition-colors">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}