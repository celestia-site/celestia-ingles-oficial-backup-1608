import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Sparkles, Mail, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Obrigado = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Congratulations! Your Journey Has Begun
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your purchase has been processed successfully! You will soon receive your personalized spiritual report.
            </p>
          </div>

          {/* Next Steps */}
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-400" />
                Next Steps
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Check your email</h3>
                    <p className="text-gray-300">
                      You will receive a confirmation email momentarily with a form to fill out your spiritual data. If you have already completed it before payment, expect your report within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Complete your information</h3>
                    <p className="text-gray-300">
                      To ensure the accuracy of your report, it is essential that all data is correct and complete.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Receive your report</h3>
                    <p className="text-gray-300">
                      Within 24 hours, you will receive your personalized spiritual report in PDF format.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-blue-500/10 border border-blue-400/30">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Check Your Inbox</h3>
                <p className="text-gray-300 text-sm">
                  The email may take a few minutes to arrive. Don't forget to check your spam folder.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-amber-500/10 border border-amber-400/30">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">24-Hour Delivery</h3>
                <p className="text-gray-300 text-sm">
                  Your report will be carefully created and delivered within a maximum of 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Support */}
          <Card className="bg-white/5 border border-white/10 mb-12">
            <CardContent className="p-8 text-center">
              <Heart className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-6">
                Our team is here to support your spiritual journey. If you have any questions, don't hesitate to contact us.
              </p>
              <a 
                href="mailto:help@celestia.guru" 
                className="text-purple-400 hover:text-purple-300 font-semibold underline"
              >
                help@celestia.guru
              </a>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center">
            <Link to="/">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                <Sparkles className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Obrigado;