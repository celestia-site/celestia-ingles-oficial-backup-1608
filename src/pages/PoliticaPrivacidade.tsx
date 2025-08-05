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
                Privacy Policy
              </h1>
            </div>
            <p className="text-purple-200">Celestia</p>
            <p className="text-gray-300 mt-2">Last updated: August 1st, 2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <p className="text-gray-300 leading-relaxed mb-8">
                Celestia deeply values your privacy and is committed to protecting your personal, spiritual, and sensitive data. This Privacy Policy explains how we collect, use, store, and protect your information, in compliance with data protection regulations and international privacy best practices.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  📌 Information Collected
                </h2>
                <p className="text-gray-300 mb-4">
                  During website navigation or acquisition of our products, we may collect the following information:
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">a. Personal Data</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Full name</li>
                    <li>• Gender</li>
                    <li>• Date, time, and place of birth</li>
                    <li>• Parents' names</li>
                    <li>• Partner's name</li>
                    <li>• Email and phone</li>
                    <li>• Profession and estimated financial information (when applicable)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">b. Sensitive and Spiritual Data</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Astrological and numerological data</li>
                    <li>• Energetic, spiritual, or emotional information provided voluntarily</li>
                    <li>• Data on beliefs and spiritual practices (e.g., goals, blocks, recurring themes)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">c. Navigation Data</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Cookies, IP address, device type, access time, and website behavior</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🎯 Purpose of Collection
                </h2>
                <p className="text-gray-300 mb-4">
                  Your data is collected for strictly spiritual and self-knowledge purposes, with the following objectives:
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Delivery of personalized digital products (reports, maps, diagnostics)</li>
                  <li>• User experience improvement</li>
                  <li>• Customer communication (support, notifications, marketing with consent)</li>
                  <li>• Compliance with legal and fiscal obligations</li>
                  <li>• Internal statistical analysis and product improvements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🔐 Storage and Security
                </h2>
                <p className="text-gray-300 mb-4">
                  Celestia adopts rigorous encryption, firewall, access control, and backup measures to ensure your data is safe and protected against unauthorized access, loss, or breaches.
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Your data is stored on secure servers and platforms compliant with data protection regulations.</li>
                  <li>• We use automation tools with system integration for report generation, always with anonymization and protection in internal flows.</li>
                  <li>• Access to your data is restricted to the responsible team and only for the declared purposes.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🌍 International Transfer
                </h2>
                <p className="text-gray-300 mb-4">
                  Your data may be processed on servers located outside your country as part of using global tools. In these cases:
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• We ensure transfers occur in compliance with applicable data protection regulations</li>
                  <li>• Only partners with specific contractual data protection clauses are used</li>
                  <li>• The level of protection offered is equivalent to or higher than international requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  📝 Consent and User Rights
                </h2>
                <p className="text-gray-300 mb-4">
                  By providing your information, you expressly agree to data processing according to this policy.
                </p>
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="text-gray-300 space-y-2 ml-4 mb-4">
                  <li>• Confirm the existence of data processing</li>
                  <li>• Access your data</li>
                  <li>• Correct incomplete, inaccurate, or outdated data</li>
                  <li>• Request anonymization or deletion (except when there are legal obligations)</li>
                  <li>• Revoke consent at any time</li>
                  <li>• Request data portability, when applicable</li>
                </ul>
                <p className="text-gray-300">
                  Requests can be made through email: <a href="mailto:help@celestia.guru" className="text-purple-400 hover:text-purple-300">help@celestia.guru</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🍪 Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-300 mb-4">
                  We use cookies to improve your website experience. You can, at any time, configure your browser to block or remove cookies.
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Session cookies: used to remember your temporary preferences</li>
                  <li>• Analytical cookies: used to understand how you navigate the site and improve our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  📩 Communications and Marketing
                </h2>
                <p className="text-gray-300 mb-4">We will send emails only with your consent, including:</p>
                <ul className="text-gray-300 space-y-2 ml-4 mb-4">
                  <li>• Delivery of purchased reports</li>
                  <li>• Product updates and spiritual content</li>
                  <li>• Offers, promotions, and Celestia events</li>
                </ul>
                <p className="text-gray-300">
                  You can unsubscribe at any time using the opt-out link present in the messages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🧾 Data Retention
                </h2>
                <p className="text-gray-300">
                  Your data will be stored for the time necessary to provide services and comply with legal obligations, or until you request deletion.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  👥 Sharing with Third Parties
                </h2>
                <p className="text-gray-300 mb-4">
                  Celestia does not sell or share your data with third parties for commercial purposes. Sharing occurs only with:
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Partner platforms for report generation (integrated systems)</li>
                  <li>• Payment processors</li>
                  <li>• Legal authorities, under judicial obligation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  👁️‍🗨️ Changes to This Policy
                </h2>
                <p className="text-gray-300">
                  We reserve the right to change this policy at any time, with changes being published in this same location with an updated date. We recommend periodic reading.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  📞 Contact
                </h2>
                <p className="text-gray-300 mb-4">
                  If you have questions, requests, or complaints about our privacy policy or the treatment of your data:
                </p>
                <p className="text-gray-300 mb-2">
                  📧 Email: <a href="mailto:help@celestia.guru" className="text-purple-400 hover:text-purple-300">help@celestia.guru</a>
                </p>
                <p className="text-gray-300">
                  🌐 Website: <a href="https://celestia.guru" className="text-purple-400 hover:text-purple-300">https://celestia.guru</a>
                </p>
              </section>

              <div className="text-center border-t border-white/10 pt-8">
                <p className="text-purple-300 font-semibold mb-2">🕊 Spirituality begins with respect for your privacy.</p>
                <p className="text-gray-300">At Celestia, your journey of self-knowledge is sacred — and so is your data.</p>
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