import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="group">
        <label 
          htmlFor="name" 
          className="block font-marker text-foreground text-sm mb-2 transition-colors group-focus-within:text-primary"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          maxLength={100}
          className="w-full px-4 py-3 bg-muted/50 border-2 border-border rounded-lg 
                     font-handwritten text-lg text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                     transition-all duration-300 hover:border-primary/50"
          placeholder="Your name..."
        />
      </div>
      
      <div className="group">
        <label 
          htmlFor="email" 
          className="block font-marker text-foreground text-sm mb-2 transition-colors group-focus-within:text-primary"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          maxLength={255}
          className="w-full px-4 py-3 bg-muted/50 border-2 border-border rounded-lg 
                     font-handwritten text-lg text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                     transition-all duration-300 hover:border-primary/50"
          placeholder="your@email.com"
        />
      </div>
      
      <div className="group">
        <label 
          htmlFor="message" 
          className="block font-marker text-foreground text-sm mb-2 transition-colors group-focus-within:text-primary"
        >
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          required
          maxLength={1000}
          rows={5}
          className="w-full px-4 py-3 bg-muted/50 border-2 border-border rounded-lg 
                     font-handwritten text-lg text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                     transition-all duration-300 hover:border-primary/50 resize-none"
          placeholder="Tell me about your project..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-primary text-primary-foreground font-marker text-lg
                   rounded-lg shadow-lg hover:shadow-xl
                   transform hover:scale-[1.02] active:scale-[0.98]
                   transition-all duration-300
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                   relative overflow-hidden group"
      >
        <span className="relative z-10">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary 
                        bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </form>
  );
};

export default ContactForm;
