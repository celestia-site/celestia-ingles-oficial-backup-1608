import { Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Política de Privacidade
              </h1>
            </div>
            <p className="text-purple-200">Celestia</p>
            <p className="text-gray-300 mt-2">Última atualização: 01 de Agosto de 2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <p className="text-gray-300 leading-relaxed mb-8">
                A Celestia valoriza profundamente sua privacidade e está comprometida com a proteção dos seus dados pessoais, espirituais e sensíveis. Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Brasil), o Regulamento Geral de Proteção de Dados (GDPR - Europa) e boas práticas internacionais de privacidade.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  📌 Informações Coletadas
                </h2>
                <p className="text-gray-300 mb-4">
                  Durante a navegação no site ou aquisição de nossos produtos, poderemos coletar as seguintes informações:
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">a. Dados Pessoais</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Nome completo</li>
                    <li>• Gênero</li>
                    <li>• Data, hora e local de nascimento</li>
                    <li>• Nome dos pais</li>
                    <li>• Nome do(a) parceiro(a)</li>
                    <li>• E-mail e telefone</li>
                    <li>• Profissão e informações financeiras estimadas (quando aplicável)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">b. Dados Sensíveis e Espirituais</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Dados astrológicos e numerológicos</li>
                    <li>• Informações energéticas, espirituais ou emocionais fornecidas voluntariamente</li>
                    <li>• Dados de crenças e práticas espirituais (ex: objetivos, bloqueios, temas recorrentes)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">c. Dados de Navegação</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Cookies, endereço IP, tipo de dispositivo, tempo de acesso e comportamento no site</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🎯 Finalidade da Coleta
                </h2>
                <p className="text-gray-300 mb-4">
                  Seus dados são coletados para fins estritamente espirituais e de autoconhecimento, com as seguintes finalidades:
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Entrega de produtos digitais personalizados (relatórios, mapas, diagnósticos)</li>
                  <li>• Melhoria da experiência do usuário</li>
                  <li>• Comunicação com o cliente (suporte, notificações, marketing com consentimento)</li>
                  <li>• Cumprimento de obrigações legais e fiscais</li>
                  <li>• Análises estatísticas internas e melhorias de produto</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🔐 Armazenamento e Segurança
                </h2>
                <p className="text-gray-300 mb-4">
                  A Celestia adota medidas rigorosas de criptografia, firewall, controle de acesso e backup para garantir que seus dados estejam seguros e protegidos contra acessos não autorizados, perdas ou vazamentos.
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Seus dados são armazenados em servidores seguros e plataformas compatíveis com a LGPD e GDPR.</li>
                  <li>• Utilizamos ferramentas de automação com integração de sistemas para geração dos relatórios, sempre com anonimização e proteção nos fluxos internos.</li>
                  <li>• O acesso aos seus dados é restrito à equipe responsável e apenas para os fins declarados.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🌍 Transferência Internacional
                </h2>
                <p className="text-gray-300 mb-4">
                  Seus dados poderão ser processados em servidores localizados fora do Brasil, como parte do uso de ferramentas globais. Nesses casos:
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Garantimos que as transferências ocorrem em conformidade com a LGPD e GDPR</li>
                  <li>• Apenas parceiros com cláusulas contratuais específicas de proteção de dados são utilizados</li>
                  <li>• O nível de proteção oferecido é equivalente ou superior às exigências brasileiras e europeias</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  📝 Consentimento e Direitos do Usuário
                </h2>
                <p className="text-gray-300 mb-4">
                  Ao fornecer suas informações, você concorda expressamente com o tratamento dos dados conforme esta política.
                </p>
                <p className="text-gray-300 mb-4">Você tem o direito de:</p>
                <ul className="text-gray-300 space-y-2 ml-4 mb-4">
                  <li>• Confirmar a existência de tratamento de dados</li>
                  <li>• Acessar seus dados</li>
                  <li>• Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>• Solicitar anonimização ou exclusão (exceto quando houver obrigações legais)</li>
                  <li>• Revogar o consentimento a qualquer momento</li>
                  <li>• Solicitar a portabilidade dos dados, quando aplicável</li>
                </ul>
                <p className="text-gray-300">
                  Solicitações podem ser feitas através do e-mail: <a href="mailto:help@celestia.guru" className="text-purple-400 hover:text-purple-300">help@celestia.guru</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🍪 Cookies e Tecnologias de Rastreamento
                </h2>
                <p className="text-gray-300 mb-4">
                  Utilizamos cookies para melhorar sua experiência no site. Você pode, a qualquer momento, configurar seu navegador para bloquear ou remover cookies.
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Cookies de sessão: utilizados para lembrar suas preferências temporárias</li>
                  <li>• Cookies analíticos: utilizados para entender como você navega no site e melhorar nossos serviços</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  📩 Comunicações e Marketing
                </h2>
                <p className="text-gray-300 mb-4">Enviaremos e-mails apenas mediante seu consentimento, com:</p>
                <ul className="text-gray-300 space-y-2 ml-4 mb-4">
                  <li>• Entrega dos relatórios adquiridos</li>
                  <li>• Atualizações de produtos e conteúdos espirituais</li>
                  <li>• Ofertas, promoções e eventos da Celestia</li>
                </ul>
                <p className="text-gray-300">
                  Você pode se descadastrar a qualquer momento utilizando o link de opt-out presente nas mensagens.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🧾 Retenção dos Dados
                </h2>
                <p className="text-gray-300">
                  Seus dados serão armazenados pelo tempo necessário à prestação dos serviços e cumprimento de obrigações legais, ou até que você solicite a exclusão.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  👥 Compartilhamento com Terceiros
                </h2>
                <p className="text-gray-300 mb-4">
                  A Celestia não vende nem compartilha seus dados com terceiros para fins comerciais. O compartilhamento ocorre apenas com:
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Plataformas parceiras para geração dos relatórios (sistemas integrados)</li>
                  <li>• Processadores de pagamento</li>
                  <li>• Autoridades legais, mediante obrigação judicial</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  👁️‍🗨️ Alterações desta Política
                </h2>
                <p className="text-gray-300">
                  Reservamo-nos o direito de alterar esta política a qualquer momento, sendo que as mudanças serão publicadas neste mesmo local com data atualizada. Recomendamos a leitura periódica.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  📞 Contato
                </h2>
                <p className="text-gray-300 mb-4">
                  Se você tiver dúvidas, solicitações ou reclamações sobre nossa política de privacidade ou o tratamento de seus dados:
                </p>
                <p className="text-gray-300 mb-2">
                  📧 E-mail: <a href="mailto:contato@celestia.guru" className="text-purple-400 hover:text-purple-300">contato@celestia.guru</a>
                </p>
                <p className="text-gray-300">
                  🌐 Site: <a href="https://br.celestia.guru" className="text-purple-400 hover:text-purple-300">https://br.celestia.guru</a>
                </p>
              </section>

              <div className="text-center border-t border-white/10 pt-8">
                <p className="text-purple-300 font-semibold mb-2">🕊 A espiritualidade começa no respeito à sua privacidade.</p>
                <p className="text-gray-300">Na Celestia, seu caminho de autoconhecimento é sagrado — e seus dados também.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;