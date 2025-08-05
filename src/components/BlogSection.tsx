import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const featuredPost = {
    title: "Como Descobrir Sua Missão de Alma através da Numerologia",
    excerpt: "Aprenda a calcular e interpretar seus números pessoais para entender qual é sua verdadeira missão nesta vida.",
    category: "Numerologia",
    date: "15 Nov 2024",
    readTime: "8 min",
    featured: true,
    link: "/missao-alma-numerologia"
  };

  const regularPosts = [
    {
      id: 1,
      title: "Os 7 Chakras e Sua Conexão com os Signos do Zodíaco",
      excerpt: "Descubra como alinhar seus chakras de acordo com sua carta astral para potencializar sua energia espiritual.",
      category: "Astrologia",
      date: "12 Nov 2024",
      readTime: "12 min",
      link: "/chakras-zodiaco"
    },
    {
      id: 2,
      title: "Registros Akáshicos: Portal para Vidas Passadas",
      excerpt: "Entenda como acessar as memórias da sua alma e curar traumas ancestrais através dos registros cósmicos.",
      category: "Registros Akáshicos",
      date: "10 Nov 2024",
      readTime: "15 min",
      link: "/registros-akashicos"
    },
    {
      id: 3,
      title: "Limpeza Energética: Rituais de Proteção Espiritual",
      excerpt: "Aprenda técnicas poderosas para proteger sua energia e manter sua aura sempre limpa e fortalecida.",
      category: "Espiritualidade",
      date: "08 Nov 2024",
      readTime: "6 min",
      link: "/limpeza-energetica"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 bg-gradient-to-r from-primary/20 to-divine/20 text-foreground">
            📚 Conhecimento Sagrado
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-text-primary bg-clip-text text-transparent">Sabedoria</span>{" "}
            <span className="bg-gradient-text-divine bg-clip-text text-transparent">Espiritual</span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Artigos, guias e insights para acelerar sua jornada de despertar espiritual e 
            autoconhecimento profundo.
          </p>
        </div>

        {/* Featured Article */}
        <div className="bg-gradient-to-br from-card via-card/90 to-primary/5 border border-primary/30 rounded-2xl p-8 mb-12 shadow-cosmic">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-gradient-divine text-black border-0 font-semibold">
                  Artigo em Destaque
                </Badge>
                <span className="text-foreground/60 text-sm">📅 {featuredPost.date}</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-text-primary bg-clip-text text-transparent mb-4 leading-tight">
                {featuredPost.title}
              </h3>
              
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-gradient-divine text-black border-0">
                  {featuredPost.category}
                </Badge>
                <div className="flex items-center gap-1 text-foreground/60">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              
              <Link to={featuredPost.link}>
                <Button className="bg-gradient-cosmic hover:shadow-cosmic text-white border-0 px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  Ler Artigo Completo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {regularPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-gradient-to-br from-card via-card/90 to-muted/5 border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 group hover:shadow-cosmic"
            >
              <div className="mb-4">
                <Badge className="bg-gradient-cosmic text-white border-0 text-xs">
                  {post.category}
                </Badge>
              </div>
              
              <Link to={post.link}>
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:bg-gradient-text-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                  {post.title}
                </h4>
              </Link>
              
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-foreground/60 text-xs">
                  📅 {post.date}
                </div>
                <div className="flex items-center gap-1 text-foreground/60 text-xs">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>
              
              <Link 
                to={post.link}
                className="flex items-center gap-2 bg-gradient-text-primary bg-clip-text text-transparent hover:bg-gradient-celestial hover:bg-clip-text font-medium text-sm mt-4 group/link transition-all duration-300"
              >
                Continuar Lendo
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/blog">
            <Button 
              size="lg"
              variant="celestial"
            >
              📚 Ver Todos os Artigos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;