import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Users, UserPlus, Shield, Key, ArrowLeft } from 'lucide-react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
}

interface DashboardStats {
  total_users: number;
  admin_users: number;
  regular_users: number;
}

type AdminView = 'dashboard' | 'users' | 'create-user';

export default function Admin() {
  const { user, logout } = useAuth();
  const [currentView, setCurrentView] = useState<AdminView>('dashboard');
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchDashboardData();
      if (currentView === 'users') {
        fetchAllUsers();
      }
    } else {
      setLoading(false);
    }
  }, [user, currentView]);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get('/api/admin/dashboard', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setStats(response.data.stats);
    } catch (err: any) {
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get('/api/admin/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setAllUsers(response.data.data);
    } catch (err: any) {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await axios.post('/api/admin/users', newUser, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSuccess('User created successfully');
      setNewUser({ name: '', email: '', password: '', role: 'user' });
      fetchDashboardData();
      if (currentView === 'users') fetchAllUsers();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create user');
    }
  };

  const handleUpdateRole = async (userId: number, newRole: string) => {
    try {
      await axios.put(`/api/admin/users/${userId}/role`, { role: newRole }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSuccess('User role updated successfully');
      fetchAllUsers();
      fetchDashboardData();
    } catch (err: any) {
      setError('Failed to update user role');
    }
  };

  const handleDeleteUser = async (userId: number) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      await axios.delete(`/api/admin/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSuccess('User deleted successfully');
      fetchAllUsers();
      fetchDashboardData();
    } catch (err: any) {
      setError('Failed to delete user');
    }
  };

  const handleResetPassword = async (userId: number) => {
    if (!confirm('Are you sure you want to reset this user\'s password to "user123"?')) return;

    try {
      await axios.post(`/api/admin/users/${userId}/reset-password`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSuccess('Password reset successfully to "user123"');
    } catch (err: any) {
      setError('Failed to reset password');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Please Login</h1>
          <p className="text-gray-600">You need to be logged in to access this page.</p>
        </div>
      </div>
    );
  }

  if (user.role !== 'admin') {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-purple-900 mb-4">Admin Dashboard</h1>
          <p className="text-xl text-gray-600">Manage your application and users</p>
        </div>

        {/* Breadcrumb */}
        {currentView !== 'dashboard' && (
          <div
            className="mb-6"
          >
            <button
              onClick={() => setCurrentView('dashboard')}
              className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </button>
          </div>
        )}

        {/* Messages */}
        {error && (
          <div
            className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
          >
            {error}
          </div>
        )}
        {success && (
          <div
            className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
          >
            {success}
          </div>
        )}

        {/* Dashboard View */}
        {currentView === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">System Statistics</h2>
              {stats ? (
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-900">
                    <div className="flex items-center">
                      <Users className="h-8 w-8 text-purple-900 mr-3" />
                      <div>
                        <p className="text-2xl font-bold text-gray-800">{stats.total_users}</p>
                        <p className="text-gray-600">Total Users</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-900">
                    <div className="flex items-center">
                      <Shield className="h-8 w-8 text-purple-900 mr-3" />
                      <div>
                        <p className="text-2xl font-bold text-gray-800">{stats.admin_users}</p>
                        <p className="text-gray-600">Admin Users</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-900">
                    <div className="flex items-center">
                      <UserPlus className="h-8 w-8 text-purple-900 mr-3" />
                      <div>
                        <p className="text-2xl font-bold text-gray-800">{stats.regular_users}</p>
                        <p className="text-gray-600">Regular Users</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-2"></div>
                  <p className="text-gray-600">Loading statistics...</p>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  className="bg-purple-900 text-white rounded-lg p-6 cursor-pointer hover:bg-purple-800 transition-colors"
                  onClick={() => setCurrentView('users')}
                >
                  <div className="text-center">
                    <Users className="h-12 w-12 mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-1">User Management</h3>
                    <p className="text-purple-100 text-sm">Manage users and roles</p>
                  </div>
                </div>

                <div
                  className="bg-purple-900 text-white rounded-lg p-6 cursor-pointer hover:bg-purple-800 transition-colors"
                  onClick={() => setCurrentView('create-user')}
                >
                  <div className="text-center">
                    <UserPlus className="h-12 w-12 mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-1">Create User</h3>
                    <p className="text-purple-100 text-sm">Add new user accounts</p>
                  </div>
                </div>

                <div
                  className="bg-purple-900 text-white rounded-lg p-6 cursor-pointer hover:bg-purple-800 transition-colors"
                  onClick={() => setCurrentView('reset-password')}
                >
                  <div className="text-center">
                    <Key className="h-12 w-12 mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-1">Reset Password</h3>
                    <p className="text-purple-100 text-sm">Reset user passwords</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fallback for empty dashboard */}
        {currentView === 'dashboard' && (!stats && !loading) && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
            <p>Dashboard loaded but no stats available. Check API connection.</p>
          </div>
        )}

        {/* Other views would go here */}
        {currentView !== 'dashboard' && (
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">View: {currentView}</h2>
            <p className="text-gray-600">This view is not implemented yet.</p>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Back to Dashboard
            </button>
          </div>
        )}

        {/* Users View */}
        {currentView === 'users' && (
          <div
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-8 text-center">User Management</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-purple-900 text-white">
                    <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Role</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Created</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((userItem) => (
                    <tr key={userItem.id} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{userItem.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{userItem.email}</td>
                      <td className="px-4 py-3 text-sm">
                        <select
                          value={userItem.role}
                          onChange={(e) => handleUpdateRole(userItem.id, e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded text-sm"
                          disabled={userItem.id === user?.id} // Can't change own role
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {new Date(userItem.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-sm space-x-2">
                        <button
                          onClick={() => handleResetPassword(userItem.id)}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors flex items-center gap-1"
                          title="Reset Password to user123"
                        >
                          <Key className="h-3 w-3" />
                          Reset
                        </button>
                        {userItem.id !== user?.id && (
                          <button
                            onClick={() => handleDeleteUser(userItem.id)}
                            className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 transition-colors"
                            title="Delete User"
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Create User View */}
        {currentView === 'create-user' && (
          <div
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h2 className="text-4xl font-bold text-purple-900 mb-8 text-center">Add New User</h2>
            <form onSubmit={handleCreateUser} className="max-w-md mx-auto">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-900 text-white py-3 px-6 rounded-lg hover:bg-purple-950 transition-colors font-medium text-lg"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}