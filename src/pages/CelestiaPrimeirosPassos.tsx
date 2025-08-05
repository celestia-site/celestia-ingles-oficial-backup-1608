import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Sparkles, Star, Clock, Gift, Eye, Heart, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Header from "@/components/Header";
// Image will be referenced directly from public folder

const CelestiaPrimeirosPassos = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    birthDate: '',
    birthTime: '',
    birthCity: '',
    birthState: '',
    birthCountry: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Basic validation
      if (!formData.fullName || !formData.email || !formData.whatsapp || !formData.birthDate || !formData.birthCity || !formData.birthState || !formData.birthCountry) {
        toast.error("Please fill in all required fields.");
        return;
      }

      // Inserir no Supabase
      const { error } = await supabase.from('celestia_orders').insert({
        full_name: formData.fullName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        birth_date: formData.birthDate,
        birth_time: formData.birthTime || null,
        birth_city: formData.birthCity,
        birth_state: formData.birthState,
        birth_country: formData.birthCountry
      });

      if (error) {
        console.error('Error sending:', error);
        toast.error("Error submitting form. Please try again.");
        return;
      }

      // Export to Google Sheets after successful database insertion
      try {
        const recordData = {
          full_name: formData.fullName,
          email: formData.email,
          whatsapp: formData.whatsapp,
          birth_date: formData.birthDate,
          birth_time: formData.birthTime || null,
          birth_city: formData.birthCity,
          birth_state: formData.birthState,
          birth_country: formData.birthCountry,
          produto: 'Celestia First Steps',
          status: 'pending',
          created_at: new Date().toISOString()
        };

        const { error: exportError } = await supabase.functions.invoke('export-to-google-sheets', {
          body: { record: recordData }
        });

        if (exportError) {
          console.error('Error exporting to Google Sheets:', exportError);
          // Don't show error to user since the main form submission was successful
        }
      } catch (exportError) {
        console.error('Error exporting to Google Sheets:', exportError);
        // Don't show error to user since the main form submission was successful
      }

      toast.success("Request submitted successfully! Redirecting to payment...");
      
      // Clear form
      setFormData({
        fullName: '',
        email: '',
        whatsapp: '',
        birthDate: '',
        birthTime: '',
        birthCity: '',
        birthState: '',
        birthCountry: ''
      });

      // Redirect to Cakto payment link after 2 seconds
      setTimeout(() => {
        window.open('https://pay.cakto.com.br/xybdvtr_483604', '_blank');
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      toast.error("Unexpected error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-divine/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium text-white">BEGINNER</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">Celestia - </span>
                  <span className="bg-gradient-to-r from-blue-800 to-purple-500 bg-clip-text text-transparent">First Steps</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Your spiritual map in first glance. Discover your soul's essential codes based on your name and birth date. A quick, powerful, and revealing assessment to start your spiritual journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-bold bg-gradient-text-primary bg-clip-text text-transparent">$9.99</div>
                    <div className="text-sm text-muted-foreground">one time</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-lg font-semibold text-foreground">3x of $3.33</div>
                    <div className="text-sm text-muted-foreground">no interest</div>
                  </div>
                </div>

                <Button className="w-full sm:w-auto h-14 px-8 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors text-white border-0">
                  <Gift className="w-5 h-5 mr-2" />
                  Get Now
                </Button>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                  <img 
                    src="/lovable-uploads/b9812cd9-93b7-47ac-b9e4-73ebd9268137.png" 
                    alt="Chakras and meditation - First steps in the spiritual journey"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-text-primary bg-clip-text text-transparent">What's included in your Celestia</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {[
                {
                  icon: Star,
                  title: "Birth Number",
                  description: "Discover your numerological essence and how it influences your life journey"
                },
                {
                  icon: Sparkles,
                  title: "Sun Sign",
                  description: "Detailed analysis of your zodiac sign and how it shapes your personality"
                },
                {
                  icon: Zap,
                  title: "Chinese Zodiac Animal",
                  description: "Unique characteristics of your protective animal and its energetic influence"
                },
                {
                  icon: Heart,
                  title: "Dominant Chakra",
                  description: "Identify your main energy center and how to strengthen it"
                },
                {
                  icon: Eye,
                  title: "Channeled Intuitive Message",
                  description: "Receive a personalized message directly from the universe for you"
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-card/50 border-primary/30 hover:border-primary/60 transition-cosmic backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom highlight card */}
            <Card className="bg-gradient-to-br from-primary/10 to-divine/10 border-primary/30 max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-text-primary bg-clip-text text-transparent">
                    Perfect as your first step in self-discovery
                  </span>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Perfect for those just starting their spiritual journey or wanting a quick and powerful overview of their essential codes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-background via-purple-900/20 to-violet-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Real transformations from our clients
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  text: "Celestia helped me finally understand who I am. The channeled message came at the perfect time in my life!",
                  name: "Sarah Johnson",
                  initials: "SJ"
                },
                {
                  text: "Amazing how everything made sense. The report is very detailed and gave me clarity about my purpose.",
                  name: "Michael Davis",
                  initials: "MD"
                },
                {
                  text: "I recommend it for anyone starting their self-discovery journey. It's a complete and very accurate guide.",
                  name: "Emma Wilson",
                  initials: "EW"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-card/10 border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />
                      ))}
                    </div>
                    
                    {/* User initials */}
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                      {testimonial.initials}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-foreground mb-6 leading-relaxed text-sm">
                      "{testimonial.text}"
                    </p>
                    
                    {/* User Name */}
                    <p className="font-semibold text-purple-400">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-gradient-to-br from-background via-purple-900/20 to-violet-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Start your spiritual journey today
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Fill out the form below and receive your personalized report within 24 hours
              </p>

              {/* Pricing Box */}
              <Card className="bg-card/10 border-purple-500/30 backdrop-blur-sm max-w-md mx-auto mb-12">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3x of $3.33</div>
                  <div className="text-gray-300 mb-4">or $9.99 one time</div>
                  <div className="inline-flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                    40% OFF
                  </div>
                  <div className="flex items-center justify-center gap-2 text-orange-400 text-sm">
                    <Clock className="w-4 h-4" />
                    Limited time special offer
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <Card className="bg-card/10 border-purple-500/30 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">
                    Request Your Celestia - First Steps
                  </h3>
                  <p className="text-gray-300">
                    Fill in your details to receive your personalized map
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                        <span className="text-white text-sm">👤</span>
                      </div>
                      <h4 className="text-lg font-semibold text-purple-400">Personal Information</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">E-mail *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <label className="block text-sm text-gray-300 mb-2">WhatsApp *</label>
                      <input 
                        type="tel" 
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Birth Information */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                        <span className="text-white text-sm">📅</span>
                      </div>
                      <h4 className="text-lg font-semibold text-purple-400">Birth Information</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Birth Date *</label>
                        <input 
                          type="date" 
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Birth Time (optional)</label>
                        <input 
                          type="time" 
                          name="birthTime"
                          value={formData.birthTime}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                        />
                        <p className="text-xs text-gray-400 mt-1">If you know it, this will make your report more accurate</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">City *</label>
                        <input 
                          type="text" 
                          name="birthCity"
                          value={formData.birthCity}
                          onChange={handleInputChange}
                          placeholder="New York"
                          className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">State *</label>
                        <input 
                          type="text" 
                          name="birthState"
                          value={formData.birthState}
                          onChange={handleInputChange}
                          placeholder="NY"
                          className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Country *</label>
                        <input 
                          type="text" 
                          name="birthCountry"
                          value={formData.birthCountry}
                          onChange={handleInputChange}
                          placeholder="United States"
                          className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Security Note */}
                  <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🔒</span>
                      </div>
                      <span className="text-purple-400 font-semibold">Your data is secure</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      All information is encrypted and used only to create your personalized report.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 transition-colors disabled:opacity-50"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Request My Celestia Now'}
                  </Button>

                  {/* Delivery Note */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Delivered within 24 hours to your email</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CelestiaPrimeirosPassos;