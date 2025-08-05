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
              🌟 How It Works & Refunds
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-100">
              <p className="text-lg leading-relaxed mb-8">
                At <strong>Celestia</strong>, we believe in the power of spiritual self-knowledge as a tool for transformation. All our reports, maps, and plans are personalized based on the information you provide, and crafted with deep care, using ancestral wisdom such as <strong>Numerology, Astrology, Tarot, Akashic Records, Chakras, Chinese Zodiac, and other integrative systems</strong>.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                ✨ How It Works
              </h2>

              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">1. Product Selection</h3>
                  <p className="mb-4">When browsing our store, you'll find different categories:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Entry Products</strong>: such as <em>Celestia First Steps</em> and <em>Mini Numerological Map</em>.</li>
                    <li><strong>Main and Premium Products</strong>: such as <em>Complete Spiritual Report</em>, <em>Spiritual Prosperity Map</em>, and <em>Advanced Akashic Map</em>.</li>
                    <li><strong>Packages and Combos</strong>: that combine multiple maps and plans with special discounts.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">2. Secure Payment</h3>
                  <p>Payment can be made with complete security through the platforms integrated into our website. Once confirmed, you'll be redirected to fill out a <strong>form with your spiritual data</strong>.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">3. Data Submission</h3>
                  <p className="mb-4">To ensure report accuracy, it's essential that data is <strong>complete and correct</strong>, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Full name (no abbreviations)</li>
                    <li>Date, time, and place of birth</li>
                    <li>Parents' names</li>
                    <li>Partner's name (if the product requires it)</li>
                    <li>Complementary information such as profession, income, gender, life purpose, among others.</li>
                  </ul>
                  <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 mt-4">
                    <p className="text-amber-200">⚠️ <em>Incomplete or incorrect data may compromise the quality of the analysis.</em></p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">4. Personalized Report Creation</h3>
                  <p className="mb-4">After submitting your data, our system immediately begins creating your digital report, with exclusive, deep, and intuitive content, based on <strong>Celestia's official prompts</strong>.</p>
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                    <p className="text-green-200">✅ <strong>The average delivery time is up to 24 hours after payment confirmation</strong>, respecting the order of arrival and the complexity of each analysis.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">5. Delivery</h3>
                  <p>The report will be sent to your email in PDF format (and channeled audio, when included). No product is physical, all are <strong>100% digital and personalized</strong>.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                🔁 Refund Policy
              </h2>

              <p className="text-lg mb-6">
                As these are <strong>personalized digital products</strong>, created exclusively based on your data, <strong>it's not possible to request a refund after the report creation begins</strong>.
              </p>

              <h3 className="text-xl font-semibold text-purple-300 mb-4">This is protected under consumer law:</h3>
              <blockquote className="bg-slate-800/50 border-l-4 border-purple-400 pl-6 py-4 mb-6 italic">
                According to consumer protection regulations, the right of withdrawal <strong>does not apply to personalized products and immediate delivery after order confirmation</strong>.
              </blockquote>

              <h3 className="text-xl font-semibold text-green-400 mb-4">💡 Refunds will only be considered in the following cases:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Duplicate payment</li>
                <li>Proven technical error on our part that prevented delivery</li>
                <li>Cancellation <strong>before</strong> data submission or before the creation process begins</li>
              </ul>

              <h3 className="text-xl font-semibold text-red-400 mb-4">🚫 We do not accept refund requests in the following cases:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
                <li>Subjective dissatisfaction with delivered content (as it's spiritual and interpretative)</li>
                <li>Incorrect or incomplete data provided by the client</li>
                <li>Withdrawal after form submission</li>
              </ul>

              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-300 mb-4">❗ Important Notice</h3>
                <p>
                  Under no circumstances do Celestia's services and reports constitute <strong>legal, psychological, medical, business, financial, or any other type of guidance</strong>. Additionally, they <strong>do not represent financial advice, diagnosis, or treatment of any nature</strong>, whether medical, mental, spiritual, relationship-related, or any other.
                </p>
                <p className="mt-4">
                  Our goal is to <strong>inspire, guide, and awaken consciousness</strong>, not to replace any type of professional counseling.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-purple-300 mb-4">💬 Questions?</h3>
              <p>
                If you have any questions or need support, contact our team via email: <a href="mailto:help@celestia.guru" className="text-purple-400 hover:text-purple-300 underline"><strong>help@celestia.guru</strong></a>
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