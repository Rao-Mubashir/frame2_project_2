import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  {
    url: "https://images.unsplash.com/photo-1734652246537-104c43a68942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNvY2NlciUyMGZpZWxkJTIwcGl0Y2h8ZW58MXx8fHwxNzY2NTE3OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Football Grounds",
    title: "Football Grounds",
    path: "/service/football"
  },
  {
    url: "https://images.unsplash.com/photo-1730739628981-6537b299aea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwc3RhZGl1bXxlbnwxfHx8fDE3NjY1MTc5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Cricket Ground",
    title: "Cricket Ground",
    path: "/service/cricket"
  },
  {
    url: "https://images.unsplash.com/photo-1692447303324-da86ca272354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwcG9vbCUyMHRhYmxlfGVufDF8fHx8MTc2NjQ3NTI5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Snooker Tables",
    title: "Snooker",
    path: "/service/snooker"
  },
  {
    url: "https://images.unsplash.com/photo-1726867863287-aba3393812d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjByaW5nJTIwZ3ltfGVufDF8fHx8MTc2NjQzNjAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Boxing Ring",
    title: "Boxing",
    path: "/service/boxing"
  },
  {
    url: "https://images.unsplash.com/photo-1553492206-f609eddc33dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBhcmVuYSUyMGVzcG9ydHN8ZW58MXx8fHwxNzY2NDM3NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Game Arena",
    title: "Game Arena",
    path: "/service/game-arena"
  },
  {
    url: "https://images.unsplash.com/photo-1725962269029-e845b85e5ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb21zJTIwYWNjb21tb2RhdGlvbnxlbnwxfHx8fDE3NjY1MTc5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Premium Rooms",
    title: "Rooms",
    path: "/service/rooms"
  }
];

export function AboutPurpose() {
  return (
    <section className="bg-[#F5F1E8] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-14 md:mb-16 text-gray-800 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Discover Our World-Class Facilities
        </motion.h2>

        {/* Image Grid - Responsive 6 facility cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {images.map((image, index) => (
            <Link to={image.path} key={index}>
              <motion.div
                className="relative h-[280px] sm:h-[320px] md:h-[350px] overflow-hidden rounded-2xl sm:rounded-3xl group cursor-pointer bg-white shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-full overflow-hidden">
                  <img 
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl text-white">{image.title}</h3>
                  <p className="text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to learn more
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
