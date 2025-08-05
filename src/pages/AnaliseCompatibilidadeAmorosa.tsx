import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Infinity, Star, Users, Sparkles, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const loveCompatibilityBg = "/lovable-uploads/57029799-fb2b-4976-82b7-f29b72a53957.png";

const AnaliseCompatibilidadeAmorosa = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    birthDate: "",
    birthTime: "",
    birthCity: "",
    birthState: "",
    birthCountry: "",
    partnerName: "",
    partnerBirthDate: "",
    partnerBirthTime: "",
    partnerBirthCity: "",
    partnerBirthState: "",
    partnerBirthCountry: ""
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
    setIsSubmitting(true);

    try {
      // Prepare data for Supabase
      const orderData = {
        full_name: formData.fullName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        birth_date: formData.birthDate,
        birth_time: formData.birthTime || null,
        birth_city: formData.birthCity,
        birth_state: formData.birthState,
        birth_country: formData.birthCountry,
        partner_name: formData.partnerName,
        partner_birth_date: formData.partnerBirthDate,
        partner_birth_time: formData.partnerBirthTime || null,
        partner_birth_city: formData.partnerBirthCity,
        partner_birth_state: formData.partnerBirthState,
        partner_birth_country: formData.partnerBirthCountry,
        produto: 'Spiritual Love Compatibility Analysis',
        status: 'pending',
        created_at: new Date().toISOString()
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from('celestia_orders')
        .insert([orderData])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        toast.error("Error processing request. Please try again.");
        return;
      }

      // Export to Google Sheets - use the same data from Supabase
      const { error: exportError } = await supabase.functions.invoke('export-to-google-sheets', {
        body: { record: orderData }
      });

      if (exportError) {
        console.error('Export error:', exportError);
      }

      toast.success("Order placed successfully! You'll receive your analysis within 24 hours.");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        birthDate: "",
        birthTime: "",
        birthCity: "",
        birthState: "",
        birthCountry: "",
        partnerName: "",
        partnerBirthDate: "",
        partnerBirthTime: "",
        partnerBirthCity: "",
        partnerBirthState: "",
        partnerBirthCountry: ""
      });

    } catch (error) {
      console.error('Submission error:', error);
      toast.error("Error processing request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cosmic opacity-40"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${loveCompatibilityBg})` }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-white text-sm font-medium">
              ← Back to home
              <Heart className="w-4 h-4" />
              Authentic Spiritual Compatibility
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-accent bg-clip-text text-transparent">
              Unlock the Code
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-yellow-400 to-divine bg-clip-text text-transparent">
              of Love
            </span>
            <br />
            <span className="bg-gradient-to-r from-divine via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              between your Souls.
            </span>
          </h1>
          
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover your relationship's spiritual mission, shared karmas,
            and how you can grow together in divine love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="celestial" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              Discover Our Mission
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+1000</div>
              <div className="text-white">Couples United</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">+1200</div>
              <div className="text-white">Analyses Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-divine mb-2">98%</div>
              <div className="text-white">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Analysis Will Reveal */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                What your Analysis
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-divine bg-clip-text text-transparent">
                will reveal
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A deep journey through your spiritual connection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-card/50 border-primary/30 hover:border-primary/60 hover:shadow-neon transition-cosmic p-6">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary fill-primary/30" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Complete Synastry</h3>
                <p className="text-sm text-muted-foreground">
                  Astrological and numerological analysis of both souls to discover deep affinities and spiritual challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/30 hover:border-primary/60 hover:shadow-neon transition-cosmic p-6">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Infinity className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Couple's Spiritual Mission</h3>
                <p className="text-sm text-muted-foreground">
                  Uncover the higher purpose that brought you together in this lifetime and how to strengthen this sacred union.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/30 hover:border-primary/60 hover:shadow-neon transition-cosmic p-6">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full bg-divine/20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-divine" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Karmic Lessons & Debts</h3>
                <p className="text-sm text-muted-foreground">
                  Identify shared karmas, lessons to be learned, and how to transform challenges into growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/30 hover:border-primary/60 hover:shadow-neon transition-cosmic p-6">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full bg-mystic/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-mystic" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Love Predictions</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed vision of your relationship's future with insights for the next 6 to 12 months in love.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Complete Analysis Includes */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-divine to-mystic bg-clip-text text-transparent">
                🌸 Your complete analysis includes:
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-foreground">Detailed astrological and numerological synastry</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-foreground">Love predictions for the coming months</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-divine" />
                <span className="text-foreground">Spiritual mission and relationship purpose</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-mystic" />
                <span className="text-foreground">Love activation rituals and practices</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-foreground">Karmic lessons and debts to be resolved</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-foreground">Guidance to strengthen your sacred union</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Couples who transformed
              </span>
            </h2>
            <p className="text-muted-foreground">Discovering the true purpose of their unions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/30 p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The analysis revealed things I felt but couldn't explain. 
                  Now we understand our mission together!"
                </p>
                <p className="font-semibold text-foreground">— Maria Silva</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30 p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Amazing how the karmic aspects made so much sense. Our relationship 
                  has never been stronger."
                </p>
                <p className="font-semibold text-foreground">— Carlos Eduardo</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30 p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The love activation rituals completely transformed our 
                  connection. Highly recommend it!"
                </p>
                <p className="font-semibold text-foreground">— Ana Paula</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-cosmic relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Discover the spiritual truth of your relationship
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Understand if this love is destiny, soul mission, or a reunion from past lives
          </p>
          
          <Card className="bg-card/20 backdrop-blur-md border-primary/30 p-8 max-w-md mx-auto">
            <CardContent className="p-0 text-center">
              <div className="text-2xl text-muted-foreground line-through mb-2">$97.00</div>
              
              <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                24% OFF
              </div>
              
              <div className="text-4xl font-bold text-primary mb-2">
                12x $6.25
              </div>
              
              <div className="text-lg text-muted-foreground mb-6">
                or $74.99 one-time payment
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>One-time investment for lifetime guidance</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-divine bg-clip-text text-transparent">
                Discover the Destiny
              </span>
              <br />
              <span className="bg-gradient-to-r from-divine to-accent bg-clip-text text-transparent">
                of your Love
              </span>
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below to receive your complete spiritual love compatibility 
              analysis
            </p>
          </div>

          <Card className="bg-card/50 border-primary/30 p-8">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  Request Your Spiritual Love Compatibility Analysis
                </h3>
                <p className="text-muted-foreground">
                  Fill out your information to receive your personalized reading
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h4 className="text-lg font-semibold text-primary">Personal Information</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="fullName" className="text-foreground mb-2 block">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground mb-2 block">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="whatsapp" className="text-foreground mb-2 block">Phone *</Label>
                    <Input
                      id="whatsapp"
                      placeholder="+1 (555) 123-4567"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                {/* Birth Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="w-5 h-5 text-accent" />
                    <h4 className="text-lg font-semibold text-accent">Birth Information</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="birthDate" className="text-foreground mb-2 block">Birth Date *</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthTime" className="text-foreground mb-2 block">Birth Time (optional)</Label>
                      <Input
                        id="birthTime"
                        type="time"
                        placeholder="--:--"
                        value={formData.birthTime}
                        onChange={(e) => handleInputChange('birthTime', e.target.value)}
                        className="bg-background/50"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        If known, this will make your analysis more accurate
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="birthCity" className="text-foreground mb-2 block">City *</Label>
                      <Input
                        id="birthCity"
                        placeholder="New York"
                        value={formData.birthCity}
                        onChange={(e) => handleInputChange('birthCity', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthState" className="text-foreground mb-2 block">State *</Label>
                      <Input
                        id="birthState"
                        placeholder="NY"
                        value={formData.birthState}
                        onChange={(e) => handleInputChange('birthState', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthCountry" className="text-foreground mb-2 block">Country *</Label>
                      <Input
                        id="birthCountry"
                        placeholder="United States"
                        value={formData.birthCountry}
                        onChange={(e) => handleInputChange('birthCountry', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Partner Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Heart className="w-5 h-5 text-divine" />
                    <h4 className="text-lg font-semibold text-divine">Partner Information</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="partnerName" className="text-foreground mb-2 block">Partner's Full Name *</Label>
                      <Input
                        id="partnerName"
                        placeholder="Full name"
                        value={formData.partnerName}
                        onChange={(e) => handleInputChange('partnerName', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="partnerBirthDate" className="text-foreground mb-2 block">Birth Date *</Label>
                      <Input
                        id="partnerBirthDate"
                        type="date"
                        value={formData.partnerBirthDate}
                        onChange={(e) => handleInputChange('partnerBirthDate', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="partnerBirthTime" className="text-foreground mb-2 block">Birth Time (optional)</Label>
                      <Input
                        id="partnerBirthTime"
                        type="time"
                        value={formData.partnerBirthTime}
                        onChange={(e) => handleInputChange('partnerBirthTime', e.target.value)}
                        className="bg-background/50"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        If known, this will make your analysis more accurate
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <Label htmlFor="partnerBirthCity" className="text-foreground mb-2 block">Birth City *</Label>
                      <Input
                        id="partnerBirthCity"
                        placeholder="New York"
                        value={formData.partnerBirthCity}
                        onChange={(e) => handleInputChange('partnerBirthCity', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="partnerBirthState" className="text-foreground mb-2 block">State *</Label>
                      <Input
                        id="partnerBirthState"
                        placeholder="NY"
                        value={formData.partnerBirthState}
                        onChange={(e) => handleInputChange('partnerBirthState', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="partnerBirthCountry" className="text-foreground mb-2 block">Country *</Label>
                      <Input
                        id="partnerBirthCountry"
                        placeholder="United States"
                        value={formData.partnerBirthCountry}
                        onChange={(e) => handleInputChange('partnerBirthCountry', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Your data is secure</h5>
                    <p className="text-sm text-muted-foreground">
                      All information is encrypted and used only for creating your 
                      personalized report.
                    </p>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4"
                  disabled={isSubmitting}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Processing..." : "Get My Reading Now"}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  ⏰ Delivered within 24 hours to your email
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnaliseCompatibilidadeAmorosa;