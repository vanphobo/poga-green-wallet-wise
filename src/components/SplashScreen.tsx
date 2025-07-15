import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Wallet, PiggyBank, Bot, BarChart3 } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <Wallet className="w-16 h-16 text-primary" />,
      title: "Welcome to Poga Wallet",
      description: "Your smart financial companion for better money management"
    },
    {
      icon: <PiggyBank className="w-16 h-16 text-primary" />,
      title: "6-Jar Money Management",
      description: "Organize your finances with our proven 6-jar system for optimal money allocation"
    },
    {
      icon: <BarChart3 className="w-16 h-16 text-primary" />,
      title: "Transaction Management",
      description: "Track, categorize and analyze your spending patterns effortlessly"
    },
    {
      icon: <Bot className="w-16 h-16 text-primary" />,
      title: "AI Financial Assistant",
      description: "Get personalized advice and insights to improve your financial health"
    }
  ];

  useEffect(() => {
    if (currentSlide < slides.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md">
        <div className="mb-8">
          {slides[currentSlide].icon}
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">
          {slides[currentSlide].title}
        </h1>
        
        <p className="text-white/90 text-lg mb-8 leading-relaxed">
          {slides[currentSlide].description}
        </p>

        <div className="flex justify-center space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;