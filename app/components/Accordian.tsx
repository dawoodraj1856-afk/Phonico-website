import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 px-4 sm:px-10 md:px-32">
      <Accordion type="single" collapsible className="w-full border p-2 rounded-lg">
        <AccordionItem value="shipping">
          <AccordionTrigger className="font-semibold text-lg sm:text-xl">
            1: What is an eSIM?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            An eSIM is a digital SIM card that lets you activate a cellular plan
            without using a physical SIM.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full border p-2 rounded-lg">
        <AccordionItem value="returns">
          <AccordionTrigger className="font-semibold text-lg sm:text-xl">
            2: Is Phonico eSIM Compatible with my Phone?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            Most newer devices, including iPhones and Android models from 2018
            onward, support eSIM. Check compatibility in your phone settings or
            check the Phonico eSIM-compatible devices list.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full border p-2 rounded-lg">
        <AccordionItem value="support">
          <AccordionTrigger className="font-semibold text-lg sm:text-xl">
            3: How do I Install my eSIM?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            After purchasing a plan, you’ll receive a QR code via email. Scan
            it, and your eSIM will be installed automatically. Download the
            Phonico App to take control of your personal dashboard.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full border p-2 rounded-lg">
        <AccordionItem value="shipping2">
          <AccordionTrigger className="font-semibold text-lg sm:text-xl">
            4: Can I use Phonico Outside USA?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            Phonico eSIM currently provides nationwide coverage across the
            United States only. All states are covered with the best network
            carrier support locally.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full border p-2 rounded-lg">
        <AccordionItem value="returns2">
          <AccordionTrigger className="font-semibold text-lg sm:text-xl">
            5: What Payment Methods does Phonico eSIM Accept?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            We accept major credit cards, Stripe, and PayPal for secure online
            payment methods.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
