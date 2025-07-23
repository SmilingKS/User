import React, { useState } from 'react';
import { Upload, Users, Image, Tag, Settings, Search, Filter, Plus, MoreVertical } from 'lucide-react';
import Button from '../components/Button';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Photos', value: '2,847', change: '+127 this week', color: 'blue' },
    { label: 'Active Students', value: '1,234', change: '+23 this month', color: 'green' },
    { label: 'Events Created', value: '67', change: '+5 this week', color: 'purple' },
    { label: 'Downloads', value: '9,432', change: '+890 this week', color: 'orange' },
  ];

  const recentUploads = [
    { id: 1, name: 'Science Fair 2024', photos: 45, date: '2024-03-15', status: 'Published' },
    { id: 2, name: 'Basketball Championship', photos: 67, date: '2024-03-12', status: 'Processing' },
    { id: 3, name: 'Art Exhibition', photos: 32, date: '2024-03-10', status: 'Published' },
    { id: 4, name: 'Drama Performance', photos: 89, date: '2024-03-08', status: 'Draft' },
  ];

  const students = [
    { id: 1, name: 'Sarah Johnson', grade: '11th', studentId: 'JHS-2025-0156', photos: 47, lastActive: '2024-03-15' },
    { id: 2, name: 'Michael Chen', grade: '10th', studentId: 'JHS-2026-0089', photos: 32, lastActive: '2024-03-14' },
    { id: 3, name: 'Emily Rodriguez', grade: '12th', studentId: 'JHS-2024-0234', photos: 56, lastActive: '2024-03-13' },
    { id: 4, name: 'David Kim', grade: '9th', studentId: 'JHS-2027-0445', photos: 28, lastActive: '2024-03-12' },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                {stat.label === 'Total Photos' && <Image className={`h-6 w-6 text-${stat.color}-600`} />}
                {stat.label === 'Active Students' && <Users className={`h-6 w-6 text-${stat.color}-600`} />}
                {stat.label === 'Events Created' && <Tag className={`h-6 w-6 text-${stat.color}-600`} />}
                {stat.label === 'Downloads' && <Upload className={`h-6 w-6 text-${stat.color}-600`} />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">Recent Uploads</h2>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Upload
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-medium text-slate-600">Event Name</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Photos</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Date</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentUploads.map((upload) => (
                <tr key={upload.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-800">{upload.name}</td>
                  <td className="py-3 px-4 text-slate-600">{upload.photos} photos</td>
                  <td className="py-3 px-4 text-slate-600">{new Date(upload.date).toLocaleDateString()}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      upload.status === 'Published' ? 'bg-green-100 text-green-800' :
                      upload.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {upload.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderUpload = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Upload Student Photos</h2>
        
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors">
          <Upload className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-700 mb-2">Drop your files here</h3>
          <p className="text-slate-500 mb-4">or click to browse your computer</p>
          <Button>Select Files</Button>
          <p className="text-xs text-slate-400 mt-4">Supports JPG, PNG, HEIC up to 10MB each</p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Event Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Spring Concert 2024"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Event Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
            <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Academic Events</option>
              <option>Sports Events</option>
              <option>Performances</option>
              <option>Field Trips</option>
              <option>Graduations</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Grade Level</label>
            <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Grades</option>
              <option>9th Grade</option>
              <option>10th Grade</option>
              <option>11th Grade</option>
              <option>12th Grade</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
          <textarea
            rows={3}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Brief description of the event..."
          ></textarea>
        </div>
        
        <div className="mt-8 flex gap-4">
          <Button size="lg">Upload & Publish</Button>
          <Button variant="outline" size="lg">Save as Draft</Button>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-slate-800">Student Management</h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search students..."
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Student
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-medium text-slate-600">Student Name</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Grade</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Student ID</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Photos</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Last Active</th>
                <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-800">{student.name}</td>
                  <td className="py-3 px-4 text-slate-600">{student.grade}</td>
                  <td className="py-3 px-4 text-slate-600">{student.studentId}</td>
                  <td className="py-3 px-4 text-slate-600">{student.photos} photos</td>
                  <td className="py-3 px-4 text-slate-600">{new Date(student.lastActive).toLocaleDateString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Admin Dashboard</h1>
              <p className="text-slate-600">Jefferson High School</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Quick Upload
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-2 mb-8">
          <div className="flex space-x-1">
            {[
              { id: 'overview', name: 'Overview', icon: Image },
              { id: 'upload', name: 'Upload Photos', icon: Upload },
              { id: 'students', name: 'Students', icon: Users },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'upload' && renderUpload()}
        {activeTab === 'students' && renderStudents()}
      </div>
    </div>
  );
};

export default AdminDashboard;