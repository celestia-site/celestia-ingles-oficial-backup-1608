import { useEffect } from "react";
import { Sparkles, Mail, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const TermosUso = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <h1 className="text-4xl font-bold text-white">Termos de Uso</h1>
            </div>
            <p className="text-gray-300 text-lg">Celestia</p>
            <p className="text-gray-400 text-sm mt-2">Última atualização: 01 de Agosto de 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-8">
                Bem-vindo(a) à Celestia Guru. Ao adquirir nossos produtos espirituais digitais, você concorda com os termos, condições e políticas descritas abaixo. Por favor, leia atentamente.
              </p>

              <div className="space-y-12">
                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    📝 1. Produtos Digitais Personalizados
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    A Celestia oferece relatórios espirituais digitais personalizados, elaborados com base nas informações fornecidas por você no formulário pós-compra. Esses relatórios incluem análises em Numerologia, Astrologia, Tarô, Registros Akáshicos e outras práticas espirituais descritas na página de cada produto.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Cada relatório é feito sob medida, com base em seus dados espirituais e pessoais.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    💳 2. Pagamento e Confirmação
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    O pagamento é realizado no momento da compra, através das plataformas de pagamento integradas ao nosso site. Após a confirmação do pagamento, você será redirecionado para preencher um <strong>formulário exclusivo</strong>, onde deverá inserir seus dados completos para que o relatório seja elaborado corretamente.
                  </p>
                  
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
                    <h3 className="text-yellow-400 font-bold mb-3">⚠️ Importante:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• O relatório <strong>somente será iniciado</strong> após o preenchimento completo e correto do formulário.</li>
                      <li>• <strong>Caso o formulário contenha algum erro ou falta de informação</strong>, tentaremos o contato através dos dados fornecidos pelo cliente para correção antes do início da elaboração do relatório.</li>
                      <li>• Os <strong>dados fornecidos devem ser completos e verdadeiros</strong>, incluindo <strong>nomes por extenso</strong>, datas e locais de nascimento corretos.</li>
                    </ul>
                    <p className="text-yellow-300 mt-3 font-medium">
                      ⚠️ <strong>Nomes abreviados, siglas ou informações incompletas podem comprometer a precisão das leituras e resultados dos relatórios</strong>, sendo de responsabilidade do cliente garantir o preenchimento adequado.
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    📦 3. Processo de Entrega
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">Após o preenchimento do formulário:</p>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>• O relatório será gerado automaticamente por nossos <strong>sistemas automatizados</strong>, com base nos prompts personalizados e técnicas descritas na página de cada produto.</li>
                    <li>• O tempo de entrega padrão é de até <strong>24 horas</strong>, podendo variar conforme o volume de pedidos ou falhas no preenchimento dos dados.</li>
                    <li>• O relatório será enviado por e-mail em formato PDF (e, em alguns casos, com áudios anexos ou links de acesso).</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    🔁 4. Política de Reembolso
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong>Você tem direito a reembolso total em até 7 dias corridos após a compra</strong>, conforme previsto no Código de Defesa do Consumidor (Art. 49 da Lei nº 8.078/1990), <strong>desde que:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-4 mb-4">
                    <li>• Ainda <strong>não tenha preenchido o formulário com seus dados</strong>; ou</li>
                    <li>• Ainda <strong>não tenha recebido o relatório.</strong></li>
                  </ul>
                  
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                    <p className="text-red-300">
                      ⚠️ <strong>Atenção:</strong> Por se tratar de um <strong>produto digital e personalizado</strong>, conforme exceção prevista no Decreto nº 7.962/2013, <strong>não será possível solicitar reembolso após o início da elaboração do relatório</strong> (que ocorre a partir do envio dos seus dados no formulário).
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Solicitações de reembolso devem ser feitas através do e-mail: <strong>help@celestia.guru</strong>
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    🔐 5. Privacidade e Dados Pessoais
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Todos os dados fornecidos por você são tratados com confidencialidade e utilizados exclusivamente para a elaboração do seu relatório. Respeitamos integralmente a <strong>LGPD (Lei Geral de Proteção de Dados – Lei nº 13.709/2018)</strong> e não compartilhamos suas informações com terceiros.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    ❌ 6. Condições de Cancelamento
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Reservamo-nos o direito de cancelar qualquer pedido cujo formulário tenha sido preenchido com informações falsas, incompletas ou ofensivas.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    📧 7. Suporte
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Para dúvidas, suporte ou esclarecimentos, entre em contato com nossa equipe pelo e-mail: <strong>help@celestia.guru</strong>.
                  </p>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>Horário de atendimento: <strong>segunda a sexta, das 10h às 17h (horário de Brasília).</strong></span>
                  </div>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    📌 8. Isenção de Responsabilidade
                  </h2>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-blue-300 leading-relaxed mb-3">
                      <strong>Em hipótese alguma, os serviços e relatórios da Celestia constituem orientações legais, psicológicas, médicas, empresariais, financeiras ou de qualquer outro tipo.</strong>
                    </p>
                    <p className="text-blue-300 leading-relaxed mb-3">
                      Além disso, <strong>não representam indicação financeira, diagnóstico ou tratamento de qualquer natureza</strong>, seja ela <strong>médica, mental, espiritual, de relacionamento ou qualquer outra</strong>.
                    </p>
                    <p className="text-blue-300 leading-relaxed">
                      O conteúdo é exclusivamente informativo, espiritual e reflexivo, destinado a fins de autoconhecimento e desenvolvimento pessoal.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    ✅ 9. Aceite dos Termos
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Ao realizar a compra em nosso site, você declara estar de acordo com estes Termos de Uso, compreende a natureza dos produtos oferecidos e consente com a política de reembolso para produtos digitais personalizados.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">
                    Dúvidas? Entre em contato: <strong>help@celestia.guru</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermosUso;