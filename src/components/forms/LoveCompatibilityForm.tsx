import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, Clock, MapPin, User, Mail, Phone, Heart } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { loveCompatibilityFormSchema, sanitizeFormData, type LoveCompatibilityFormData } from '@/lib/validation';
import { supabase } from '@/integrations/supabase/client';

interface LoveCompatibilityFormProps {
  product: string;
  onSuccess?: () => void;
  className?: string;
}

export const LoveCompatibilityForm: React.FC<LoveCompatibilityFormProps> = ({
  product,
  onSuccess,
  className
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const { toast } = useToast();

  const form = useForm<LoveCompatibilityFormData>({
    resolver: zodResolver(loveCompatibilityFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      whatsapp: '',
      birthDate: '',
      birthTime: '',
      birthCity: '',
      birthState: '',
      birthCountry: 'Brasil',
      partnerName: '',
      partnerBirthDate: '',
      partnerBirthTime: '',
      partnerBirthCity: '',
      partnerBirthState: '',
      partnerBirthCountry: 'Brasil',
    }
  });

  const onSubmit = async (data: LoveCompatibilityFormData) => {
    // Rate limiting - 5 second cooldown
    const now = Date.now();
    if (now - lastSubmission < 5000) {
      toast({
        title: "Por favor, aguarde",
        description: "Aguarde 5 segundos antes de enviar novamente.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    setLastSubmission(now);

    try {
      // Sanitize input data
      const sanitizedData = sanitizeFormData(data);

      // Insert into celestia_orders table
      const { error } = await supabase
        .from('celestia_orders')
        .insert({
          full_name: sanitizedData.fullName,
          email: sanitizedData.email,
          whatsapp: sanitizedData.whatsapp,
          birth_date: sanitizedData.birthDate,
          birth_time: sanitizedData.birthTime || null,
          birth_city: sanitizedData.birthCity,
          birth_state: sanitizedData.birthState,
          birth_country: sanitizedData.birthCountry,
          partner_name: sanitizedData.partnerName,
          partner_birth_date: sanitizedData.partnerBirthDate,
          partner_birth_time: sanitizedData.partnerBirthTime || null,
          partner_birth_city: sanitizedData.partnerBirthCity,
          partner_birth_state: sanitizedData.partnerBirthState,
          partner_birth_country: sanitizedData.partnerBirthCountry,
          produto: product,
          status: 'pending'
        });

      if (error) {
        throw error;
      }

      // Export to Google Sheets
      try {
        await supabase.functions.invoke('export-to-google-sheets', {
          body: {
            record: {
              ...sanitizedData,
              produto: product,
              status: 'pending',
              created_at: new Date().toISOString()
            }
          }
        });
      } catch (sheetsError) {
        console.warn('Google Sheets export failed:', sheetsError);
        // Don't fail the entire process if sheets export fails
      }

      toast({
        title: "Análise de compatibilidade solicitada!",
        description: "Você receberá seu relatório detalhado em breve.",
      });

      form.reset();
      onSuccess?.();

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Erro ao enviar pedido",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={form.handleSubmit(onSubmit)} 
      className={cn("space-y-8", className)}
    >
      {/* Your Information */}
      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <User className="w-5 h-5" />
          Suas Informações
        </h3>

        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName">Nome Completo *</Label>
            <Input
              id="fullName"
              {...form.register('fullName')}
              placeholder="Seu nome completo"
              className="mt-1"
            />
            {form.formState.errors.fullName && (
              <p className="text-sm text-destructive mt-1">
                {form.formState.errors.fullName.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  {...form.register('email')}
                  placeholder="seu@email.com"
                  className="pl-10 mt-1"
                />
              </div>
              {form.formState.errors.email && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="whatsapp">WhatsApp *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="whatsapp"
                  {...form.register('whatsapp')}
                  placeholder="(11) 99999-9999"
                  className="pl-10 mt-1"
                />
              </div>
              {form.formState.errors.whatsapp && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.whatsapp.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Your Birth Information */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-primary/80">Seus Dados de Nascimento</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Data de Nascimento *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal mt-1",
                      !form.watch('birthDate') && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {form.watch('birthDate') ? 
                      format(new Date(form.watch('birthDate')), "dd/MM/yyyy") : 
                      "Selecione a data"
                    }
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={form.watch('birthDate') ? new Date(form.watch('birthDate')) : undefined}
                    onSelect={(date) => {
                      if (date) {
                        form.setValue('birthDate', format(date, 'yyyy-MM-dd'));
                      }
                    }}
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
              {form.formState.errors.birthDate && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.birthDate.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="birthTime">Horário de Nascimento</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="birthTime"
                  type="time"
                  {...form.register('birthTime')}
                  className="pl-10 mt-1"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="birthCity">Cidade *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="birthCity"
                  {...form.register('birthCity')}
                  placeholder="São Paulo"
                  className="pl-10 mt-1"
                />
              </div>
              {form.formState.errors.birthCity && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.birthCity.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="birthState">Estado *</Label>
              <Input
                id="birthState"
                {...form.register('birthState')}
                placeholder="SP"
                className="mt-1"
              />
              {form.formState.errors.birthState && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.birthState.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="birthCountry">País *</Label>
              <Input
                id="birthCountry"
                {...form.register('birthCountry')}
                placeholder="Brasil"
                className="mt-1"
              />
              {form.formState.errors.birthCountry && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.birthCountry.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Partner Information */}
      <div className="space-y-4 border-t pt-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <Heart className="w-5 h-5" />
          Informações do(a) Parceiro(a)
        </h3>

        <div>
          <Label htmlFor="partnerName">Nome do(a) Parceiro(a) *</Label>
          <Input
            id="partnerName"
            {...form.register('partnerName')}
            placeholder="Nome do(a) parceiro(a)"
            className="mt-1"
          />
          {form.formState.errors.partnerName && (
            <p className="text-sm text-destructive mt-1">
              {form.formState.errors.partnerName.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Data de Nascimento *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal mt-1",
                    !form.watch('partnerBirthDate') && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {form.watch('partnerBirthDate') ? 
                    format(new Date(form.watch('partnerBirthDate')), "dd/MM/yyyy") : 
                    "Selecione a data"
                  }
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={form.watch('partnerBirthDate') ? new Date(form.watch('partnerBirthDate')) : undefined}
                  onSelect={(date) => {
                    if (date) {
                      form.setValue('partnerBirthDate', format(date, 'yyyy-MM-dd'));
                    }
                  }}
                  disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
            {form.formState.errors.partnerBirthDate && (
              <p className="text-sm text-destructive mt-1">
                {form.formState.errors.partnerBirthDate.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="partnerBirthTime">Horário de Nascimento</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="partnerBirthTime"
                type="time"
                {...form.register('partnerBirthTime')}
                className="pl-10 mt-1"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="partnerBirthCity">Cidade *</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="partnerBirthCity"
                {...form.register('partnerBirthCity')}
                placeholder="São Paulo"
                className="pl-10 mt-1"
              />
            </div>
            {form.formState.errors.partnerBirthCity && (
              <p className="text-sm text-destructive mt-1">
                {form.formState.errors.partnerBirthCity.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="partnerBirthState">Estado *</Label>
            <Input
              id="partnerBirthState"
              {...form.register('partnerBirthState')}
              placeholder="SP"
              className="mt-1"
            />
            {form.formState.errors.partnerBirthState && (
              <p className="text-sm text-destructive mt-1">
                {form.formState.errors.partnerBirthState.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="partnerBirthCountry">País *</Label>
            <Input
              id="partnerBirthCountry"
              {...form.register('partnerBirthCountry')}
              placeholder="Brasil"
              className="mt-1"
            />
            {form.formState.errors.partnerBirthCountry && (
              <p className="text-sm text-destructive mt-1">
                {form.formState.errors.partnerBirthCountry.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-muted/50 p-4 rounded-lg border">
        <p className="text-sm text-muted-foreground">
          🔒 Seus dados e do seu parceiro estão protegidos com criptografia de ponta. 
          Utilizamos apenas as informações necessárias para gerar sua análise de compatibilidade personalizada.
        </p>
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Descobrir Nossa Compatibilidade ❤️'}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        * Campos obrigatórios. Ao enviar, você concorda com nossos Termos de Uso e Política de Privacidade.
      </p>
    </form>
  );
};