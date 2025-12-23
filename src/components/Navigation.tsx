import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="font-marker text-xl text-foreground hover:text-primary transition-colors duration-300"
        >
          Deepanshu
        </Link>
        
        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`
                    font-handwritten text-xl relative py-1
                    transition-all duration-300
                    ${location.pathname === to 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                    }
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-full after:h-0.5 after:bg-primary
                    after:transform after:origin-left
                    after:transition-transform after:duration-300
                    ${location.pathname === to 
                      ? 'after:scale-x-100' 
                      : 'after:scale-x-0 hover:after:scale-x-100'
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
