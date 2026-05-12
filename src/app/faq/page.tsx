import Navbar from '@/components/Navbar';
import UrgentBanner from '@/components/UrgentBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ | Delivery & Orders",
  description: "Questions about delivery times, flight-friendly gifts, and invoices? Find all answers in our Porto Porter FAQ.",
};

const faqs = [
  {
    q: "When will I receive my order?",
    a: "Order by 6:00 PM today for delivery tomorrow after 2:00 PM. We deliver directly to your Airbnb or Hotel reception."
  },
  {
    q: "Where do you deliver?",
    a: "We deliver to all major Hotels and Airbnb accommodations within the Porto city center and Gaia riverside area."
  },
  {
    q: "Is there alcohol in the bundles?",
    a: "No. To ensure all our bundles are 100% flight-friendly and hassle-free for international travel, we do not include alcohol. Our focus is purely on high-end artisan crafts."
  },
  {
    q: "Will I receive an invoice?",
    a: "Yes. An automatic order summary is sent immediately. An official AT-Certified Invoice will be sent via email within 24 - 72 hours of delivery."
  },
  {
    q: "How do I contact my Porter?",
    a: "Click the floating WhatsApp button on our site to chat directly with us about your order or special requests."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <UrgentBanner />
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-serif text-porto-blue mb-16 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-serif text-porto-blue mb-4 font-bold">{faq.q}</h3>
              <p className="text-gray-600 font-sans leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
