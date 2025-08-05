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
          Voltar ao Blog
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-background via-background to-muted/20">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <Badge className="bg-gradient-to-r from-cosmic to-luxury text-white border-0">
                    Espiritualidade
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>08 Nov 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>6 min de leitura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Limpeza Energética: Rituais de Proteção Espiritual
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aprenda técnicas poderosas para proteger sua energia e manter sua aura sempre limpa e fortalecida contra influências negativas.
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none space-y-8">
                
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Introdução
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vivemos cercados de energias — algumas leves e elevadas, outras densas e carregadas. Toda vez que entramos em um ambiente, interagimos com alguém ou passamos por emoções intensas, nosso campo energético absorve essas influências.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Se não cuidarmos da nossa energia com a mesma atenção que damos ao corpo físico, acumulamos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                    <li>Cansaço inexplicável</li>
                    <li>Irritabilidade</li>
                    <li>Insônia</li>
                    <li>Falta de foco</li>
                    <li>Bloqueios emocionais e espirituais</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Por isso, a limpeza energética é um autocuidado espiritual essencial.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    O que é Limpeza Energética?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    É o processo de remover energias densas, negativas ou estagnadas da aura, dos chakras, da casa e dos objetos pessoais.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    <strong>Serve para:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Desfazer laços energéticos</li>
                    <li>Dissolver inveja, mau-olhado, ataques psíquicos</li>
                    <li>Fortalecer sua proteção espiritual</li>
                    <li>Reequilibrar os chakras e elevar sua vibração</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Sinais de que você precisa de uma limpeza
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-red-600 mb-3">⚠️ Sintomas Físicos e Emocionais</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Sensação de estar "carregado"</li>
                          <li>Dores no corpo sem causa física</li>
                          <li>Cansaço extremo</li>
                          <li>Irritabilidade constante</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-purple-600 mb-3">🏠 Sintomas Ambientais</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Ambientes pesados ou frios</li>
                          <li>Aparelhos quebrando com frequência</li>
                          <li>Discussões constantes</li>
                          <li>Sensação de estar sendo observado</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border-indigo-300/30 md:col-span-2">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-indigo-600 mb-3">🌙 Sintomas Noturnos</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Sonhos perturbadores</li>
                          <li>Insônia ou sono agitado</li>
                          <li>Sensação de presenças durante a noite</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-6">🌀 7 Rituais Poderosos de Limpeza Energética</h2>
                  
                  <div className="space-y-6">
                    <Card className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-600 mb-3">1. 🧂 Banho de Sal Grosso + Alecrim</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Dissolve cargas negativas e restaura a energia vital</li>
                          <li>Faça após contatos desgastantes ou eventos intensos</li>
                          <li>Finalize com um banho de ervas doces (camomila, manjericão)</li>
                        </ul>
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-sm text-blue-800">
                            <strong>Como fazer:</strong> Dissolva 3 punhados de sal grosso na água morna, adicione algumas folhas de alecrim. Tome o banho do pescoço para baixo, visualizando toda energia pesada sendo levada embora.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-green-600 mb-3">2. 🌿 Defumação com Ervas</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Use sálvia branca, arruda, alecrim ou incenso natural</li>
                          <li>Passe a fumaça no ambiente, objetos e em torno do corpo</li>
                          <li>Abra portas e janelas durante o processo</li>
                        </ul>
                        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-sm text-green-800">
                            <strong>Dica:</strong> Comece sempre pelos cantos da casa, movendo-se no sentido horário. Finalize na entrada principal.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-500/5 to-violet-500/5 border border-purple-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-purple-600 mb-3">3. 💎 Cristais de Limpeza</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Quartzo transparente, ametista e turmalina negra</li>
                          <li>Deixe ao lado da cama ou em locais de alta circulação</li>
                          <li>Lave os cristais em água corrente e energize no sol/lua</li>
                        </ul>
                        <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                          <p className="text-sm text-purple-800">
                            <strong>Programação:</strong> Segure o cristal nas mãos e mentalize: "Este cristal me protege e purifica minha energia".
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-yellow-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-yellow-600 mb-3">4. 🕯️ Mantra de Proteção</h3>
                        <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200 mb-4">
                          <p className="text-lg font-semibold text-yellow-800 italic">
                            "Eu sou luz, eu sou amor, eu sou proteção divina"
                          </p>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Repita por 3 minutos em voz alta ou mentalmente</li>
                          <li>Pode ser usado durante o banho ou meditação</li>
                          <li>Visualize uma luz dourada envolvendo todo seu corpo</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border border-cyan-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-cyan-600 mb-3">5. 💧 Água Solarizada</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Encha uma garrafa de vidro azul com água filtrada</li>
                          <li>Deixe no sol por 1h com uma intenção de purificação</li>
                          <li>Beba ao longo do dia com gratidão</li>
                        </ul>
                        <div className="mt-4 p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                          <p className="text-sm text-cyan-800">
                            <strong>Potencialize:</strong> Adicione uma folha de hortelã ou algumas gotas de limão para amplificar a energia de limpeza.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-pink-500/5 to-rose-500/5 border border-pink-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-pink-600 mb-3">6. ⚡ Alinhamento com Chakras</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Visualize cada chakra girando em harmonia</li>
                          <li>Use meditações guiadas ou toque cada ponto com a palma da mão</li>
                          <li>Pode ser feito com cristais ou aromaterapia</li>
                        </ul>
                        <div className="mt-4 p-3 bg-pink-50 rounded-lg border border-pink-200">
                          <p className="text-sm text-pink-800">
                            <strong>Sequência:</strong> Comece pelo chakra raiz e suba até o coronário, visualizando cada um como uma roda de luz girando perfeitamente.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-red-500/5 to-orange-500/5 border border-red-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-red-600 mb-3">7. 🔥 Ritual do Fogo</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Escreva em um papel o que deseja eliminar (medos, culpas, mágoas)</li>
                          <li>Queime com cuidado e entregue as cinzas à natureza</li>
                          <li>Agradeça pela transmutação</li>
                        </ul>
                        <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                          <p className="text-sm text-red-800">
                            <strong>Segurança:</strong> Sempre faça em local seguro, com recipiente adequado e água por perto.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Como manter sua proteção no dia a dia?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-primary mb-3">✨ Hábitos Diários</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                          <li>Evite fofocas e ambientes tóxicos</li>
                          <li>Use palavras elevadas e conscientes</li>
                          <li>Medite diariamente, mesmo que por 5 minutos</li>
                          <li>Cultive bons pensamentos e gratidão</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-primary mb-3">🔮 Ferramentas de Proteção</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                          <li>Carregue cristais de proteção</li>
                          <li>Borrife água com alfazema nos ambientes</li>
                          <li>Use óleos essenciais de lavanda ou arruda</li>
                          <li>Mantenha plantas purificadoras em casa</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Home className="w-6 h-6" />
                    E a energia da casa?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sua casa também precisa ser energeticamente limpa. 
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">⚠️ Sinais de alerta:</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Plantas morrendo com frequência</li>
                      <li>Ambientes frios ou abafados mesmo com janelas abertas</li>
                      <li>Sensação de peso ao entrar em casa</li>
                      <li>Conflitos constantes entre moradores</li>
                    </ul>
                  </div>

                  <Card className="bg-gradient-to-br from-green-500/5 to-blue-500/5 border border-green-300/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-green-600 mb-4">🏡 Dicas para Harmonizar o Lar</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Limpeza Física + Energética:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Mantenha espelhos sempre limpos</li>
                            <li>Troque roupas de cama regularmente</li>
                            <li>Limpe com vinagre branco e água morna</li>
                            <li>Mantenha a casa bem ventilada</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Harmonização Energética:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Toque sinos ou use palmas para quebrar estagnações</li>
                            <li>Coloque plantas purificadoras (espada-de-são-jorge)</li>
                            <li>Use música clássica ou mantras</li>
                            <li>Mantenha cristais nos cantos da casa</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌟 Conclusão</h2>
                  <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-6 rounded-lg border border-primary/20">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Cuidar da sua energia é cuidar da sua alma. Você não precisa mais carregar pesos que não são seus. A limpeza energética é simples, acessível e transformadora.
                    </p>
                    <p className="text-lg font-semibold text-primary text-center">
                      ✨ Sua luz merece brilhar com clareza.
                    </p>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-3">✨ Continue sua jornada espiritual</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore nossos outros produtos para aprofundar seu autoconhecimento:
                  </p>
                  <div className="space-y-2">
                    <Link to="/chakras-zodiaco" className="block text-primary hover:text-primary/80 font-medium">
                      → Os 7 Chakras e Sua Conexão com os Signos do Zodíaco
                    </Link>
                    <Link to="/registros-akashicos" className="block text-primary hover:text-primary/80 font-medium">
                      → Registros Akáshicos: Portal para Vidas Passadas
                    </Link>
                    <Link to="/celestia-primeiros-passos" className="block text-primary hover:text-primary/80 font-medium">
                      → Celestia - Primeiros Passos no Autoconhecimento
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