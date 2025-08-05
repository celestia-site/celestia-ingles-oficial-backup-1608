import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "O relatório de numerologia da Celestia mudou completamente minha perspectiva de vida. Descobri minha verdadeira missão e hoje tenho clareza sobre meus próximos passos. Recomendo demais!",
      name: "Marina Silva",
      role: "Empresária",
      initials: "MS",
      color: "bg-purple-500"
    },
    {
      text: "A leitura dos registros akáshicos foi uma experiência transformadora. Consegui curar traumas antigos e despertar dons que nem sabia que tinha. Gratidão eterna!",
      name: "Carlos Mendes",
      role: "Terapeuta",
      initials: "CM",
      color: "bg-blue-500"
    },
    {
      text: "O Plano de Ascensão Esotérica é incrível! O conteúdo é profundo e as mentorias ao vivo são ouro puro. Minha evolução espiritual acelerou exponencialmente.",
      name: "Ana Beatriz",
      role: "Coach Espiritual",
      initials: "AB",
      color: "bg-indigo-500"
    },
    {
      text: "Estava perdido profissionalmente até fazer a análise astrológica. Descobri meu propósito e hoje trabalho alinhado com minha essência. Vida transformada!",
      name: "Roberto Santos",
      role: "Professor",
      initials: "RS",
      color: "bg-violet-500"
    },
    {
      text: "As consultas de tarot me guiaram nos momentos mais desafiadores. A precisão e o amor nas orientações são impressionantes. Celestia é luz pura!",
      name: "Luciana Costa",
      role: "Artista",
      initials: "LC",
      color: "bg-pink-500"
    },
    {
      text: "O combo numerologia + astrologia me mostrou meus ciclos pessoais e como aproveitá-los melhor. Meus negócios decolaram depois das orientações!",
      name: "Felipe Oliveira",
      role: "Empreendedor",
      initials: "FO",
      color: "bg-cyan-500"
    }
  ];

  const stats = [
    { number: "1500+", label: "Clientes Satisfeitos" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "98%", label: "Recomendação" },
    { number: "3 Anos", label: "de Experiência" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Transformações Reais</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-text-primary bg-clip-text text-transparent">Vidas </span>
            <span className="bg-gradient-text-divine bg-clip-text text-transparent">Transformadas</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 1.500 pessoas já despertaram seu potencial espiritual conosco. Confira alguns depoimentos reais de nossa comunidade.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;