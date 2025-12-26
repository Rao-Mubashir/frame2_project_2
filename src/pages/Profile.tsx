import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Pencil } from 'lucide-react';

export default function Profile() {
  const { user, login, register, logout, updateProfile, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const [passwordData, setPasswordData] = useState({
    current_password: '',
    password: '',
    password_confirmation: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        setSuccess('Logged in successfully!');
      } else {
        await register(formData.name, formData.email, formData.password, formData.password_confirmation);
        setSuccess('Registered successfully!');
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message ||
        (err.response?.data?.errors ? Object.values(err.response.data.errors).flat().join(', ') : err.message || String(err));
      setError(errorMessage);
    }
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const data = new FormData();
    data.append('name', profileData.name);
    data.append('email', profileData.email);
    if (selectedFile) {
      data.append('profile_picture', selectedFile);
    }
    try {
      await updateProfile(data);
      setSuccess('Profile updated successfully!');
      setSelectedFile(null);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message ||
        (err.response?.data?.errors ? Object.values(err.response.data.errors).flat().join(', ') : err.message || String(err));
      setError(errorMessage);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (passwordData.password !== passwordData.password_confirmation) {
      setError('Passwords do not match');
      return;
    }
    try {
      await axios.post('/api/profile/update-password', passwordData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSuccess('Password updated successfully!');
      setPasswordData({ current_password: '', password: '', password_confirmation: '' });
    } catch (err: any) {
      const errorMessage = err.response?.data?.message ||
        (err.response?.data?.errors ? Object.values(err.response.data.errors).flat().join(', ') : err.message || String(err));
      setError(errorMessage);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-lg">Manage your account and personal information</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto py-8 px-4">
        {user ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            {/* Profile Picture Section */}
            <div className="text-center mb-8">
              <div className="relative inline-block mx-auto">
                <img
                  src={user.profile_picture ? `http://localhost:8000/storage/${user.profile_picture}` : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2VkZWRlZCIvPjx0ZXh0IHg9Ijc1IiB5PSI3NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdGV4dC1iYXNlPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+VXNlciI8L3RleHQ+PC9zdmc+'}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-purple-200"
                  onError={(e) => {
                    console.log('Image failed to load:', user.profile_picture);
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZmNjY2NjYiLz48dGV4dCB4PSI3NSIgeT0iNzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtYmFzZT0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiPkVycm9yPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                <label className="absolute -bottom-3 -right-3 bg-purple-600 text-white p-3 rounded-full cursor-pointer hover:bg-purple-700 transition-all duration-200 shadow-lg border-2 border-white">
                  <Pencil size={18} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
              <h2 className="text-2xl font-bold mt-4 text-gray-800">{user.name}</h2>
              <p className="text-base text-gray-600">{user.email}</p>
              <p className="text-sm text-purple-600 capitalize font-medium">{user.role}</p>
              {user.profile_picture && <p className="text-xs text-gray-500 mt-2">Profile picture: {user.profile_picture}</p>}
            </div>

            {/* Update Profile Form */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Update Profile</h3>
              <form onSubmit={handleProfileUpdate} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md border border-purple-600"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>

            {/* Update Password Form */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Change Password</h3>
              <form onSubmit={handlePasswordUpdate} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    name="current_password"
                    value={passwordData.current_password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    name="password"
                    value={passwordData.password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    name="password_confirmation"
                    value={passwordData.password_confirmation}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md border border-blue-600"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>

            {/* Messages */}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
              >
                {error}
              </motion.div>
            )}
            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
              >
                {success}
              </motion.div>
            )}

            {/* Logout Button */}
            <div className="text-center">
              <button
                onClick={logout}
                className="bg-gray-600 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors font-medium shadow-md border border-gray-600"
              >
                Logout
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
              {isLogin ? 'Login' : 'Register'}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
              )}
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              >
                {isLogin ? 'Login' : 'Register'}
              </button>
            </form>
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-600 hover:text-purple-800"
              >
                {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
              </button>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}