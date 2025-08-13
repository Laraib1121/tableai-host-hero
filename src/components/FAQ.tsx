import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can TableAI be set up?",
    answer: "TableAI can be fully operational within 24-48 hours. Our team handles the integration with your existing systems and provides complete training for your staff."
  },
  {
    question: "Does TableAI work with my existing POS system?",
    answer: "Yes! TableAI integrates with all major POS systems including Toast, Square, Clover, and many others. We also support custom integrations if needed."
  },
  {
    question: "What languages does TableAI support?",
    answer: "TableAI supports over 30 languages including Spanish, Mandarin, French, Italian, German, Portuguese, Japanese, Korean, and many more. The AI automatically detects the customer's preferred language."
  },
  {
    question: "How does pricing work?",
    answer: "We offer flexible pricing based on your restaurant's call volume and features needed. Most restaurants see a positive ROI within the first month due to increased efficiency and never missing orders."
  },
  {
    question: "Is customer data secure?",
    answer: "Absolutely. TableAI is fully PCI DSS compliant and uses enterprise-grade encryption. All payment processing is handled through certified secure channels, and we never store sensitive payment information."
  },
  {
    question: "Can TableAI handle complex orders and modifications?",
    answer: "Yes! TableAI is trained on your specific menu and can handle complex orders, dietary restrictions, modifications, and special requests just like your best server would."
  },
  {
    question: "What happens if TableAI can't handle a call?",
    answer: "In rare cases where TableAI needs assistance, calls are seamlessly transferred to your staff with full context of the conversation. This ensures every customer receives excellent service."
  },
  {
    question: "Do I need special equipment?",
    answer: "No special equipment is required! TableAI works with your existing phone system. We can integrate with any phone setup, from traditional landlines to VoIP systems."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Frequently Asked
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about TableAI
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 hover:shadow-card transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Contact our team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;