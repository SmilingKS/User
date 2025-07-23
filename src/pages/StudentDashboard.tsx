import React from 'react';
import { Download, Calendar, Mail, Star, Clock, Image } from 'lucide-react';
import Button from '../components/Button';

const StudentDashboard = () => {
  const studentInfo = {
    name: "Sarah Johnson",
    grade: "11th Grade",
    school: "Jefferson High School",
    studentId: "JHS-2025-0156"
  };

  const recentPhotos = [
    { id: 1, event: "Science Fair 2024", date: "2024-03-15", count: 12, image: "https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 2, event: "Basketball Game", date: "2024-03-12", count: 8, image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 3, event: "Art Exhibition", date: "2024-03-10", count: 15, image: "https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 4, event: "Drama Club Performance", date: "2024-03-08", count: 22, image: "https://images.pexels.com/photos/7148390/pexels-photo-7148390.jpeg?auto=compress&cs=tinysrgb&w=300" },
  ];

  const timelineEvents = [
    { date: "2024-03-15", event: "Science Fair Winners", type: "achievement" },
    { date: "2024-03-12", event: "Basketball Championship", type: "sports" },
    { date: "2024-03-10", event: "Art Exhibition Opening", type: "academic" },
    { date: "2024-03-08", event: "Drama Club Performance", type: "performance" },
    { date: "2024-03-05", event: "Student Council Meeting", type: "activity" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome back, {studentInfo.name}!</h1>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <span>{studentInfo.grade}</span>
                <span>•</span>
                <span>{studentInfo.school}</span>
                <span>•</span>
                <span>ID: {studentInfo.studentId}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" className="mr-3">
                <Mail className="h-4 w-4 mr-2" />
                Contact Admin
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Download Yearbook
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Photos */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Your Recent Photos</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recentPhotos.map((photo) => (
                  <div key={photo.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={photo.image} 
                        alt={photo.event}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity"></div>
                      <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded-lg">
                        <span className="text-xs font-medium text-slate-800">{photo.count} photos</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="font-semibold text-slate-800">{photo.event}</h3>
                      <p className="text-sm text-slate-500">{new Date(photo.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Timeline */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Event Timeline</h2>
              
              <div className="space-y-4">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      {event.type === 'achievement' && <Star className="h-6 w-6 text-blue-600" />}
                      {event.type === 'sports' && <Calendar className="h-6 w-6 text-blue-600" />}
                      {event.type === 'academic' && <Image className="h-6 w-6 text-blue-600" />}
                      {event.type === 'performance' && <Clock className="h-6 w-6 text-blue-600" />}
                      {event.type === 'activity' && <Calendar className="h-6 w-6 text-blue-600" />}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-slate-800">{event.event}</h3>
                      <p className="text-sm text-slate-500">{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                    <Button variant="outline" size="sm">View Photos</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Photos</span>
                  <span className="text-2xl font-bold text-blue-600">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Events</span>
                  <span className="text-2xl font-bold text-blue-600">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Downloads</span>
                  <span className="text-2xl font-bold text-blue-600">43</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download All Photos
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Star className="h-4 w-4 mr-2" />
                  Mark Favorites
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact School
                </Button>
              </div>
            </div>

            {/* School Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">School Contact</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-slate-700">Principal:</span>
                  <p className="text-slate-600">Dr. Michael Chen</p>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Office:</span>
                  <p className="text-slate-600">(555) 123-4567</p>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Email:</span>
                  <p className="text-slate-600">office@jeffersonhigh.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;