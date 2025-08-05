import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ChakrasZodiaco = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Back to Blog */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-background via-background to-muted/20">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <Badge className="bg-gradient-to-r from-cosmic to-luxury text-white border-0">
                    Astrology
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>12 Nov 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>12 min read</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  The 7 Chakras and Their Connection with Zodiac Signs
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover how to align your energy centers with astrological signs to unlock your inner power and harmonize your cosmic essence.
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none space-y-8">
                
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌟 The Sacred Dance between Chakras and Zodiac</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Since ancient times, humanity has sought to understand the invisible forces that govern our existence. Chakras, energy centers from the Vedic tradition, and the zodiac, celestial map of western astrology, are two languages that complement each other masterfully.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When we integrate these two wisdoms, we discover a portal of self-knowledge that allows us not only to balance our internal energy, but also to navigate more consciously through the planetary influences that surround us.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">⚡ The 7 Chakras: Portals of Inner Light</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Chakras are energy vortexes located along the spine, each vibrating at a specific frequency and governing different aspects of our human experience:
                  </p>
                  
                  <div className="space-y-4">
                    <Card className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-red-600 mb-2">🔴 1st Chakra - Muladhara (Root)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Location:</strong> Base of spine | <strong>Element:</strong> Earth | <strong>Color:</strong> Red
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Governs security, survival, grounding and connection with the physical world.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-orange-600 mb-2">🟠 2nd Chakra - Svadhisthana (Sacral)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Location:</strong> Lower abdomen | <strong>Element:</strong> Water | <strong>Color:</strong> Orange
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Center of creativity, sexuality, pleasure and emotional flow.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-yellow-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-yellow-600 mb-2">🟡 3rd Chakra - Manipura (Solar Plexus)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Location:</strong> Stomach | <strong>Element:</strong> Fire | <strong>Color:</strong> Yellow
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Personal power, self-esteem, confidence and willpower.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-green-600 mb-2">🟢 4th Chakra - Anahata (Heart)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Location:</strong> Center of chest | <strong>Element:</strong> Air | <strong>Color:</strong> Green
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Unconditional love, compassion, empathy and universal connection.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-blue-600 mb-2">🔵 5th Chakra - Vishuddha (Throat)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Location:</strong> Throat | <strong>Element:</strong> Ether | <strong>Color:</strong> Blue
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Authentic communication, expression of truth and verbal creativity.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 border-indigo-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-indigo-600 mb-2">🟣 6th Chakra - Ajna (Third Eye)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Location:</strong> Between eyebrows | <strong>Element:</strong> Light | <strong>Color:</strong> Indigo
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Intuition, clairvoyance, inner wisdom and perception beyond the physical.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-purple-600 mb-2">🟣 7th Chakra - Sahasrara (Crown)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Location:</strong> Top of head | <strong>Element:</strong> Thought | <strong>Color:</strong> Violet/White
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Connection with the divine, spiritual illumination and cosmic consciousness.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌙 The Zodiacal Influence on Chakras</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Each zodiac sign naturally resonates with certain chakras, creating a unique energetic symphony. Knowing these correspondences allows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
                    <li>Identify which chakras need more attention based on your natal chart</li>
                    <li>Work on energy imbalances through planetary qualities</li>
                    <li>Enhance your natural gifts by aligning chakras with ruling planets</li>
                    <li>Understand personal cycles through planetary transits</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-6">✨ Chakra-Sign Correspondences</h2>

                  <div className="space-y-6">
                    <Card className="bg-gradient-to-r from-red-500/5 to-orange-500/5 border border-red-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-red-600 mb-3">🔥 Fire Signs + Action Chakras</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♈ Aries → 1st Chakra (Root) + 3rd Chakra (Solar Plexus)</h4>
                            <p className="text-sm text-muted-foreground">
                              Aries connects deeply with the root chakra (survival instinct) and solar plexus (leadership and courage). People with Sun, Moon or Ascendant in Aries can work these chakras to better channel their pioneering energy.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♌ Leo → 3rd Chakra (Solar Plexus) + 4th Chakra (Heart)</h4>
                            <p className="text-sm text-muted-foreground">
                              Leo resonates with personal power (solar plexus) and generosity of the heart. Balancing these chakras helps Leos shine without overshadowing, radiating love and confidence.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♐ Sagittarius → 6th Chakra (Third Eye) + 7th Chakra (Crown)</h4>
                            <p className="text-sm text-muted-foreground">
                              Sagittarius seeks higher wisdom, connecting with intuition (third eye) and spirituality (crown). Ideal for meditation practices and consciousness expansion.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border border-green-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-green-600 mb-3">🌍 Earth Signs + Manifestation Chakras</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♉ Taurus → 1st Chakra (Root) + 2nd Chakra (Sacral)</h4>
                            <p className="text-sm text-muted-foreground">
                              Taurus governs material stability (root) and sensory pleasures (sacral). Working these chakras helps Taurus manifest abundance without excessive attachment.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♍ Virgo → 3rd Chakra (Solar Plexus) + 6th Chakra (Third Eye)</h4>
                            <p className="text-sm text-muted-foreground">
                              Virgo combines practical efficiency (solar plexus) with intuitive discernment (third eye). Balance allows serving others with wisdom.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♑ Capricorn → 1st Chakra (Root) + 7th Chakra (Crown)</h4>
                            <p className="text-sm text-muted-foreground">
                              Capricorn blends earthly responsibility (root) with spiritual authority (crown). The challenge is building material success with elevated purpose.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-600 mb-3">💨 Air Signs + Communication Chakras</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♊ Gemini → 5th Chakra (Throat)</h4>
                            <p className="text-sm text-muted-foreground">
                              Gemini is the master of communication, resonating directly with the throat chakra. Balancing this center allows expressing ideas with clarity and authenticity.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♎ Libra → 4th Chakra (Heart) + 5th Chakra (Throat)</h4>
                            <p className="text-sm text-muted-foreground">
                              Libra seeks harmony (heart) through diplomatic communication (throat). The challenge is maintaining balance without losing one's own truth.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♒ Aquarius → 5th Chakra (Throat) + 6th Chakra (Third Eye) + 7th Chakra (Crown)</h4>
                            <p className="text-sm text-muted-foreground">
                              Aquarius is visionary, connecting innovative communication (throat), revolutionary intuition (third eye) and collective consciousness (crown).
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-purple-600 mb-3">🌊 Water Signs + Emotional Chakras</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♋ Cancer → 2nd Chakra (Sacral) + 4th Chakra (Heart)</h4>
                            <p className="text-sm text-muted-foreground">
                              Cancer governs deep emotions (sacral) and maternal care (heart). Balancing these chakras allows nurturing without draining.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♏ Scorpio → 1st Chakra (Root) + 2nd Chakra (Sacral) + 6th Chakra (Third Eye)</h4>
                            <p className="text-sm text-muted-foreground">
                              Scorpio works with deep transformation through sexual energy (sacral), personal power (root) and psychic perception (third eye).
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♓ Pisces → 4th Chakra (Heart) + 6th Chakra (Third Eye) + 7th Chakra (Crown)</h4>
                            <p className="text-sm text-muted-foreground">
                              Pisces is naturally connected with universal compassion (heart), intuition (third eye) and spiritual transcendence (crown).
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🔄 Chakra-Zodiac Alignment Practices</h2>
                  
                  <div className="space-y-4">
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">🧘‍♀️ Seasonal Zodiacal Meditation</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                          <li><strong>Spring (Aries, Taurus, Gemini):</strong> Focus on 1st, 2nd and 5th chakras</li>
                          <li><strong>Summer (Cancer, Leo, Virgo):</strong> Work the 4th, 3rd and 6th chakras</li>
                          <li><strong>Fall (Libra, Scorpio, Sagittarius):</strong> Balance the 4th, 2nd and 6th chakras</li>
                          <li><strong>Winter (Capricorn, Aquarius, Pisces):</strong> Connect with 1st, 5th and 7th chakras</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">🌙 New Moon Ritual</h3>
                        <p className="text-muted-foreground mb-3">Each new moon, work the chakra corresponding to the lunar sign:</p>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                          <li>Identify the new moon sign</li>
                          <li>Choose the corresponding chakra(s)</li>
                          <li>Light a candle of the chakra's color</li>
                          <li>Meditate for 21 minutes visualizing the chakra</li>
                          <li>Finish with affirmations of the sign</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">💎 Zodiacal Crystals for Chakras</h3>
                        <p className="text-muted-foreground mb-3">Combine crystals from your sun sign with chakra stones:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                          <li><strong>Fire Signs:</strong> Red Agate, Citrine, Carnelian</li>
                          <li><strong>Earth Signs:</strong> Hematite, Jasper, Smoky Quartz</li>
                          <li><strong>Air Signs:</strong> Sodalite, Aquamarine, Amethyst</li>
                          <li><strong>Water Signs:</strong> Moonstone, Labradorite, Rose Quartz</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">⚠️ Signs of Imbalance</h2>
                  <p className="text-muted-foreground mb-4">
                    When the chakras related to your sign are blocked, you may experience:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Difficulty expressing the positive qualities of your sign</li>
                    <li>Exacerbation of the challenging aspects of the element</li>
                    <li>Feeling "out of tune" with yourself</li>
                    <li>Recurring problems in areas of life governed by the chakras</li>
                    <li>Resistance to positive astrological influences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌟 Conclusion: Your Unique Energy Mandala</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The combination of chakras and astrology reveals that you are a unique energy mandala, where each chakra dances in harmony with the celestial influences of your natal chart.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    By consciously working with these energies, you not only balance your internal energy system, but also align with the cosmic flow, allowing your most authentic essence to flourish.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Remember: it's not about "fixing" something broken, but about tuning your inner instrument to play your soul's symphony with mastery and beauty.
                  </p>
                </section>

                <section className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-3">✨ Next Steps</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready to deepen your self-knowledge journey even further? Explore our other products:
                  </p>
                  <div className="space-y-2">
                    <Link to="/love-compatibility-analysis" className="block text-primary hover:text-primary/80 font-medium">
                      → Love Compatibility Analysis
                    </Link>
                    <Link to="/prosperity-unlock-map" className="block text-primary hover:text-primary/80 font-medium">
                      → Prosperity and Unlock Map
                    </Link>
                    <Link to="/akashic-records" className="block text-primary hover:text-primary/80 font-medium">
                      → Akashic Records: Portal to Past Lives
                    </Link>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ChakrasZodiaco;