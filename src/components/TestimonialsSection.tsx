import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The Celestia numerology report completely changed my life perspective. I discovered my true mission and now have clarity about my next steps. Highly recommend!",
      name: "M.S.",
      role: "Entrepreneur",
      initials: "MS",
      color: "bg-purple-500"
    },
    {
      text: "The Akashic Records reading was a transformative experience. I was able to heal old traumas and awaken gifts I didn't even know I had. Eternal gratitude!",
      name: "C.M.",
      role: "Therapist",
      initials: "CM",
      color: "bg-blue-500"
    },
    {
      text: "The Esoteric Ascension Plan is incredible! The content is deep and the live mentorships are pure gold. My spiritual evolution accelerated exponentially.",
      name: "A.B.",
      role: "Spiritual Coach",
      initials: "AB",
      color: "bg-indigo-500"
    },
    {
      text: "I was lost professionally until I got the astrological analysis. I discovered my purpose and now work aligned with my essence. Life transformed!",
      name: "Roberto Santos",
      role: "Teacher",
      initials: "RS",
      color: "bg-violet-500"
    },
    {
      text: "The tarot consultations guided me through the most challenging moments. The accuracy and love in the guidance are impressive. Celestia is pure light!",
      name: "Luciana Costa",
      role: "Artist",
      initials: "LC",
      color: "bg-pink-500"
    },
    {
      text: "The numerology + astrology combo showed me my personal cycles and how to make better use of them. My business took off after the guidance!",
      name: "Felipe Oliveira",
      role: "Entrepreneur",
      initials: "FO",
      color: "bg-cyan-500"
    }
  ];

  const stats = [
    { number: "1500+", label: "Satisfied Clients" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Recommendation" },
    { number: "3 Years", label: "of Experience" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Real Transformations</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-text-primary bg-clip-text text-transparent">Lives </span>
            <span className="bg-gradient-text-divine bg-clip-text text-transparent">Transformed</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 1,500 people have already awakened their spiritual potential with us. Check out some real testimonials from our community.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;