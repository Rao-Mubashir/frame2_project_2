import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export function ActivitiesSection() {
  return (
    <section>
      {/* Snooker Section */}
      <div className="bg-[#F5F1E8] py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
                <h2 className="text-gray-900 mb-10 text-5xl">Snooker</h2>
                <p className="text-gray-700 text-xl mb-12 leading-relaxed">
                  Perfect your game on our championship-standard snooker tables. Whether you're a seasoned player or just starting out, enjoy the precision and elegance of this classic sport in our refined environment.
                </p>
                <Link to="/booking" className="inline-block px-10 py-4 bg-purple-900 text-white rounded-full hover:bg-purple-950 transition-all hover:scale-105 transform shadow-lg">
                  Book a table
                </Link>
              </div>
            </motion.div>

            {/* Right - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="h-[280px] rounded-[2rem] overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1757031694671-03df56cb97b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwaGFsbCUyMGludGVyaW9yfGVufDF8fHx8MTc2NjQzNjIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Snooker hall"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[280px] rounded-[2rem] overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1643818692075-5fc2933aa969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwdGFibGUlMjBiaWxsaWFyZHN8ZW58MXx8fHwxNzY2NDM2MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pool table"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[280px] rounded-[2rem] overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1731485485320-5a39c76decfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwcGxheWVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NjM4ODMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Snooker player"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[280px] rounded-[2rem] overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1761591847985-2184afaab747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwdGFibGUlMjBnYW1lfGVufDF8fHx8MTc2NjQzNjAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Snooker table"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Game Arena Section - Full Width Image with Overlay */}
      <div className="relative h-[750px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudCUyMGFyZW5hfGVufDF8fHx8MTc2NjM3Nzc5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-8 h-full flex items-center">
          <div
            className="max-w-[550px] w-full h-[420px]"
            style={{ perspective: '1500px' }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full"
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  position: 'relative'
                }}
              >
                {/* Front of Card */}
                <div
                  className="absolute w-full h-full bg-white/95 backdrop-blur-sm p-10 rounded-[2rem] shadow-2xl flex flex-col justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <h2 className="text-gray-900 mb-10 text-5xl">Game Arena</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Step into the future of gaming with our cutting-edge esports arena. High-performance gaming stations, competitive tournaments, and a vibrant community await in our state-of-the-art facility.
                  </p>
                  <div>
                    <Link to="/service/game-arena" className="inline-block px-10 py-4 bg-purple-900 text-white rounded-full hover:bg-purple-950 transition-all">
                      Enter the arena
                    </Link>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-purple-900 to-purple-950 p-10 rounded-[2rem] shadow-2xl flex flex-col justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h2 className="text-white mb-5">Compete at the Highest Level</h2>
                  <p className="text-white/95 text-lg mb-8 leading-relaxed">
                    Join leagues, compete in tournaments, and connect with fellow gamers. Our arena features top-tier equipment, ultra-fast internet, and a professional environment designed for serious competitors.
                  </p>
                  <div>
                    <Link to="/service/game-arena" className="inline-block px-10 py-4 bg-white text-purple-900 rounded-full hover:bg-[#F5F1E8] transition-all">
                      Enter the arena
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="bg-white py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          {/* Large Top Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl mb-16"
          >
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYW1pbmd8ZW58MXx8fHwxNzY2NDM2MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gaming Room"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bottom Row - Images Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left - Small Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="h-[280px] rounded-[2rem] overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYW1pbmd8ZW58MXx8fHwxNzY2NDM2MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gaming room setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[280px] rounded-[2rem] overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYW1pbmd8ZW58MXx8fHwxNzY2NDM2MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gaming room"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Text Content in Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pl-8"
            >
              <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
                <h2 className="text-gray-900 mb-10 text-5xl">Gaming Rooms</h2>
                <p className="text-gray-700 text-xl mb-12 leading-relaxed">
                  Experience our state-of-the-art gaming rooms equipped with high-end PCs, consoles, and VR setups. Perfect for competitive gaming, esports training, or casual play with friends.
                </p>
                <Link to="/booking" className="inline-block px-10 py-4 bg-purple-900 text-white rounded-full hover:bg-purple-950 transition-all hover:scale-105 transform shadow-lg">
                  Book a gaming room
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}