import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const facilities = [
  {
    image: "https://images.unsplash.com/photo-1734652246537-104c43a68942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNvY2NlciUyMGZpZWxkJTIwcGl0Y2h8ZW58MXx8fHwxNzY2NTE3OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Professional Football Grounds",
    description: "Experience the thrill of the game on our professionally maintained football pitches. Whether you're organizing a friendly match, team training session, or competitive tournament, our premium grass and artificial turf grounds provide the perfect playing surface for all skill levels.",
    path: "/service/football"
  },
  {
    image: "https://images.unsplash.com/photo-1730739628981-6537b299aea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwc3RhZGl1bXxlbnwxfHx8fDE3NjY1MTc5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Premier Cricket Ground",
    description: "Step onto our world-class cricket ground featuring a meticulously prepared pitch and state-of-the-art facilities. Perfect for competitive matches, practice sessions, and cricket enthusiasts of all ages. Complete with professional-grade equipment and ample seating for spectators.",
    path: "/service/cricket"
  },
  {
    image: "https://images.unsplash.com/photo-1726867863287-aba3393812d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjByaW5nJTIwZ3ltfGVufDF8fHx8MTc2NjQzNjAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Full-Service Boxing Facility",
    description: "Train like a champion in our dedicated boxing area equipped with professional-grade rings, heavy bags, speed bags, and training equipment. Whether you're a beginner learning the fundamentals or an experienced boxer refining your technique, our facility provides everything you need.",
    path: "/service/boxing"
  },
  {
    image: "https://images.unsplash.com/photo-1553492206-f609eddc33dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBhcmVuYSUyMGVzcG9ydHN8ZW58MXx8fHwxNzY2NDM3NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "State-of-the-Art Game Arena",
    description: "Immerse yourself in our cutting-edge gaming arena featuring the latest gaming consoles, high-performance PCs, and immersive VR experiences. Perfect for esports tournaments, casual gaming sessions, and entertainment events in a comfortable, climate-controlled environment.",
    path: "/service/game-arena"
  }
];

export function AboutFacilities() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Image */}
              <motion.div 
                className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-2xl sm:rounded-3xl group shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Content */}
              <motion.div 
                className={index % 2 === 1 ? 'lg:pr-12' : 'lg:pl-12'}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-gray-800">
                  {facility.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  {facility.description}
                </p>
                <Link to={facility.path}>
                  <motion.button
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-purple-900 text-white rounded-full hover:bg-purple-950 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore facility
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
