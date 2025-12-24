import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ChevronDown,
  ChevronRight,
  Search,
  ChevronLeft,
  MapPin,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState } from "react";

type ServiceData = {
  id: string;
  category: string;
  title: string;
  heroImage: string;
  subtitle: string;
  description: string;
  sideImage: string;
  featuresTitle: string;
  featuresDescription: string;
  features: {
    title: string;
    description: string;
  }[];
};

const servicesData: Record<string, ServiceData> = {
  football: {
    id: "football",
    category: "SPORTS",
    title: "Football Grounds",
    heroImage:
      "https://images.unsplash.com/photo-1600130202712-fd01014ffa79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGZpZWxkJTIwc3RhZGl1bXxlbnwxfHx8fDE3NjY0MjMzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subtitle: "Championship-quality football facilities",
    description:
      "Play on pristine football grounds designed for both competitive matches and recreational games. Our championship-quality pitches provide the perfect setting for the beautiful game, whether you're training for competition or enjoying a casual match with friends.",
    sideImage:
      "https://images.unsplash.com/photo-1759338780815-8dbc17f7ddf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRyYWluaW5nJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NjY0Mzc0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featuresTitle: "Experience premier football facilities",
    featuresDescription:
      "From casual kickabouts to serious training sessions, our football grounds offer everything you need for the perfect match.",
    features: [
      {
        title: "Professional-grade pitches",
        description:
          "Play on meticulously maintained surfaces with proper drainage, quality turf, and regulation markings. Our grounds meet the highest standards for competitive play.",
      },
      {
        title: "Flexible booking options",
        description:
          "Book by the hour for training sessions, organize tournaments, or join our regular leagues. We accommodate teams of all sizes and skill levels.",
      },
      {
        title: "Complete facilities",
        description:
          "Enjoy changing rooms, showers, equipment storage, and spectator areas. Everything you need for a complete match-day experience.",
      },
      {
        title: "Coaching programs",
        description:
          "Develop your skills with expert coaching available for all ages and abilities. From youth development to adult improvement sessions.",
      },
    ],
  },
  cricket: {
    id: "cricket",
    category: "SPORTS",
    title: "Cricket Ground",
    heroImage:
      "https://images.unsplash.com/photo-1593766787879-e8c78e09cbbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGl0Y2glMjBwbGF5ZXJ8ZW58MXx8fHwxNzY2NDM3NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subtitle: "Professional cricket facilities",
    description:
      "Experience cricket at its finest on our professional-grade turf wickets. From club matches to coaching sessions, our grounds offer everything you need for the gentleman's game with top-quality pitches, nets, and all the amenities you need.",
    sideImage:
      "https://images.unsplash.com/photo-1730739628091-133de587ad14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMG1hdGNofGVufDF8fHx8MTc2NjQxMjQ0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featuresTitle: "Master the gentleman's game",
    featuresDescription:
      "Join leagues, participate in tournaments, and develop your skills with expert coaching at our world-class cricket facilities.",
    features: [
      {
        title: "Championship wickets",
        description:
          "Play on professionally maintained turf wickets that provide true bounce and consistent performance. Perfect for competitive matches and serious practice.",
      },
      {
        title: "Practice nets",
        description:
          "State-of-the-art practice nets with quality surfaces for batting and bowling practice. Available for individual sessions or team training.",
      },
      {
        title: "Match facilities",
        description:
          "Full match-day amenities including pavilion, scoreboard, sightscreens, and boundary markers. Host your club matches in style.",
      },
      {
        title: "Expert coaching",
        description:
          "Professional coaching for all levels, from beginners to advanced players. Improve your batting, bowling, and fielding techniques.",
      },
    ],
  },
  snooker: {
    id: "snooker",
    category: "LEISURE",
    title: "Snooker",
    heroImage:
      "https://images.unsplash.com/photo-1677256260549-13f36774d59e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwdGFibGUlMjBsdXh0dXJ8ZW58MXx8fHwxNzY2NDM3NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subtitle: "Championship-standard snooker tables",
    description:
      "Perfect your game on our championship-standard snooker tables. Whether you're a seasoned player or just starting out, enjoy the precision and elegance of this classic sport in our refined and sophisticated environment.",
    sideImage:
      "https://images.unsplash.com/photo-1731485485320-5a39c76decfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwcGxheWVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NjM4ODMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featuresTitle: "Precision and elegance",
    featuresDescription:
      "Enjoy world-class snooker facilities in a premium environment designed for serious players and casual enthusiasts alike.",
    features: [
      {
        title: "Tournament-grade tables",
        description:
          "Play on professional-standard tables with pristine cloth, precision cushions, and perfect leveling. Our tables are maintained to tournament specifications.",
      },
      {
        title: "Premium atmosphere",
        description:
          "Enjoy your game in a sophisticated setting with excellent lighting, comfortable seating areas, and a refined ambiance perfect for concentration.",
      },
      {
        title: "Members lounge",
        description:
          "Relax between frames in our exclusive members lounge. Enjoy refreshments and socialize with fellow snooker enthusiasts.",
      },
      {
        title: "Competitions & leagues",
        description:
          "Join regular tournaments and leagues for all skill levels. Test your abilities and compete for club championships.",
      },
    ],
  },
  boxing: {
    id: "boxing",
    category: "FITNESS",
    title: "Boxing",
    heroImage:
      "https://images.unsplash.com/photo-1726867863287-aba3393812d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBneW0lMjByaW5nfGVufDF8fHx8MTc2NjQzNzQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subtitle: "Train like a champion",
    description:
      "Train like a champion in our state-of-the-art boxing facilities. Professional rings, heavy bags, speed bags, and expert coaching to help you achieve peak performance, whether you're training for competition or fitness.",
    sideImage:
      "https://images.unsplash.com/photo-1727528882203-27d1fb281807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGF0aGxldGV8ZW58MXx8fHwxNzY2NDEyODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featuresTitle: "Elite boxing training",
    featuresDescription:
      "Access professional-grade equipment and expert coaching in our dedicated boxing facility designed for serious athletes.",
    features: [
      {
        title: "Professional boxing rings",
        description:
          "Train and spar in regulation-size boxing rings with proper flooring, ropes, and corner posts. Perfect for technique work and sparring sessions.",
      },
      {
        title: "Complete equipment",
        description:
          "Heavy bags, speed bags, double-end bags, and all the equipment you need. We provide everything from gloves to protective gear.",
      },
      {
        title: "Expert coaching",
        description:
          "Work with experienced boxing coaches who can help you develop proper technique, improve fitness, and reach your goals safely and effectively.",
      },
      {
        title: "Group classes",
        description:
          "Join high-energy boxing fitness classes for all levels. Great cardio workout combined with boxing fundamentals in a supportive environment.",
      },
    ],
  },
  "game-arena": {
    id: "game-arena",
    category: "ENTERTAINMENT",
    title: "Game Arena",
    heroImage:
      "https://images.unsplash.com/photo-1553492206-f609eddc33dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBhcmVuYSUyMGVzcG9ydHN8ZW58MXx8fHwxNzY2NDM3NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subtitle: "Cutting-edge esports facility",
    description:
      "Step into the future of gaming with our cutting-edge esports arena. High-performance gaming stations, competitive tournaments, and a vibrant community await in our state-of-the-art facility designed for serious gamers and esports enthusiasts.",
    sideImage:
      "https://images.unsplash.com/photo-1624357676666-4cca3b657627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjByb29tJTIwY29tcHV0ZXJzfGVufDF8fHx8MTc2NjQzNjIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featuresTitle: "Compete at the highest level",
    featuresDescription:
      "Join leagues, compete in tournaments, and connect with fellow gamers in our professional esports environment.",
    features: [
      {
        title: "High-performance stations",
        description:
          "Game on top-tier PCs with the latest graphics cards, high-refresh monitors, and premium peripherals. Every station optimized for competitive gaming.",
      },
      {
        title: "Ultra-fast connectivity",
        description:
          "Experience lag-free gaming with our dedicated high-speed internet infrastructure. Consistent low-latency connections for optimal performance.",
      },
      {
        title: "Tournament hosting",
        description:
          "Participate in or host esports tournaments with professional streaming setup, spectator areas, and prize support for various game titles.",
      },
      {
        title: "Gaming community",
        description:
          "Connect with like-minded gamers, join teams, and participate in regular events. Build friendships and improve your skills together.",
      },
    ],
  },
  rooms: {
    id: "rooms",
    category: "ACCOMMODATION",
    title: "Rooms",
    heroImage:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzY2NDI0MDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subtitle: "Luxurious accommodation",
    description:
      "Extend your visit with our luxurious accommodations. Beautifully appointed rooms with premium amenities ensure you rest in comfort and style after a day of sport and recreation at David Lloyd Clubs.",
    sideImage:
      "https://images.unsplash.com/photo-1725962479542-1be0a6b0d444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwYmVkcm9vbXxlbnwxfHx8fDE3NjYzNzM3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featuresTitle: "Rest in luxury",
    featuresDescription:
      "Our rooms combine elegant design with modern amenities to create the perfect retreat after your activities.",
    features: [
      {
        title: "Premium amenities",
        description:
          "Enjoy high-quality bedding, luxury toiletries, flat-screen TVs, and complimentary WiFi. Every detail designed for your comfort.",
      },
      {
        title: "En-suite facilities",
        description:
          "Modern bathrooms with rainfall showers, premium fixtures, and plush towels. Start and end your day refreshed.",
      },
      {
        title: "Room service",
        description:
          "Order from our extensive menu and enjoy meals in the comfort of your room. Available throughout the day and evening.",
      },
      {
        title: "Member benefits",
        description:
          "Club members enjoy exclusive rates, priority booking, and complimentary access to all facilities during your stay.",
      },
    ],
  },
};

export default function ServiceDetails() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [openFeature, setOpenFeature] = useState<number | null>(
    0,
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchLocation, setSearchLocation] = useState("");

  const service = serviceId ? servicesData[serviceId] : null;

  // Facility images for carousel - different for football, cricket, and snooker
  const facilityImages =
    serviceId === "football"
      ? [
          "https://images.unsplash.com/photo-1759722144262-c084e801c8b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHN0YWRpdW0lMjBmYWNpbGl0aWVzfGVufDF8fHx8MTc2NjQzODQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1752673508944-2578f0d62ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRyYWluaW5nJTIwZ3JvdW5kfGVufDF8fHx8MTc2NjMzMDA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1669598370772-8e14636c49d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGxvY2tlciUyMHJvb218ZW58MXx8fHwxNzY2NDM4NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1651043421470-88b023bb9636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBpdGNoJTIwYWVyaWFsfGVufDF8fHx8MTc2NjQzODQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        ]
      : serviceId === "cricket"
        ? [
            "https://images.unsplash.com/photo-1687709644584-61d98a60dcb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGZhY2lsaXRpZXN8ZW58MXx8fHwxNzY2NDM5NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1582617578126-4bdcead11e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcHJhY3RpY2UlMjBuZXRzfGVufDF8fHx8MTc2NjQzOTQ0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1625401586082-9a9b17bc4ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGF2aWxpb24lMjBncm91bmR8ZW58MXx8fHwxNzY2NDM5NDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJhaW5pbmclMjBzZXNzaW9ufGVufDF8fHx8MTc2NjQzOTQ0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          ]
        : serviceId === "snooker"
          ? [
              "https://images.unsplash.com/photo-1655338719641-d52e10211af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwaGFsbCUyMHRhYmxlfGVufDF8fHx8MTc2NjQzOTk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1649354418121-61a71834fa66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwY2x1YiUyMGludGVyaW9yfGVufDF8fHx8MTc2NjQzOTk3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1731485485320-5a39c76decfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwcGxheWVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NjM4ODMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              "https://images.unsplash.com/photo-1696454593555-6c5c1f3b8dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsaWFyZHMlMjBsb3VuZ2UlMjBsdXh1cnl8ZW58MXx8fHwxNzY2NDM5OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            ]
          : serviceId === "boxing"
            ? [
                "https://images.unsplash.com/photo-1726867863287-aba3393812d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBneW0lMjByaW5nfGVufDF8fHx8MTc2NjQzNzQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                "https://images.unsplash.com/photo-1764756510644-5a8bac009c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc2NjQ0MDQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                "https://images.unsplash.com/photo-1716306886418-f84f6d4c2f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBlcXVpcG1lbnQlMjBwdW5jaGluZ3xlbnwxfHx8fDE3NjY0NDA0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                "https://images.unsplash.com/photo-1590070714379-e894212d7838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBjb2FjaCUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjQ0MDQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              ]
            : serviceId === "game-arena"
              ? [
                  "https://images.unsplash.com/photo-1759701547036-bf7d7b05cc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzY2Mzk4NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                  "https://images.unsplash.com/photo-1632017734927-48988a0efae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBhcmVuYSUyMGNvbXB1dGVyc3xlbnwxfHx8fDE3NjY0NDA0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                  "https://images.unsplash.com/photo-1632376371614-79d80280822f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdG91cm5hbWVudCUyMHZlbnVlfGVufDF8fHx8MTc2NjQ0MDQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                  "https://images.unsplash.com/photo-1632854285205-8e31478219db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBsb3VuZ2UlMjBzZXR1cHxlbnwxfHx8fDE3NjY0NDA0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                ]
              : serviceId === "rooms"
                ? [
                    "https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzY2MzU2MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    "https://images.unsplash.com/photo-1662841540530-2f04bb3291e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NDQwNDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    "https://images.unsplash.com/photo-1759303690206-1dc66e9ef8ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGFtZW5pdGllcyUyMHNwYXxlbnwxfHx8fDE3NjY0NDA0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    "https://images.unsplash.com/photo-1667125095636-dce94dcbdd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwcm9vbXxlbnwxfHx8fDE3NjYzODA1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                  ]
                : [];

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % facilityImages.length,
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + facilityImages.length) %
        facilityImages.length,
    );
  };

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-gray-900 mb-4">
              Service not found
            </h2>
            <Link
              to="/"
              className="px-8 py-3 bg-[#8B1538] text-white rounded-full hover:bg-[#6B0F2A] transition-colors inline-block"
            >
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[700px] overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${service.heroImage})`,
              filter:
                "contrast(1.1) saturate(1.2) brightness(1.05)",
            }}
          >
            {/* Gradient Overlay - Lighter for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/60"></div>
            {/* Vignette Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"></div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#8B1538] rounded-full blur-[120px]"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5F1E8] rounded-full blur-[120px]"
        ></motion.div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            {/* Category Tag - Hidden for all Enhanced Services */}
            {serviceId !== "football" &&
              serviceId !== "cricket" &&
              serviceId !== "snooker" &&
              serviceId !== "boxing" &&
              serviceId !== "game-arena" &&
              serviceId !== "rooms" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8 inline-block"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-full blur-sm"></div>
                    <p className="relative text-sm tracking-[0.35em] px-8 py-3 bg-white/25 backdrop-blur-md rounded-full border border-white/40 shadow-2xl">
                      {service.category}
                    </p>
                  </div>
                </motion.div>
              )}

            {/* Title - Enhanced for All Services */}
            {serviceId === "football" ||
            serviceId === "cricket" ||
            serviceId === "snooker" ||
            serviceId === "boxing" ||
            serviceId === "game-arena" ||
            serviceId === "rooms" ? (
              <div className="relative">
                {/* Background glow effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#8B1538] via-white to-[#8B1538] opacity-30"
                />

                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative"
                >
                  <h1
                    className="text-white mb-0 text-7xl md:text-8xl tracking-tight"
                    style={{
                      textShadow:
                        "0 8px 32px rgba(0,0,0,0.6), 0 4px 16px rgba(139,21,56,0.4), 0 2px 8px rgba(0,0,0,0.3)",
                      fontWeight: "900",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {service.title
                      .split(" ")
                      .map((word, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.6 + index * 0.2,
                          }}
                          className="inline-block mr-6"
                        >
                          {word}
                        </motion.span>
                      ))}
                  </h1>
                </motion.div>

                {/* Accent line with animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className="relative mt-8"
                >
                  <div className="h-2 w-64 mx-auto bg-gradient-to-r from-transparent via-white to-transparent rounded-full shadow-2xl" />
                  <motion.div
                    animate={{
                      x: [-100, 100],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      delay: 1.5,
                    }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 h-2 w-32 bg-gradient-to-r from-transparent via-[#8B1538] to-transparent rounded-full blur-sm"
                  />
                </motion.div>

                {/* Floating particles effect */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0.6, 0],
                      scale: [0, 1, 0],
                      y: [-20, -80],
                      x: [0, (Math.random() - 0.5) * 100],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1.5 + i * 0.3,
                      repeatDelay: 2,
                    }}
                    className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${50 + (Math.random() - 0.5) * 40}%`,
                    }}
                  />
                ))}
              </div>
            ) : (
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white mb-0 drop-shadow-2xl"
                style={{
                  textShadow:
                    "0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                {service.title}
              </motion.h1>
            )}

            {/* Decorative Line - Hidden for all Enhanced Services */}
            {serviceId !== "football" &&
              serviceId !== "cricket" &&
              serviceId !== "snooker" &&
              serviceId !== "boxing" &&
              serviceId !== "game-arena" &&
              serviceId !== "rooms" && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-6 rounded-full shadow-lg"
                ></motion.div>
              )}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Breadcrumb - Enhanced */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-8"
        >
          <div className="flex items-center gap-2 text-white text-sm backdrop-blur-sm bg-black/20 px-5 py-3 rounded-full border border-white/20 shadow-xl">
            <Link
              to="/"
              className="hover:underline hover:text-[#F5F1E8] transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 opacity-60" />
            <span className="opacity-70">Services</span>
            <ChevronRight className="w-4 h-4 opacity-60" />
            <span className="font-medium">{service.title}</span>
          </div>
        </motion.div>
      </div>

      {/* Subtitle Section */}
      <section className="bg-white py-20">
        <div className="max-w-[900px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gray-900 mb-8">
              {service.subtitle}
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F5F1E8] py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-8"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src={service.sideImage}
                  alt={service.title}
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gray-900 mb-6">
                {service.featuresTitle}
              </h2>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                {service.featuresDescription}
              </p>

              <div className="space-y-4">
                <p className="text-gray-700 mb-6">
                  You'll have access to:
                </p>

                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200"
                  >
                    <button
                      onClick={() =>
                        setOpenFeature(
                          openFeature === index ? null : index,
                        )
                      }
                      className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-800 text-lg text-left">
                        {feature.title}
                      </span>
                      <motion.div
                        animate={{
                          rotate:
                            openFeature === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      </motion.div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height:
                          openFeature === index ? "auto" : 0,
                        opacity: openFeature === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {feature.description}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12"
              >
                <Link
                  to="/booking"
                  className="inline-block px-10 py-4 bg-purple-900 text-white rounded-full hover:bg-purple-950 transition-all hover:scale-105 transform shadow-lg"
                >
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Come and Experience Section - Only for Football */}
      {serviceId === "football" && (
        <>
          {/* Location Finder Section */}
          <section className="bg-white py-20">
            <div className="max-w-[1000px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-purple-900 mb-12">
                  Come and experience it for yourself
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                  {/* Search Input */}
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter a town, city or postcode"
                      value={searchLocation}
                      onChange={(e) =>
                        setSearchLocation(e.target.value)
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#8B1538] transition-colors"
                    />
                  </div>

                  {/* Find Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-purple-900 text-white rounded-full hover:bg-purple-950 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
                  >
                    <MapPin className="w-5 h-5" />
                    Find your local Club
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Facilities Showcase Section */}
          <section className="bg-[#F5F1E8] py-24">
            <div className="max-w-[1400px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-gray-700 mb-8">
                  A football facility near you
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  Step into our championship grounds. Explore
                  our professional-grade pitches and try out our
                  extensive training facilities. Discover
                  everything you want from a football venue,
                  with our signature David Lloyd Clubs
                  excellence throughout.
                </p>
              </motion.div>

              {/* Image Carousel */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                  {/* Carousel Images */}
                  {facilityImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 1.1,
                      }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                      style={{
                        pointerEvents:
                          currentSlide === index
                            ? "auto"
                            : "none",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Football facility ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{
                          filter:
                            "contrast(1.05) saturate(1.1)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </motion.div>
                  ))}

                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Slide Indicators */}
                <div className="flex items-center justify-center gap-3 mt-8">
                  {facilityImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-12 bg-purple-900"
                          : "w-2 bg-gray-400 hover:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Member Experiences Section - Only for Football */}
      {serviceId === "football" && (
        <section className="bg-white py-24 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-gray-700 mb-6">
                Member experiences
              </h2>
              <p className="text-gray-600 text-lg">
                Find out what our members love most about our
                football grounds
              </p>
            </motion.div>

            {/* Scrolling Testimonials */}
            <div className="relative">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -2400], // Adjust based on card width
                }}
                transition={{
                  x: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Testimonial 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1715270525118-ce589797568b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBsYXllciUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjQzODc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Marcus"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The pitch is absolutely amazing. So
                          impressed with the quality and the
                          facilities. Perfect for our weekly
                          matches and training sessions.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Marcus
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Lichfield
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1763751626851-024987c2f778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRlYW0lMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjYzNzA3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Sarah"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Joined the league and haven't looked
                          back. Great community, excellent
                          coaching, and the facilities are
                          top-notch. Football grounds for
                          everyone!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Sarah
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Beaconsfield
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1715270525118-ce589797568b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBsYXllciUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjQzODc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="James"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Outstanding experience! The coaching
                          staff are incredibly knowledgeable and
                          the atmosphere is friendly yet
                          competitive. My skills have improved
                          dramatically.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            James
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Sheffield
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 4 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1763751626851-024987c2f778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRlYW0lMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjYzNzA3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Emma"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Best decision I made! The facilities
                          are world-class and booking is so
                          easy. Great value for money and an
                          amazing community of players.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Emma
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Milton Keynes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Duplicate cards for seamless loop */}
                {/* Testimonial 1 - Duplicate */}
                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1715270525118-ce589797568b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBsYXllciUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjQzODc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Marcus"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The pitch is absolutely amazing. So
                          impressed with the quality and the
                          facilities. Perfect for our weekly
                          matches and training sessions.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Marcus
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Lichfield
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 - Duplicate */}
                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1763751626851-024987c2f778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRlYW0lMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjYzNzA3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Sarah"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Joined the league and haven't looked
                          back. Great community, excellent
                          coaching, and the facilities are
                          top-notch. Football grounds for
                          everyone!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Sarah
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Beaconsfield
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Gradient Overlays for fade effect */}
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </section>
      )}

      {/* Come and Experience Section - Only for Cricket */}
      {serviceId === "cricket" && (
        <>
          {/* Location Finder Section */}
          <section className="bg-white py-20">
            <div className="max-w-[1000px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-purple-900 mb-12">
                  Come and experience it for yourself
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                  {/* Search Input */}
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter a town, city or postcode"
                      value={searchLocation}
                      onChange={(e) =>
                        setSearchLocation(e.target.value)
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-900 transition-colors"
                    />
                  </div>

                  {/* Find Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-purple-900 text-white rounded-full hover:bg-purple-900 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
                  >
                    <MapPin className="w-5 h-5" />
                    Find your local Club
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Facilities Showcase Section */}
          <section className="bg-[#F5F1E8] py-24">
            <div className="max-w-[1400px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-gray-700 mb-8">
                  A cricket facility near you
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  Step onto our championship wickets. Explore
                  our professional-grade pitches, practice nets,
                  and try out our extensive cricket facilities.
                  Discover everything you want from a cricket
                  venue, with our signature David Lloyd Clubs
                  excellence throughout.
                </p>
              </motion.div>

              {/* Image Carousel */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                  {/* Carousel Images */}
                  {facilityImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 1.1,
                      }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                      style={{
                        pointerEvents:
                          currentSlide === index
                            ? "auto"
                            : "none",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Cricket facility ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{
                          filter:
                            "contrast(1.05) saturate(1.1)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </motion.div>
                  ))}

                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Slide Indicators */}
                <div className="flex items-center justify-center gap-3 mt-8">
                  {facilityImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-12 bg-purple-900"
                          : "w-2 bg-gray-400 hover:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Member Experiences Section - Only for Cricket */}
      {serviceId === "cricket" && (
        <section className="bg-white py-24 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-gray-700 mb-6">
                Member experiences
              </h2>
              <p className="text-gray-600 text-lg">
                Find out what our members love most about our
                cricket grounds
              </p>
            </motion.div>

            {/* Scrolling Testimonials */}
            <div className="relative">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -2400],
                }}
                transition={{
                  x: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Testimonial 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVyJTIwYmF0dGluZ3xlbnwxfHx8fDE3NjYzMzczNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Rajesh"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The wickets are absolutely superb.
                          Perfect bounce and consistent
                          performance. Ideal for our club
                          matches and regular practice sessions.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Rajesh
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Birmingham
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NjM3ODIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Charlotte"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Joined the ladies cricket league and
                          it's been fantastic! Great coaching,
                          excellent facilities, and a wonderful
                          community atmosphere.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Charlotte
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Watford
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVyJTIwYmF0dGluZ3xlbnwxfHx8fDE3NjYzMzczNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Amir"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The practice nets are world-class!
                          Perfect for improving your technique.
                          The coaching staff really know their
                          stuff and the facilities are
                          outstanding.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Amir
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Leeds
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 4 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NjM3ODIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Sophie"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Amazing venue for cricket! The
                          pavilion is stunning, the pitches are
                          professional-grade, and booking is
                          incredibly easy. Highly recommended!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Sophie
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Manchester
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Duplicate cards for seamless loop */}
                {/* Testimonial 1 - Duplicate */}
                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVyJTIwYmF0dGluZ3xlbnwxfHx8fDE3NjYzMzczNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Rajesh"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The wickets are absolutely superb.
                          Perfect bounce and consistent
                          performance. Ideal for our club
                          matches and regular practice sessions.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Rajesh
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Birmingham
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 - Duplicate */}
                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NjM3ODIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Charlotte"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Joined the ladies cricket league and
                          it's been fantastic! Great coaching,
                          excellent facilities, and a wonderful
                          community atmosphere.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Charlotte
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Watford
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Gradient Overlays for fade effect */}
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </section>
      )}

      {/* Come and Experience Section - Only for Snooker */}
      {serviceId === "snooker" && (
        <>
          {/* Location Finder Section */}
          <section className="bg-white py-20">
            <div className="max-w-[1000px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-purple-900 mb-12">
                  Come and experience it for yourself
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                  {/* Search Input */}
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter a town, city or postcode"
                      value={searchLocation}
                      onChange={(e) =>
                        setSearchLocation(e.target.value)
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-900 transition-colors"
                    />
                  </div>

                  {/* Find Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-purple-900 text-white rounded-full hover:bg-purple-950 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
                  >
                    <MapPin className="w-5 h-5" />
                    Find your local Club
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Facilities Showcase Section */}
          <section className="bg-[#F5F1E8] py-24">
            <div className="max-w-[1400px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-gray-700 mb-8">
                  A snooker facility near you
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  Step into our premium snooker hall. Explore
                  our championship-grade tables, refined
                  atmosphere, and try out our extensive
                  facilities. Discover everything you want from
                  a snooker venue, with our signature David
                  Lloyd Clubs excellence throughout.
                </p>
              </motion.div>

              {/* Image Carousel */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                  {/* Carousel Images */}
                  {facilityImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 1.1,
                      }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                      style={{
                        pointerEvents:
                          currentSlide === index
                            ? "auto"
                            : "none",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Snooker facility ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{
                          filter:
                            "contrast(1.05) saturate(1.1)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </motion.div>
                  ))}

                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Slide Indicators */}
                <div className="flex items-center justify-center gap-3 mt-8">
                  {facilityImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-12 bg-purple-900"
                          : "w-2 bg-gray-400 hover:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Member Experiences Section - Only for Snooker */}
      {serviceId === "snooker" && (
        <section className="bg-white py-24 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-gray-700 mb-6">
                Member experiences
              </h2>
              <p className="text-gray-600 text-lg">
                Find out what our members love most about our
                snooker facilities
              </p>
            </motion.div>

            {/* Scrolling Testimonials */}
            <div className="relative">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -2400],
                }}
                transition={{
                  x: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Testimonial 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1737232361806-bbb012140287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwcGxheWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NDM5OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="David"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The tables are immaculate.
                          Championship quality with perfect
                          cloth and precision leveling. Easily
                          the best snooker facility I've ever
                          played at.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            David
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Glasgow
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1618454422033-f902cbdba2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwcGxheWVyJTIwbWFsZXxlbnwxfHx8fDE3NjY0Mzk5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Michael"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The atmosphere is perfect for
                          concentration. Excellent lighting,
                          comfortable seating, and the members
                          lounge is first-class. Absolutely love
                          it here!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Michael
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Bristol
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1737232361806-bbb012140287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwcGxheWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NDM5OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Robert"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Been a member for two years now. The
                          tournaments are well-organized and the
                          standard of play is excellent. Great
                          community of snooker enthusiasts.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Robert
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Cardiff
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 4 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1618454422033-f902cbdba2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwcGxheWVyJTIwbWFsZXxlbnwxfHx8fDE3NjY0Mzk5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Thomas"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Premium venue with impeccable service.
                          The club atmosphere is refined yet
                          welcoming. Perfect place to enjoy
                          snooker at the highest standard.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Thomas
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Edinburgh
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Duplicate cards for seamless loop */}
                {/* Testimonial 1 - Duplicate */}
                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1737232361806-bbb012140287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm9va2VyJTIwcGxheWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NDM5OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="David"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The tables are immaculate.
                          Championship quality with perfect
                          cloth and precision leveling. Easily
                          the best snooker facility I've ever
                          played at.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            David
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Glasgow
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 - Duplicate */}
                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1618454422033-f902cbdba2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwcGxheWVyJTIwbWFsZXxlbnwxfHx8fDE3NjY0Mzk5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Michael"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The atmosphere is perfect for
                          concentration. Excellent lighting,
                          comfortable seating, and the members
                          lounge is first-class. Absolutely love
                          it here!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Michael
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Bristol
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Gradient Overlays for fade effect */}
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </section>
      )}

      {/* Come and Experience Section - Only for Boxing */}
      {serviceId === "boxing" && (
        <>
          {/* Location Finder Section */}
          <section className="bg-white py-20">
            <div className="max-w-[1000px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-purple-900 mb-12">
                  Come and experience it for yourself
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter a town, city or postcode"
                      value={searchLocation}
                      onChange={(e) =>
                        setSearchLocation(e.target.value)
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-900 transition-colors"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-purple-900 text-white rounded-full hover:bg--purple-950 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
                  >
                    <MapPin className="w-5 h-5" />
                    Find your local Club
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Facilities Showcase Section */}
          <section className="bg-[#F5F1E8] py-24">
            <div className="max-w-[1400px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-gray-700 mb-8">
                  A boxing facility near you
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  Step into our professional boxing gym. Explore
                  our championship rings, premium equipment, and
                  expert coaching. Discover everything you want
                  from a boxing venue, with our signature David
                  Lloyd Clubs excellence throughout.
                </p>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                  {facilityImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 1.1,
                      }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                      style={{
                        pointerEvents:
                          currentSlide === index
                            ? "auto"
                            : "none",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Boxing facility ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{
                          filter:
                            "contrast(1.05) saturate(1.1)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </motion.div>
                  ))}

                  <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </motion.button>
                  </div>
                </motion.div>

                <div className="flex items-center justify-center gap-3 mt-8">
                  {facilityImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-12 bg-purple-900"
                          : "w-2 bg-gray-400 hover:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Member Experiences Section - Only for Boxing */}
      {serviceId === "boxing" && (
        <section className="bg-white py-24 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-gray-700 mb-6">
                Member experiences
              </h2>
              <p className="text-gray-600 text-lg">
                Find out what our members love most about our
                boxing facilities
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -2400],
                }}
                transition={{
                  x: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Testimonial 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1542459629-519887d476da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hlciUyMGF0aGxldGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY0NDA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Marcus"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The equipment is top-tier and the
                          coaches are exceptional. I've improved
                          my technique dramatically and feel
                          stronger than ever. Best boxing gym in
                          the area!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Marcus
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Manchester
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1765438860797-c2cf4b0e9308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXRobGV0ZSUyMG1hbGV8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="James"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The fitness classes are intense in the
                          best way possible. Lost 20 pounds and
                          gained serious confidence. The
                          trainers really push you to be your
                          best!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            James
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Birmingham
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 3 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1542459629-519887d476da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hlciUyMGF0aGxldGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY0NDA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Daniel"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Professional boxing ring, heavy bags,
                          speed bags - they have everything. The
                          sparring sessions are well-supervised
                          and the community here is incredibly
                          supportive.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Daniel
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Leeds
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial 4 */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1765438860797-c2cf4b0e9308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXRobGV0ZSUyMG1hbGV8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Ryan"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Started as a complete beginner and now
                          I'm competing in amateur bouts. The
                          coaching staff are patient,
                          knowledgeable, and genuinely care
                          about your progress.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Ryan
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd London
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Duplicate cards for seamless loop */}
                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1542459629-519887d476da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hlciUyMGF0aGxldGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY0NDA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Marcus"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The equipment is top-tier and the
                          coaches are exceptional. I've improved
                          my technique dramatically and feel
                          stronger than ever. Best boxing gym in
                          the area!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Marcus
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Manchester
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1765438860797-c2cf4b0e9308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXRobGV0ZSUyMG1hbGV8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="James"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The fitness classes are intense in the
                          best way possible. Lost 20 pounds and
                          gained serious confidence. The
                          trainers really push you to be your
                          best!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            James
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Birmingham
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </section>
      )}

      {/* Come and Experience Section - Only for Game Arena */}
      {serviceId === "game-arena" && (
        <>
          <section className="bg-white py-20">
            <div className="max-w-[1000px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-purple-900 mb-12">
                  Come and experience it for yourself
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter a town, city or postcode"
                      value={searchLocation}
                      onChange={(e) =>
                        setSearchLocation(e.target.value)
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#8B1538] transition-colors"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-purple-900 text-white rounded-full hover:bg-purple-950 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
                  >
                    <MapPin className="w-5 h-5" />
                    Find your local Club
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#F5F1E8] py-24">
            <div className="max-w-[1400px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-gray-700 mb-8">
                  An esports arena near you
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  Enter our cutting-edge esports arena. Explore
                  our high-performance gaming stations,
                  tournament setup, and vibrant community.
                  Discover everything you want from a gaming
                  venue, with our signature David Lloyd Clubs
                  excellence throughout.
                </p>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                  {facilityImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 1.1,
                      }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                      style={{
                        pointerEvents:
                          currentSlide === index
                            ? "auto"
                            : "none",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Gaming facility ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{
                          filter:
                            "contrast(1.05) saturate(1.1)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </motion.div>
                  ))}

                  <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </motion.button>
                  </div>
                </motion.div>

                <div className="flex items-center justify-center gap-3 mt-8">
                  {facilityImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-12 bg-purple-900"
                          : "w-2 bg-gray-400 hover:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Member Experiences Section - Only for Game Arena */}
      {serviceId === "game-arena" && (
        <section className="bg-white py-24 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-gray-700 mb-6">
                Member experiences
              </h2>
              <p className="text-gray-600 text-lg">
                Find out what our members love most about our
                gaming arena
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -2400],
                }}
                transition={{
                  x: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1759701547344-211fd0d0410d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lciUyMGVzcG9ydHMlMjBwbGF5ZXJ8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Alex"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The PCs are absolutely top-tier. 240Hz
                          monitors, RTX 4090s, and zero lag.
                          Finally found a place where I can
                          practice competitively!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Alex
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd London
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1759701547344-211fd0d0410d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lciUyMGVzcG9ydHMlMjBwbGF5ZXJ8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Jordan"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Love the tournament atmosphere here.
                          Great community, well-organized
                          events, and the streaming setup is
                          professional-grade. Best esports venue
                          I've been to!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Jordan
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Manchester
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1759701547344-211fd0d0410d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lciUyMGVzcG9ydHMlMjBwbGF5ZXJ8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Tyler"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The internet connection is insanely
                          fast - no lag whatsoever. Perfect for
                          competitive gaming. Plus the gaming
                          chairs are super comfortable for long
                          sessions!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Tyler
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Birmingham
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1759701547344-211fd0d0410d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lciUyMGVzcG9ydHMlMjBwbGF5ZXJ8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Chris"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Met amazing people here and found my
                          squad. The community events are
                          fantastic and there's always someone
                          to team up with. Gaming heaven!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Chris
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Bristol
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Duplicates */}
                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1759701547344-211fd0d0410d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lciUyMGVzcG9ydHMlMjBwbGF5ZXJ8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Alex"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The PCs are absolutely top-tier. 240Hz
                          monitors, RTX 4090s, and zero lag.
                          Finally found a place where I can
                          practice competitively!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Alex
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd London
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1759701547344-211fd0d0410d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lciUyMGVzcG9ydHMlMjBwbGF5ZXJ8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Jordan"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Love the tournament atmosphere here.
                          Great community, well-organized
                          events, and the streaming setup is
                          professional-grade. Best esports venue
                          I've been to!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Jordan
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Manchester
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </section>
      )}

      {/* Come and Experience Section - Only for Rooms */}
      {serviceId === "rooms" && (
        <>
          <section className="bg-white py-20">
            <div className="max-w-[1000px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-purple-900 mb-12">
                  Come and experience it for yourself
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter a town, city or postcode"
                      value={searchLocation}
                      onChange={(e) =>
                        setSearchLocation(e.target.value)
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-900 transition-colors"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-purple-900 text-white rounded-full hover:bg-purple-950 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
                  >
                    <MapPin className="w-5 h-5" />
                    Find your local Club
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#F5F1E8] py-24">
            <div className="max-w-[1400px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-gray-700 mb-8">
                  Luxurious accommodation near you
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  Step into our premium rooms. Explore our
                  elegantly designed suites, modern amenities,
                  and exceptional comfort. Discover everything
                  you want from luxury accommodation, with our
                  signature David Lloyd Clubs excellence
                  throughout.
                </p>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                  {facilityImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 1.1,
                      }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                      style={{
                        pointerEvents:
                          currentSlide === index
                            ? "auto"
                            : "none",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Room facility ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{
                          filter:
                            "contrast(1.05) saturate(1.1)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </motion.div>
                  ))}

                  <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all pointer-events-auto"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </motion.button>
                  </div>
                </motion.div>

                <div className="flex items-center justify-center gap-3 mt-8">
                  {facilityImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-12 bg-purple-900"
                          : "w-2 bg-gray-400 hover:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Member Experiences Section - Only for Rooms */}
      {serviceId === "rooms" && (
        <section className="bg-white py-24 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-gray-700 mb-6">
                Guest experiences
              </h2>
              <p className="text-gray-600 text-lg">
                Find out what our guests love most about our
                rooms
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -2400],
                }}
                transition={{
                  x: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1765614766433-13379d8faea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGd1ZXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Sophie"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Absolutely stunning rooms! The
                          attention to detail is impeccable.
                          Slept like a baby in that incredibly
                          comfortable bed. Perfect getaway after
                          my tennis sessions.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Sophie
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Oxford
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1765614766433-13379d8faea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGd1ZXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Emma"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Five-star luxury at its finest. The
                          bathroom was like a spa, and room
                          service was exceptional. Loved having
                          full access to all the club facilities
                          during my stay!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Emma
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Cambridge
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1765614766433-13379d8faea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGd1ZXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Charlotte"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          The perfect blend of comfort and
                          elegance. Everything was spotless, the
                          linens were luxurious, and the WiFi
                          was super fast. Will definitely book
                          again!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Charlotte
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Edinburgh
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 w-[550px]"
                >
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1765614766433-13379d8faea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGd1ZXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Victoria"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Outstanding experience from check-in
                          to checkout. The member rates are
                          fantastic value, and waking up with
                          access to all the club facilities is
                          simply wonderful!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Victoria
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Bath
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Duplicates */}
                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1765614766433-13379d8faea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGd1ZXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Sophie"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Absolutely stunning rooms! The
                          attention to detail is impeccable.
                          Slept like a baby in that incredibly
                          comfortable bed. Perfect getaway after
                          my tennis sessions.
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Sophie
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Oxford
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-[550px]">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F4] rounded-[2.5rem] p-8 shadow-xl h-full border border-gray-100">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1765614766433-13379d8faea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGd1ZXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NDQwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Emma"
                          className="w-full h-full object-cover"
                          style={{
                            filter:
                              "contrast(1.05) saturate(1.1)",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <svg
                            className="w-8 h-8 text-purple-900 opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <p className="text-purple-900 text-lg mb-4 leading-relaxed">
                          Five-star luxury at its finest. The
                          bathroom was like a spa, and room
                          service was exceptional. Loved having
                          full access to all the club facilities
                          during my stay!
                        </p>
                        <div>
                          <p className="text-gray-800 mb-1">
                            Emma
                          </p>
                          <p className="text-gray-500 text-sm">
                            David Lloyd Cambridge
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}