import React from 'react';
import Navigation from '@/components/Navigation';
import StickyNote from '@/components/StickyNote';

const About = () => {
  const skills = [
    { name: 'React.js', level: 85 },
    { name: 'JavaScript / TypeScript', level: 88 },
    { name: 'Figma to Code', level: 80 },
    { name: 'CSS / Tailwind', level: 82 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      
      {/* Spotlight effect */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20 animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <Navigation />
      
      <main className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="flex-1 animate-slide-in-left">
            <h1 className="font-marker text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              About <span className="text-primary animate-pulse-glow inline-block">Me</span>
            </h1>
            <p className="font-handwritten text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              I'm Deepanshu, a passionate React & JavaScript developer with 1-2 years 
              of experience building modern web applications. I specialize in converting 
              Figma designs into pixel-perfect, responsive React components.
            </p>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg animate-float-slow">
                <span className="font-marker text-primary text-2xl">1-2</span>
                <span className="font-handwritten text-muted-foreground ml-2">Years Experience</span>
              </div>
              <div className="px-6 py-3 bg-secondary/10 border border-secondary/30 rounded-lg animate-float-medium">
                <span className="font-marker text-secondary text-2xl">10+</span>
                <span className="font-handwritten text-muted-foreground ml-2">Projects</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 
                          flex items-center justify-center animate-morph">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-muted/50 border-4 border-primary/30
                            flex items-center justify-center">
                <span className="font-marker text-6xl md:text-8xl text-foreground">D</span>
              </div>
            </div>
            {/* Floating decorations */}
            <div className="absolute -top-4 -right-4 animate-float-fast">
              <StickyNote
                title="Creative"
                description="Thinking outside the box"
                pinColor="red"
                rotation={15}
                animationClass=""
              />
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="font-marker text-3xl text-foreground mb-10 text-center animate-fade-in">
            My <span className="text-accent">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-marker text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="font-handwritten text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full 
                               animate-skill-fill origin-left"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.15 + 0.3}s` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Experience Timeline */}
        <section>
          <h2 className="font-marker text-3xl text-foreground mb-10 text-center">
            My <span className="text-secondary">Journey</span>
          </h2>
          
          <div className="max-w-2xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent animate-draw-timeline" />
            
            {[
              { year: '2023', title: 'Started Learning', desc: 'Began learning React & JavaScript fundamentals' },
              { year: '2024', title: 'First Projects', desc: 'Built personal projects and started freelancing' },
              { year: '2025', title: 'Growing Skills', desc: 'Mastering React ecosystem and Figma to Code workflow' },
            ].map((item, index) => (
              <div 
                key={item.year}
                className="relative pl-20 pb-12 last:pb-0 group animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 rounded-full bg-background border-4 border-primary 
                              group-hover:scale-125 group-hover:border-secondary transition-all duration-300" />
                
                <div className="bg-muted/30 p-6 rounded-xl border border-border/50 
                              hover:border-primary/50 hover:bg-muted/50 transition-all duration-300
                              transform hover:translate-x-2">
                  <span className="font-marker text-primary text-lg">{item.year}</span>
                  <h3 className="font-marker text-foreground text-xl mt-1">{item.title}</h3>
                  <p className="font-handwritten text-muted-foreground text-lg mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
