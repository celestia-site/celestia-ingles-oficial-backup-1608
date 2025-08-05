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
          Voltar ao Blog
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-background via-background to-muted/20">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <Badge className="bg-gradient-to-r from-cosmic to-luxury text-white border-0">
                    Astrologia
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>12 Nov 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>12 min de leitura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Os 7 Chakras e Sua Conexão com os Signos do Zodíaco
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Descubra como alinhar seus centros de energia com os signos astrológicos para desbloquear seu poder interior e harmonizar sua essência cósmica.
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none space-y-8">
                
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌟 A Dança Sagrada entre Chakras e Zodíaco</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Desde tempos ancestrais, a humanidade busca compreender as forças invisíveis que regem nossa existência. Os chakras, centros energéticos oriundos da tradição védica, e o zodíaco, mapa celeste da astrologia ocidental, são duas linguagens que se complementam de forma magistral.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Quando integramos essas duas sabedorias, descobrimos um portal de autoconhecimento que nos permite não apenas equilibrar nossa energia interna, mas também navegar com mais consciência pelas influências planetárias que nos cercam.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">⚡ Os 7 Chakras: Portais de Luz Interior</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Os chakras são vórtices energéticos localizados ao longo da coluna vertebral, cada um vibrando em uma frequência específica e governando diferentes aspectos da nossa experiência humana:
                  </p>
                  
                  <div className="space-y-4">
                    <Card className="bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-red-600 mb-2">🔴 1º Chakra - Muladhara (Raiz)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Localização:</strong> Base da coluna | <strong>Elemento:</strong> Terra | <strong>Cor:</strong> Vermelho
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Governa segurança, sobrevivência, enraizamento e conexão com o mundo físico.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-orange-600 mb-2">🟠 2º Chakra - Svadhisthana (Sacral)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Localização:</strong> Baixo ventre | <strong>Elemento:</strong> Água | <strong>Cor:</strong> Laranja
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Centro da criatividade, sexualidade, prazer e fluxo emocional.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-yellow-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-yellow-600 mb-2">🟡 3º Chakra - Manipura (Plexo Solar)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Localização:</strong> Estômago | <strong>Elemento:</strong> Fogo | <strong>Cor:</strong> Amarelo
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Poder pessoal, autoestima, confiança e força de vontade.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-green-600 mb-2">🟢 4º Chakra - Anahata (Coração)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Localização:</strong> Centro do peito | <strong>Elemento:</strong> Ar | <strong>Cor:</strong> Verde
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Amor incondicional, compaixão, empatia e conexão universal.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-blue-600 mb-2">🔵 5º Chakra - Vishuddha (Garganta)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Localização:</strong> Garganta | <strong>Elemento:</strong> Éter | <strong>Cor:</strong> Azul
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Comunicação autêntica, expressão da verdade e criatividade verbal.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 border-indigo-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-indigo-600 mb-2">🟣 6º Chakra - Ajna (Terceiro Olho)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Localização:</strong> Entre as sobrancelhas | <strong>Elemento:</strong> Luz | <strong>Cor:</strong> Índigo
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Intuição, clarividência, sabedoria interior e percepção além do físico.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-300/30">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-purple-600 mb-2">🟣 7º Chakra - Sahasrara (Coronário)</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Localização:</strong> Topo da cabeça | <strong>Elemento:</strong> Pensamento | <strong>Cor:</strong> Violeta/Branco
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Conexão com o divino, iluminação espiritual e consciência cósmica.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌙 A Influência Zodiacal nos Chakras</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Cada signo do zodíaco ressoa naturalmente com determinados chakras, criando uma sinfonia energética única. Conhecer essas correspondências permite:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
                    <li>Identificar quais chakras precisam de mais atenção baseado no seu mapa astral</li>
                    <li>Trabalhar os desequilíbrios energéticos através das qualidades planetárias</li>
                    <li>Potencializar seus dons naturais alinhando chakras com planetas regentes</li>
                    <li>Compreender ciclos pessoais através dos trânsitos planetários</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-6">✨ Correspondências Chakra-Signo</h2>

                  <div className="space-y-6">
                    <Card className="bg-gradient-to-r from-red-500/5 to-orange-500/5 border border-red-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-red-600 mb-3">🔥 Signos de Fogo + Chakras de Ação</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♈ Áries → 1º Chakra (Raiz) + 3º Chakra (Plexo Solar)</h4>
                            <p className="text-sm text-muted-foreground">
                              Áries conecta-se profundamente com o chakra da raiz (instinto de sobrevivência) e plexo solar (liderança e coragem). Pessoas com Sol, Lua ou Ascendente em Áries podem trabalhar estes chakras para canalizar melhor sua energia pioneira.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♌ Leão → 3º Chakra (Plexo Solar) + 4º Chakra (Coração)</h4>
                            <p className="text-sm text-muted-foreground">
                              Leão ressoa com o poder pessoal (plexo solar) e a generosidade do coração. Equilibrar estes chakras ajuda leoninos a brilhar sem ofuscar, irradiando amor e confiança.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♐ Sagitário → 6º Chakra (Terceiro Olho) + 7º Chakra (Coronário)</h4>
                            <p className="text-sm text-muted-foreground">
                              Sagitário busca sabedoria superior, conectando-se com a intuição (terceiro olho) e espiritualidade (coronário). Ideal para práticas de meditação e expansão de consciência.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border border-green-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-green-600 mb-3">🌍 Signos de Terra + Chakras de Manifestação</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♉ Touro → 1º Chakra (Raiz) + 2º Chakra (Sacral)</h4>
                            <p className="text-sm text-muted-foreground">
                              Touro governa a estabilidade material (raiz) e prazeres sensoriais (sacral). Trabalhar estes chakras ajuda taurinos a manifestar abundância sem apego excessivo.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♍ Virgem → 3º Chakra (Plexo Solar) + 6º Chakra (Terceiro Olho)</h4>
                            <p className="text-sm text-muted-foreground">
                              Virgem combina eficiência prática (plexo solar) com discernimento intuitivo (terceiro olho). O equilíbrio permite servir aos outros com sabedoria.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♑ Capricórnio → 1º Chakra (Raiz) + 7º Chakra (Coronário)</h4>
                            <p className="text-sm text-muted-foreground">
                              Capricórnio mescla responsabilidade terrena (raiz) com autoridade espiritual (coronário). O desafio é construir sucesso material com propósito elevado.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-600 mb-3">💨 Signos de Ar + Chakras de Comunicação</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♊ Gêmeos → 5º Chakra (Garganta)</h4>
                            <p className="text-sm text-muted-foreground">
                              Gêmeos é o mestre da comunicação, ressonando diretamente com o chakra da garganta. Equilibrar este centro permite expressar ideias com clareza e autenticidade.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♎ Libra → 4º Chakra (Coração) + 5º Chakra (Garganta)</h4>
                            <p className="text-sm text-muted-foreground">
                              Libra busca harmonia (coração) através da comunicação diplomática (garganta). O desafio é manter o equilíbrio sem perder a própria verdade.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♒ Aquário → 5º Chakra (Garganta) + 6º Chakra (Terceiro Olho) + 7º Chakra (Coronário)</h4>
                            <p className="text-sm text-muted-foreground">
                              Aquário é visionário, conectando comunicação inovadora (garganta), intuição revolucionária (terceiro olho) e consciência coletiva (coronário).
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-300/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-purple-600 mb-3">🌊 Signos de Água + Chakras Emocionais</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♋ Câncer → 2º Chakra (Sacral) + 4º Chakra (Coração)</h4>
                            <p className="text-sm text-muted-foreground">
                              Câncer governa as emoções profundas (sacral) e o cuidado maternal (coração). Equilibrar estes chakras permite nutrir sem se drenar.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♏ Escorpião → 1º Chakra (Raiz) + 2º Chakra (Sacral) + 6º Chakra (Terceiro Olho)</h4>
                            <p className="text-sm text-muted-foreground">
                              Escorpião trabalha com transformação profunda através da energia sexual (sacral), poder pessoal (raiz) e percepção psíquica (terceiro olho).
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">♓ Peixes → 4º Chakra (Coração) + 6º Chakra (Terceiro Olho) + 7º Chakra (Coronário)</h4>
                            <p className="text-sm text-muted-foreground">
                              Peixes é naturalmente conectado com a compaixão universal (coração), intuição (terceiro olho) e transcendência espiritual (coronário).
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🔄 Práticas de Alinhamento Chakra-Zodíaco</h2>
                  
                  <div className="space-y-4">
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">🧘‍♀️ Meditação Zodiacal por Estação</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                          <li><strong>Primavera (Áries, Touro, Gêmeos):</strong> Foque no 1º, 2º e 5º chakras</li>
                          <li><strong>Verão (Câncer, Leão, Virgem):</strong> Trabalhe o 4º, 3º e 6º chakras</li>
                          <li><strong>Outono (Libra, Escorpião, Sagitário):</strong> Equilibre o 4º, 2º e 6º chakras</li>
                          <li><strong>Inverno (Capricórnio, Aquário, Peixes):</strong> Conecte-se com o 1º, 5º e 7º chakras</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">🌙 Ritual de Luna Nova</h3>
                        <p className="text-muted-foreground mb-3">A cada lua nova, trabalhe o chakra correspondente ao signo lunar:</p>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                          <li>Identifique o signo da lua nova</li>
                          <li>Escolha o(s) chakra(s) correspondente(s)</li>
                          <li>Acenda uma vela da cor do chakra</li>
                          <li>Medite por 21 minutos visualizando o chakra</li>
                          <li>Finalize com afirmações do signo</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">💎 Cristais Zodiacais para Chakras</h3>
                        <p className="text-muted-foreground mb-3">Combine cristais do seu signo solar com pedras dos chakras:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                          <li><strong>Signos de Fogo:</strong> Ágata vermelha, Citrino, Cornalina</li>
                          <li><strong>Signos de Terra:</strong> Hematita, Jaspe, Quartzo fumê</li>
                          <li><strong>Signos de Ar:</strong> Sodalita, Água-marinha, Ametista</li>
                          <li><strong>Signos de Água:</strong> Pedra da lua, Labradorita, Quartzo rosa</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">⚠️ Sinais de Desequilíbrio</h2>
                  <p className="text-muted-foreground mb-4">
                    Quando os chakras relacionados ao seu signo estão bloqueados, você pode experienciar:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Dificuldade em expressar as qualidades positivas do seu signo</li>
                    <li>Exacerbação dos aspectos desafiadores do elemento</li>
                    <li>Sensação de estar "fora de sintonia" consigo mesmo</li>
                    <li>Problemas recorrentes nas áreas da vida governadas pelos chakras</li>
                    <li>Resistência às influências astrológicas positivas</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌟 Conclusão: Sua Mandala Energética Única</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A combinação entre chakras e astrologia revela que você é uma mandala energética única, onde cada chakra dança em harmonia com as influências celestiais do seu mapa natal.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ao trabalhar conscientemente com essas energias, você não apenas equilibra seu sistema energético interno, mas também se alinha com o fluxo cósmico, permitindo que sua essência mais autêntica floresça.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Lembre-se: não se trata de "consertar" algo quebrado, mas de afinar seu instrumento interior para tocar a sinfonia da sua alma com maestria e beleza.
                  </p>
                </section>

                <section className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-3">✨ Próximos Passos</h3>
                  <p className="text-muted-foreground mb-4">
                    Pronto para aprofundar ainda mais sua jornada de autoconhecimento? Explore nossos outros produtos:
                  </p>
                  <div className="space-y-2">
                    <Link to="/analise-compatibilidade-amorosa" className="block text-primary hover:text-primary/80 font-medium">
                      → Análise de Compatibilidade Amorosa
                    </Link>
                    <Link to="/mapa-prosperidade-desbloqueio" className="block text-primary hover:text-primary/80 font-medium">
                      → Mapa de Prosperidade e Desbloqueio
                    </Link>
                    <Link to="/registros-akashicos" className="block text-primary hover:text-primary/80 font-medium">
                      → Registros Akáshicos: Portal para Vidas Passadas
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