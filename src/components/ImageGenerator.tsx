
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ImageGeneratorProps {
  onImageGenerated: (imageUrl: string) => void;
}

const ImageGenerator = ({ onImageGenerated }: ImageGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateImage = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: "Elegant cosmic spiritual love compatibility mandala, two souls connecting through golden light threads, sacred geometry patterns, purple and pink cosmic background with stars, mystical couple silhouettes, divine feminine and masculine energy symbols, ethereal romantic atmosphere, celestial love energy, spiritual connection visualization, cosmic hearts intertwined, sacred union artwork, high quality digital art, magical realism style"
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      onImageGenerated(data.image);
      toast.success('Nova imagem gerada com sucesso!');
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('Erro ao gerar imagem. Tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-4 border border-primary/30 rounded-lg bg-card">
      <h3 className="text-lg font-semibold mb-2">Gerar Nova Imagem</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Gere uma nova imagem elegante para o produto de compatibilidade amorosa espiritual
      </p>
      <Button 
        onClick={generateImage} 
        disabled={isGenerating}
        variant="celestial"
        className="w-full"
      >
        {isGenerating ? 'Gerando...' : 'Gerar Imagem'}
      </Button>
    </div>
  );
};

export default ImageGenerator;
