import { useState } from 'react';
import React from 'react';
import { Users, Clock, Eye, MessageCircle } from 'lucide-react';

const Fammsection = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Your actual achievement data based on the images
  const achievements = [
    {
      id: 1,
      image: "img4.jpg",
      title: "579K+",
      subtitle: "Profile Views",
      icon: Eye,
      description: "Professional dashboard views in 30 days",
      metric: "Monthly Growth"
    },
    {
      id: 2,
      image: "img3.jpg",
      title: "566K+",
      subtitle: "Reel Views",
      icon: Users,
      description: "Single reel reached 419K accounts",
      metric: "Viral Content"
    },
    {
      id: 3,
      image: "img5.jpg",
      title: "121 Days",
      subtitle: "Watch Time",
      icon: Clock,
      description: "7 hours 45 minutes total engagement",
      metric: "Content Impact"
    },
    {
      id: 4,
      image: "img1.jpg",
      title: "Inspiring",
      subtitle: "Messages",
      icon: MessageCircle,
      description: "Building connections through authentic storytelling",
      metric: "Community Building"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800  text-black  dark:text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8">
            Numbers that speak{' '}
            <span className="text-primary  bg-clip-text ">
              louder than words
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
           The screenshots say more than I need to.
All built in under a month — no tricks, just strategy.
This is what happens when copy meets strategy
          </p>
        </div>

        {/* Images in One Row - Side by Side */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {/* Background Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Icon */}
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {React.createElement(item.icon, {
                      className: "w-10 h-10 text-orange-400"
                    })}
                  </div>
                  
                  {/* Main Number/Title */}
                  <div className="mb-3">
                    <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-base font-semibold text-gray-300">
                      {item.subtitle}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                  
                  {/* Metric Badge */}
                  <div className="inline-flex items-center px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full border border-orange-500/30 w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {item.metric}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/50 transition-colors duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary Bar */}
        <div className="bg-white dark:bg-blue-950/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-400">579K+</p>
              <p className="text-gray-600 text-sm">Profile Views</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-400">566K+</p>
              <p className="text-gray-600 text-sm">Reel Engagement</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-400">419K+</p>
              <p className="text-gray-600 text-sm">Accounts Reached</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-400">99.6%</p>
              <p className="text-gray-600 text-sm">New Audience</p>
            </div>
          </div>
        </div>
 <div className="text-center mt-16">
          <p className="text-lg text-gray-6   00 mb-6">
            Your brand deserves more than a template. <br/>

We design and write custom content  that make you feel like a brand worth trusting — and buying from
          </p>
         
        </div>
        
      </div>
    </div>
  );
};

export default Fammsection;