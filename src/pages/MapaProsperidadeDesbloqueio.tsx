import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Clock, Target, Crown, Star, TrendingUp, Shield } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import prosperityMandala from "@/assets/prosperity-mandala.png";

const MapaProsperidadeDesbloqueio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    birthDate: '',
    birthTime: '',
    birthCity: '',
    birthState: '',
    birthCountry: 'United States'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.birthDate || !formData.birthCity || !formData.birthState) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar dados no formato correto para a planilha
      const orderData = {
        full_name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        birth_date: formData.birthDate,
        birth_time: formData.birthTime || null,
        birth_city: formData.birthCity,
        birth_state: formData.birthState,
        birth_country: formData.birthCountry,
        status: 'pending',
        created_at: new Date().toISOString(),
        produto: 'Spiritual Prosperity Map & Financial Unlock'
      };

      // Salvar no banco de dados
      const supabaseResponse = await fetch(`https://gxlhclhlvtcoypzvtvsh.supabase.co/functions/v1/export-to-google-sheets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4bGhjbGhsdnRjb3lwenZ0dnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNDgxODIsImV4cCI6MjA2ODYyNDE4Mn0.iEG9Ym8mxp1pJYHGNo2YUz_5246z4rjD80DkTDIcps4'}`,
        },
        body: JSON.stringify({ record: orderData }),
      });

      if (!supabaseResponse.ok) {
        throw new Error('Error saving data');
      }

      toast.success("Request sent successfully! Redirecting to payment...");
      
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        birthDate: '',
        birthTime: '',
        birthCity: '',
        birthState: '',
        birthCountry: 'United States'
      });

      setTimeout(() => {
        window.open('https://pay.cakto.com.br/3cve577_480232', '_blank');
      }, 2000);

    } catch (error) {
      console.error('Erro:', error);
      toast.error("Error sending request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Prosperity Number",
      description: "Discover your numerological frequency of abundance and how to activate it in your life"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Karmic Debts & Ancestral Inheritance Analysis",
      description: "Identify ancestral financial blocks and learn how to transform them"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Hidden Wealth Potentials",
      description: "Reveal unique talents and gifts that can generate material abundance"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Financial Activation Mantras & Rituals",
      description: "Personalized sacred practices to attract prosperity and wealth"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Daily Prosperity Plan",
      description: "Structured routine to manifest abundance consistently"
    }
  ];

  const testimonials = [
    {
      text: "After following the prosperity plan, my business took off in 6 months. The karmic blocks really made a difference!",
      author: "Robert S."
    },
    {
      text: "I discovered talents I didn't even know I had! The prosperity number completely changed my view on money.",
      author: "Lucia O."
    },
    {
      text: "The mantras and rituals are powerful. I felt an immediate energetic shift in my relationship with abundance.",
      author: "Fernanda C."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              🔮 Unlock Your Abundance
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-cosmic mb-6">
            Spiritual Prosperity Map
            <br />
            & Financial Unlock
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock your abundance gifts. A spiritual study to release 
            financial blocks, activate hidden gifts, and align mission with wealth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Delivered within 24h
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Deep Analysis
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <Crown className="w-4 h-4" />
              Abundance & Prosperity
            </Badge>
          </div>
          
          <div className="mb-8">
            <img 
              src="/lovable-uploads/c7614452-e7f5-44ca-ab2d-dec9862d0647.png" 
              alt="Spiritual Prosperity Map" 
              className="w-full max-w-md mx-auto rounded-lg shadow-neon"
            />
          </div>
          
          <Card className="bg-card/50 border-primary/30 max-w-md mx-auto mb-8">
            <CardContent className="p-6 text-center">
              <div className="text-sm text-muted-foreground line-through mb-1">$97.00</div>
              <Badge variant="destructive" className="mb-2">24% OFF</Badge>
              <div className="text-2xl font-bold text-primary mb-1">12x $6.25</div>
              <div className="text-sm text-muted-foreground">or $74.99 one-time payment</div>
              <div className="text-xs text-muted-foreground mt-2">
                🛡️ One-time investment for lifetime guidance
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            What's included in your Map
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-cosmic">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-primary/5 border-primary/30">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Perfect for those seeking purposeful prosperity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Transform your relationship with money: ideal for those looking to break patterns of scarcity, 
                activate their prosperity gifts, and attract wealth with spiritual consciousness.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Real transformations from our clients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="text-primary font-semibold">{testimonial.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-background">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Unlock your prosperity today
          </h2>
          <p className="text-muted-foreground mb-6 text-sm md:text-base">
            Transform your relationship with money and manifest the abundance you've always dreamed of
          </p>
          
          <Card className="bg-card border-primary/30 max-w-sm mx-auto">
            <CardContent className="p-4 text-center">
              <div className="text-sm text-muted-foreground line-through mb-1">$97.00</div>
              <Badge variant="destructive" className="mb-2 text-xs">24% OFF</Badge>
              <div className="text-xl font-bold text-primary mb-1">12x $6.25</div>
              <div className="text-sm text-muted-foreground mb-2">or $74.99 one-time payment</div>
              <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" />
                One-time investment for lifetime guidance
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-card border-primary/30">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Request Your Spiritual Prosperity Map & Financial Unlock
                </h2>
                <p className="text-muted-foreground">
                  Fill out your information to receive your personalized map
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-primary font-semibold">Personal Information</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Label htmlFor="whatsapp">Phone *</Label>
                    <Input
                      id="whatsapp"
                      placeholder="+1 (555) 123-4567"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-primary" />
                    <h3 className="text-primary font-semibold">Birth Information</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="birthDate">Birth Date *</Label>
                      <Input
                        id="birthDate"
                        placeholder="mm/dd/yyyy"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="birthTime">Birth Time (optional)</Label>
                      <Input
                        id="birthTime"
                        placeholder="--:--"
                        value={formData.birthTime}
                        onChange={(e) => handleInputChange('birthTime', e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        If known, this will make your report more accurate
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <Label htmlFor="birthCity">City *</Label>
                      <Input
                        id="birthCity"
                        placeholder="New York"
                        value={formData.birthCity}
                        onChange={(e) => handleInputChange('birthCity', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="birthState">State *</Label>
                      <Input
                        id="birthState"
                        placeholder="NY"
                        value={formData.birthState}
                        onChange={(e) => handleInputChange('birthState', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="birthCountry">Country *</Label>
                      <Select 
                        value={formData.birthCountry} 
                        onValueChange={(value) => handleInputChange('birthCountry', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="United States">United States</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                          <SelectItem value="Brazil">Brazil</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary">Your data is secure</p>
                      <p className="text-xs text-muted-foreground">
                        All information is encrypted and used only for creating your personalized report.
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-cosmic hover:opacity-90 text-white font-semibold py-3 rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "✨ Get My Map Now"}
                </Button>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    Delivered within 24 hours to your email
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer with Legal Notice */}
      <section className="py-4 px-6 bg-card/50 border-t border-border/50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">Celestia</span>
          </div>
          
          <div className="text-xs text-muted-foreground/80 space-y-1 max-w-2xl mx-auto">
            <p>
              <strong>Legal Notice:</strong> This product is intended for entertainment and personal development only. It does not replace professional medical, psychological, or financial advice.
            </p>
            <p>
              Results may vary from person to person. The information provided is based on symbolic interpretations and traditional spiritual practices.
            </p>
            <p>
              All rights reserved © 2024 Celestia.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MapaProsperidadeDesbloqueio;