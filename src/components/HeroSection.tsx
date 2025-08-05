import { Button } from "@/components/ui/button";
import { Star, Zap, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-cosmic-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark nebulous overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
      
      {/* Cosmic mist layers */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/4 right-0 w-3/4 h-3/4 bg-gradient-radial from-mystic/15 via-transparent to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-2/3 h-2/3 bg-gradient-radial from-accent/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-12 backdrop-blur-sm border border-primary/30">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium text-white">✨ Authentic Spiritual Awakening</span>
        </div>

        {/* Main Title - Elegant gradient text */}
        <div className="space-y-4 mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-text-primary bg-clip-text text-transparent">Awaken Your Mission</span>
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-text-divine bg-clip-text text-transparent">Discover the Code</span>
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-text-ethereal bg-clip-text text-transparent">of Your Soul</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed">
          Transform your Life, activate the flow of <span className="bg-gradient-text-divine bg-clip-text text-transparent font-semibold drop-shadow-[0_0_20px_hsl(45,100%,60%)]">Love, Wealth and Prosperity.</span><br />
          <span className="text-foreground/80">Numerology, Astrology, Tarot and Akashic Records to awaken your true essence.</span>
        </p>

        {/* CTA Buttons - Adjusted colors and positioning */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Button 
            variant="cosmic" 
            size="xl" 
            className="group px-8 py-4 text-lg"
            onClick={() => {
              const element = document.getElementById('products');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Star className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Start Your Journey
          </Button>
        </div>

        {/* Impact Indicators - Positioned at bottom with proper spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-celestial bg-clip-text text-transparent mb-3">+1700</div>
            <div className="text-foreground/70 text-lg">Awakened Souls</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-mystic bg-clip-text text-transparent mb-3">+2500</div>
            <div className="text-foreground/70 text-lg">Reports Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-ethereal bg-clip-text text-transparent mb-3">98%</div>
            <div className="text-foreground/70 text-lg">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Floating mystical elements with subtle glow and movement */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating particles moving upward */}
        <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-divine rounded-full opacity-60 animate-float-up shadow-divine" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-1.5 h-1.5 bg-accent rounded-full opacity-50 animate-float-up shadow-cosmic" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-0 left-2/3 w-1 h-1 bg-mystic rounded-full opacity-40 animate-float-up shadow-neon" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-0.5 h-0.5 bg-primary rounded-full opacity-70 animate-float-up shadow-cosmic" style={{ animationDelay: '6s', animationDuration: '9s' }}></div>
        
        {/* Twinkling stars */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-divine rounded-full opacity-70 animate-twinkle shadow-divine" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full opacity-60 animate-twinkle shadow-cosmic" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-mystic rounded-full opacity-50 animate-twinkle shadow-neon" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary rounded-full opacity-40 animate-twinkle shadow-cosmic" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/5 right-1/5 w-1 h-1 bg-divine rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/5 w-0.5 h-0.5 bg-accent rounded-full opacity-50 animate-pulse" style={{ animationDelay: '3.5s', animationDuration: '4s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;