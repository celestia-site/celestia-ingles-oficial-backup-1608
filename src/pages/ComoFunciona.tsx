import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ComoFunciona = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              🌟 Como Funciona e Reembolso
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-100">
              <p className="text-lg leading-relaxed mb-8">
                Na <strong>Celestia</strong>, acreditamos no poder do autoconhecimento espiritual como ferramenta de transformação. Todos os nossos relatórios, mapas e planos são personalizados com base nas informações fornecidas por você, e elaborados com profundo cuidado, utilizando saberes ancestrais como <strong>Numerologia, Astrologia, Tarô, Registros Akáshicos, Chakras, Signo Chinês e outros sistemas integrativos</strong>.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                ✨ Como Funciona
              </h2>

              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">1. Escolha do Produto</h3>
                  <p className="mb-4">Ao navegar por nossa loja, você encontrará diferentes categorias:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Produtos de Entrada</strong>: como o <em>Celestia Primeiros Passos</em> e <em>Mini Mapa Numerológico</em>.</li>
                    <li><strong>Produtos Principais e Premium</strong>: como o <em>Relatório Espiritual Completo</em>, <em>Mapa de Prosperidade Espiritual</em> e <em>Mapa Akáshico Avançado</em>.</li>
                    <li><strong>Pacotes e Combos</strong>: que unem vários mapas e planos com descontos especiais.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">2. Pagamento Seguro</h3>
                  <p>O pagamento pode ser feito com total segurança através das plataformas integradas ao nosso site. Assim que confirmado, você será redirecionado(a) para preencher um <strong>formulário com seus dados espirituais</strong>.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">3. Envio dos Dados</h3>
                  <p className="mb-4">Para garantir a precisão dos relatórios, é essencial que os dados estejam <strong>completos e corretos</strong>, incluindo:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nome completo (sem abreviações)</li>
                    <li>Data, hora e local de nascimento</li>
                    <li>Nome dos pais</li>
                    <li>Nome do(a) parceiro(a) (se o produto exigir)</li>
                    <li>Informações complementares, como profissão, renda, gênero, objetivo de vida, entre outros.</li>
                  </ul>
                  <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 mt-4">
                    <p className="text-amber-200">⚠️ <em>Dados incompletos ou incorretos podem comprometer a qualidade da análise.</em></p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">4. Criação do Relatório Personalizado</h3>
                  <p className="mb-4">Após o envio dos dados, nosso sistema inicia imediatamente a elaboração do seu relatório digital, com conteúdo exclusivo, profundo e intuitivo, baseado nos <strong>prompts oficiais da Celestia</strong>.</p>
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                    <p className="text-green-200">✅ <strong>O prazo médio de entrega é de até 24 horas após a confirmação do pagamento</strong>, respeitando a ordem de chegada dos pedidos e a complexidade de cada análise.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">5. Entrega</h3>
                  <p>O relatório será enviado para seu e-mail em formato PDF (e áudio canalizado, quando incluso). Nenhum produto é físico, todos são <strong>100% digitais e personalizados</strong>.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                🔁 Política de Reembolso
              </h2>

              <p className="text-lg mb-6">
                Por se tratar de <strong>produtos digitais personalizados</strong>, elaborados exclusivamente com base nos seus dados, <strong>não é possível solicitar reembolso após o início da elaboração do relatório</strong>.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mb-4">Isso está amparado na legislação brasileira:</h3>
              <blockquote className="bg-slate-800/50 border-l-4 border-purple-400 pl-6 py-4 mb-6 italic">
                Conforme o artigo 49 do Código de Defesa do Consumidor, o direito de arrependimento <strong>não se aplica a produtos personalizados e de entrega imediata após a confirmação do pedido</strong>.
              </blockquote>

              <h3 className="text-xl font-semibold text-green-400 mb-4">💡 Reembolsos só serão considerados nos seguintes casos:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Pagamento duplicado</li>
                <li>Erro técnico comprovado de nossa parte, que tenha impedido a entrega</li>
                <li>Cancelamento <strong>antes</strong> do envio dos dados ou antes do início do processo de elaboração</li>
              </ul>

              <h3 className="text-xl font-semibold text-red-400 mb-4">🚫 Não aceitamos pedidos de reembolso nos casos:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
                <li>Insatisfação subjetiva com o conteúdo entregue (por ser espiritual e interpretativo)</li>
                <li>Envio de dados incorretos ou incompletos por parte do cliente</li>
                <li>Desistência após envio do formulário</li>
              </ul>

              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-300 mb-4">❗ Aviso Importante</h3>
                <p>
                  Em hipótese alguma, os serviços e relatórios da Celestia constituem orientações <strong>legais, psicológicas, médicas, empresariais, financeiras ou de qualquer outro tipo</strong>. Além disso, <strong>não representam indicação financeira, diagnóstico ou tratamento de qualquer natureza</strong>, seja ela médica, mental, espiritual, de relacionamento ou qualquer outra.
                </p>
                <p className="mt-4">
                  Nosso objetivo é <strong>inspirar, guiar e despertar consciência</strong>, e não substituir nenhum tipo de aconselhamento profissional.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-purple-300 mb-4">💬 Dúvidas?</h3>
              <p>
                Se tiver qualquer dúvida ou precisar de suporte, entre em contato com nossa equipe através do e-mail: <a href="mailto:help@celestia.guru" className="text-purple-400 hover:text-purple-300 underline"><strong>help@celestia.guru</strong></a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComoFunciona;