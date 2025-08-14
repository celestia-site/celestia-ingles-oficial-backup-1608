import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Sparkles, Shield, Zap, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LimpezaEnergetica = () => {
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
                    Spirituality
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Nov 08, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>6 min read</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Energy Cleansing: Spiritual Protection Rituals
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Learn powerful techniques to protect your energy and keep your aura clean and strengthened against negative influences.
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none space-y-8">
                
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We live surrounded by energies — some light and elevated, others dense and heavy. Every time we enter an environment, interact with someone, or go through intense emotions, our energetic field absorbs these influences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If we don't take care of our energy with the same attention we give to our physical body, we accumulate:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                    <li>Unexplained fatigue</li>
                    <li>Irritability</li>
                    <li>Insomnia</li>
                    <li>Lack of focus</li>
                    <li>Emotional and spiritual blocks</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    That's why energy cleansing is essential spiritual self-care.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    What is Energy Cleansing?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    It's the process of removing dense, negative, or stagnant energies from the aura, chakras, home, and personal objects.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong>It serves to:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Break energetic ties</li>
                    <li>Dissolve envy, evil eye, psychic attacks</li>
                    <li>Strengthen your spiritual protection</li>
                    <li>Rebalance chakras and raise your vibration</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Signs that you need a cleansing
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-red-600 mb-3">⚠️ Physical and Emotional Symptoms</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Feeling "drained" or "heavy"</li>
                          <li>Body aches without physical cause</li>
                          <li>Extreme fatigue</li>
                          <li>Constant irritability</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-purple-600 mb-3">🏠 Environmental Symptoms</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Heavy or cold environments</li>
                          <li>Appliances breaking frequently</li>
                          <li>Constant arguments</li>
                          <li>Feeling of being watched</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border-indigo-300/30 md:col-span-2">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-indigo-600 mb-3">🌙 Nighttime Symptoms</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Disturbing dreams</li>
                          <li>Insomnia or restless sleep</li>
                          <li>Sensing presences during the night</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-6">🌀 7 Powerful Energy Cleansing Rituals</h2>
                  
                  <div className="space-y-6">
                    <Card className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-600 mb-3">1. 🧂 Sea Salt + Rosemary Bath</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Dissolves negative charges and restores vital energy</li>
                          <li>Do after draining contacts or intense events</li>
                          <li>Finish with a sweet herb bath (chamomile, basil)</li>
                        </ul>
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-sm text-blue-800">
                            <strong>How to do it:</strong> Dissolve 3 handfuls of sea salt in warm water, add some rosemary leaves. Take the bath from neck down, visualizing all heavy energy being washed away.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-green-600 mb-3">2. 🌿 Herb Smudging</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Use white sage, rue, rosemary, or natural incense</li>
                          <li>Pass the smoke through the environment, objects, and around the body</li>
                          <li>Open doors and windows during the process</li>
                        </ul>
                        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-sm text-green-800">
                            <strong>Tip:</strong> Always start from the corners of the house, moving clockwise. Finish at the main entrance.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-500/5 to-violet-500/5 border border-purple-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-purple-600 mb-3">3. 💎 Cleansing Crystals</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Clear quartz, amethyst, and black tourmaline</li>
                          <li>Leave beside the bed or in high-traffic areas</li>
                          <li>Wash crystals in running water and energize in sun/moon</li>
                        </ul>
                        <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                          <p className="text-sm text-purple-800">
                            <strong>Programming:</strong> Hold the crystal in your hands and visualize: "This crystal protects and purifies my energy."
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-yellow-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-yellow-600 mb-3">4. 🕯️ Protection Mantra</h3>
                        <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200 mb-4">
                          <p className="text-lg font-semibold text-yellow-800 italic">
                            "I am light, I am love, I am divine protection"
                          </p>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Repeat for 3 minutes aloud or mentally</li>
                          <li>Can be used during bathing or meditation</li>
                          <li>Visualize a golden light surrounding your entire body</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border border-cyan-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-cyan-600 mb-3">5. 💧 Solar Water</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Fill a blue glass bottle with filtered water</li>
                          <li>Leave in the sun for 1 hour with a purification intention</li>
                          <li>Drink throughout the day with gratitude</li>
                        </ul>
                        <div className="mt-4 p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                          <p className="text-sm text-cyan-800">
                            <strong>Enhance:</strong> Add a mint leaf or a few drops of lemon to amplify the cleansing energy.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-pink-500/5 to-rose-500/5 border border-pink-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-pink-600 mb-3">6. ⚡ Chakra Alignment</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Visualize each chakra spinning in harmony</li>
                          <li>Use guided meditations or touch each point with your palm</li>
                          <li>Can be done with crystals or aromatherapy</li>
                        </ul>
                        <div className="mt-4 p-3 bg-pink-50 rounded-lg border border-pink-200">
                          <p className="text-sm text-pink-800">
                            <strong>Sequence:</strong> Start from the root chakra and move up to the crown, visualizing each one as a wheel of light spinning perfectly.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-red-500/5 to-orange-500/5 border border-red-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-red-600 mb-3">7. 🔥 Fire Ritual</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Write on paper what you want to eliminate (fears, guilt, hurts)</li>
                          <li>Burn carefully and give the ashes to nature</li>
                          <li>Thank for the transmutation</li>
                        </ul>
                        <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                          <p className="text-sm text-red-800">
                            <strong>Safety:</strong> Always do in a safe place, with a proper container and water nearby.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    How to maintain your protection daily?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-primary mb-3">✨ Daily Habits</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                          <li>Avoid gossip and toxic environments</li>
                          <li>Use elevated and conscious words</li>
                          <li>Meditate daily, even if for just 5 minutes</li>
                          <li>Cultivate good thoughts and gratitude</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-primary mb-3">🔮 Protection Tools</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                          <li>Carry protection crystals</li>
                          <li>Spray lavender water in environments</li>
                          <li>Use essential oils of lavender or rue</li>
                          <li>Keep purifying plants at home</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Home className="w-6 h-6" />
                    What about home energy?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your home also needs to be energetically clean. 
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">⚠️ Warning signs:</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Plants dying frequently</li>
                      <li>Cold or stuffy environments even with open windows</li>
                      <li>Feeling of weight when entering home</li>
                      <li>Constant conflicts between residents</li>
                    </ul>
                  </div>

                  <Card className="bg-gradient-to-br from-green-500/5 to-blue-500/5 border border-green-300/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-green-600 mb-4">🏡 Tips to Harmonize Your Home</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Physical + Energetic Cleansing:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Keep mirrors always clean</li>
                            <li>Change bed linens regularly</li>
                            <li>Clean with white vinegar and warm water</li>
                            <li>Keep the house well ventilated</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Energetic Harmonization:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Ring bells or clap hands to break stagnation</li>
                            <li>Place purifying plants (snake plant)</li>
                            <li>Use classical music or mantras</li>
                            <li>Keep crystals in the corners of the house</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌟 Conclusion</h2>
                  <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-6 rounded-lg border border-primary/20">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Taking care of your energy is taking care of your soul. You no longer need to carry weights that aren't yours. Energy cleansing is simple, accessible, and transformative.
                    </p>
                    <p className="text-lg font-semibold text-primary text-center">
                      ✨ Your light deserves to shine with clarity.
                    </p>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-3">✨ Continue your spiritual journey</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore our other products to deepen your self-knowledge:
                  </p>
                  <div className="space-y-2">
                    <Link to="/chakras-zodiaco" className="block text-primary hover:text-primary/80 font-medium">
                      → The 7 Chakras and Their Connection to Zodiac Signs
                    </Link>
                    <Link to="/registros-akashicos" className="block text-primary hover:text-primary/80 font-medium">
                      → Akashic Records: Portal to Past Lives
                    </Link>
                    <Link to="/celestia-primeiros-passos" className="block text-primary hover:text-primary/80 font-medium">
                      → Destiny Awakening Blueprint in Self-Knowledge
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

export default LimpezaEnergetica;