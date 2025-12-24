import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form@7.55.0';
import { Eye, EyeOff, CheckCircle2, AlertCircle } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

type BookingFormData = {
  name: string;
  phone: string;
  password: string;
  confirmPassword: string;
  skillLevel: string;
  availableForPublicGames: boolean;
  availabilityDate?: string;
  availabilityTime?: string;
};

export default function Booking() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>();

  const password = watch('password');

  const onSubmit = (data: BookingFormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
  };

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-[#F5F1E8] via-white to-[#FAF8F4] flex items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-white rounded-[3rem] shadow-2xl p-16 text-center border border-gray-100"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle2 className="w-20 h-20 text-green-600 mx-auto mb-8" />
            </motion.div>
            <h2 className="text-gray-900 mb-6">Booking Confirmed!</h2>
            <p className="text-gray-600 text-xl mb-8 leading-relaxed">
              Thank you for registering with David Lloyd Clubs. We'll be in touch shortly to confirm your booking details.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-10 py-4 bg-purple-900 text-white rounded-full hover:bg-purple-950 transition-all hover:scale-105 transform shadow-lg"
            >
              Return to Home
            </button>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#F5F1E8] via-white to-[#FAF8F4] py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-gray-900 mb-6">Book Your Experience</h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Join the David Lloyd Clubs community and elevate your sporting journey. Complete the form below to get started.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[3rem] shadow-2xl p-12 border border-gray-100"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-800 mb-3 text-lg">
                  Full Name <span className="text-purple-900">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-6 py-4 bg-[#F5F1E8] border-2 rounded-2xl focus:outline-none focus:border-purple-900 transition-colors text-gray-800 ${
                    errors.name ? 'border-red-500' : 'border-transparent'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm mt-2 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-800 mb-3 text-lg">
                  Phone Number <span className="text-purple-900">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[\d\s\-\+\(\)]+$/,
                      message: 'Please enter a valid phone number',
                    },
                    minLength: {
                      value: 10,
                      message: 'Phone number must be at least 10 digits',
                    },
                  })}
                  className={`w-full px-6 py-4 bg-[#F5F1E8] border-2 rounded-2xl focus:outline-none focus:border-purple-900 transition-colors text-gray-800 ${
                    errors.phone ? 'border-red-500' : 'border-transparent'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm mt-2 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone.message}
                  </motion.p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-gray-800 mb-3 text-lg">
                  Password <span className="text-purple-900">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                        message: 'Password must contain uppercase, lowercase, and number',
                      },
                    })}
                    className={`w-full px-6 py-4 bg-[#F5F1E8] border-2 rounded-2xl focus:outline-none focus:border-purple-900 transition-colors text-gray-800 pr-14 ${
                      errors.password ? 'border-red-500' : 'border-transparent'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm mt-2 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.password.message}
                  </motion.p>
                )}
                <p className="text-gray-500 text-sm mt-2">
                  Minimum 8 characters with uppercase, lowercase, and number
                </p>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-gray-800 mb-3 text-lg">
                  Confirm Password <span className="text-purple-900">*</span>
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) => value === password || 'Passwords do not match',
                    })}
                    className={`w-full px-6 py-4 bg-[#F5F1E8] border-2 rounded-2xl focus:outline-none focus:border-purple-900 transition-colors text-gray-800 pr-14 ${
                      errors.confirmPassword ? 'border-red-500' : 'border-transparent'
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm mt-2 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.confirmPassword.message}
                  </motion.p>
                )}
              </div>

              {/* Skill Level Dropdown */}
              <div>
                <label htmlFor="skillLevel" className="block text-gray-800 mb-3 text-lg">
                  Skill Level <span className="text-purple-900">*</span>
                </label>
                <select
                  id="skillLevel"
                  {...register('skillLevel', { required: 'Please select your skill level' })}
                  className={`w-full px-6 py-4 bg-[#F5F1E8] border-2 rounded-2xl focus:outline-none focus:border-purple-900 transition-colors text-gray-800 cursor-pointer ${
                    errors.skillLevel ? 'border-red-500' : 'border-transparent'
                  }`}
                >
                  <option value="">Select your skill level</option>
                  <option value="standard">Standard Player</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="pro">Pro</option>
                </select>
                {errors.skillLevel && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm mt-2 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.skillLevel.message}
                  </motion.p>
                )}
              </div>

              {/* Available for Public Games Checkbox */}
              <div className="bg-[#F5F1E8] rounded-2xl p-6">
                <label className="flex items-start gap-4 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('availableForPublicGames')}
                    className="mt-1 w-5 h-5 text-purple-900 bg-white border-2 border-gray-300 rounded focus:ring-2 focus:ring-purple-900 cursor-pointer"
                  />
                  <div>
                    <span className="text-gray-800 text-lg block mb-1">
                      Available for Public Games
                    </span>
                    <span className="text-gray-600 text-sm">
                      Allow other members to invite you to public games and events
                    </span>
                  </div>
                </label>
              </div>

              {/* Availability Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="availabilityDate" className="block text-gray-800 mb-3 text-lg">
                    Preferred Date
                  </label>
                  <input
                    id="availabilityDate"
                    type="date"
                    {...register('availabilityDate')}
                    className="w-full px-6 py-4 bg-[#F5F1E8] border-2 border-transparent rounded-2xl focus:outline-none focus:border-purple-900 transition-colors text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="availabilityTime" className="block text-gray-800 mb-3 text-lg">
                    Preferred Time
                  </label>
                  <input
                    id="availabilityTime"
                    type="time"
                    {...register('availabilityTime')}
                    className="w-full px-6 py-4 bg-[#F5F1E8] border-2 border-transparent rounded-2xl focus:outline-none focus:border-purple-900 transition-colors text-gray-800"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-purple-900 text-white rounded-2xl hover:bg-purple-950 transition-all shadow-lg text-lg"
              >
                Complete Booking
              </motion.button>
            </form>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-600 mt-8 text-sm"
          >
            By submitting this form, you agree to our Terms & Conditions and Privacy Policy
          </motion.p>
        </div>
      </div>
      <Footer />
    </>
  );
}