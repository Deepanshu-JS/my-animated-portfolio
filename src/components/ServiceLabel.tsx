import React from 'react';

interface ServiceLabelProps {
  title: string;
  items: string[];
  position?: 'left' | 'right';
  className?: string;
}

const ServiceLabel: React.FC<ServiceLabelProps> = ({
  title,
  items,
  position = 'left',
  className = '',
}) => {
  return (
    <div className={`${position === 'right' ? 'text-right' : 'text-left'} ${className}`}>
      <h3 className="font-marker text-foreground text-lg md:text-xl mb-1">
        {title}
      </h3>
      <p className="font-handwritten text-muted-foreground text-base md:text-lg leading-relaxed">
        {items.join(', ')}
      </p>
      
      {/* Arrow indicator */}
      <div className={`mt-2 flex items-center gap-2 ${position === 'right' ? 'justify-end' : 'justify-start'}`}>
        {position === 'left' && (
          <svg width="30" height="20" viewBox="0 0 30 20" className="text-muted-foreground">
            <path 
              d="M 0 10 L 25 10 M 20 5 L 25 10 L 20 15" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            />
          </svg>
        )}
        {position === 'right' && (
          <svg width="30" height="20" viewBox="0 0 30 20" className="text-muted-foreground rotate-180">
            <path 
              d="M 0 10 L 25 10 M 20 5 L 25 10 L 20 15" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ServiceLabel;
