import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MissaoAlmaNumerologia = () => {
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
                  <Badge className="bg-gradient-to-r from-divine to-luxury text-white border-0">
                    Numerology
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>January 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  ✨ How to Discover Your Soul Mission through Numerology
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discovering your soul mission is like opening a sacred map that reveals the path to your true fulfillment. And numerology is one of the most powerful tools for this journey of self-discovery.
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none space-y-8">
                
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🔢 What is the Soul Mission?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The soul mission is the spiritual purpose you chose before incarnating. It's the set of experiences, learnings, and contributions that your soul desires to accomplish in this life. When you align with this mission, everything flows more smoothly: relationships, prosperity, health, and spirituality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🧙‍♂️ Why is Numerology so powerful?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Numerology reveals hidden patterns present in your name and birth date. These numbers are not random — they vibrate at a spiritual frequency that shapes who you are, your challenges, and your gifts.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-6">📌 The 5 Fundamental Numbers to Discover Your Soul Mission</h2>
                  
                  <div className="space-y-6">
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">1. Life Number (or Life Path)</h3>
                        <p className="text-muted-foreground mb-2">
                          <strong>How to calculate:</strong> Add all digits of your birth date until reducing to a single digit or master number (11, 22, 33).
                        </p>
                        <p className="text-muted-foreground mb-2">
                          <strong>Example:</strong> 06/25/1988 → 0+6+2+5+1+9+8+8 = 39 → 3+9 = 12 → 1+2 = 3
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Meaning:</strong> Represents the soul's main path. What you came to learn, develop, and express.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">2. Soul Number</h3>
                        <p className="text-muted-foreground mb-2">
                          <strong>How to calculate:</strong> Add only the vowels of your full name, converting them to numbers (using the Pythagorean Table).
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Meaning:</strong> Shows the soul's inner desires, what moves you deeply, even if the external world doesn't perceive it.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">3. Personality Number</h3>
                        <p className="text-muted-foreground mb-2">
                          <strong>How to calculate:</strong> Add the consonants of your full name.
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Meaning:</strong> Represents how the world sees you. The soul's armor.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">4. Expression Number</h3>
                        <p className="text-muted-foreground mb-2">
                          <strong>How to calculate:</strong> Add all letters of your full name (vowels + consonants).
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Meaning:</strong> It's the set of gifts, talents, and spiritual tools you brought to fulfill your mission.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">5. Mission Number</h3>
                        <p className="text-muted-foreground mb-2">
                          Some schools consider the expression number or a combination between the life and soul numbers to find this number.
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Meaning:</strong> Points to how to fulfill your mission based on the integration between your interior (soul), potential (expression), and path (life).
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🪞 Complete Example: Sarah Michelle Johnson</h2>
                  <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/20">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4"><strong>Birth date:</strong> 03/14/1993</p>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        <li><strong>Life Number:</strong> 0+3+1+4+1+9+9+3 = 30 → 3</li>
                        <li><strong>Full name:</strong> Sarah Michelle Johnson</li>
                        <li><strong>Soul:</strong> 7 (deep desires linked to spirituality)</li>
                        <li><strong>Expression:</strong> 5 (versatility and communication as talents)</li>
                        <li><strong>Mission:</strong> Integrate inner wisdom with freedom and expression</li>
                      </ul>
                      <p className="text-muted-foreground">
                        <strong>Interpretation:</strong> Sarah came to develop self-confidence (life 3), spread spiritual light (soul 7), and act with creativity, freedom, and healing through words (expression 5). Her mission involves using her communication to awaken others.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🔮 What does your Mission reveal?</h2>
                  <p className="text-muted-foreground mb-4">
                    Discovering your soul mission is like lighting a lighthouse in the mist. You begin to understand:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Why certain patterns repeat?</li>
                    <li>What are your true gifts?</li>
                    <li>What is blocking your prosperity?</li>
                    <li>What type of work or path fulfills you?</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🧘‍♀️ Mission ≠ Profession</h2>
                  <p className="text-muted-foreground">
                    <strong>Important:</strong> your soul mission is not necessarily your current profession. But it's possible to align both, and numerology helps you understand how.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌿 How to align with your Mission?</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Reflect on the numbers: what do they reveal?</li>
                    <li>Observe your patterns: what is always present?</li>
                    <li>Embrace your natural gifts: you don't need to be someone else.</li>
                    <li>Use challenges as a compass: where there's pain, there's a soul lesson.</li>
                    <li>Seek activities that make your eyes shine.</li>
                    <li>Connect with people who vibrate at the same frequency.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">📊 Simplified Pythagorean Table</h2>
                  <Card className="bg-muted/30 border border-primary/20">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-9 gap-2 text-center mb-4">
                        <div className="font-bold text-primary">1</div>
                        <div className="font-bold text-primary">2</div>
                        <div className="font-bold text-primary">3</div>
                        <div className="font-bold text-primary">4</div>
                        <div className="font-bold text-primary">5</div>
                        <div className="font-bold text-primary">6</div>
                        <div className="font-bold text-primary">7</div>
                        <div className="font-bold text-primary">8</div>
                        <div className="font-bold text-primary">9</div>
                        
                        <div className="text-muted-foreground">A J S</div>
                        <div className="text-muted-foreground">B K T</div>
                        <div className="text-muted-foreground">C L U</div>
                        <div className="text-muted-foreground">D M V</div>
                        <div className="text-muted-foreground">E N W</div>
                        <div className="text-muted-foreground">F O X</div>
                        <div className="text-muted-foreground">G P Y</div>
                        <div className="text-muted-foreground">H Q Z</div>
                        <div className="text-muted-foreground">I R</div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Use this table to convert the letters of your name into numbers and calculate your personal numbers.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🎯 Quick Meanings of Life Numbers</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">1 - The Pioneer</h4>
                        <p className="text-sm text-muted-foreground">Leadership, independence, innovation</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">2 - The Cooperator</h4>
                        <p className="text-sm text-muted-foreground">Partnership, diplomacy, sensitivity</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">3 - The Communicator</h4>
                        <p className="text-sm text-muted-foreground">Creativity, expression, joy</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">4 - The Builder</h4>
                        <p className="text-sm text-muted-foreground">Stability, organization, work</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">5 - The Adventurer</h4>
                        <p className="text-sm text-muted-foreground">Freedom, versatility, experience</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">6 - The Caregiver</h4>
                        <p className="text-sm text-muted-foreground">Responsibility, family, healing</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">7 - The Seeker</h4>
                        <p className="text-sm text-muted-foreground">Spirituality, analysis, wisdom</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">8 - The Achiever</h4>
                        <p className="text-sm text-muted-foreground">Power, material success, authority</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">9 - The Humanitarian</h4>
                        <p className="text-sm text-muted-foreground">Compassion, service, completion</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">11 - The Illuminator</h4>
                        <p className="text-sm text-muted-foreground">Intuition, inspiration, elevation</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">22 - The Master Builder</h4>
                        <p className="text-sm text-muted-foreground">Vision, manifestation, legacy</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">33 - The Master Healer</h4>
                        <p className="text-sm text-muted-foreground">Compassion, healing, higher teaching</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">💫 Practical Exercise</h2>
                  <Card className="bg-gradient-to-br from-cosmic/5 to-luxury/5 border border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-primary mb-3">Discover your Life Number now:</h3>
                      <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                        <li>Write your complete birth date</li>
                        <li>Add all digits</li>
                        <li>Continue adding until you get a single digit (or 11, 22, 33)</li>
                        <li>Read the meaning above</li>
                        <li>Reflect: does this resonate with your life experience?</li>
                      </ol>
                      <p className="text-sm text-muted-foreground italic">
                        Remember: numerology is a mirror, not a prison. Use the insights to flourish, never to limit yourself.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌟 Conclusion</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your soul mission is unique and sacred. Numerology is just one of the languages the Universe uses to whisper secrets to your heart.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Trust the process. Honor your numbers. And most importantly: allow yourself to shine in your most authentic truth.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    May these numbers be lighthouses that illuminate your path back home — within yourself.
                  </p>
                </section>

                <section className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-3">✨ Next Steps</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready to deepen your self-discovery journey even further? Explore our other products:
                  </p>
                  <div className="space-y-2">
                    <Link to="/celestia-primeiros-passos" className="block text-primary hover:text-primary/80 font-medium">
                      → Celestia - First Steps in Self-Knowledge
                    </Link>
                    <Link to="/analise-compatibilidade-amorosa" className="block text-primary hover:text-primary/80 font-medium">
                      → Love Compatibility Analysis
                    </Link>
                    <Link to="/mapa-prosperidade-desbloqueio" className="block text-primary hover:text-primary/80 font-medium">
                      → Spiritual Prosperity Map & Financial Unlock
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

export default MissaoAlmaNumerologia;