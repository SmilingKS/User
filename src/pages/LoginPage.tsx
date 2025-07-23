import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Shield } from 'lucide-react';
import Button from '../components/Button';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'admin'>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (activeTab === 'student') {
      navigate('/student-dashboard');
    } else {
      navigate('/admin-dashboard');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      studentId: '',
      password: '',
    });
  };

  const handleTabChange = (tab: 'student' | 'admin') => {
    setActiveTab(tab);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back</h1>
          <p className="text-slate-600">Sign in to access your SmilingKS account</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex">
            <button
              onClick={() => handleTabChange('student')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'student'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-center">
                <User className="h-5 w-5 mr-2" />
                Student/Parent
              </div>
            </button>
            <button
              onClick={() => handleTabChange('admin')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'admin'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-center">
                <Shield className="h-5 w-5 mr-2" />
                Admin
              </div>
            </button>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {activeTab === 'student' ? (
                <>
                  {/* Student Form */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="studentId" className="block text-sm font-medium text-slate-700 mb-2">
                      Student ID
                    </label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter student ID"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Admin Form */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your admin email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 pr-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <Button type="submit" className="w-full" size="lg">
                Sign In as {activeTab === 'student' ? 'Student' : 'Admin'}
              </Button>

              {/* Additional Links */}
              <div className="text-center space-y-2">
                {activeTab === 'admin' && (
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                    Forgot your password?
                  </a>
                )}
                <p className="text-xs text-slate-500">
                  {activeTab === 'student' 
                    ? 'Contact your school administrator if you need help accessing your account.'
                    : 'Only authorized school administrators can access this portal.'
                  }
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 mb-2">Need help?</p>
          <div className="space-x-4">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
              Contact Support
            </a>
            <span className="text-slate-300">|</span>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
              User Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;