import React from 'react';
import StickyNote from '@/components/StickyNote';
import PortfolioTitle from '@/components/PortfolioTitle';
import ConnectingLines from '@/components/ConnectingLines';
import ServiceLabel from '@/components/ServiceLabel';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      
      {/* Spotlight effect */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="mainGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mainGrid)" />
        </svg>
      </div>
      
      {/* Connecting lines */}
      <ConnectingLines />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 min-h-screen flex flex-col">
        
        {/* Top service labels */}
        <div className="flex justify-between items-start mb-8 md:mb-16">
          <ServiceLabel
            title="Print Design"
            items={['Magazines', 'books', 'covers', 'calendars', 'product boxes', 'Posm']}
            position="left"
            className="max-w-xs animate-float-slow"
          />
          
          <ServiceLabel
            title="Communication Design"
            items={['Design poster', 'banner', 'social media post', 'brochure', 'flyer', 'infographic...']}
            position="right"
            className="max-w-xs animate-float-medium"
            
          />
        </div>
        
        {/* Center area with title and sticky notes */}
        <div className="flex-1 flex items-center justify-center relative">
          
          {/* Left sticky notes */}
          <div className="absolute left-0 md:left-8 top-1/4 z-20">
            <StickyNote
              title="Communication"
              description="Design poster, banner, brochure, flyer, infographic..."
              pinColor="red"
              rotation={-5}
              animationClass="animate-float-medium"
              delay="0.5s"
            />
          </div>
          
          <div className="absolute left-4 md:left-16 bottom-1/4 z-20">
            <StickyNote
              title="Print Design"
              description="Magazines, books, covers, calendars, product boxes, Posm"
              pinColor="red"
              rotation={3}
              animationClass="animate-float-slow"
              delay="1s"
            />
          </div>
          
          {/* Main title */}
          <div className="relative z-10">
            <PortfolioTitle />
          </div>
          
          {/* Right sticky notes */}
          <div className="absolute right-0 md:right-8 top-1/3 z-20">
            <StickyNote
              title="Trần Đức Đạt"
              description="Creative Designer"
              pinColor="red"
              rotation={4}
              animationClass="animate-float-fast"
              delay="0.2s"
            />
          </div>
          
          <div className="absolute right-4 md:right-16 bottom-1/3 z-20">
            <StickyNote
              title="UX/UI Design"
              description="Design app, website, landing page, UX wireframe."
              pinColor="blue"
              rotation={-3}
              animationClass="animate-float-medium"
              delay="0.8s"
            />
          </div>
        </div>
        
        {/* Bottom service labels */}
        <div className="flex justify-between items-end mt-8 md:mt-16">
          <ServiceLabel
            title="UX/UI Design"
            items={['Design app', 'website', 'landing page', 'UX wireframe']}
            position="left"
            className="max-w-xs animate-float-medium"
          />
          
          <div className="text-right max-w-xs animate-float-slow">
            <div className="flex items-center justify-end gap-2 mb-2">
              <svg width="40" height="20" viewBox="0 0 40 20" className="text-muted-foreground">
                <path 
                  d="M 0 10 C 10 10, 20 5, 30 10" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                />
                <path 
                  d="M 25 6 L 30 10 L 25 14" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                />
              </svg>
              <h3 className="font-marker text-foreground text-lg md:text-xl">
                About me
              </h3>
            </div>
            <p className="font-handwritten text-muted-foreground text-base md:text-lg leading-relaxed italic">
              I have been in this profession for 4 years
            </p>
          </div>
        </div>
        
        {/* Floating accent elements */}
        <div className="absolute top-20 right-1/4 w-3 h-3 rounded-full bg-primary/40 animate-float-fast" />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-secondary/50 animate-float-slow" />
        <div className="absolute top-1/2 left-20 w-4 h-4 rounded-full bg-accent/30 animate-float-medium" />
      </div>
    </div>
  );
};

export default Index;
