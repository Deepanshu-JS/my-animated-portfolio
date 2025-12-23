import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/30 bg-muted/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link 
              to="/" 
              className="font-marker text-2xl text-foreground hover:text-primary transition-colors duration-300"
            >
              TĐĐ
            </Link>
            <p className="font-handwritten text-muted-foreground text-lg mt-2">
              Creating digital experiences
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center">
            <SocialLinks size="md" />
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="font-handwritten text-muted-foreground text-lg flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-4 h-4 text-primary animate-pulse" /> in Vietnam
            </p>
            <p className="font-handwritten text-muted-foreground/60 text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
