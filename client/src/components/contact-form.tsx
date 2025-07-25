import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Check } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12" data-testid="contact-success">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-green-400">Message Sent!</h3>
        <p className="text-gray-300 mb-6">
          Thank you for reaching out. I'll review your message and get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          className="glassmorphism hover:bg-electric-blue/20"
          data-testid="send-another"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium mb-2">Name *</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your full name"
          className="glassmorphism bg-dark-tertiary text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-electric-blue"
          {...form.register("name")}
          data-testid="input-name"
        />
        {form.formState.errors.name && (
          <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium mb-2">Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@company.com"
          className="glassmorphism bg-dark-tertiary text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-electric-blue"
          {...form.register("email")}
          data-testid="input-email"
        />
        {form.formState.errors.email && (
          <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="company" className="block text-sm font-medium mb-2">Company</Label>
        <Input
          id="company"
          type="text"
          placeholder="Your company name"
          className="glassmorphism bg-dark-tertiary text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-electric-blue"
          {...form.register("company")}
          data-testid="input-company"
        />
        {form.formState.errors.company && (
          <p className="text-red-400 text-sm mt-1">{form.formState.errors.company.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium mb-2">Project Details *</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell me about your project requirements, timeline, and goals..."
          className="glassmorphism bg-dark-tertiary text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-electric-blue resize-none"
          {...form.register("message")}
          data-testid="input-message"
        />
        {form.formState.errors.message && (
          <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={contactMutation.isPending}
        className="w-full tech-gradient py-4 font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
        data-testid="submit-contact"
      >
        {contactMutation.isPending ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 w-5 h-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
