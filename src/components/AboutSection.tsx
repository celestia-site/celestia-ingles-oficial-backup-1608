import { Button } from "@/components/ui/button";
import { Users, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/ddf216ca-13e0-444e-9f7b-70773cda3386.png" 
              alt="Spiritual figure in meditation with mystical elements"
              className="w-full rounded-2xl"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-cosmic border border-primary/50">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-white text-sm font-medium">Our Mission</span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-text-primary bg-clip-text text-transparent">Awakening and</span>
                <br />
                <span className="bg-gradient-text-divine bg-clip-text text-transparent">Transforming Lives</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-foreground/80 text-lg leading-relaxed">
              <span className="bg-gradient-celestial bg-clip-text text-transparent font-semibold">Celestia</span> was born from the vision of democratizing access to 
              deep spiritual self-knowledge. We use sacred millenary tools 
              such as numerology, astrology, tarot and akashic records 
              to reveal your soul's unique codes.
            </p>

            {/* Cards - Single card */}
            <div className="max-w-md">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 shadow-cosmic">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-cosmic flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">Ancestral Wisdom</h3>
                </div>
                <p className="text-foreground/70 text-sm">
                  A fusion between ancient mysteries and hermetic knowledge, 
                  combining elevated spiritual practices, ascension rituals and the 
                  laws of conscious creation.
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="py-4">
              <p className="text-lg italic text-foreground/80 leading-relaxed mb-4">
                "Each soul carries a <span className="bg-gradient-celestial bg-clip-text text-transparent font-semibold">unique code</span>, a <span className="bg-gradient-mystic bg-clip-text text-transparent font-semibold">sacred mission</span>. Our 
                role is to help you decipher this code and awaken to your 
                true essence."
              </p>
              <footer className="text-sm text-foreground/60">
                — Founder of Celestia
              </footer>
            </blockquote>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;