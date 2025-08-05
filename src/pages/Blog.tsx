import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "✨ Como Descobrir Sua Missão de Alma através da Numerologia",
    excerpt: "Descobrir sua missão de alma é como abrir um mapa sagrado que revela o caminho para sua verdadeira realização. A numerologia é uma das ferramentas mais poderosas para essa jornada de autoconhecimento.",
    category: "Numerologia",
    date: "Janeiro 2025",
    readTime: "8 min",
    fullContent: false,
    link: "/missao-alma-numerologia"
  };

  const allPosts = [
    {
      id: 2,
      title: "Os 7 Chakras e Sua Conexão com os Signos do Zodíaco",
      excerpt: "Descubra como alinhar seus centros de energia com os signos astrológicos para desbloquear seu poder interior",
      category: "Astrologia",
      date: "12 Nov 2024",
      readTime: "12 min",
      fullContent: false,
      link: "/chakras-zodiaco"
    },
    {
      id: 3,
      title: "Registros Akáshicos: Portal para Vidas Passadas",
      excerpt: "Entenda como acessar as memórias da sua alma e curar traumas ancestrais através dos registros cósmicos que guardam toda a sabedoria universal.",
      category: "Registros Akáshicos",
      date: "10 Nov 2024",
      readTime: "15 min",
      fullContent: false,
      link: "/registros-akashicos"
    },
    {
      id: 4,
      title: "Limpeza Energética: Rituais de Proteção Espiritual",
      excerpt: "Aprenda técnicas poderosas para proteger sua energia e manter sua aura sempre limpa e fortalecida contra influências negativas.",
      category: "Espiritualidade",
      date: "08 Nov 2024",
      readTime: "6 min",
      fullContent: false,
      link: "/limpeza-energetica"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Back to Home */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Início
        </Link>

        {/* Blog Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Blog Celestia</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">Sabedoria</span>{" "}
            <span className="bg-gradient-to-r from-divine via-luxury to-cosmic bg-clip-text text-transparent">Espiritual</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artigos, guias e insights para acelerar sua jornada de despertar espiritual e autoconhecimento profundo
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/10 via-background to-purple-500/10 border border-primary/30">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white border-0 font-semibold">
                  Artigo em Destaque
                </Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
              
              <Link to={featuredPost.link}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
                  {featuredPost.title}
                </h2>
              </Link>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-gradient-to-r from-divine to-luxury text-white border-0">
                  {featuredPost.category}
                </Badge>
              </div>
              
              <Link to={featuredPost.link}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                >
                  Ler Artigo Completo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Other Articles Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Mais Artigos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <Card 
                key={post.id}
                className="border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg bg-gradient-to-br from-card via-card/90 to-muted/5"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className="bg-gradient-to-r from-cosmic to-luxury text-white border-0 text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  
                   <Link 
                     to={post.link || "#"}
                     className="block"
                   >
                     <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                       {post.title}
                     </h3>
                   </Link>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                   <Link 
                     to={post.link || "#"}
                     className="inline-flex items-center gap-1 font-medium text-primary hover:text-primary/80 group/link transition-colors"
                   >
                     Continuar Lendo
                     <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                   </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Blog;