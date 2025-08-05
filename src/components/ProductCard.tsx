import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  installments: string;
  badgeColor?: "primary" | "accent" | "divine" | "mystic";
  link?: string;
}

const ProductCard = ({ 
  image, 
  badge, 
  title, 
  description, 
  features, 
  price, 
  installments, 
  badgeColor = "primary",
  link 
}: ProductCardProps) => {
  const badgeStyles = {
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
    divine: "bg-divine text-divine-foreground",
    mystic: "bg-mystic text-mystic-foreground"
  };

  return (
    <Card className="bg-card border-primary/30 hover:border-primary/60 hover:shadow-neon transition-cosmic group">
      <CardContent className="p-6">
        {/* Product Image */}
        <div className="relative mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className={`absolute -bottom-2 left-4 px-3 py-1 rounded-full text-xs font-bold ${badgeStyles[badgeColor]}`}>
            {badge}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-cosmic">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="text-lg font-bold text-foreground mb-1">{installments}</div>
          <div className="text-sm text-muted-foreground"> {price} </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        {link ? (
          <Link to={link} className="w-full">
            <Button variant="celestial" className="w-full">
              Adquirir Agora
            </Button>
          </Link>
        ) : (
          <Button variant="celestial" className="w-full">
            Adquirir Agora
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;