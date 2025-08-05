import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Infinity, Star, Users, Sparkles, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const loveCompatibilityBg = "/lovable-uploads/57029799-fb2b-4976-82b7-f29b72a53957.png";

const AnaliseCompatibilidadeAmorosa = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    birthDate: "",
    birthTime: "",
    birthCity: "",
    birthState: "",
    birthCountry: "",
    partnerName: "",
    partnerBirthDate: "",
    partnerBirthTime: "",
    partnerBirthCity: "",
    partnerBirthState: "",
    partnerBirthCountry: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare data for Supabase
      const orderData = {
        full_name: formData.fullName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        birth_date: formData.birthDate,
        birth_time: formData.birthTime || null,
        birth_city: formData.birthCity,
        birth_state: formData.birthState,
        birth_country: formData.birthCountry,
        partner_name: formData.partnerName,
        partner_birth_date: formData.partnerBirthDate,
        partner_birth_time: formData.partnerBirthTime || null,
        partner_birth_city: formData.partnerBirthCity,
        partner_birth_state: formData.partnerBirthState,
        partner_birth_country: formData.partnerBirthCountry,
        produto: 'Análise de Compatibilidade Amorosa Espiritual',
        status: 'pending',
        created_at: new Date().toISOString()
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from('celestia_orders')
        .insert([orderData])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        toast.error("Erro ao processar pedido. Tente novamente.");
        return;
      }

      // Export to Google Sheets - use the same data from Supabase
      const { error: exportError } = await supabase.functions.invoke('export-to-google-sheets', {
        body: { record: orderData }
      });

      if (exportError) {
        console.error('Export error:', exportError);
      }

      toast.success("Pedido realizado com sucesso! Você receberá sua análise em até 24 horas.");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        birthDate: "",
        birthTime: "",
        birthCity: "",
        birthState: "",
        birthCountry: "",
        partnerName: "",
        partnerBirthDate: "",
        partnerBirthTime: "",
        partnerBirthCity: "",
        partnerBirthState: "",
        partnerBirthCountry: ""
      });

    } catch (error) {
      console.error('Submission error:', error);
      toast.error("Erro ao processar pedido. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cosmic opacity-40"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${loveCompatibilityBg})` }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-white text-sm font-medium">
              ← Voltar para início
              <Heart className="w-4 h-4" />
              Compatibilidade Espiritual Autêntica
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-accent bg-clip-text text-transparent">
              Desvende o Código
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-yellow-400 to-divine bg-clip-text text-transparent">
              do Amor
            </span>
            <br />
            <span className="bg-gradient-to-r from-divine via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              entre suas Almas.
            </span>
          </h1>
          
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Descubra a missão espiritual do seu relacionamento, os karmas 
            compartilhados e como vocês podem crescer juntos no amor divino.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="celestial" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              Descobrir Nossa Missão
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+1000</div>
              <div className="text-white">Casais Unidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">+1200</div>
              <div className="text-white">Análises Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-divine mb-2">98%</div>
              <div className="text-white">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Analysis Will Reveal */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                O que sua Análise
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-divine bg-clip-text text-transparent">
                irá revelar
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma jornada profunda pela conexão espiritual de vocês dois
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-card/50 border-primary/30 hover:border-primary/60 hover:shadow-neon transition-cosmic p-6">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary fill-primary/30" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Sinastria Completa</h3>
                <p className="text-sm text-muted-foreground">
                  Análise astrológica e numerológica das duas almas para descobrir afinidades profundas e desafios espirituais.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/30 hover:border-primary/60 hover:shadow-neon transition-cosmic p-6">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Infinity className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Missão Espiritual do Casal</h3>
                <p className="text-sm text-muted-foreground">
                  Desvende qual é o propósito superior que trouxe vocês dois para esta vida e como fortalecer essa união sagrada.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/30 hover:border-primary/60 hover:shadow-neon transition-cosmic p-6">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full bg-divine/20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-divine" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Lições e Débitos Kármicos</h3>
                <p className="text-sm text-muted-foreground">
                  Identifique karmas compartilhados, lições a serem aprendidas e como transformar desafios em crescimento.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/30 hover:border-primary/60 hover:shadow-neon transition-cosmic p-6">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full bg-mystic/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-mystic" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Previsões Amorosas</h3>
                <p className="text-sm text-muted-foreground">
                  Visão detalhada do futuro da relação com insights para os próximos 6 a 12 meses no amor.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Complete Analysis Includes */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-divine to-mystic bg-clip-text text-transparent">
                🌸 Sua análise completa inclui:
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-foreground">Sinastria astrológica e numerológica detalhada</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-foreground">Previsões amorosas para os próximos meses</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-divine" />
                <span className="text-foreground">Missão espiritual e propósito do relacionamento</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-mystic" />
                <span className="text-foreground">Rituais e práticas de ativação do amor</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-foreground">Lições kármicas e débitos a serem resolvidos</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-foreground">Orientações para fortalecer a união sagrada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Casais que transformaram
              </span>
            </h2>
            <p className="text-muted-foreground">Descobrindo o verdadeiro propósito de suas uniões</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/30 p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "A análise revelou coisas que eu sentia mas não conseguia explicar. 
                  Agora entendemos nossa missão juntos!"
                </p>
                <p className="font-semibold text-foreground">— Mariana Silva</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30 p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Incrível como os aspectos kármicos fizeram tanto sentido. Nossa relação 
                  nunca foi tão forte."
                </p>
                <p className="font-semibold text-foreground">— Carlos Eduardo</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30 p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Os rituais de ativação do amor transformaram completamente nossa 
                  conexão. Recomendo muito!"
                </p>
                <p className="font-semibold text-foreground">— Ana Paula</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-cosmic relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Descubra a verdade espiritual do seu relacionamento
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Entenda se esse amor é destino, missão de alma ou um reencontro de vidas passadas
          </p>
          
          <Card className="bg-card/20 backdrop-blur-md border-primary/30 p-8 max-w-md mx-auto">
            <CardContent className="p-0 text-center">
              <div className="text-2xl text-muted-foreground line-through mb-2">R$ 127</div>
              
              <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                24% OFF
              </div>
              
              <div className="text-4xl font-bold text-primary mb-2">
                12x de R$ 11,28
              </div>
              
              <div className="text-lg text-muted-foreground mb-6">
                ou R$ 97,00 à vista
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Investimento único para toda a vida</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-divine bg-clip-text text-transparent">
                Descubra o Destino
              </span>
              <br />
              <span className="bg-gradient-to-r from-divine to-accent bg-clip-text text-transparent">
                do seu Amor
              </span>
            </h2>
            <p className="text-muted-foreground">
              Preencha os dados abaixo para receber sua análise de compatibilidade amorosa 
              espiritual completa
            </p>
          </div>

          <Card className="bg-card/50 border-primary/30 p-8">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  Solicite Seu Análise de Compatibilidade Amorosa Espiritual
                </h3>
                <p className="text-muted-foreground">
                  Preencha seus dados para receber seu mapa personalizado
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h4 className="text-lg font-semibold text-primary">Informações Pessoais</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="fullName" className="text-foreground mb-2 block">Nome Completo *</Label>
                      <Input
                        id="fullName"
                        placeholder="Seu nome completo"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground mb-2 block">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="whatsapp" className="text-foreground mb-2 block">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      placeholder="(11) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                {/* Birth Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="w-5 h-5 text-accent" />
                    <h4 className="text-lg font-semibold text-accent">Informações de Nascimento</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="birthDate" className="text-foreground mb-2 block">Data de Nascimento *</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthTime" className="text-foreground mb-2 block">Hora de Nascimento (opcional)</Label>
                      <Input
                        id="birthTime"
                        type="time"
                        placeholder="--:--"
                        value={formData.birthTime}
                        onChange={(e) => handleInputChange('birthTime', e.target.value)}
                        className="bg-background/50"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Se souber, isso tornará sua análise mais precisa
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="birthCity" className="text-foreground mb-2 block">Cidade *</Label>
                      <Input
                        id="birthCity"
                        placeholder="São Paulo"
                        value={formData.birthCity}
                        onChange={(e) => handleInputChange('birthCity', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthState" className="text-foreground mb-2 block">Estado *</Label>
                      <Input
                        id="birthState"
                        placeholder="SP"
                        value={formData.birthState}
                        onChange={(e) => handleInputChange('birthState', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthCountry" className="text-foreground mb-2 block">País *</Label>
                      <Input
                        id="birthCountry"
                        placeholder="Brasil"
                        value={formData.birthCountry}
                        onChange={(e) => handleInputChange('birthCountry', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Partner Information */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Heart className="w-5 h-5 text-divine" />
                    <h4 className="text-lg font-semibold text-divine">Dados do(a) Parceiro(a)</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="partnerName" className="text-foreground mb-2 block">Nome Completo do(a) Parceiro(a) *</Label>
                      <Input
                        id="partnerName"
                        placeholder="Nome completo"
                        value={formData.partnerName}
                        onChange={(e) => handleInputChange('partnerName', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="partnerBirthDate" className="text-foreground mb-2 block">Data de Nascimento *</Label>
                      <Input
                        id="partnerBirthDate"
                        type="date"
                        value={formData.partnerBirthDate}
                        onChange={(e) => handleInputChange('partnerBirthDate', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="partnerBirthTime" className="text-foreground mb-2 block">Hora de Nascimento (opcional)</Label>
                      <Input
                        id="partnerBirthTime"
                        type="time"
                        value={formData.partnerBirthTime}
                        onChange={(e) => handleInputChange('partnerBirthTime', e.target.value)}
                        className="bg-background/50"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Se souber, isso tornará sua análise mais precisa
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <Label htmlFor="partnerBirthCity" className="text-foreground mb-2 block">Cidade de Nascimento *</Label>
                      <Input
                        id="partnerBirthCity"
                        placeholder="São Paulo"
                        value={formData.partnerBirthCity}
                        onChange={(e) => handleInputChange('partnerBirthCity', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="partnerBirthState" className="text-foreground mb-2 block">Estado *</Label>
                      <Input
                        id="partnerBirthState"
                        placeholder="SP"
                        value={formData.partnerBirthState}
                        onChange={(e) => handleInputChange('partnerBirthState', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="partnerBirthCountry" className="text-foreground mb-2 block">País *</Label>
                      <Input
                        id="partnerBirthCountry"
                        placeholder="Brasil"
                        value={formData.partnerBirthCountry}
                        onChange={(e) => handleInputChange('partnerBirthCountry', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Seus dados estão seguros</h5>
                    <p className="text-sm text-muted-foreground">
                      Todas as informações são criptografadas e utilizadas apenas para a criação do seu 
                      relatório personalizado.
                    </p>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4"
                  disabled={isSubmitting}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Processando..." : "Solicitar Meu Mapa Agora"}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  ⏰ Entrega em até 24 horas no seu e-mail
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnaliseCompatibilidadeAmorosa;