import React from 'react';
import { Instagram, Twitter, Linkedin, Github, Dribbble, Youtube } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

interface SocialLinksProps {
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:text-pink-500' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-sky-400' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:text-blue-500' },
  { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'hover:text-foreground' },
  { name: 'Dribbble', icon: Dribbble, url: 'https://dribbble.com', color: 'hover:text-pink-400' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: 'hover:text-red-500' },
];

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  variant = 'horizontal', 
  size = 'md',
  showLabels = false 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={`flex gap-3 ${variant === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'}`}>
      {socialLinks.map((social, index) => (
        <MagneticWrapper key={social.name} strength={0.5} radius={60}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${sizeClasses[size]} rounded-full
              bg-muted/50 border border-border/50
              flex items-center justify-center gap-2
              text-muted-foreground ${social.color}
              transition-all duration-300 ease-out
              hover:border-primary/50 hover:bg-muted
              hover:shadow-lg hover:shadow-primary/10
              group
              ${showLabels ? 'px-4 w-auto' : ''}
            `}
            style={{ 
              animationDelay: `${index * 100}ms`,
            }}
          >
            <social.icon 
              className={`${iconSizes[size]} transition-transform duration-300 group-hover:rotate-12`} 
            />
            {showLabels && (
              <span className="font-handwritten text-lg">{social.name}</span>
            )}
          </a>
        </MagneticWrapper>
      ))}
    </div>
  );
};

export default SocialLinks;
