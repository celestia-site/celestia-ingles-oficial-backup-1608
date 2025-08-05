
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Crown, Sparkles } from "lucide-react";
import ProductCard from "./ProductCard";
import mandalaGolden from "@/assets/mandala-golden.jpg";
import prosperityMandala from "@/assets/prosperity-mandala.png";

const ProductsSection = () => {
  // Generate a more elegant love compatibility image using a cosmic/spiritual theme
  const loveCompatibilityImage = "/lovable-uploads/57029799-fb2b-4976-82b7-f29b72a53957.png";

  return (
    <section className="py-20 bg-background" id="products">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium text-white">Spiritual Products</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-text-primary bg-clip-text text-transparent">Awaken your </span>
            <span className="bg-gradient-text-divine bg-clip-text text-transparent">Spiritual Potential</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sacred tools and personalized analyses for your journey of self-knowledge and deep spiritual transformation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ProductCard
            image="/lovable-uploads/b9812cd9-93b7-47ac-b9e4-73ebd9268137.png"
            badge="BEGINNER"
            title="Celestia - First Steps"
            description="Your spiritual map at first sight. Discover your soul's essential codes based on your name and birth date. A quick, powerful and revealing diagnosis to start your spiritual journey."
            features={[
              "Birth number",
              "Sun sign",
              "Chinese horoscope animal",
              "Dominant chakra",
              "Intuitive channeled message"
            ]}
            price="ONLY $19.70"
            badgeColor="primary"
            link="/celestia-first-steps"
          />

          <ProductCard
            image={loveCompatibilityImage}
            badge="RELATIONSHIPS"
            title="Spiritual Love Compatibility Analysis"
            description="A deep spiritual reading of the relationship between two souls: compatibilities, lessons, karmas and joint mission."
            features={[
              "Astrological and numerological synastry",
              "Couple's spiritual mission",
              "Karmic lessons and debts",
              "Love predictions",
              "Strengthening rituals"
            ]}
            price="ONLY UD$ 29.7"
            badgeColor="mystic"
            link="/love-compatibility-analysis"
          />

          <ProductCard
            image="/lovable-uploads/c7614452-e7f5-44ca-ab2d-dec9862d0647.png"
            badge="ABUNDANCE"
            title="Spiritual Prosperity Map and Financial Unlock"
            description="Unlock your abundance gifts. A spiritual study to release financial blocks, activate hidden gifts and align mission and wealth."
            features={[
              "Prosperity number",
              "Karmic debts and inheritances diagnosis",
              "Hidden wealth potentials",
              "Financial activation mantras and rituals",
              "Daily prosperity plan"
            ]}
            price="ONLY UD$ 37.7"
            badgeColor="divine"
            link="/prosperity-unlock-map"
          />
        </div>

        {/* VIP Plan */}
        <Card className="bg-card border-divine/50 shadow-luxury max-w-2xl mx-auto bg-gradient-to-br from-card via-card/90 to-primary/5">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <Crown className="w-8 h-8 bg-gradient-text-divine bg-clip-text text-transparent" />
            </div>
            
            <h3 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-luxury bg-clip-text text-transparent">
                Esoteric Ascension Plan
              </span>
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">
              We are preparing an exclusive plan, with few monthly readings for the Sacred Path of initiation and spiritual ascension based on hermetic practices, past lives and holistic therapies. Leave your name, WhatsApp and email if you want to be part of our VIP list at the plan launch.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 block text-left">Full Name</label>
                <div className="relative">
                  <Input 
                    placeholder="Your full name" 
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 pl-10"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400 block text-left">Email</label>
                <div className="relative">
                  <Input 
                    type="email"
                    placeholder="your@email.com" 
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 pl-10"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400 block text-left">WhatsApp</label>
                <div className="relative">
                  <Input 
                    placeholder="(11) 99999-9999" 
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 pl-10"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full mb-6 h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 hover:shadow-luxury transition-all duration-300 text-white border-0">
              <Sparkles className="w-5 h-5 mr-2" />
              I Want to be VIP
            </Button>
            
            <div className="text-center">
              <span className="text-3xl font-bold bg-gradient-text-primary bg-clip-text text-transparent">$497</span>
              <span className="text-lg text-muted-foreground line-through ml-2">$897</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductsSection;
