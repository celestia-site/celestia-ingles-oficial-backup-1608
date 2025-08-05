import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const RegistrosAkashicos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Back to Blog */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Voltar ao Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Registros Akáshicos: Portal para Vidas Passadas
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Entenda como acessar as memórias da sua alma e curar traumas ancestrais através dos registros cósmicos
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <span>Por Celestia</span>
              <span>•</span>
              <span>15 min de leitura</span>
              <span>•</span>
              <span>Espiritualidade</span>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">✨ O que são Registros Akáshicos?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Imagine uma biblioteca invisível que contém todas as experiências da sua alma — não só desta vida, mas de todas as encarnações. Esse é o conceito dos Registros Akáshicos: um campo sutil onde está gravada a história espiritual de cada ser.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                O termo vem do sânscrito Akasha, que significa "éter" ou "substância primordial". Segundo tradições esotéricas, esse plano vibracional armazena informações sobre:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Quem você foi em vidas passadas</li>
                <li>Quais padrões espirituais ainda se repetem</li>
                <li>Seus dons esquecidos</li>
                <li>Lições não resolvidas</li>
                <li>A missão que sua alma escolheu</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🧭 Por que acessar os Registros Akáshicos?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Acessar os Registros Akáshicos não é apenas curiosidade espiritual. É uma ferramenta poderosa de cura, libertação e realinhamento com sua missão de alma.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Ao compreender suas vivências passadas, você:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Libera traumas ancestrais</li>
                <li>Interrompe ciclos repetitivos de sofrimento</li>
                <li>Reconhece dons e talentos esquecidos</li>
                <li>Entende melhor os desafios atuais</li>
                <li>Reencontra pessoas importantes de jornadas anteriores</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🔑 Como os Registros influenciam sua vida hoje?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Os padrões emocionais, medos e desafios que você vive podem ter raízes em outras vidas. Por exemplo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
                <li><strong>Medo de falar em público</strong> → pode vir de uma encarnação onde foi punido por se expressar</li>
                <li><strong>Dificuldade com prosperidade</strong> → pode refletir votos de pobreza do passado</li>
                <li><strong>Relações tóxicas</strong> → podem ser reconexões com laços cármicos mal resolvidos</li>
              </ul>
              <p className="text-foreground leading-relaxed">
                Esses registros vibram no seu campo energético atual até que sejam reconhecidos e transmutados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🌀 Como acessar os Registros Akáshicos?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Existem várias formas, e nenhuma exige mediunidade especial. Basta intenção, respeito e treinamento adequado.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Métodos comuns:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
                <li>Meditação guiada específica para Akasha</li>
                <li>Leitura intuitiva com um terapeuta akáshico</li>
                <li>Oráculos conectados ao campo espiritual</li>
                <li>Visualizações com mantras e símbolos de abertura</li>
                <li>Técnicas de escrita automática com proteção</li>
              </ul>
              <p className="text-foreground leading-relaxed">
                A leitura pode ser feita por você mesmo ou com auxílio de alguém treinado. No caso da Celestia, usamos uma combinação de tarô arquetípico, astrologia, numerologia e canalização intuitiva.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🧬 O que pode ser revelado?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Ao acessar seus registros, você pode descobrir:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Datas aproximadas de encarnações passadas</li>
                <li>Locais geográficos recorrentes (ex: Egito, Índia, Europa medieval)</li>
                <li>Papéis que desempenhou (sacerdote, guerreiro, mãe, curandeira…)</li>
                <li>Padrões kármicos com parceiros, familiares ou colegas</li>
                <li>Promessas feitas que ainda estão ativas</li>
                <li>Ciclos de aprendizado ainda não finalizados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🔮 O que é uma Leitura Akáshica com a Celestia?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Nossa abordagem une:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li><strong>Numerologia:</strong> revelando padrões de nascimento</li>
                <li><strong>Astrologia kármica:</strong> nodos lunares, casas espirituais</li>
                <li><strong>Tarot terapêutico:</strong> arquétipos em movimento</li>
                <li><strong>Canalização de mensagens</strong> do Eu Superior</li>
                <li><strong>Linha do tempo</strong> com no mínimo 4 vidas passadas</li>
                <li><strong>Ritual sugerido</strong> de reconexão espiritual</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">⚖️ Limpeza e Reconexão</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Só acessar o registro não basta — é preciso purificar e reequilibrar os campos energéticos afetados.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Você receberá sugestões de:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Cristais específicos</li>
                <li>Banhos de limpeza ancestral</li>
                <li>Ativações com mantras e mudras</li>
                <li>Meditações para cortar laços cármicos</li>
                <li>Diário espiritual para registrar insights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🛑 Avisos Importantes</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Não buscamos "fama" de vidas passadas, e sim padrões</li>
                <li>O foco é sempre cura e aprendizado, não adivinhação</li>
                <li>O acesso deve ser feito com ética e amorosidade</li>
                <li>Nem todas as vidas são reveladas de uma vez</li>
                <li>Você só acessa aquilo que está pronto para curar</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🧘 Prática Rápida: Meditação para Acessar o Campo Akáshico</h2>
              <ol className="list-decimal pl-6 space-y-2 text-foreground">
                <li>Encontre um lugar silencioso</li>
                <li>Inspire profundamente 3 vezes</li>
                <li>Visualize uma biblioteca de luz dourada</li>
                <li>Mentalize: "Peço acesso amoroso aos meus registros, para curar e evoluir"</li>
                <li>Deixe imagens, palavras ou sensações surgirem</li>
                <li>Anote tudo em seu diário espiritual</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🙌 Conclusão</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Os Registros Akáshicos são o livro secreto da sua alma. A cada página acessada com sabedoria, você se liberta, se reconhece, se cura.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Não se trata de "voltar ao passado", mas de trazer luz ao presente. E quanto mais você cura, mais perto chega da sua verdadeira missão.
              </p>
            </section>

          </article>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Descubra suas Vidas Passadas
            </h3>
            <p className="text-foreground mb-6">
              Agende uma consulta personalizada e acesse seus Registros Akáshicos com segurança e orientação profissional.
            </p>
            <Link 
              to="/"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegistrosAkashicos;