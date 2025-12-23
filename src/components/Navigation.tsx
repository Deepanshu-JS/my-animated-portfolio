import React, { forwardRef, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navigation = forwardRef<HTMLElement>((_, ref) => {
  const location = useLocation();
  
  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav ref={ref} className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="font-marker text-xl text-foreground hover:text-primary transition-colors duration-200"
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
                    transition-colors duration-200
                    ${location.pathname === to 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                    }
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-full after:h-0.5 after:bg-primary
                    after:origin-left after:transition-transform after:duration-200
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
});

Navigation.displayName = 'Navigation';

export default memo(Navigation);
