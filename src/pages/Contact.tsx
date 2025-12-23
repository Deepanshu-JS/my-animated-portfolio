import React from 'react';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import StickyNote from '@/components/StickyNote';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      
      {/* Spotlight effect */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      
      {/* Animated waves background */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none overflow-hidden">
        <svg 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 w-full animate-wave"
          preserveAspectRatio="none"
        >
          <path 
            fill="hsl(var(--primary) / 0.1)" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 w-full animate-wave-slow"
          preserveAspectRatio="none"
        >
          <path 
            fill="hsl(var(--secondary) / 0.08)" 
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      
      <Navigation />
      
      <main className="relative z-10 container mx-auto px-4 pt-24 pb-16 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Info */}
          <ScrollReveal direction="left">
            <h1 className="font-marker text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              Let's <span className="text-primary animate-text-glow">Work</span><br/>
              Together
            </h1>
            <p className="font-handwritten text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
              Have a project in mind? I'd love to hear about it. 
              Let's create something amazing together.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center
                              group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-marker text-foreground">Email</span>
                  <span className="font-handwritten text-muted-foreground text-lg">hello@example.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center
                              group-hover:bg-secondary/30 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-marker text-foreground">Location</span>
                  <span className="font-handwritten text-muted-foreground text-lg">Vietnam</span>
                </div>
              </div>
            </div>
            
            {/* Social Links Section */}
            <div className="mt-10">
              <h3 className="font-marker text-lg text-foreground mb-4">Follow Me</h3>
              <SocialLinks size="md" />
            </div>
            
            {/* Floating sticky note */}
            <div className="mt-8 animate-float-slow">
              <StickyNote
                title="Let's Talk!"
                description="I usually respond within 24 hours"
                pinColor="blue"
                rotation={-5}
                animationClass=""
              />
            </div>
          </ScrollReveal>
          
          {/* Right side - Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-muted/20 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border/50
                          shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <h2 className="font-marker text-2xl text-foreground mb-8">
                Send a <span className="text-accent">Message</span>
              </h2>
              <ContactForm />
            </div>
          </ScrollReveal>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
