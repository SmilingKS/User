import React from 'react';
import { CheckCircle, Users, Shield, Camera, Heart, Award } from 'lucide-react';

const AboutPage = () => {
  const timelineSteps = [
    {
      title: "2020 - The Vision",
      description: "Founded with the mission to preserve student memories in a digital age.",
      icon: Heart
    },
    {
      title: "2021 - First Schools",
      description: "Partnered with 5 local Kansas schools to pilot our platform.",
      icon: Users
    },
    {
      title: "2022 - Security Focus",
      description: "Implemented advanced privacy controls and COPPA compliance.",
      icon: Shield
    },
    {
      title: "2023 - AI Integration",
      description: "Added smart photo tagging and automated student identification.",
      icon: Camera
    },
    {
      title: "2024 - Expansion",
      description: "Now serving over 50 schools across the Midwest.",
      icon: Award
    },
    {
      title: "2025 - Innovation",
      description: "Launching new features for yearbook creation and family sharing.",
      icon: CheckCircle
    }
  ];

  const partners = [
    { name: "Lincoln Elementary School", students: "450+ students" },
    { name: "Jefferson High School", students: "1,200+ students" },
    { name: "Roosevelt Middle School", students: "800+ students" },
    { name: "Washington Academy", students: "350+ students" },
    { name: "Central High School", students: "1,500+ students" },
    { name: "Westside Elementary", students: "600+ students" },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Our Story
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                SmilingKS was born from a simple belief: every student's journey deserves to be 
                remembered, celebrated, and shared with the people who matter most.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                We started as educators who understood the challenge schools face in sharing 
                precious moments with families while maintaining the highest standards of privacy and security.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-slate-600">Partner Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25K+</div>
                  <div className="text-slate-600">Students Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8364297/pexels-photo-8364297.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Students and teacher"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Student Memories Matter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Student Memories Matter
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every photo tells a story, captures a moment of growth, and preserves 
              a piece of childhood that families will treasure forever.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Emotional Connection</h3>
              <p className="text-slate-600">
                Photos help families stay connected to their child's school experience, 
                fostering stronger bonds and shared memories.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Community Building</h3>
              <p className="text-slate-600">
                Shared memories create stronger school communities and help families 
                feel more involved in their child's education.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Milestone Preservation</h3>
              <p className="text-slate-600">
                From first days to graduations, we help preserve the milestones 
                that mark a student's journey through their educational years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600">
              From a simple idea to serving thousands of families across the region
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Content card */}
                    <div className={`w-5/12 ${isEven ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our School Partners</h2>
            <p className="text-lg text-slate-600">
              Proud to serve amazing educational institutions across Kansas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{partner.name}</h3>
                    <p className="text-sm text-slate-500">{partner.students}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            To create secure, beautiful platforms that help schools share precious student 
            memories with families, fostering stronger communities and preserving the 
            moments that matter most in every child's educational journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;