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
          Voltar ao Blog
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-background via-background to-muted/20">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <Badge className="bg-gradient-to-r from-divine to-luxury text-white border-0">
                    Numerologia
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Janeiro 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>8 min de leitura</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  ✨ Como Descobrir Sua Missão de Alma através da Numerologia
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Descobrir sua missão de alma é como abrir um mapa sagrado que revela o caminho para sua verdadeira realização. E a numerologia é uma das ferramentas mais poderosas para essa jornada de autoconhecimento.
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none space-y-8">
                
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🔢 O que é a Missão de Alma?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A missão de alma é o propósito espiritual que você escolheu antes de encarnar. É o conjunto de experiências, aprendizados e contribuições que sua alma deseja realizar nesta vida. Ao alinhar-se com essa missão, tudo flui com mais leveza: relacionamentos, prosperidade, saúde e espiritualidade.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🧙‍♂️ Por que a Numerologia é tão poderosa?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A Numerologia revela padrões ocultos presentes no seu nome e data de nascimento. Esses números não são aleatórios — eles vibram em uma frequência espiritual que molda quem você é, seus desafios e seus dons.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-6">📌 Os 5 Números Fundamentais para Descobrir sua Missão de Alma</h2>
                  
                  <div className="space-y-6">
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">1. Número de Vida (ou Caminho de Vida)</h3>
                        <p className="text-muted-foreground mb-2">
                          <strong>Como calcular:</strong> Some todos os dígitos da sua data de nascimento até reduzir a um único dígito ou número mestre (11, 22, 33).
                        </p>
                        <p className="text-muted-foreground mb-2">
                          <strong>Exemplo:</strong> 25/06/1988 → 2+5+0+6+1+9+8+8 = 39 → 3+9 = 12 → 1+2 = 3
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Significado:</strong> Representa o caminho principal da alma. O que você veio aprender, desenvolver e expressar.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">2. Número da Alma</h3>
                        <p className="text-muted-foreground mb-2">
                          <strong>Como calcular:</strong> Some apenas as vogais do seu nome completo, convertendo-as em números (usando a Tabela Pitagórica).
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Significado:</strong> Mostra os desejos internos da alma, aquilo que te move profundamente, mesmo que o mundo externo não perceba.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">3. Número da Personalidade</h3>
                        <p className="text-muted-foreground mb-2">
                          <strong>Como calcular:</strong> Some as consoantes do seu nome completo.
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Significado:</strong> Representa a forma como o mundo te enxerga. A armadura da alma.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">4. Número de Expressão</h3>
                        <p className="text-muted-foreground mb-2">
                          <strong>Como calcular:</strong> Some todas as letras do seu nome completo (vogais + consoantes).
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Significado:</strong> É o conjunto de dons, talentos e ferramentas espirituais que você trouxe para cumprir sua missão.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-3">5. Número da Missão</h3>
                        <p className="text-muted-foreground mb-2">
                          Algumas escolas consideram o número de expressão ou uma combinação entre o número de vida e da alma para encontrar esse número.
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Significado:</strong> Aponta como cumprir sua missão com base na integração entre seu interior (alma), potencial (expressão) e caminho (vida).
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🪞 Exemplo Completo: Ana Paula Oliveira</h2>
                  <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/20">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4"><strong>Data de nascimento:</strong> 14/03/1993</p>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        <li><strong>Número de Vida:</strong> 1+4+0+3+1+9+9+3 = 30 → 3</li>
                        <li><strong>Nome completo:</strong> Ana Paula Oliveira</li>
                        <li><strong>Alma:</strong> 7 (desejos profundos ligados à espiritualidade)</li>
                        <li><strong>Expressão:</strong> 5 (versatilidade e comunicação como talentos)</li>
                        <li><strong>Missão:</strong> Integrar sabedoria interior com liberdade e expressão</li>
                      </ul>
                      <p className="text-muted-foreground">
                        <strong>Interpretação:</strong> Ana veio desenvolver autoconfiança (vida 3), espalhar luz espiritual (alma 7) e atuar com criatividade, liberdade e cura através da palavra (expressão 5). Sua missão envolve usar sua comunicação para despertar os outros.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🔮 O que a sua Missão Revela?</h2>
                  <p className="text-muted-foreground mb-4">
                    Descobrir sua missão de alma é como acender um farol em meio à neblina. Você passa a entender:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Por que certos padrões se repetem?</li>
                    <li>Quais são os seus verdadeiros dons?</li>
                    <li>O que está bloqueando sua prosperidade?</li>
                    <li>Com que tipo de trabalho ou caminho você se realiza?</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🧘‍♀️ Missão ≠ Profissão</h2>
                  <p className="text-muted-foreground">
                    <strong>Importante:</strong> sua missão de alma não é necessariamente sua profissão atual. Mas é possível alinhar as duas, e a numerologia te ajuda a entender como.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌿 Como se alinhar com sua Missão?</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Reflita sobre os números: o que eles revelam?</li>
                    <li>Observe seus padrões: o que está sempre presente?</li>
                    <li>Abrace seus dons naturais: você não precisa ser outra pessoa.</li>
                    <li>Use os desafios como bússola: onde há dor, há lição de alma.</li>
                    <li>Busque atividades que façam seus olhos brilharem.</li>
                    <li>Conecte-se com pessoas que vibram na mesma frequência.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">📊 Tabela Pitagórica Simplificada</h2>
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
                        Use esta tabela para converter as letras do seu nome em números e calcular seus números pessoais.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🎯 Significados Rápidos dos Números de Vida</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">1 - O Pioneiro</h4>
                        <p className="text-sm text-muted-foreground">Liderança, independência, inovação</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">2 - O Cooperador</h4>
                        <p className="text-sm text-muted-foreground">Parceria, diplomacia, sensibilidade</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">3 - O Comunicador</h4>
                        <p className="text-sm text-muted-foreground">Criatividade, expressão, alegria</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">4 - O Construtor</h4>
                        <p className="text-sm text-muted-foreground">Estabilidade, organização, trabalho</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">5 - O Aventureiro</h4>
                        <p className="text-sm text-muted-foreground">Liberdade, versatilidade, experiência</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">6 - O Cuidador</h4>
                        <p className="text-sm text-muted-foreground">Responsabilidade, família, cura</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">7 - O Buscador</h4>
                        <p className="text-sm text-muted-foreground">Espiritualidade, análise, sabedoria</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">8 - O Realizador</h4>
                        <p className="text-sm text-muted-foreground">Poder, sucesso material, autoridade</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">9 - O Humanitário</h4>
                        <p className="text-sm text-muted-foreground">Compaixão, serviço, finalização</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">11 - O Iluminador</h4>
                        <p className="text-sm text-muted-foreground">Intuição, inspiração, elevação</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">22 - O Mestre Construtor</h4>
                        <p className="text-sm text-muted-foreground">Visão, manifestação, legado</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-muted/30 border border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-primary mb-2">33 - O Mestre Curador</h4>
                        <p className="text-sm text-muted-foreground">Compaixão, cura, ensino superior</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">💫 Exercício Prático</h2>
                  <Card className="bg-gradient-to-br from-cosmic/5 to-luxury/5 border border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-primary mb-3">Descubra seu Número de Vida agora:</h3>
                      <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                        <li>Escreva sua data de nascimento completa</li>
                        <li>Some todos os dígitos</li>
                        <li>Continue somando até chegar a um único dígito (ou 11, 22, 33)</li>
                        <li>Leia o significado acima</li>
                        <li>Reflita: isso ressoa com sua experiência de vida?</li>
                      </ol>
                      <p className="text-sm text-muted-foreground italic">
                        Lembre-se: a numerologia é um espelho, não uma prisão. Use os insights para florescer, nunca para se limitar.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">🌟 Conclusão</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sua missão de alma é única e sagrada. A numerologia é apenas uma das linguagens que o Universo usa para sussurrar segredos ao seu coração.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Confie no processo. Honre seus números. E principalmente: permita-se brilhar na sua verdade mais autêntica.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Que estes números sejam faróis que iluminem seu caminho de volta para casa — para dentro de si mesmo.
                  </p>
                </section>

                <section className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-3">✨ Próximos Passos</h3>
                  <p className="text-muted-foreground mb-4">
                    Pronto para aprofundar ainda mais sua jornada de autoconhecimento? Explore nossos outros produtos:
                  </p>
                  <div className="space-y-2">
                    <Link to="/celestia-primeiros-passos" className="block text-primary hover:text-primary/80 font-medium">
                      → Celestia - Primeiros Passos no Autoconhecimento
                    </Link>
                    <Link to="/analise-compatibilidade-amorosa" className="block text-primary hover:text-primary/80 font-medium">
                      → Análise de Compatibilidade Amorosa
                    </Link>
                    <Link to="/mapa-prosperidade-desbloqueio" className="block text-primary hover:text-primary/80 font-medium">
                      → Mapa de Prosperidade e Desbloqueio
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