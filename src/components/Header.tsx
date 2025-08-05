import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigateHome } from "@/hooks/use-navigate-home";

const Header = () => {
  const navigateToHome = useNavigateHome();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={navigateToHome}
            className="flex items-center gap-2 hover:opacity-80 transition-cosmic cursor-pointer bg-transparent border-0 p-0"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-cosmic flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Celestia</span>
          </button>

          {/* Navigation - Centralized */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-foreground hover:text-primary transition-cosmic">
              Home
            </Link>
            <Link 
              to="/#products" 
              className="text-foreground hover:text-primary transition-cosmic"
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Products
            </Link>
            <Link 
              to="/#about" 
              className="text-foreground hover:text-primary transition-cosmic"
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              About
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-cosmic">
              Blog
            </Link>
            <Link 
              to="/#contact" 
              className="text-foreground hover:text-primary transition-cosmic"
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden">
            <span className="sr-only">Menu</span>
            ☰
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;