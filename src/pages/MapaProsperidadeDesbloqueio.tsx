import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Clock, Target, Crown, Star, TrendingUp, Shield } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import prosperityMandala from "@/assets/prosperity-mandala.png";

const MapaProsperidadeDesbloqueio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    birthDate: '',
    birthTime: '',
    birthCity: '',
    birthState: '',
    birthCountry: 'Brasil'
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
    
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.birthDate || !formData.birthCity || !formData.birthState) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar dados no formato correto para a planilha
      const orderData = {
        full_name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        birth_date: formData.birthDate,
        birth_time: formData.birthTime || null,
        birth_city: formData.birthCity,
        birth_state: formData.birthState,
        birth_country: formData.birthCountry,
        status: 'pending',
        created_at: new Date().toISOString(),
        produto: 'Mapa Espiritual da Prosperidade e Desbloqueio Financeiro'
      };

      // Salvar no banco de dados
      const supabaseResponse = await fetch(`https://gxlhclhlvtcoypzvtvsh.supabase.co/functions/v1/export-to-google-sheets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4bGhjbGhsdnRjb3lwenZ0dnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNDgxODIsImV4cCI6MjA2ODYyNDE4Mn0.iEG9Ym8mxp1pJYHGNo2YUz_5246z4rjD80DkTDIcps4'}`,
        },
        body: JSON.stringify({ record: orderData }),
      });

      if (!supabaseResponse.ok) {
        throw new Error('Erro ao salvar os dados');
      }

      toast.success("Solicitação enviada com sucesso! Redirecionando para o pagamento...");
      
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        birthDate: '',
        birthTime: '',
        birthCity: '',
        birthState: '',
        birthCountry: 'Brasil'
      });

      setTimeout(() => {
        window.open('https://pay.cakto.com.br/3cve577_480232', '_blank');
      }, 2000);

    } catch (error) {
      console.error('Erro:', error);
      toast.error("Erro ao enviar solicitação. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Número da Prosperidade",
      description: "Descubra sua frequência numerológica de abundância e como ativá-la na sua vida"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Diagnóstico de Débitos e Heranças Kármicas",
      description: "Identifique bloqueios financeiros ancestrais e aprenda como transformá-los"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Potenciais Ocultos de Riqueza",
      description: "Revele talentos e dons únicos que podem gerar abundância material"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Mantras e Rituais de Ativação Financeira",
      description: "Práticas sagradas personalizadas para atrair prosperidade e riqueza"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Plano Diário de Prosperidade",
      description: "Rotina estruturada para manifestar abundância de forma consistente"
    }
  ];

  const testimonials = [
    {
      text: "Após seguir o plano de prosperidade, meu negócio decolou em 6 meses. Os bloqueios kármicos realmente faziam diferença!",
      author: "Roberto Santos"
    },
    {
      text: "Descobri talentos que eu nem sabia que tinha! O número da prosperidade mudou completamente minha visão sobre dinheiro.",
      author: "Luciana Oliveira"
    },
    {
      text: "Os mantras e rituais são poderosos. Senti uma mudança energética imediata na minha relação com a abundância.",
      author: "Fernando Costa"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              🔮 Desbloqueie Sua Abundância
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-cosmic mb-6">
            Mapa Espiritual da Prosperidade
            <br />
            e Desbloqueio Financeiro
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Desbloqueie seus dons de abundância. Um estudo espiritual para liberar 
            bloqueios financeiros, ativar dons ocultos e alinhar missão e riqueza.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Entrega em até 24h
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Análise Profunda
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <Crown className="w-4 h-4" />
              Abundância e Prosperidade
            </Badge>
          </div>
          
          <div className="mb-8">
            <img 
              src="/lovable-uploads/c7614452-e7f5-44ca-ab2d-dec9862d0647.png" 
              alt="Mapa Espiritual da Prosperidade" 
              className="w-full max-w-md mx-auto rounded-lg shadow-neon"
            />
          </div>
          
          <Card className="bg-card/50 border-primary/30 max-w-md mx-auto mb-8">
            <CardContent className="p-6 text-center">
              <div className="text-sm text-muted-foreground line-through mb-1">R$ 127</div>
              <Badge variant="destructive" className="mb-2">24% OFF</Badge>
              <div className="text-2xl font-bold text-primary mb-1">12x de R$ 11,28</div>
              <div className="text-sm text-muted-foreground">ou R$ 97,00 à vista</div>
              <div className="text-xs text-muted-foreground mt-2">
                🛡️ Investimento único para toda a vida
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            O que está incluído no seu Mapa
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-cosmic">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-primary/5 border-primary/30">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Perfeito para quem busca prosperar com propósito
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Transforme sua relação com o dinheiro: ideal para quem busca romper padrões de escassez, 
                ativar seus dons de prosperidade e atrair riqueza com consciência espiritual.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Transformações reais de nossos clientes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="text-primary font-semibold">{testimonial.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-background">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            Desbloqueie sua prosperidade hoje
          </h2>
          <p className="text-muted-foreground mb-6 text-sm md:text-base">
            Transforme sua relação com o dinheiro e manifeste a abundância que você sempre sonhou
          </p>
          
          <Card className="bg-card border-primary/30 max-w-sm mx-auto">
            <CardContent className="p-4 text-center">
              <div className="text-sm text-muted-foreground line-through mb-1">R$ 127</div>
              <Badge variant="destructive" className="mb-2 text-xs">24% OFF</Badge>
              <div className="text-xl font-bold text-primary mb-1">12x de R$ 11,28</div>
              <div className="text-sm text-muted-foreground mb-2">ou R$ 97,00 à vista</div>
              <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" />
                Investimento único para toda a vida
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-card border-primary/30">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Solicite Seu Mapa Espiritual da Prosperidade e Desbloqueio Financeiro
                </h2>
                <p className="text-muted-foreground">
                  Preencha seus dados para receber seu mapa personalizado
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-primary font-semibold">Informações Pessoais</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      placeholder="(11) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-primary" />
                    <h3 className="text-primary font-semibold">Informações de Nascimento</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="birthDate">Data de Nascimento *</Label>
                      <Input
                        id="birthDate"
                        placeholder="dd/mm/aaaa"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="birthTime">Hora de Nascimento (opcional)</Label>
                      <Input
                        id="birthTime"
                        placeholder="--:--"
                        value={formData.birthTime}
                        onChange={(e) => handleInputChange('birthTime', e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Se souber, isso tornará seu relatório mais preciso
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <Label htmlFor="birthCity">Cidade *</Label>
                      <Input
                        id="birthCity"
                        placeholder="São Paulo"
                        value={formData.birthCity}
                        onChange={(e) => handleInputChange('birthCity', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="birthState">Estado *</Label>
                      <Input
                        id="birthState"
                        placeholder="SP"
                        value={formData.birthState}
                        onChange={(e) => handleInputChange('birthState', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="birthCountry">País *</Label>
                      <Select 
                        value={formData.birthCountry} 
                        onValueChange={(value) => handleInputChange('birthCountry', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o país" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Brasil">Brasil</SelectItem>
                          <SelectItem value="Portugal">Portugal</SelectItem>
                          <SelectItem value="Argentina">Argentina</SelectItem>
                          <SelectItem value="Outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary">Seus dados estão seguros</p>
                      <p className="text-xs text-muted-foreground">
                        Todas as informações são criptografadas e utilizadas apenas para a criação do seu relatório personalizado.
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-cosmic hover:opacity-90 text-white font-semibold py-3 rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "✨ Solicitar Meu Mapa Agora"}
                </Button>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    Entrega em até 24 horas no seu e-mail
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer with Legal Notice */}
      <section className="py-4 px-6 bg-card/50 border-t border-border/50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">Celestia</span>
          </div>
          
          <div className="text-xs text-muted-foreground/80 space-y-1 max-w-2xl mx-auto">
            <p>
              <strong>Avisos Legais:</strong> Este produto é destinado apenas para entretenimento e desenvolvimento pessoal. Não substitui aconselhamento médico, psicológico ou financeiro profissional.
            </p>
            <p>
              Os resultados podem variar de pessoa para pessoa. As informações fornecidas são baseadas em interpretações simbólicas e práticas espirituais tradicionais.
            </p>
            <p>
              Todos os direitos reservados © 2024 Celestia.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MapaProsperidadeDesbloqueio;