import React from 'react';
import { Camera, Shield, Users, Download, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-slate-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6">
              <span className="text-blue-600">Smiling</span>KS
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-4 font-light">
              Where Memories Live Forever
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              A secure platform connecting students, families, and schools through 
              beautiful photo sharing and memory preservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/gallery" size="lg" className="hover:scale-105 transform">
                View Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button to="/login" variant="outline" size="lg" className="hover:scale-105 transform">
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What We Do</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We create secure, beautiful platforms for schools to share student photos 
              and preserve precious memories for families to cherish forever.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Photo Sharing</h3>
              <p className="text-slate-600">Secure platform for schools to share event photos with students and families.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Privacy First</h3>
              <p className="text-slate-600">Advanced privacy controls ensure only authorized users can access student photos.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Community Building</h3>
              <p className="text-slate-600">Connecting students, families, and schools through shared memories and experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Why It Matters</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Preserve Precious Moments</h3>
                    <p className="text-slate-600">Every smile, every achievement, every milestone deserves to be remembered.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Connect Families</h3>
                    <p className="text-slate-600">Bridge the gap between school experiences and home, keeping families involved.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Build Community</h3>
                    <p className="text-slate-600">Create lasting bonds between students, families, and educational institutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8613057/pexels-photo-8613057.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Students celebrating"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Simple, secure, and seamless - getting started with SmilingKS is easy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Schools Upload", desc: "Administrators securely upload event photos to the platform" },
              { step: "2", title: "Smart Tagging", desc: "AI-assisted tagging helps identify students in photos quickly" },
              { step: "3", title: "Secure Access", desc: "Students and families login with secure credentials to view photos" },
              { step: "4", title: "Download & Share", desc: "Families can download and share their precious memories safely" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Partners</h2>
            <p className="text-lg text-slate-600">
              Trusted by schools across Kansas and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              "Lincoln Elementary",
              "Jefferson High School", 
              "Roosevelt Middle School",
              "Washington Academy",
              "Central High School",
              "Westside Elementary",
              "Northview Academy",
              "Southpark School"
            ].map((school, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-lg font-semibold text-slate-700">{school}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of families already preserving their precious memories with SmilingKS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" to="/login" className="bg-white text-blue-600 hover:bg-slate-50">
              Login as Student
            </Button>
            <Button variant="outline" size="lg" to="/login" className="border-white text-white hover:bg-white hover:text-blue-600">
              Login as Admin
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;