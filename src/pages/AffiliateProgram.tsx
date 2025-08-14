import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Mail, Shield, Users, Star, CheckCircle, XCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AffiliateProgram = () => {
  return (
    <>
      <Helmet>
        <title>Afiliados Celestia – Guia Oficial | Celestia Affiliate Program</title>
        <meta name="description" content="Official guide for Celestia affiliates on ClickBank. Learn about our spiritual products, promotion rules, and compliance guidelines for successful marketing." />
        <meta name="keywords" content="Celestia affiliate, ClickBank affiliate, spiritual products affiliate, numerology affiliate program" />
        <link rel="canonical" href="/affiliate-program" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-cosmic overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Celestia Affiliates
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
              Official Guide - Everything you need to successfully promote our products on ClickBank
            </h2>
            <div className="w-24 h-1 bg-gradient-divine mx-auto rounded-full"></div>
          </div>
        </section>

        {/* About Celestia Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                About Celestia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Celestia is an international brand of personalized spiritual reports that combine numerology, 
                astrology, akashic records, chakras, and ancestral practices. Our products have strong emotional 
                and transformative appeal, with high conversion potential in the self-knowledge market.
              </p>
            </div>
          </div>
        </section>

        {/* Product Catalog Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Product Catalog
              </h2>
              <p className="text-muted-foreground text-lg">
                Three powerful spiritual products designed to transform lives
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Product 1 - Beginner */}
              <Card className="bg-card border-primary/30 hover:border-primary/60 hover:shadow-neon transition-cosmic">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      BEGINNER
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Destiny Awakening Blueprint
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Your spiritual map at first sight. Discover the essential codes of your soul based on 
                    name and birth date. A quick, revealing and powerful diagnosis to start your spiritual journey.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Birth number</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Sun sign</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Chinese horoscope animal</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Dominant chakra</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Channeled intuitive message</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">💰 *US$ 19.70</div>
                    <div className="text-sm text-muted-foreground mt-1">50% commission after fees and taxes</div>
                    <div className="text-xs text-muted-foreground mt-2">*Note: final price for customer, including fees and taxes</div>
                  </div>
                </CardContent>
              </Card>

              {/* Product 2 - Relationships */}
              <Card className="bg-card border-accent/30 hover:border-accent/60 hover:shadow-neon transition-cosmic">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                      RELATIONSHIPS
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Soulmate Destiny Blueprint
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Deep spiritual reading of the relationship between two souls: compatibilities, lessons, 
                    karmas and joint mission. Discover the hidden energies shaping your connection.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Astrological and numerological synastry</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Couple's spiritual mission</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Karmic lessons and debts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Love predictions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Strengthening rituals</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">💰 *US$ 39.70</div>
                    <div className="text-sm text-muted-foreground mt-1">50% commission after fees and taxes</div>
                    <div className="text-xs text-muted-foreground mt-2">*Note: final price for customer, including fees and taxes</div>
                  </div>
                </CardContent>
              </Card>

              {/* Product 3 - Abundance */}
              <Card className="bg-card border-divine/30 hover:border-divine/60 hover:shadow-neon transition-cosmic">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-divine text-divine-foreground px-3 py-1 rounded-full text-sm font-bold">
                      ABUNDANCE
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Spiritual Prosperity Map and Financial Unlock
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Unlock your abundance gifts. Spiritual study to unblock financial blocks, 
                    activate hidden gifts and align mission and wealth.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-divine" />
                      <span className="text-muted-foreground">Prosperity number</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-divine" />
                      <span className="text-muted-foreground">Karmic debts and inheritance diagnosis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-divine" />
                      <span className="text-muted-foreground">Hidden wealth potentials</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-divine" />
                      <span className="text-muted-foreground">Financial activation mantras and rituals</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-divine" />
                      <span className="text-muted-foreground">Daily prosperity plan</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-divine">💰 *US$ 29.70</div>
                    <div className="text-sm text-muted-foreground mt-1">50% commission after fees and taxes</div>
                    <div className="text-xs text-muted-foreground mt-2">*Note: final price for customer, including fees and taxes</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Rules and Compliance Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Promotion Rules & Compliance
                </h2>
                <p className="text-muted-foreground text-lg">
                  Essential guidelines for successful and compliant promotion
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Allowed */}
                <Card className="bg-card border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">Allowed</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Use only official materials provided by Celestia</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Create copy variations maintaining integrity and truthfulness</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Promote via paid ads, SEO, email marketing (respecting platform laws and policies)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Can be promoted using Celestia and product keywords without restriction on Google, Meta, TikTok, YouTube and others</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Prohibited */}
                <Card className="bg-card border-destructive/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-6 h-6 text-destructive" />
                      <h3 className="text-xl font-bold text-foreground">Prohibited</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Make promises of guaranteed results</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Create pages that mimic the official site to confuse customers</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Use "Celestia" in domains, URLs or handles without prior authorization</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Alter official images without permission</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">Promote in channels or countries where spiritual products are legally restricted</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Brand Usage */}
              <Card className="bg-card border-primary/30 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Brand Usage</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Always display "Celestia" clearly following official visual identity</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">Do not alter logo colors and proportions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Support
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <Card className="bg-card border-primary/30">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Official Email</h3>
                    <p className="text-muted-foreground">help@celestia.guru</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-primary/30">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Knowledge Base</h3>
                    <p className="text-muted-foreground">*Media kit and guidelines access</p>
                    <p className="text-xs text-muted-foreground mt-1">*Link will be provided through ClickBank platform</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 p-6 bg-destructive/10 border border-destructive/30 rounded-lg">
                <p className="text-destructive font-semibold">
                  ⚠️ Warning: Non-compliance with rules may result in immediate affiliate deactivation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Footer */}
        <section className="py-12 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Celestia reports are self-knowledge and spirituality content. They do not constitute medical, 
                psychological, legal or financial advice. Results vary from person to person.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AffiliateProgram;
